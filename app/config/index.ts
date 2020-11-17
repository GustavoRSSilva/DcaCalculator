import { Config } from 'types/config';

const config: Config = {
    COIN_DESK_BITCOIN_PRICE_URL: process.env.COIN_DESK_BITCOIN_PRICE_URL || '',
};

export default config;
