/*
 *
 * HomePage actions
 *
 */

import { FETCH_BITCOIN_PRICES, FETCH_BITCOIN_PRICES_SUCCESS, FETCH_BITCOIN_PRICES_REJECTED } from './constants';

export function fetchBitcoinPrices() {
  return {
    type: FETCH_BITCOIN_PRICES,
  };
}

export function fetchBitcoinPricesSuccess(payload) {
  return {
    type: FETCH_BITCOIN_PRICES_SUCCESS,
    payload
  };
}
export function fetchBitcoinPricesRejected(payload) {
  return {
    type: FETCH_BITCOIN_PRICES_REJECTED,
    payload
  };
}
