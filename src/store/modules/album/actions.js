export function favoriteTrackApi(album, favorited) {
  return {
    type: "FAVORITE_TRACK_API",
    payload: {
      album,
      favorited,
    },
  };
}
