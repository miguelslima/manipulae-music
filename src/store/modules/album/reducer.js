import produce from "immer";

const INITIAL_STATE = {
  data: [],
};

const album = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "FAVORITE_TRACK_API_SUCCESS": {
        const { album } = action.payload;

        const albumFavoriteIndex = draft.data.findIndex(
          (item) => item.album.id === album.id
        );

        if (albumFavoriteIndex >= 0) {
          draft.data.splice(albumFavoriteIndex, 1);
          draft.favorited = false;
          return;
        } else {
          draft.data.push({
            album,
            favorite: true,
          });
        }

        break;
      }
      case "FAVORITE_TRACK_API_FAILURE": {
        const { album } = action.payload;
        draft.data.splice(album, 1);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default album;
