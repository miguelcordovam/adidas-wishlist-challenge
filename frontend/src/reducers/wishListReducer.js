import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    FETCH_WISHLIST
} from '../actions/types';

import _ from 'lodash';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_WISHLIST:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case ADD_PRODUCT_TO_WISHLIST:
            return { ...state, [action.payload.id] : action.payload };
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return _.omit(state, action.payload.id);
        default:
            return state;
    }
};