using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace LaundroSnapServer.Models
{
    public class User
    {
        [BsonId]
        public Guid UserId { get; set; } = Guid.NewGuid();

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }
    }
}