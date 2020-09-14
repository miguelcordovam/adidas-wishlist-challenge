import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { adidasThemeDark } from './theme/src/theme';
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
        <MuiThemeProvider theme={adidasThemeDark}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </MuiThemeProvider>
    </Provider>, 
    document.querySelector('#root')
);