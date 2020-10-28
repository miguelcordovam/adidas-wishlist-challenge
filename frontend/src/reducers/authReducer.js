import {SIGN_IN, SIGN_OUT} from '../actions/types';
import { ACCESS_TOKEN } from '../constants';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true};
        case SIGN_OUT:
            localStorage.removeItem(ACCESS_TOKEN);
            return {...state, isSignedIn: false};
        default: 
            return state;
    }
};