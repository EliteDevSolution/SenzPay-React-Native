import * as types from "../const/types";
import { login, signup } from "../api/auth";
import { updateProfile, updatePassword, forgotPassword } from "../api/profile";

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST,
      email,
      password,
    });

    login(email, password)
      .then((res) => {
        res.json().then((json) => {
          if (json.status === "true") {
            const { uid, first_name, last_name, email, phone, Bal } = json;
            let { address } = json;
            if (address === undefined) {
              address = "";
            }
            const user = {
              uid,
              first_name,
              last_name,
              email,
              phone,
              Bal,
              password,
              address,
            };
            dispatch({
              type: types.LOGIN_SUCCESS,
              user,
            });
          } else {
            dispatch({
              type: types.LOGIN_FAILURE,
              err: json.msg,
            });
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: types.LOGIN_FAILURE,
          err: "Server not reachable!",
        });
      });
  };
};

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user,
  };
}

export function loginFailure(err) {
  return {
    type: types.LOGIN_FAILURE,
    err,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export const UpdateProfile = (
  email,
  password,
  first_name,
  last_name,
  address = ""
) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      updateProfile(email, password, first_name, last_name, address)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === "true") {
              resolve();
            } else {
              reject();
            }
          });
        })
        .catch((err) => {
          reject();
        });
    });
  };
};

export const UpdatePassword = (email, oldpassword, newpassword) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      updatePassword(email, oldpassword, newpassword)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === "true") {
              resolve();
            } else {
              reject();
            }
          });
        })
        .catch((err) => {
          reject();
        });
    });
  };
};

export const ForgotPassword = (email) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      forgotPassword(email)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === "true") {
              resolve();
            } else {
              reject();
            }
          });
        })
        .catch((err) => {
          reject();
        });
    });
  };
};

export const SignUp = (email, first_name, last_name, phone, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      signup(email, first_name, last_name, phone, password)
        .then((res) => {
          res.json().then((json) => {
            if (json.status === true) {
              resolve(json.msg);
            } else {
              reject(json.msg);
            }
          });
        })
        .catch((err) => {
          reject("Server is not reachable!");
        });
    });
  };
};

export const UpdateBalance = (bal) => ({
  type: types.UPDATE_BALANCE,
  bal,
});
