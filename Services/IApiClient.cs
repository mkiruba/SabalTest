using System.Net.Http;
using System.Threading.Tasks;

namespace SabalTest.Services
{
    public interface IApiClient
    {
        Task<HttpResponseMessage> Get(string url);
    }
}
