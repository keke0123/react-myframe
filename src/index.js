import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// router / 아래 안적어도 동작 하긴 하는데...?
import {BrowserRouter} from 'react-router-dom';
// redux
// redux-saga
// dotenv
import dotenv from 'dotenv';
dotenv.config();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
