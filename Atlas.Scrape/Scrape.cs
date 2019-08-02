using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.DependencyInjection;
using Atlas.Models.Interfaces;
using Microsoft.Extensions.Logging;
using Atlas.Models.Map.Constants;
using Atlas.Repos.Repositories;
using System.Linq.Expressions;
using System;
using Atlas.Models.Map;

namespace Atlas.Scrape.Na
{
    public static class Scrape
    {
        [FunctionName("ScrapeNaPvp")]
        public static async Task ScrapeNaPvp([TimerTrigger("0 * * * * *")]TimerInfo scrapeNnaTimer, ILogger log, ExecutionContext context) 
            => await ScrapeAsync(x => x.Id == Clusters.NA_PVP.Id, log, context);
        [FunctionName("ScrapeNaPve")]
        public static async Task ScrapeNaPve([TimerTrigger("30 * * * * *")]TimerInfo scrapeNnaTimer, ILogger log, ExecutionContext context) 
            => await ScrapeAsync(x => x.Id == Clusters.NA_PVE.Id, log, context);
        [FunctionName("ScrapeEuPvp")]
        public static async Task ScrapeEuPvp([TimerTrigger("15 * * * * *")]TimerInfo scrapeEuTimer, ILogger log, ExecutionContext context) 
            => await ScrapeAsync(x => x.Id == Clusters.EU_PVP.Id, log, context);
        [FunctionName("ScrapeEuPve")]
        public static async Task ScrapeEuPve([TimerTrigger("45 * * * * *")]TimerInfo scrapeEuTimer, ILogger log, ExecutionContext context) 
            => await ScrapeAsync(x => x.Id == Clusters.EU_PVE.Id, log, context);
        
        /// <summary>
        /// Common scraping function
        /// </summary>
        /// <param name="expression"></param>
        /// <param name="log"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        private static async Task ScrapeAsync(Expression<Func<Cluster, bool>> expression, ILogger log, ExecutionContext context)
        {
            var serviceProvider = DiConfig.GetServiceProvider(context.FunctionAppDirectory);
            var scraper = serviceProvider.GetService<IAtlasScraper>();
            var clusterSnapshotRepo = serviceProvider.GetService<ClusterSnapshotRepository>();

            var clusterSnapshot = await scraper.ScrapeAsync(expression);

            await clusterSnapshotRepo.CreateItemAsync(clusterSnapshot);
        }
    }
}
