import { all, select, takeLatest, call } from "redux-saga/effects";
import api from "../../../services/api";

function* searchApi(action) {
  let response = {};

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
