/*
 *
 * HomePage actions
 *
 */

import { action } from 'typesafe-actions';
import { BitcoinPrices } from 'types/common';
import { ResponseError } from 'utils/request';

import ActionTypes from './constants';

export const fetchBitcoinPrices = () => action(ActionTypes.FETCH_BITCOIN_PRICES);
export const fetchBitcoinPricesSuccess = (bitcoinPrices: BitcoinPrices) =>
    action(ActionTypes.FETCH_BITCOIN_PRICES_SUCCESS, bitcoinPrices);
export const fetchBitcoinPricesRejected = (error: ResponseError) =>
    action(ActionTypes.FETCH_BITCOIN_PRICES_REJECTED, error);
