using Atlas.Models.Enums;
using System;
using System.Collections.Generic;

namespace Atlas.Models.Map
{
    public class Cluster : IGuidId
    {
        public Guid Id { get; set; }
        public string MachineName { get; set; }
        public string DisplayName { get; set; }
        public Platform Platform { get; set; }
        public int ColumnCount { get; set; }
        public int RowCount { get; set; }
        public ICollection<Server> Servers { get; set; }
    }
}
