import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import configureFirebase from './core/configure-firebase';
import * as serviceWorker from './service-worker';

configureFirebase();

ReactDOM.render(<App />, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
