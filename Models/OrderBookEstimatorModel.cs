namespace SabalTest.Models
{
    public class OrderBookEstimatorModel : OrderBookModel
    {        
        public decimal AverageBidPrice { get; set; }
        public decimal AverageBidUnitRequested { get; set; }
        public decimal AverageAskPrice { get; set; }
        public decimal AverageAskUnitRequested { get; set; }
        public decimal AverageAskSafetyPrice { get; set; }
        public decimal AverageBidSafetyPrice { get; set; }
    }
}
