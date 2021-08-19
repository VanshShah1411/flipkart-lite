import { setLocalStorage, getLocalStorage } from "../utils.js";

const productsReducer = (state = getLocalStorage("orders", []), action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      const newState = [
        ...state,
        {
          cart: action.payload.cart,
          address: action.payload.address,
          total: action.payload.total,
        },
      ];
      setLocalStorage("orders", newState);
      return newState;

    default:
      return state;
  }
};

export default productsReducer;
