import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker'
import './style/index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
// registerServiceWorker()
