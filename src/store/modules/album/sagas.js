import { all, put, select, takeLatest } from "redux-saga/effects";
import { favoriteTrackApiFailure, favoriteTrackApiSuccess } from "./actions";

function* checkFavorited(action) {
  const { album, favorited } = action.payload;

  // const favorited = yield select((state) => {
  //   console.log(
  //     state.album.data.indexOf(
  //       (item) => item.favorite && favorite.favorite === true
  //     )
  //   );
  //   // return state.album.data.find(
  //   //   (item) => item.favorite.id === favorite.id.favorite || false
  //   // );
  // });
  // console.log(favorite);

  if (favorited === false) {
    yield put(favoriteTrackApiSuccess(album, favorited));
  } else {
    yield put(favoriteTrackApiFailure(album.id));
  }
}

export default all([takeLatest("FAVORITE_TRACK_API_REQUEST", checkFavorited)]);
