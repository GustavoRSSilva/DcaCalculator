import { Point, BitcoinPrices } from 'types/common';

export const getTodayDate = (): string => {
    const now = new Date();
    return now.toISOString().substring(0, 10);
};

export const mapBitcoinPricesToPoints = (
    startingDate: string,
    endData: string,
    bitcoinPrices: BitcoinPrices,
): Point[] => {
    // console.log(bitcoinPrices);
    // console.log(endData);
    return [{ date: 'startingDate', value: 1, totalAccumulated: 1 }];
};
