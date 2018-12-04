using SabalTest.Models;
using System.Net.Http;
using System.Threading.Tasks;

namespace SabalTest.Services
{
    public interface IBitStampService
    {
        Task<HttpResponseMessage> GetTickers(CurrenyPair currencyPair);
        Task<HttpResponseMessage> GetOrderBook(CurrenyPair currencyPair);
        Task<HttpResponseMessage> GetTransactions(CurrenyPair currencyPair);
        Task<OrderBookEstimatorModel> GetOrderBookEstimator(OrderBookModel orderBookModel, decimal safetyPercentageOrder);
    }
}