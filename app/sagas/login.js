import React from 'react';
import { take, put, call, fork, select } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';
import { loginSuccess, loginFailure } from '../actions/loginActions'

import { login } from '../api/auth';

function loginCall({ email, password }) {
  return new Promise((resolve, reject) => {
    login(email, password)
    .then((res) => {
      res.json().then(json => {
        if (json.status === 'true') {
          const { uid, first_name, last_name, email, phone, Bal } = json;
          let { address } = json;
          if (address === undefined) {
            address = "";
          }
          const user = { uid, first_name, last_name, email, phone, Bal, password, address };
          resolve(user)
        } else {
          reject({status: json.msg})
        }
      })
    })
    .catch(err => {
      reject({status: 'Api error!'});
    })
  })
}

function* watchLoginRequest() {
  while (true) {
    const { email, password } = yield take(types.LOGIN.REQUEST);

    try {
      const payload = {
        email,
        password,
      }
      const response = yield call(loginCall, payload);

      yield put(loginSuccess(response));
    } catch (err) {
      yield put(loginFailure(err.status));
    }
  }
}


export default function* root() {
  yield fork(watchLoginRequest);
}
