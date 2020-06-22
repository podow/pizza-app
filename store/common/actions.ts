import { createAction } from 'redux-actions';

import { TOGGLE_MODAL, INCREMENT_API, DECREMENT_API } from '../constants';

export const toggleModal = createAction(TOGGLE_MODAL);

export const incrementApi = createAction(INCREMENT_API);
export const decrementApi = createAction(DECREMENT_API);
