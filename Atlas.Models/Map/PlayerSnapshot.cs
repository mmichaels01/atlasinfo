using Newtonsoft.Json;
using SteamServerQuery;
using System;

namespace Atlas.Models.Map
{
    public class PlayerSnapshot : Player, IGuidId
    {
        public PlayerSnapshot() { }
        public PlayerSnapshot(Player player, ServerSnapshot serverSnapshot)
        {
            Id = Guid.NewGuid();
            Timestamp = DateTimeOffset.UtcNow;
            Name = player.Name;
            Duration = player.Duration;
            ServerSnapshotId = serverSnapshot.Id;
            ServerId = serverSnapshot.ServerId;
            ServerName = serverSnapshot.ServerName;
        }
        [JsonProperty("id")]
        public Guid Id { get; set; }
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; }
        [JsonProperty("name")]
        public override string Name { get; set; }
        [JsonIgnore]
        public override int Score { get; set; }
        [JsonProperty("duration")]
        public override float Duration { get; set; }
        [JsonProperty("serverSnapshotId")]
        public Guid ServerSnapshotId { get; set; }
        [JsonProperty("serverId")]
        public Guid ServerId { get; set; }
        [JsonProperty("serverName")]
        public string ServerName { get; set; }
    }
}
