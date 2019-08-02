using Atlas.Repos.Contexts;
using Atlas.Scrape;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Atlas.Models.Interfaces;
using Atlas.Repos.Repositories;
using Microsoft.Extensions.Logging;

namespace Atlas.Cli
{
    class Program
    {
        static void Main(string[] args)
        {
            var task = Task.Run(() => MainAsync(args));

            Task.WaitAll(task);
        }

        public static async Task MainAsync(string[] args)
        {
            var serviceProvider = DiConfig.GetServiceProvider(Directory.GetCurrentDirectory());

            var context = serviceProvider.GetService<MapContext>();
            var scraper = serviceProvider.GetService<IAtlasScraper>();
            var config = serviceProvider.GetService<IConfiguration>();
            var logger = serviceProvider.GetService<ILogger>();

            var clusterSnapshotRepo = serviceProvider.GetService<ClusterSnapshotRepository>();

            await clusterSnapshotRepo.CreateClusterSnapshotCollection();

            var clusterId = config.GetValue<Guid>("ClusterId");
            var clusterSnapshot = await scraper.ScrapeAsync(x => x.Id == clusterId);

            var doc = await clusterSnapshotRepo.CreateItemAsync(clusterSnapshot);
        }
    }
}
