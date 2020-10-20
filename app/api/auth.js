export const signup = (email, first_name, last_name, phone, password) => {
  let formdata = new FormData();
  const user = {
    email,
    first_name,
    last_name,
    phone,
    password,
  };
  const keys = Object.keys(user);
  keys.map((key) => formdata.append(key, user[key]));

  let apiUrl = "https://senzpay.asia/api/user_signup.php";
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formdata,
  });
};

export const login = (email, password) => {
  let apiUrl = `https://localhost:8081/api/user_login.php?email=${email}&password=${password}`;
  return fetch(apiUrl, {
    method: "GET",
  });
};
