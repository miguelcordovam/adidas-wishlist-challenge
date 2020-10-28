import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import { loadState, saveState } from  './localStorage';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
    reducers, {...persistedState},
    composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default props => {
    return (
        <Provider store = {store}>
            <React.StrictMode>
                {props.children}
            </React.StrictMode>
        </Provider>     
    );
};