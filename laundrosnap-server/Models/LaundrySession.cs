using System;
using MongoDB.Bson.Serialization.Attributes;

namespace LaundroSnapServer.Models
{

    public class LaundrySession
    {
        [BsonId]
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime StartTime { get; set; } // utc
        public DateTime EndTime { get; set; }
        public List<string> Fabrics { get; set; } = [];
        public LoadSize LoadSize { get; set; } = LoadSize.Medium;
        public List<Guid> UsersThatLiked { get; set; } = [];
        public List<Comment> Comments { get; set; } = [];
    }
}