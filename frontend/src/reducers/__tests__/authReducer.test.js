import authReducer from '../authReducer';
import { SIGN_IN, SIGN_OUT} from '../../actions/types';

it ('handles actions of type SIGN_IN', () => {
    const action = {
        type: SIGN_IN,
        payload: true
    };

    const newState = authReducer([], action);

    expect (newState.isSignedIn).toEqual(true);
});

it ('handles actions of type SIGN_OUT', () => {
    const action = {
        type: SIGN_OUT,
        payload: true
    };

    const newState = authReducer([], action);

    expect (newState.isSignedIn).toEqual(false);
});