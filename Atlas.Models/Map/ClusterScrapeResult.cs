using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Models.Map
{
    public class ClusterScrapeResult
    {
        public ClusterSnapshot ClusterSnapshot { get; set; }
        public ServerSnapshot[] ServerSnapshots { get; set; }
        public ServerSnapshot[] PlayerSnapshots { get; set; }
    }
}
