using LaundroSnapServer.Models;

namespace LaundroSnapServer.Services;

public class UserService
{
    // for now mock the service
    Dictionary<Guid, User> database = new();

    public async Task<Guid?> CreateUser(string firstName, string lastName, string email, string password)
    {
        var user = new User();
        user.FirstName = firstName;
        user.LastName = lastName;
        user.Email = email;
        user.PasswordHash = password; // OKAY DO NOT ACTUALLY PUT REAL PASSWORDS IN THIS

        // check to make sure email is not already in use
        if (database.Values.Any(u => u.Email == email))
            return null;

        database.Add(user.UserId, user);
        return user.UserId;
    }

    public async Task<User?> ReadUser(Guid id)
    {
        if (database.ContainsKey(id))

            return database[id];
        return null;
    }

    public async Task<User?> Login(string email, string password)
    {
        // AGAIN TODO IMPLEMENT HASHING OF PASSWORDS
        var user = database.Values.FirstOrDefault(u => u.Email == email && u.PasswordHash == password);
        return user;
    }

}