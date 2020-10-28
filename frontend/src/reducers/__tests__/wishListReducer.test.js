import wishListReducer from '../wishListReducer';
import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST, FETCH_WISHLIST } from '../../actions/types';

it ('handles actions of type ADD_PRODUCT_TO_WISHLIST', () => {
    const action = {
        type: ADD_PRODUCT_TO_WISHLIST,
        payload:     {
            "id": "FW6399",
            "name": "Sudamericana Low",
            "price": "79.95",
            "imgUrl": "5.jpg"
        }
    };

    const newState = wishListReducer([], action);

    expect (newState["FW6399"]).toEqual( {
        "id": "FW6399",
        "name": "Sudamericana Low",
        "price": "79.95",
        "imgUrl": "5.jpg"
    });
});

it ('handles actions of type REMOVE_PRODUCT_FROM_WISHLIST', () => {
    const action = {
        type: REMOVE_PRODUCT_FROM_WISHLIST,
        payload:  {
            "id": "FW6399",
            "name": "Sudamericana Low",
            "price": "79.95",
            "imgUrl": "5.jpg"
        }
    };

    const newState = wishListReducer({ "FW6399": {
        "id": "FW6399",
        "name": "Sudamericana Low",
        "price": "79.95",
        "imgUrl": "5.jpg"
    }}, action);

    expect (newState).toEqual({});
});

it ('handles actions of type FETCH_WISHLIST', () => {
    const action = {
        type: FETCH_WISHLIST,
        payload: [
            {
                "id": "EG4958",
                "name": "Zuperstar",
                "price": "99.95",
                "imgUrl": "1.jpg"
            }
        ]
    };

    const newState = wishListReducer({}, action);

    expect (newState["EG4958"]).toEqual(
        {
            "id": "EG4958",
            "name": "Zuperstar",
            "price": "99.95",
            "imgUrl": "1.jpg"
        }
    );
});

