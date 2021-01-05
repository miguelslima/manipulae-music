import { all, select, takeLatest, call, put } from "redux-saga/effects";
import { searchResultSuccess, searchResultFailure } from "./actions";
import api from "../../../services/api";

function* searchApi(action) {
  let response = {};

  try {
    const artist = yield call(
      api.get,
      `/search/artist?q=${action.payload.searchResults}&limit=10`
    );

    const album = yield call(
      api.get,
      `/search/album?q=${action.payload.searchResults}&limit=10`
    );

    const track = yield call(
      api.get,
      `/search/track?q=${action.payload.searchResults}&limit=10`
    );

    response = {
      artist: artist.data.data,
      album: album.data.data,
      track: track.data.data,
    };

    yield put(searchResultSuccess(response));
  } catch (e) {
    console.log(e);
    yield put(searchResultFailure(e));
  }
}

export default all([takeLatest("SEARCH_TO_API_REQUEST", searchApi)]);
