export type BitcoinPrices = { [key: string]: { value: number } };

export interface Point {
    date: string;
    value: number;
    totalAccumulated: number;
}
