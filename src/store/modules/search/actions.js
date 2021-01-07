export function searchResultRequest(searchResults) {
  return {
    type: "SEARCH_TO_API_REQUEST",
    payload: {
      searchResults,
    },
  };
}

export function searchResultSuccess(searchResults) {
  return {
    type: "SEARCH_TO_API_SUCCESS",
    payload: {
      searchResults,
    },
  };
}

export function searchResultFailure(error) {
  return {
    type: "SEARCH_TO_API_FAILURE",
    payload: {
      error,
    },
  };
}

export function resetSearch(reset) {
  return {
    type: "RESET_SEARCH",
    payload: {
      reset,
    },
  };
}
