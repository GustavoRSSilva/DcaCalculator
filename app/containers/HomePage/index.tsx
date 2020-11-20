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
    return (
        <div>
            <FormattedMessage {...messages.header} />
        </div>
    );
}

export default HomePage;
