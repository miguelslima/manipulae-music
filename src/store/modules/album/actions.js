export function searchAlbumApi(album) {
  return {
    type: "SEARCH_ALBUM_API",
    payload: {
      album,
    },
  };
}
