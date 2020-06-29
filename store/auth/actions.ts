import { createAction } from 'redux-actions';

import { AUTH, FETCH, DONE, FAIL, LOGOUT } from '../constants';

export const checkAuth = createAction(AUTH);
export const fetchAuth = createAction(AUTH + FETCH);
export const fetchAuthDone = createAction(AUTH + FETCH + DONE);
export const fetchAuthFail = createAction(AUTH + FETCH + FAIL);

export const logoutAction = createAction(LOGOUT);
