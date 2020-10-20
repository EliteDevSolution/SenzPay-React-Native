export const makePaymentRequest = (prodId, txtAmt, txtMobile, txtEmail = '') => {
  const apiUrl = `http://103.51.41.134/localuser/sp_services/reload.php`;
  let formdata = new FormData();
  formdata.append('prodId', prodId);
  formdata.append('login_uid', 17242);
  formdata.append('txtAmt', txtAmt);
  formdata.append('txtMobile', txtMobile);
  if (txtEmail !== '') {
    formdata.append('txtEmail', txtEmail);
  }
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formdata
  })
}