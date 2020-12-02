/**
 *
 * Tests for HomePage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import history from 'utils/history';

import HomePage from '../index';
import { DEFAULT_LOCALE } from '../../../locales';
import configureStore from '../../../configureStore';
describe('<HomePage />', () => {
    let store;

    beforeEach(() => {
        store = configureStore({}, history);
    });

    it.skip('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');
        render(
            <Provider store={store}>
                <IntlProvider locale={DEFAULT_LOCALE}>
                    <HomePage />
                </IntlProvider>
            </Provider>,
        );
        expect(spy).not.toHaveBeenCalled();
    });

    /**
     * Unskip this test to use it
     *
     * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
     */
    it.skip('Should render and match the snapshot', () => {
        const {
            container: { firstChild },
        } = render(
            <Provider store={store}>
                <IntlProvider locale={DEFAULT_LOCALE}>
                    <HomePage />
                </IntlProvider>
            </Provider>,
        );
        expect(firstChild).toMatchSnapshot();
    });
});
