/*
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchBitcoinPrices } from './actions';
import Canvas from 'components/Canvas';
import { mapBitcoinPricesToPoints } from 'utils/index';
import { Repeat } from 'types/common';

const stateSelector = createStructuredSelector({
    homePage: makeSelectHomePage(),
});

// interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomePage() {
    useInjectReducer({ key: 'homePage', reducer: reducer });
    useInjectSaga({ key: 'homePage', saga: saga });

    const { homePage } = useSelector(stateSelector);
    const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
    useEffect(() => {
        dispatch(fetchBitcoinPrices());
    }, []);
    const startDate = '2020-11-01';
    const endDate = '2020-12-03';
    const bitcoinPrices = homePage.homePage.bitcoinPrices;
    if (!bitcoinPrices) {
        return null;
    }
    const points = mapBitcoinPricesToPoints(startDate, endDate, bitcoinPrices, 50, Repeat.DAILY);
    return (
        <div>
            <FormattedMessage {...messages.header} />
            <Canvas points={points} />
        </div>
    );
}

export default HomePage;
