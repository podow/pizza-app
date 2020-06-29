import { createAction } from 'redux-actions';

import { HISTORY, FETCH, DONE, FAIL } from '../constants';

export const fetchHistory = createAction(HISTORY + FETCH);
export const fetchHistoryDone = createAction(HISTORY + FETCH + DONE);
export const fetchHistoryFail = createAction(HISTORY + FETCH + FAIL);
