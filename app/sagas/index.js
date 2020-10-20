import { fork } from 'redux-saga/effects'

import login from './login';

// Consider using takeEvery
export default function* root() {
  yield fork(login);
}
