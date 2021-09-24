import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfiguration = {
    key: 'root',
    storage,
    whitelist: ['cart'] // We only want to persist the cart since the user reducer is being persisted by Firebase
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfiguration, rootReducer);
