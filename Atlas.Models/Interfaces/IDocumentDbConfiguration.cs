using System;
using System.Threading.Tasks;
using Atlas.Models.Map;

namespace Atlas.Models.Interfaces
{
    public interface IDocumentDbConfiguration
    {
        Uri Uri { get; set; }
        string PrimaryKey { get; set; }
        string DatabaseId { get; set; }
        string CollectionId { get; set; }
    }
}