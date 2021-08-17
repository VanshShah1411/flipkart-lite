const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { id: action.payload, qty: 1 }];

    case "DELETE_CART_ITEM":
      return [...state].filter((el) => el.id !== action.payload);

    case "INC_CART_ITEM":
      const item = state.find((el) => el.id === action.payload);
      item.qty += 1;
      return state;

    case "DEC_CART_ITEM":
      const item1 = state.find((el) => el.id === action.payload);
      item1.qty -= 1;
      return state;

    default:
      return state;
  }
};

export default cartReducer;
