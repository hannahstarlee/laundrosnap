using LaundroSnapServer.Models;

namespace LaundroSnapServer.Services;

public class SessionService
{
    // for now mock the service
    Dictionary<Guid, LaundrySession> database = new();
}