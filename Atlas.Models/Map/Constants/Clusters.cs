using Atlas.Models.Enums;
using System;

namespace Atlas.Models.Map.Constants
{
    public static class Clusters
    {
        public static Cluster NA_PVP => new Cluster
        {
            DisplayName = "[NA PVP] The Kraken's Maw",
            MachineName = "napvp",
            Platform = Platform.PC,
            Id = new Guid("54130a56-8424-4918-aaf0-aa3f6029b0fc"),
            ColumnCount = 15,
            RowCount = 15
        };
        public static Cluster NA_PVE => new Cluster
        {
            DisplayName = "[NA PVE] The Hydra's Den",
            MachineName = "napve",
            Platform = Platform.PC,
            Id = new Guid("e06f750c-9753-4e83-b25d-0d3daf16c619"),
            ColumnCount = 15,
            RowCount = 15
        };
        public static Cluster EU_PVP => new Cluster
        {
            DisplayName = "[EU PVE] The Whale's Wrath",
            MachineName = "eupve",
            Platform = Platform.PC,
            Id = new Guid("8e8d838b-2477-4bd9-91b5-7b598a5574cf"),
            ColumnCount = 15,
            RowCount = 15
        };
        public static Cluster EU_PVE => new Cluster
        {
            DisplayName = "[EU PVP] The Siren's Call",
            MachineName = "eupvp",
            Platform = Platform.PC,
            Id = new Guid("a0f58660-21a3-432e-8bfc-56cf95b649d3"),
            ColumnCount = 15,
            RowCount = 15
        };
    }
}
