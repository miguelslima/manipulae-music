export function favoriteTrackApiRequest(album, favorited) {
  return {
    type: "FAVORITE_TRACK_API_REQUEST",
    payload: {
      album,
      favorited,
    },
  };
}

export function favoriteTrackApiSuccess(album, favorited) {
  return {
    type: "FAVORITE_TRACK_API_SUCCESS",
    payload: {
      album,
      favorited,
    },
  };
}

export function favoriteTrackApiFailure(albumId) {
  return {
    type: "FAVORITE_TRACK_API_FAILURE",
    payload: {
      albumId,
    },
  };
}
