using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using LaundroSnapServer.Models;
using LaundroSnapServer.Services;

namespace LaundroSnapServer.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SessionController(SessionService sessionService) : ControllerBase
{
    // GET: api/session/5
    [HttpGet("{id}")]
    public async Task<LaundrySession> GetSession(Guid id)
    {
        // TODO implement
        throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<ActionResult<Guid>> CreateSession([FromBody] SessionCreationRequest session)
    {
        // TODO implement
        throw new NotImplementedException();
    }
}

public record SessionCreationRequest
{
    public Guid UserId { get; set; }
    public string? Name { get; set; }
    public int Minutes { get; set; }
    public List<string> Fabrics { get; set; } = [];
    public LoadSize LoadSize { get; set; }
}