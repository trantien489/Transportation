using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
namespace OA.Core.Factories
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity);
        ClaimsIdentity GenerateClaimsIdentity(string userName, string id, List<string> roles = null);
    }
}
