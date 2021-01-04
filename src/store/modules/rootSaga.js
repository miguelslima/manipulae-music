import { all } from "redux-saga/effects";

import album from "./album/sagas";

export default function* rootSaga() {
  return yield all([album]);
}
