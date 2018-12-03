using Newtonsoft.Json;
using System;
using Newtonsoft.Json.Converters;

namespace SabalTest.Models
{
    public class TickerModel
    {
        public decimal High { get; set; }
        public decimal Last { get; set; }
        [JsonConverter(typeof(UnixDateTimeConverter))]
        public DateTime TimeStamp { get; set; }
        public decimal Bid { get; set; }
        public decimal Vwap { get; set; }
        public decimal Volume { get; set; }
        public decimal Low { get; set; }
        public decimal Ask { get; set; }
        public decimal Open { get; set; }
    }
}
