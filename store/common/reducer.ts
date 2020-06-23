import { handleActions } from 'redux-actions';

import { Common } from 'interfaces/store/common';

import { TOGGLE_MODAL, INCREMENT_API, DECREMENT_API } from '../constants';

const initialState: Common = {
  modal: {
    open: false,
    name: null
  },
  apiCalls: 0
};

export default handleActions(
  {
    [TOGGLE_MODAL]: (state: Common, { payload }) => ({
      ...state,
      modal: payload.open
        ? { ...state.modal, ...payload }
        : { ...state.modal, open: false, name: null }
    }),
    [INCREMENT_API]: (state: Common) => ({
      ...state,
      apiCalls: state.apiCalls + 1
    }),
    [DECREMENT_API]: (state: Common) => ({
      ...state,
      apiCalls: state.apiCalls - 1
    })
  },
  initialState
);
