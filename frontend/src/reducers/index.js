import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import wishlistReducer from './wishListReducer';

export default combineReducers ({
    auth: authReducer,
    products: productsReducer,
    wishList: wishlistReducer
});