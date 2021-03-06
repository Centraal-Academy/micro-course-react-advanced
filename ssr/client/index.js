import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const appContainer = document.getElementById('app-container')

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  appContainer
)
