import { all, select, takeLatest, call } from "redux-saga/effects";
import fetchJsonp from "fetch-jsonp";
import api from "../../../services/api";

function* searchApi(action) {
  console.log(action);
  let response = {};

  // const resp = await (
  //   await fetchJsonp(
  //     `https://api.deezer.com/chart?index=${index}&limit=20&output=jsonp`
  //   )
  // ).json();
  // const data = await resp;

  const artist = yield call(
    api.get,
    `/search/artist?q=${action.payload.query}&limit=10`
  );

  const album = yield call(
    api.get,
    `/search/album?q=${action.payload.query}&limit=10`
  );

  const track = yield call(
    api.get,
    `/search/track?q=${action.payload.query}&limit=10`
  );

  response = {
    artist: artist.data.data,
    album: album.data.data,
    track: track.data.data,
  };
}

export default all([takeLatest("SEARCH_TO_API", searchApi)]);
