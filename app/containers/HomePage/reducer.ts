/*
 *
 * HomePage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
    default: null,
};

function homePageReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
    switch (action.type) {
        case ActionTypes.FETCH_BITCOIN_PRICES:
            return state;
        default:
            return state;
    }
}

export default homePageReducer;
