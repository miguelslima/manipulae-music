import produce from "immer";

const INITIAL_STATE = {
  data: [],
};

const album = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "FAVORITE_TRACK_API": {
        const { album } = action.payload;

        const albumFavoriteIndex = draft.data.findIndex(
          (item) => item.album.id === album.id
        );

        if (albumFavoriteIndex >= 0) {
          draft.data.splice(albumFavoriteIndex, 1);
          return;
        } else {
          draft.data.push({
            album,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default album;
