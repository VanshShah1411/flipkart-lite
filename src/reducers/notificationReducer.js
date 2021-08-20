const initialState = {
  message: "",
  open: false,
  color: "",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NOTIFICATION":
      return {
        ...state,
        message: action.payload.message,
        open: true,
        color: action.payload.color,
      };
    case "CLOSE_NOTIFICATION":
      return { ...state, open: false };
    default:
      return state;
  }
};

export default notificationReducer;
