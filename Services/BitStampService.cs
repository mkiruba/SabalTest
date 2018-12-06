using SabalTest.Models;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace SabalTest.Services
{
    public class BitStampService : IBitStampService
    {
        #region Private declarations        
        private IApiClient apiClient;
        #endregion

        #region Constructor  
        public BitStampService(IApiClient apiClient)
        {
            this.apiClient = apiClient;
        }
        #endregion

        #region Public methods 
        public Task<HttpResponseMessage> GetTickers(CurrenyPair currencyPair)
        {
            return apiClient.Get($"ticker/{currencyPair}");
        }

        public Task<HttpResponseMessage> GetOrderBook(CurrenyPair currencyPair)
        {
            return apiClient.Get($"order_book/{currencyPair}");
        }
        public Task<HttpResponseMessage> GetTransactions(CurrenyPair currencyPair)
        {            
            return apiClient.Get($"transactions/{currencyPair}");
        }

        public Task<OrderBookEstimatorModel> GetOrderBookEstimator(OrderBookModel orderBookModel, decimal safetyPercentageOrder)
        {
            return Task.Factory.StartNew(() => {
                var orderBookEstimatorModel = new OrderBookEstimatorModel()
                {
                    Asks = orderBookModel.Asks,
                    Bids = orderBookModel.Bids,
                    AskPrice = orderBookModel.AskPrice,
                    BidPrice = orderBookModel.BidPrice,
                    TimeStamp = orderBookModel.TimeStamp
                };
                orderBookEstimatorModel.AverageBidPrice = orderBookModel.BidPrice.Average(x => x.Price);
                orderBookEstimatorModel.AverageBidUnitRequested = orderBookModel.BidPrice.Average(x => x.Units);
                orderBookEstimatorModel.AverageAskPrice = orderBookModel.AskPrice.Average(x => x.Price);
                orderBookEstimatorModel.AverageAskUnitRequested = orderBookModel.AskPrice.Average(x => x.Units);
                orderBookEstimatorModel.AverageAskSafetyPrice = orderBookEstimatorModel.AverageAskPrice * safetyPercentageOrder;
                orderBookEstimatorModel.AverageBidSafetyPrice = orderBookEstimatorModel.AverageBidPrice * safetyPercentageOrder;
                return orderBookEstimatorModel;
            });           
        }
        #endregion
    }
}
