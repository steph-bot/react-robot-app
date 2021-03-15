import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {createStore} from 'redux';
import allReducers from './redux/reducers';
import {Provider} from 'react-redux';

// STORE => GLOBALIZED STATE

// ACTION (describes what you want to do)
// ex: increment()
// actions are functions that return an object

/*
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
*/

// REDUCER (describe how your actions transform the state into the next state )
// checks which action you did and updates the store accordingly

/*
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}
*/

const store  = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Display in Console
store.subscribe(() => console.log(store.getState()));

// DISPATCH (the way we actually execute the action)
// send action to reducer, reducer does what it needs to do, and sends to store
/*
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
