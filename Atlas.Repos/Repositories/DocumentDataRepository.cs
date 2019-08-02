using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Atlas.Models.Interfaces;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;

namespace Atlas.Repos.Repositories
{
    public class DocumentDataRepository<T> : IDocumentDBRepository<T> where T : class
    {
        internal readonly DocumentClient _client;
        internal readonly IDocumentDbConfiguration _documentDbConfiguration;

        public DocumentDataRepository(IDocumentDbConfiguration documentDbConfiguration)
        {
            _documentDbConfiguration = documentDbConfiguration;
            _client = new DocumentClient(_documentDbConfiguration.Uri, _documentDbConfiguration.PrimaryKey);
        }

        public virtual async Task<T> GetItemAsync(string id)
        {
            try
            {
                return await _client.ReadDocumentAsync<T>(UriFactory.CreateDocumentUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId, id));
            }
            catch (DocumentClientException e)
            {
                if (e.StatusCode == System.Net.HttpStatusCode.NotFound)
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
        }

        public virtual async Task<IEnumerable<T>> GetItemsAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _client.CreateDocumentQuery<T>(
                UriFactory.CreateDocumentCollectionUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId),
                new FeedOptions { MaxItemCount = -1 })
                .Where(predicate)
                .AsDocumentQuery();

            var results = new List<T>();
            while (query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<T>());
            }

            return results;
        }

        public virtual async Task<Document> CreateItemAsync(T item)
        {
            return await _client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId), item);
        }

        public virtual async Task<Document> UpdateItemAsync(string id, T item)
        {
            return await _client.ReplaceDocumentAsync(UriFactory.CreateDocumentUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId, id), item);
        }

        public virtual async Task DeleteItemAsync(string id)
        {
            await _client.DeleteDocumentAsync(UriFactory.CreateDocumentUri(_documentDbConfiguration.DatabaseId, _documentDbConfiguration.CollectionId, id));
        }
    }
}