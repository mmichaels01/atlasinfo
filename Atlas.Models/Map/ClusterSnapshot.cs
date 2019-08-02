using Atlas.Models.Enums;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Atlas.Models.Map
{
    public class ClusterSnapshot : IGuidId
    {
        public ClusterSnapshot() { }
        public ClusterSnapshot(Cluster cluster)
        {
            ClusterMachineName = cluster.MachineName;
            ClusterDisplayName = cluster.DisplayName;
            ClusterPlatform = cluster.Platform;
            ClusterId = cluster.Id;
        }
        [JsonProperty("id")]
        public Guid Id { get; set; }
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; }
        [JsonProperty("endTimestamp")]
        public DateTimeOffset EndTimestamp { get; set; }
        [JsonProperty("playerCount")]
        public int PlayerCount { get; set; }
        [JsonProperty("playerMax")]
        public int PlayerMax { get; set; }
        [JsonProperty("serverSnapshots")]
        public ServerSnapshot[] ServerSnapshots { get; set; }
        [JsonProperty("clusterMachineName")]
        public string ClusterMachineName { get; set; }
        [JsonProperty("clusterDisplayName")]
        public string ClusterDisplayName { get; set; }
        [JsonProperty("clusterPlatform")]
        public Platform ClusterPlatform { get; set; }
        [JsonProperty("clusterId")]
        public Guid ClusterId { get; set; }
    }
}
