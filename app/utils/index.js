export const getTodayDate = () => {
    const now = new Date();
    return now.toISOString().substring(0, 10);
};

export const filterBitcoinPricesByStartEndDate = (
    startingDate,
    endDate,
    bitcoinPrices,
) => Object.keys(bitcoinPrices).filter((date) => date >= startingDate && (!endDate || date <= endDate));

export const mapBitcoinPricesToPoints = (
    startingDate,
    endDate,
    bitcoinPrices,
    amount,
    period,
)=> {
    const dateRange = filterBitcoinPricesByStartEndDate(startingDate, endDate, bitcoinPrices);

    return [{ date: 'startingDate', value: 1, totalAccumulated: 1 }];
};
