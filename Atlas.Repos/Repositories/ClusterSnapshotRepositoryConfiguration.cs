using System;
using System.Threading.Tasks;
using Atlas.Models.Map;

namespace Atlas.Models.Interfaces
{
    public class ClusterSnapshotRepositoryConfiguration : IDocumentDbConfiguration
    {
        public Uri Uri { get; set; }
        public string PrimaryKey { get; set; }
        public string DatabaseId { get; set; }
        public string CollectionId { get; set; }
    }
}