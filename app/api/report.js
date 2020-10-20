export const ReloadBillTransactionReport = (user_id, status, start_date, end_date) => {
  let apiUrl = `http://103.51.41.134/localuser/sp_services/report_transaction.php?`;
  apiUrl += `user_id=` + user_id;
  apiUrl += `user_id=73`;
  apiUrl += `&status=` + status;
  apiUrl += `&start_date=` + start_date;
  apiUrl += `&end_date=` + end_date;
  return fetch(apiUrl, {
    method: 'GET'
  })
}