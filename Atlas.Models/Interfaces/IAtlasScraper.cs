using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Atlas.Models.Map;

namespace Atlas.Models.Interfaces
{
    public interface IAtlasScraper
    {
        Task<ClusterSnapshot> ScrapeAsync(Expression<Func<Cluster, bool>> expressionFunc);
        Task<ClusterSnapshot> ScrapeAsync(Cluster cluster);
    }
}