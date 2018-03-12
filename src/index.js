import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header/header.js'
import './index.css'
import getRoutes from './routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<div>
  <Header/>
  <div className="page">
  {getRoutes()}
  </div>
  </div>, document.getElementById('root'))
registerServiceWorker()
