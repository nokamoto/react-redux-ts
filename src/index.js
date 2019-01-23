import './index.css';
import { counterApp } from './reducers/counter';
import { createStore } from 'redux';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { App } from './components/App';

const store = createStore(counterApp)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
