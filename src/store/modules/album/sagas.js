import { all, select, takeLatest } from "redux-saga/effects";

function* checkFavorited(action) {

  console.log(action)
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
}

export default all([takeLatest("FAVORITE_TRACK_API", checkFavorited)]);
