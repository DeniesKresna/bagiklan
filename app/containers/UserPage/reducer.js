/*
 *
 * UserPage reducer
 *
 */
import produce from 'immer';
import { CHANGE_SEARCH, GET_DATA_SUCCESS, GET_ROLES_SUCCESS } from './constants';

export const initialState = {
  data: {
    current_page : 1,
    data: [],
    from: 0,
    last_page: 0,
    per_page: 10,
    to: 0,
    total: 0
  },
  search: '',
  row: {},
  roles: []
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_DATA_SUCCESS:
        draft.data = action.payload;
        break;
      case CHANGE_SEARCH:
        draft.search = action.payload;
        break;
      case GET_ROLES_SUCCESS:
        draft.roles = action.payload;
        break
    }
  });

export default userReducer;
