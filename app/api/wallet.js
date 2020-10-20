export const walletBalanceTopupRequest = (email, uid, password, amt, topup_method) => {
  let apiUrl = `https://senzpay.asia/api/user_wallet_topup.php`;
  let data = new FormData();
  data.append('email', email);
  data.append('uid', uid);
  data.append('password', password);
  data.append('amt', amt);
  data.append('topup_method', topup_method);

  return fetch(apiUrl, {
    method: 'POST',
    body: data
  });
};

export const walletBalanceTopupStatusCheck = (email, password, deposit_id) => {
  let apiUrl = `https://senzpay.asia/api/user_wallet_topup_check.php`;
  let data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('deposit_id', deposit_id);

  return fetch(apiUrl, {
    method: 'POST',
    body: data
  });
}

export const makePaymentViaWalletRequest = (email, password, amt, item_desc) => {
  let apiUrl = `https://senzpay.asia/api/user_make_payment.php`;
  let data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('amt', amt);
  data.append('item_desc', item_desc);

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: data
  });
};