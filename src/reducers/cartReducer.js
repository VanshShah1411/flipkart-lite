const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newState = [...state];
      const item = state.find((el) => el.id === action.payload);
      if (!item) {
        newState.push({ id: action.payload, qty: 1 });
      } else if (item && item.qty < 5) {
        item.qty += 1;
      }
      return newState;

    case "DELETE_CART_ITEM":
      return [...state].filter((el) => el.id !== action.payload);

    case "INC_CART_ITEM":
      const item1 = state.find((el) => el.id === action.payload);
      item1.qty += 1;

      return [...state];

    case "DEC_CART_ITEM":
      const item2 = state.find((el) => el.id === action.payload);
      if (item2.qty > 0) {
        item2.qty -= 1;
      }
      if (item2.qty === 0) {
        return [...state].filter((el) => el.id !== action.payload);
      }
      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
