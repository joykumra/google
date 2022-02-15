export const initialState = {
  searchTerm: "",
};

export const actionType = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const reducer = (state, action) => {
  if (action.type === actionType.SET_SEARCH_TERM) {
    return { ...state, searchTerm: action.input };
  }

  return state;
};
