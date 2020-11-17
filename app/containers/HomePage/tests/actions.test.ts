import { action } from 'typesafe-actions';

import { fetchBitcoinPrices } from '../actions';
import ActionTypes from '../constants';

describe('HomePage actions', () => {
    describe('Fetch bitcoin Action', () => {
        it('has a type of FETCH_BITCOIN_PRICES', () => {
            const expected = action(ActionTypes.FETCH_BITCOIN_PRICES);
            expect(fetchBitcoinPrices()).toEqual(expected);
        });
    });
});
