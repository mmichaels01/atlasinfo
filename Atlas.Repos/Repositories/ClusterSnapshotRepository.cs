using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Atlas.Models.Interfaces;
using Atlas.Models.Map;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;

namespace Atlas.Repos.Repositories
{
    public class ClusterSnapshotRepository : DocumentDataRepository<ClusterSnapshot>
    {
        public ClusterSnapshotRepository(ClusterSnapshotRepositoryConfiguration clusterDataConfiguration) : base(clusterDataConfiguration) { }
        #region QUERIES
        private const string LIGHT_CLUSTERSNAPSHOT_QUERY = @"
            SELECT TOP 1 c.id, c.timestamp, c.clusterId, c.clusterMachineName, c.playerCount, c.playerMax, c.endTimestamp,
            ARRAY(select serverSnapshot.id, serverSnapshot.timestamp, serverSnapshot.serverName, serverSnapshot.serverId, serverSnapshot.playerCount, serverSnapshot.gridCellName, serverSnapshot.gridCellColumn, serverSnapshot.gridCellRow from serverSnapshot IN c.serverSnapshots) as serverSnapshots
            FROM ClusterSnapshots c 
            WHERE c.clusterId = @clusterId
            ORDER BY c.timestamp DESC";
        #endregion
        public async Task<ClusterSnapshot> GetMostRecentClusterSnapshotAsync(Guid clusterId)
        {
            var sqlQuery = new SqlQuerySpec(LIGHT_CLUSTERSNAPSHOT_QUERY,
                new SqlParameterCollection(
                    new SqlParameter[]{
                        new SqlParameter
                        {
                            Name = "@clusterId",
                            Value =clusterId
                        }
                    }));

            var uri = UriFactory.CreateDocumentCollectionUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId);
            var query = _client.CreateDocumentQuery<ClusterSnapshot>(uri, sqlQuery, new FeedOptions { MaxItemCount = 1 }).ToAsyncEnumerable();

            var res = await query.FirstOrDefault();
            return res;
        }

        public override async Task<Document> CreateItemAsync(ClusterSnapshot item)
        {
            return await _client.CreateDocumentAsync(
                UriFactory.CreateDocumentCollectionUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId),
                item,
                new RequestOptions
                {

                }
            );
        }

        public async Task CreateClusterSnapshotCollection()
        {
            await _client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri(_documentDbConfiguration.DatabaseId),
                        new DocumentCollection
                        {
                            Id = _documentDbConfiguration.CollectionId,
                            DefaultTimeToLive = 60 * 60 * 24 * 8 // 8 Day expiry
                        },
                        new RequestOptions
                        {
                            OfferThroughput = 800,
                            PartitionKey = new PartitionKey("clusterId")
                        });
        }
    }
}
