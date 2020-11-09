import { put, takeLatest, all } from 'redux-saga/effects';

function* exampleSaga() {
    console.log("Example saga reached");
  }


  export default function* rootSaga() {
    yield all([
      exampleSaga(),
    ]);
  }