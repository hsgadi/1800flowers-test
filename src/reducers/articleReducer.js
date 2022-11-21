function articleReducer(state = "", action) {
  switch (action.type) {
    case "UPDATE_SET":
      return { ...state, articles: action.articles };
    default:
      return state;
  }
}

export default articleReducer;
