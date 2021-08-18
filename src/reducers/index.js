import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import toggleCartReducer from "./toggleCartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  toggleCart: toggleCartReducer,
});

export default rootReducer;
