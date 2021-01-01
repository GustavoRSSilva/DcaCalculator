/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { FETCH_BITCOIN_PRICES_SUCCESS, FETCH_BITCOIN_PRICES_REJECTED } from './constants';

export const initialState = {
  bitcoinPrices: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH_BITCOIN_PRICES_SUCCESS:
        return {
            ...state,
            bitcoinPrices: action.payload,
        };
    case FETCH_BITCOIN_PRICES_REJECTED:
        return {
            ...state,
            error: action.payload,
        };
    }
  });

export default homePageReducer;
