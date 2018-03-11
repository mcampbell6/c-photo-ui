import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header.js'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<div>
  <Header/>
  <App />
  </div>, document.getElementById('root'))
registerServiceWorker()
