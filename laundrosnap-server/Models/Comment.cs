namespace LaundroSnapServer.Models
{
    public class Comment
    {
        public Guid CommentId { get; set; }
        public Guid UserId { get; set; }
        public Guid PostId { get; set; }
        public string Text { get; set; } = string.Empty;
        public DateTime Time { get; set; }
    }
}