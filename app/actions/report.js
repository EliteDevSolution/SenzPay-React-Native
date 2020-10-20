import * as types from '../const/types';
import { ReloadBillTransactionReport } from '../api/report';

export const UpdateFilter = (start_date, end_date) => {
  return {
    type: types.UPDATE_FILTER,
    payload: {
      start_date,
      end_date
    }
  };
}

export const ApplyFilter = (user_id, status, start_date, end_date) => {
  return (dispatch) => {
    ReloadBillTransactionReport(user_id, status, start_date, end_date)
      .then(res => {
        res.json().then(json => {
          if (json.status === true && json.data !== undefined) {
            dispatch({
              type: types.UPDATE_HISTORY,
              payload: json.data
            })
          }
        })
      })
      .catch(err => {
        
      })
  }
}