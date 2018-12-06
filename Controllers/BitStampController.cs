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
        #region Private declarations
        private IBitStampService bitStampService;
        #endregion

        #region Constructor
        public BitStampController(IBitStampService bitStampService)
        {
            this.bitStampService = bitStampService;
        }
        #endregion

        #region Public methods
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
                orderBookModel.AskPrice = SetPriceModel(orderBookModel.Asks);
                orderBookModel.BidPrice = SetPriceModel(orderBookModel.Bids);
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
        }

        // GET api/<controller>/orderbook/{currenypair}
        [HttpGet("orderbookestimator/{currencyPair}/{safetyPercentageOrder}")]
        public async Task<OrderBookEstimatorModel> OrderBookEstimatorAsync(CurrenyPair currencyPair, decimal safetyPercentageOrder)
        {
            var orderbookModel = await OrderBookAsync(currencyPair);
            return await bitStampService.GetOrderBookEstimator(orderbookModel, safetyPercentageOrder);
        }
        #endregion

        #region Private methods 
        private List<PriceModel> SetPriceModel(IList<IList<decimal>> prices)
        {
            var priceModelList = new List<PriceModel>();
            foreach (var price in prices)
            {
                priceModelList.Add(new PriceModel()
                {
                    Price = price[0],
                    Units = price[1]
                });
            }
            return priceModelList;
        }
        #endregion
    }
}
