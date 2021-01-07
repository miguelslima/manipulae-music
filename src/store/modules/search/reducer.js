import produce from "immer";

const INITIAL_STATE = {
  data: [],
  loading: false,
  findSearch: false,
};

const search = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SEARCH_TO_API_SUCCESS": {
        const { searchResults } = action.payload;

        draft.data = searchResults;
        draft.findSearch = true;

        break;
      }

      case "SEARCH_TO_API_FAILURE": {
        draft.findSearch = false;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default search;
