const INITIAL_STATE = {
  data: [],
};

const album = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_ALBUM_API": {
      const { album } = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            album,
            favorite: true,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default album;
