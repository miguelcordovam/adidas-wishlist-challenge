import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Root from './Root';

ReactDOM.render(
    <Root>
        <App />
    </Root>, 
    document.querySelector('#root')
);