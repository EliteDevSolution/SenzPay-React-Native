export const eWalletTransfer = (email, password, amt, toemail) => {
  const apiUrl = `https://senzpay.asia/api/user_ewallet_transfer.php`;
  let formdata = new FormData();
  formdata.append('email', email);
  formdata.append('password', password);
  formdata.append('amt', amt);
  formdata.append('toemail', toemail);
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formdata
  })
}