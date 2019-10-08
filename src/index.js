import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// router / 아래 안적어도 동작 하긴 하는데...?
import {BrowserRouter} from 'react-router-dom';
// dotenv
import dotenv from 'dotenv';
// global css
import './assets/global.scss';
// redux
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import store from './stores';
// redux-saga
import createSagaMiddlware from 'redux-saga';
import rootEffect from './sagas';
const sagaMiddleware = createSagaMiddlware();

const rootStore = createStore(store, applyMiddleware(sagaMiddleware));

// saga run
sagaMiddleware.run(rootEffect);

dotenv.config();

ReactDOM.render(
    <Provider store={rootStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
