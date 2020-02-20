import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {reducer} from './redux/reducer'

import App from './App'

const store = createStore(reducer);


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)