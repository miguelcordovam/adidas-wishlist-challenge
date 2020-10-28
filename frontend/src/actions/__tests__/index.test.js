import {
    SIGN_IN, 
    SIGN_OUT, 
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    FETCH_PRODUCTS,
    FETCH_WISHLIST
} from '../types';

import { signIn, signOut, fetchProducts, addProductToWishList, removeProductFromWishList, fetchWishList } from '../index';

describe('sign in', () => {
    it ('has correct type', () => {
        const action = signIn();

        expect (action.type).toEqual(SIGN_IN);
    });

});

describe('sign out', () => {
    it ('has correct type', () => {
        const action = signOut();

        expect (action.type).toEqual(SIGN_OUT);
    });

});
