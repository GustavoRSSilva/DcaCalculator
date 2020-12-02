/*
 * Canvas Messages
 *
 * This contains all the text for the Canvas component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Canvas';

export default defineMessages({
    header: {
        id: `${scope}.header`,
        defaultMessage: 'This is the Canvas component!',
    },
});
