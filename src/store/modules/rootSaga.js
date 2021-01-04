import { all } from "redux-saga/effects";

import album from "./album/sagas";
import search from "./search/sagas";

export default function* rootSaga() {
  return yield all([album, search]);
}
