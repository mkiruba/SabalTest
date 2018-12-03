using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;

namespace SabalTest.Models
{
    public class OrderBookEstimatorModel
    {
        [JsonConverter(typeof(UnixDateTimeConverter))]
        public DateTime TimeStamp { get; set; }
        public IList<IList<decimal>> Bids { get; set; }
        public IList<IList<decimal>> Asks { get; set; }
        public decimal AverageBidPrice { get; set; }
        public decimal AverageBidUnitRequested { get; set; }
        public decimal AverageAskPrice { get; set; }
        public decimal AverageAskUnitRequested { get; set; }
        public decimal AverageAskSafetyPrice { get; set; }
        public decimal AverageBidSafetyPrice { get; set; }
    }
}
