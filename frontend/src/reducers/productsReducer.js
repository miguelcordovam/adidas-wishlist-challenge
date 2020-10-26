import {
    FETCH_PRODUCTS, SIGN_OUT
} from '../actions/types';

import _ from 'lodash';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_PRODUCTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case SIGN_OUT:
            return {};
        default:
            return state;
    }
};