import produce from "immer";

const INITIAL_STATE = {
  data: [],
};

const search = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SEARCH_TO_API_SUCCESS": {
        const { searchResults } = action.payload;

        draft.data = searchResults;

        break;
      }

      case "SEARCH_TO_API_FAILURE": {
        console.log("falha na busca");
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default search;
