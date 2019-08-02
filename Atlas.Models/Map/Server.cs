using System;
using System.Collections.Generic;

namespace Atlas.Models.Map
{
    public class Server : IGuidId
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Port { get; set; }
        public GridCell GridCell { get; set; }
        public Cluster Cluster { get; set; }
    }
}
