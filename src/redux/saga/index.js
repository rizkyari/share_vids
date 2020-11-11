import { put, takeLatest, all, call } from "redux-saga/effects";
import { postVideoSuccess, postVideoError } from "./../action/index";
import request from "./../../component/request";

function* postVideo(action) {
  const id = action.video;
  const key = "AIzaSyBB-7b31F0Z_QBkTkCGSO2O9cRvSluJ9Cs";
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${key}`;
  const config = {
    method: "get",
    headers: {
      "Accept": "application / json",
    },
  };

  try {
    const result = yield call(request, url, config);
    yield put(postVideoSuccess(result));
  } catch (error) {
    put(postVideoError(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest("ADD_VIDEO", postVideo)
  ]);
}
