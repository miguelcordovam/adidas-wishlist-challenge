import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { loadState, saveState } from  './localStorage';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, {...persistedState},
    composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store = {store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
    </Provider>, 
    document.querySelector('#root')
);