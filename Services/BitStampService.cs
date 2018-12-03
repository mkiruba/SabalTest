using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace SabalTest.Services
{
    public class BitStampService : IBitStampService
    {
        private HttpClient httpClient;
        private const string BASEURI = "https://www.bitstamp.net/api/v2/";
        private HttpClient HttpClient
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

        public Task<HttpResponseMessage> GetTickers(CurrenyPair currencyPair)
        {
            return HttpClient.GetAsync($"ticker/{currencyPair}");
        }

        public Task<HttpResponseMessage> GetOrderBook(CurrenyPair currencyPair)
        {
            return HttpClient.GetAsync($"order_book/{currencyPair}");
        }
        public Task<HttpResponseMessage> GetTransactions(CurrenyPair currencyPair)
        {            
            return HttpClient.GetAsync($"transactions/{currencyPair}");
        }
    }
}
