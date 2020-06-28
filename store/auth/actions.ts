import { createAction } from 'redux-actions';

import { AUTH, FETCH, DONE, FAIL } from '../constants';

export const fetchAuth = createAction(AUTH + FETCH);
export const fetchAuthDone = createAction(AUTH + FETCH + DONE);
export const fetchAuthFail = createAction(AUTH + FETCH + FAIL);
