import { all, put, select, takeLatest } from "redux-saga/effects";
import { favoriteTrackApiFailure, favoriteTrackApiSuccess } from "./actions";

function* checkFavorited(action) {
  const { album, favorited } = action.payload;

  if (favorited === false) {
    yield put(favoriteTrackApiSuccess(album, favorited));
  } else {
    yield put(favoriteTrackApiFailure(album.id));
  }
}

export default all([takeLatest("FAVORITE_TRACK_API_REQUEST", checkFavorited)]);
