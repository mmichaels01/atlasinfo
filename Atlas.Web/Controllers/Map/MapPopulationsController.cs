using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Atlas.Models.Map;
using Atlas.Repos.Contexts;
using Atlas.Repos.Repositories;
using Atlas.Web.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace Atlas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MapController : Controller
    {
        private const string MAP_CONTROLLER_CACHE_PREFIX = "MAP_CONTROLLER";
        private readonly IMemoryCache _memoryCache;
        private readonly ClusterSnapshotRepository _clusterSnapshotRepository;

        public MapController(IMemoryCache memoryCache, ClusterSnapshotRepository clusterSnapshotRepository)
        {
            _memoryCache = memoryCache;
            _clusterSnapshotRepository = clusterSnapshotRepository;
        }

        // TODO: Refactor some of this logic into services
        [HttpGet("[action]/{clusterId}")]
        public async Task<IActionResult> Population([FromRoute] Guid clusterId)
        {

            var data = await _memoryCache.GetOrCreateAsync($"{MAP_CONTROLLER_CACHE_PREFIX}_SERVER_POPULATION_{clusterId}",
                async entry =>
                {
                    var clusterSnapshotMinimal = await _clusterSnapshotRepository.GetMostRecentClusterSnapshotAsync(clusterId);
                    entry.AbsoluteExpiration = clusterSnapshotMinimal.EndTimestamp + TimeSpan.FromSeconds(60);

                    return clusterSnapshotMinimal;
                });

            return Json(data);
        }
    }
}
