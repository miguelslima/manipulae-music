export function searchResult(search) {
  return {
    type: "SEARCH_TO_API",
    payload: {
      search,
    },
  };
}
