export type BitcoinPrices = { [key: string]: { value: number } };

export interface Point {
    date: string;
    value: number;
    totalAccumulated: number;
}

export enum Repeat {
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    WEEKLY_TWICE = 'WEEKLY_TWICE',
    MONTHLY = ' MONTHLY',
}
