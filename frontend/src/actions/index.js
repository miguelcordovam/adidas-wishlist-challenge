import {
    SIGN_IN, 
    SIGN_OUT, 
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    FETCH_PRODUCTS,
    FETCH_WISHLIST
} from './types';
import products from '../apis/products';

export const signIn = () => {
    return {
        type: SIGN_IN
    };
};

export const signOut = () => async dispatch => {
    await products.post('/user/logout');

    dispatch({
        type: SIGN_OUT
    });
};

export const fetchProducts = () => async dispatch => {
    const response = await products.get('/products');

    dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
    });
}

export const addProductToWishList = (product) => async (dispatch) => {
    await products.post(`/wishlist/${product.id}`);

    dispatch({
        type: ADD_PRODUCT_TO_WISHLIST,
        payload: product
    });
}

export const removeProductFromWishList = (product) => async (dispatch) => {
    await products.delete(`/wishlist/${product.id}`);

    dispatch({
        type: REMOVE_PRODUCT_FROM_WISHLIST,
        payload: product
    });
}

export const fetchWishList = () => async (dispatch) => {
    const response = await products.get('/wishlist');
    
    dispatch({
        type: FETCH_WISHLIST,
        payload: response.data
    });
}
