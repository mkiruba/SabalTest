using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using SabalTest.Models;
using SabalTest.Services;

namespace SabalTest.Controllers
{
    [Route("api/[controller]")]
    public class BitStampController : Controller
    {
        private IBitStampService bitStampService;
        public BitStampController(IBitStampService bitStampService)
        {
            this.bitStampService = bitStampService;
        }

        // GET api/<controller>/ticker/{currenypair}
        [HttpGet("ticker/{currencyPair}")]
        public async Task<TickerModel> TickerAsync(CurrenyPair currencyPair)
        {
            TickerModel tickerModel = null;

            var responseMessage = await bitStampService.GetTickers(currencyPair);
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonString = await responseMessage.Content.ReadAsStringAsync();
                tickerModel = JsonConvert.DeserializeObject<TickerModel>(jsonString);
            }
            return tickerModel;

        }

        // GET api/<controller>/orderbook/{currenypair}
        [HttpGet("orderbook/{currencyPair}")]
        public async Task<OrderBookModel> OrderBookAsync(CurrenyPair currencyPair)
        {
            OrderBookModel orderBookModel = null;

            var responseMessage = await bitStampService.GetOrderBook(currencyPair);
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonString = await responseMessage.Content.ReadAsStringAsync();
                orderBookModel = JsonConvert.DeserializeObject<OrderBookModel>(jsonString);
            }
            return orderBookModel;

        }

        // GET api/<controller>/orderbook/{currenypair}
        [HttpGet("transactions/{currencyPair}")]
        public async Task<IList<TransactionsModel>> TransactionsAsync(CurrenyPair currencyPair)
        {
            IList<TransactionsModel> transactionsModels = null;

            var responseMessage = await bitStampService.GetTransactions(currencyPair);
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonString = await responseMessage.Content.ReadAsStringAsync();
                transactionsModels = JsonConvert.DeserializeObject<IList<TransactionsModel>>(jsonString);
            }
            return transactionsModels;
            //return new TransactionsModel() { Amount=2.20M, Price=3.30M, Tid=1.0M, TimeStamp= DateTime.Today, Type =1 };

        }
    }
}
