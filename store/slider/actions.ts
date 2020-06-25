import { createAction } from 'redux-actions';

import { SLIDER, FETCH, DONE, FAIL } from '../constants';

export const fetchSlides = createAction(SLIDER + FETCH);
export const fetchSlidesDone = createAction(SLIDER + FETCH + DONE);
export const fetchSlidesFail = createAction(SLIDER + FETCH + FAIL);
