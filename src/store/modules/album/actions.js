export function searchAlbumApi(album, favorited) {
  return {
    type: "SEARCH_ALBUM_API",
    payload: {
      album,
      favorited,
    },
  };
}
