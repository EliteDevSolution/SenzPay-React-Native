import { walletBalanceTopupRequest, walletBalanceTopupStatusCheck, makePaymentViaWalletRequest } from '../api/wallet';
import { eWalletTransfer } from '../api/transfer';

export const WalletBalanceTopupRequest = (email, uid, password, amt, topup_method) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      walletBalanceTopupRequest(email, uid, password, amt, topup_method)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === true) {
              resolve(json.deposit_id);
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

export const WalletBalanceTopupStatusCheck = (email, password, deposit_id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      walletBalanceTopupStatusCheck(email, password, deposit_id)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === true) {
              resolve();
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

export const MakePaymentViaWalletRequest = (email, password, amt, item_desc) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      makePaymentViaWalletRequest(email, password, amt, item_desc)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === true) {
              resolve(json.Bal);
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

export const EWalletTransfer = (email, password, amt, toemail) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      eWalletTransfer(email, password, amt, toemail)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === true) {
              resolve(json.Bal);
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