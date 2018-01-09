import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './containers/App/App.js';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools, applyMiddleware(thunk, logger));
// const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
const route = (
  <Provider store = {store}>
    <BrowserRouter>
    	<App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
