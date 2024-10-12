namespace LaundroSnapServer.Models;

public class LaundryDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string LaundrySessionCollectionName { get; set; } = null!;

    public string UserCollectionName { get; set; } = null!;
}