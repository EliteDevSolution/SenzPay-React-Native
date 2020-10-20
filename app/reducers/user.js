import * as types from '../const/types';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
  user: {},
  errorMsg: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        failure: false,
        user: action.user,
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        failure: true,
        errorMsg: action.err,
      });
    case types.UPDATE_BALANCE:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          Bal: action.bal
        })
      })
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
