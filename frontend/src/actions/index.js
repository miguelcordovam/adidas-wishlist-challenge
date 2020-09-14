import {
    SIGN_IN, 
    SIGN_OUT, 
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    FETCH_PRODUCTS,
    FETCH_WISHLIST
} from './types';
import products from '../apis/products';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchProducts = () => async dispatch => {

    const response = await products.get('/products');

    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    });
}

export const addProductToWishList = (product) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    await products.post(`/wishlist/${userId}/products/${product.id}`);

    dispatch({
        type: ADD_PRODUCT_TO_WISHLIST,
        payload: product
    });
}

export const removeProductFromWishList = (product) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    await products.delete(`/wishlist/${userId}/products/${product.id}`);

    dispatch({
        type: REMOVE_PRODUCT_FROM_WISHLIST,
        payload: product
    });
}

export const fetchWishList = () => async (dispatch, getState) => {
    const { userId } = getState().auth;

    const response = await products.get('/wishlist?userId='+ userId);
    
    dispatch({
        type: FETCH_WISHLIST,
        payload: response.data
    });
}
