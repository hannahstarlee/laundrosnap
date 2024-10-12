using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using LaundroSnapServer.Models;
using LaundroSnapServer.Services;

namespace LaundroSnapServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(UserService userService) : ControllerBase
    {
        // GET: api/user/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var res = await userService.ReadUser(id);
            if (res == null)
            {
                return NotFound();
            }
            return res;
        }

        // POST: api/user
        [HttpPost]
        public async Task<ActionResult<Guid>> CreateUser([FromBody] UserCreationRequest user)
        {
            var res = await userService.CreateUser(user.FirstName, user.LastName, user.Email, user.Password);
            if (res == null)
            {
                return BadRequest("Email already in use");
            }
            return res;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(string email, string password)
        {
            var res = await userService.Login(email, password);
            if (res == null)
            {
                return BadRequest();
            }
            return res;
        }

    }
    public record UserCreationRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}