
using Atlas.Models.Map;
using System;

namespace Atlas.Web.Responses
{
    public class PopulationResponse
    {
        public int Total { get; set; }
        public Guid ClusterId { get; set; }
        public string ClusterName { get; set; }
        public DateTimeOffset SnapshotStartTimestamp { get; set; }
        public DateTimeOffset SnapshotEndTimestamp { get; set; }
        public int[] Counts { get; set; }
        public int Max { get; set; }
    }
}
