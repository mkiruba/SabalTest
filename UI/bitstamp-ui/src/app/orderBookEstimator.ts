export class OrderBookEstimator {
    timestamp: Date;
    bids: number[][];
    asks: number[][];    
    averageBidPrice: number;
    averageBidUnitRequested: number;
    averageAskPrice: number;
    averageAskUnitRequested: number;
    averageAskSafetyPrice: number;
    averageBidSafetyPrice: number;
}