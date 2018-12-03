using Newtonsoft.Json;
using SabalTest.Models;
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

        public Task<OrderBookEstimatorModel> GetOrderBookEstimator(CurrenyPair currencyPair, decimal safetyPercentageOrder)
        {
            return Task.Factory.StartNew(() => {
                var orderBookEstimatorModel = new OrderBookEstimatorModel();
                var orderBookModel = new OrderBookModel();
                var responseMessage = GetOrderBook(currencyPair).ContinueWith(task =>
                {
                    if (task.IsCompleted && task.Result.IsSuccessStatusCode)
                    {
                        var jsonString = task.Result.Content.ReadAsStringAsync();
                        orderBookModel = JsonConvert.DeserializeObject<OrderBookModel>(jsonString);
                    }
                });
                orderBookEstimatorModel.Asks = orderBookModel.Asks;
                orderBookEstimatorModel.Bids = orderBookModel.Bids;
                orderBookEstimatorModel.TimeStamp = orderBookModel.TimeStamp;
                return orderBookEstimatorModel;
            });           
        }
    }
}
