import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_BITCOIN_PRICES } from './constants';
import { getTodayDate } from 'utils';
import { COIN_DESK_BITCOIN_PRICE_URL } from 'utils/constants';
/**
 * Fetch Bitcoin price
 */
export function* fetchBitcoinPrice() {
  try {
      // Call our request helper (see 'utils/request')
      const todayDate = getTodayDate();
      const requestURL = `${COIN_DESK_BITCOIN_PRICE_URL}?start=2013-09-01&end=${todayDate}`;
      const bitcoinPrices = yield call(request, requestURL);
      yield put(fetchBitcoinPricesSuccess(bitcoinPrices.bpi));
  } catch (err) {
      yield put(fetchBitcoinPricesRejected(err));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_BITCOIN_PRICES, fetchBitcoinPrice);

}
