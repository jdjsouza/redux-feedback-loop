import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedbackInitialState = [];

// collect the HomePage answer about feelings
const feelingReducer = (state = feedbackInitialState, action) => {
  if (action.type === 'ADD_FEELING') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const understandingReducer = (state = feedbackInitialState, action) => {
  if (action.type === 'ADD_UNDERSTANDING') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const supportReducer = (state = feedbackInitialState, action) => {
  if (action.type === 'ADD_SUPPORT') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
