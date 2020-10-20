import { makePaymentRequest } from '../api/reload';

export const MakePaymentRequest = (prodId, txtAmt, txtMobile, txtEmail = '') => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      makePaymentRequest(prodId, txtAmt, txtMobile, txtEmail)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === "true") {
              resolve(json.msg);
            } else {
              reject(json.msg);
            }
          })
        })
        .catch(err => {
          reject('Api is not reachable!');
        })
    })
  }
}