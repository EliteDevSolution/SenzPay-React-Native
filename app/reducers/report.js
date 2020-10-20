import * as types from '../const/types';

const initialState = {
  filter: {
    start_date: '',
    end_date: ''
  },
  transactions: []
}

export default report = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER:
      return Object.assign({}, state, {
        filter: action.payload
      })
    case types.UPDATE_HISTORY:
      return Object.assign({}, state, {
        transactions: action.payload
      })
    default:
      return state;
  }
}