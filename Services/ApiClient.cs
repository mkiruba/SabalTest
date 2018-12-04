using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace SabalTest.Services
{
    public class ApiClient : IApiClient
    {
        private HttpClient httpClient;
        private const string BASEURI = "https://www.bitstamp.net/api/v2/";
        public HttpClient HttpClient
        {
            get
            {
                if (httpClient == null)
                {
                    httpClient = new HttpClient()
                    {
                        BaseAddress = new Uri(BASEURI)
                    };
                }
                return httpClient;
            }
        }
        public Task<HttpResponseMessage> Get(string url)
        {
            return HttpClient.GetAsync(url);
        }
    }
}
