using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Newtonsoft.Json.Converters;

namespace SabalTest.Models
{
    public class TransactionsModel
    {
        [JsonConverter(typeof(UnixDateTimeConverter))]
        public DateTime Date { get; set; }
        public decimal Tid { get; set; }
        public decimal Price { get; set; }
        public int Type { get; set; }
        public decimal Amount { get; set; }
    }
}
