/*
 *
 * HomePage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
    bitcoinPrices: null,
    error: null,
};

function homePageReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
    switch (action.type) {
        case ActionTypes.FETCH_BITCOIN_PRICES_SUCCESS:
            return {
                ...state,
                bitcoinPrices: action.payload,
            };
        case ActionTypes.FETCH_BITCOIN_PRICES_REJECTED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default homePageReducer;
