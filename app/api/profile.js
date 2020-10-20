export const updatePassword = (email, oldpassword, newpassword) => {
  const apiUrl = `https://senzpay.asia/api/user_login_cpassword.php?email=${email}&oldpassword=${oldpassword}&newpassword=${newpassword}`;
  return fetch(apiUrl, {
    method: 'POST'
  });
}

export const updateProfile = (email, password, first_name, last_name, address='') => {
  const obj = { email, password, first_name, last_name, address };
  const keys = Object.keys(obj);
  let apiUrl = 'https://senzpay.asia/api/user_profile_update.php?';
  keys.map((key, idx) => {
    apiUrl += key + '=' + obj[key];
    if (idx < keys.length - 1) {
      apiUrl += '&'
    }
  })
  return fetch(apiUrl, {
    method: 'POST'
  });
}

export const forgotPassword = (email) => {
  const apiUrl = 'https://senzpay.asia/api/user_login_fpassword.php';
  let formdata = new FormData();
  formdata.append('email', email);
  return fetch(apiUrl, {
    method: 'POST',
    body: formdata
  })
}