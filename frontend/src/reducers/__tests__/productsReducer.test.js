import productsReducer from '../productsReducer';
import { FETCH_PRODUCTS } from '../../actions/types';

it ('handles actions of type FETCH_PRODUCTS', () => {
    const action = {
        type: FETCH_PRODUCTS,
        payload: [
            {
                "id": "H68725",
                "name": "Air Force 800",
                "price": "88.95",
                "imgUrl": "12.jpg"
            },
            {
                "id": "FV0039",
                "name": "Chancla Sanddilette",
                "price": "34.95",
                "imgUrl": "6.jpg"
            }
        ]
    };

    const newState = productsReducer({}, action);

    expect (newState['FV0039']).toEqual({
        "id": "FV0039",
        "name": "Chancla Sanddilette",
        "price": "34.95",
        "imgUrl": "6.jpg"
    });

    expect (newState['H68725']).toEqual({
        "id": "H68725",
        "name": "Air Force 800",
        "price": "88.95",
        "imgUrl": "12.jpg"
    });
});

