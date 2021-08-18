const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_TOTAL":
      const newTotal = state + action.payload;
      return newTotal;
    default:
      return state;
  }
};

export default totalReducer;
