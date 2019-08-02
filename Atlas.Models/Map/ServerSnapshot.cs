using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Atlas.Models.Map
{
    public class ServerSnapshot : IGuidId
    {
        public ServerSnapshot() { }
        public ServerSnapshot(Server server)
        {
            ServerId = server.Id;
            ServerName = server.Name;
            ServerAddress = server.Address;
            ServerPort = server.Port;
            GridCellRow = server.GridCell.Row;
            GridCellColumn = server.GridCell.Column;
            GridCellName = server.GridCell.Name;
        }
        [JsonProperty("id")]
        public Guid Id { get; set; }
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; }
        [JsonProperty("playerCount")]
        public int PlayerCount { get; set; }
        [JsonProperty("playerSnapshots")]
        public PlayerSnapshot[] PlayerSnapshots { get; set; }
        [JsonProperty("success")]
        public bool Success { get; set; }
        [JsonProperty("serverId")]
        public Guid ServerId { get; set; }
        [JsonProperty("serverName")]
        public string ServerName { get; set; }
        [JsonProperty("serverAddress")]
        public string ServerAddress { get; set; }
        [JsonProperty("serverPort")]
        public int ServerPort { get; set; }
        [JsonProperty("gridCellRow")]
        public int GridCellRow { get; set; }
        [JsonProperty("gridCellColumn")]
        public int GridCellColumn { get; set; }
        [JsonProperty("gridCellName")]
        public string GridCellName { get; set; }
    }
}
