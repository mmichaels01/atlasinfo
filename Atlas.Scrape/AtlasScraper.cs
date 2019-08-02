using System;
using System.Collections.Generic;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Atlas.Models.Map;
using Microsoft.EntityFrameworkCore;
using Atlas.Models.Interfaces;
using System.Linq.Expressions;
using Atlas.Repos.Contexts;
using SteamServerQuery;

namespace Atlas.Scrape
{
    public class AtlasScraper : IAtlasScraper
    {
        private const int FAIL_MAX = 2;
        private const int WAIT_MAX = 15000;

        private readonly MapContext _mapContext;
        private readonly ILogger _log;

        public AtlasScraper(MapContext mapContext, ILogger<AtlasScraper> log)
        {
            _mapContext = mapContext;
            _log = log;
        }

        public class ExecuteResult
        {
            public int Adds { get; set; }
            public int Fails { get; set; }
            public int Successes { get; set; }
            public IEnumerable<Guid> FailIds { get; set; }
        }


        public async Task<ClusterSnapshot> ScrapeAsync(Expression<Func<Cluster, bool>> expressionFunc)
        {
            var cluster = await _mapContext.Cluster.SingleAsync(expressionFunc);
            return await ScrapeAsync(cluster);
        }
        public async Task<ClusterSnapshot> ScrapeAsync(Cluster cluster)
        {
            var serverColumns = _mapContext.Server
                .Include(x => x.Cluster)
                .Include(x => x.GridCell)
                .Where(x => x.Cluster == cluster)
                .GroupBy(x => x.GridCell.Column)
                .ToArray();

            if (serverColumns == null || !serverColumns.Any())
                throw new Exception($"No servers found for specified {nameof(cluster)}");

            var clusterSnapshot = new ClusterSnapshot(cluster)
            {
                Id = Guid.NewGuid(),
                Timestamp = DateTime.UtcNow,
                PlayerCount = -1,
                ServerSnapshots = new ServerSnapshot[cluster.RowCount * cluster.ColumnCount]
            };

            var tasks = new List<Task<ServerSnapshot>>();

            foreach (var serverColumn in serverColumns)
                foreach (var server in serverColumn)
                    tasks.Add(Task.Run(async () => await GetServerSnapshotAsync(server)));

            await Task.WhenAll(tasks);

            for(var i = 0; i < tasks.Count; i++)
                clusterSnapshot.ServerSnapshots[i] = tasks[i].Result;

            clusterSnapshot.EndTimestamp = DateTime.UtcNow;
            clusterSnapshot.PlayerCount = clusterSnapshot.ServerSnapshots.Sum(x => x.PlayerCount);
            clusterSnapshot.PlayerMax = clusterSnapshot.ServerSnapshots.Max(x => x.PlayerCount);

            return clusterSnapshot;
        }

        private async Task<ServerSnapshot> GetServerSnapshotAsync(Server server)
        {
            var failRetries = 0;
            var retry = true;
            var serverSnapshot = new ServerSnapshot(server)
            {
                Id = Guid.NewGuid(),
                Timestamp = DateTime.UtcNow,
                PlayerCount = -1,
            };
            while (retry)
            {
                try
                {
                    var players = await SteamGameServer.PlayerQuery.QueryPlayersAsync(new IPEndPoint(IPAddress.Parse(server.Address), server.Port), WAIT_MAX);

                    serverSnapshot.PlayerCount = players.Count();
                    serverSnapshot.PlayerSnapshots = players.Select(x=> new PlayerSnapshot(x, serverSnapshot)).ToArray();
                    serverSnapshot.Success = true;

                    _log.LogInformation($"Pull ({server.Name}){server.Address}:{server.Port} - SUCCEED ({serverSnapshot.Timestamp})");

                    break;
                }
                catch (Exception ex)
                {
                    _log.LogError(ex.Message);
                    _log.LogInformation($"Pull ({server.Name}){server.Address}:{server.Port}) - FAIL ({serverSnapshot.Timestamp})");

                    failRetries++;

                    if (failRetries >= FAIL_MAX)
                        break;
                }
            }

            return serverSnapshot;
        }
    }
}
