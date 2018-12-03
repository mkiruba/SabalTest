using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Newtonsoft.Json.Converters;

namespace SabalTest.Models
{
    public class OrderBookModel
    {
        [JsonConverter(typeof(UnixDateTimeConverter))]
        public DateTime TimeStamp { get; set; }
        public IList<IList<decimal>> Bids { get; set; }
        public IList<IList<decimal>> Asks { get; set; }        
    }
}
