import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Redux Setup
import {store} from './store';
import {Provider} from 'react-redux';

//Styled-Components Setup
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from "./style";

//Routes Setup
import Routes from './routes'
import {login} from "./store/actions/loginAction";

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(login(token))
}


ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Routes/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
