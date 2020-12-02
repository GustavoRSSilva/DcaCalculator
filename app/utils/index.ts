import { Point, BitcoinPrices, Repeat } from 'types/common';

export const getTodayDate = (): string => {
    const now = new Date();
    return now.toISOString().substring(0, 10);
};

export const filterBitcoinPricesByStartEndDate = (
    startingDate: string,
    endDate: string,
    bitcoinPrices: BitcoinPrices,
): string[] => Object.keys(bitcoinPrices).filter((date) => date >= startingDate && (!endDate || date <= endDate));

export const mapBitcoinPricesToPoints = (
    startingDate: string,
    endDate: string,
    bitcoinPrices: BitcoinPrices,
    amount: number,
    period: Repeat,
): Point[] => {
    const dateRange = filterBitcoinPricesByStartEndDate(startingDate, endDate, bitcoinPrices);

    return [{ date: 'startingDate', value: 1, totalAccumulated: 1 }];
};
