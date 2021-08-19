const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return [
        ...state,
        { cart: action.payload.cart, address: action.payload.address },
      ];
    default:
      return state;
  }
};

export default productsReducer;
