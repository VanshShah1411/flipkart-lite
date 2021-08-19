import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import toggleCartReducer from "./toggleCartReducer";
import totalReducer from "./totalReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  toggleCart: toggleCartReducer,
  total: totalReducer,
  orders: ordersReducer,
});

export default rootReducer;
