import React from "react";
import './index.css'
import './styles/icons/icons.css'
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom';


import {createStore} from 'redux'
import {Provider} from 'react-redux'

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";


const store=createStore(rootReducers,composeWithDevTools())

ReactDOM.render(
  <Provider  store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
