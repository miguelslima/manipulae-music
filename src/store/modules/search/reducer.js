import produce from "immer";

const INITIAL_STATE = {
  data: [],
};

const search = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SEARCH_TO_API": {
        console.log("teste")
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default search;
