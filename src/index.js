import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {reduxStore} from './reduxStore'
import Header from './components/header/header.js'
import './index.css'
import getRoutes from './routes'
import registerServiceWorker from './registerServiceWorker'
import {PersistGate} from 'redux-persist/integration/react'

async function init() {
  const storeObj = reduxStore.setupStore()

  ReactDOM.render(
    <Provider store={storeObj.store}>
    <PersistGate loading={null} persistor={storeObj.persistor}>
      <Header/>
      <div className="page">
        {getRoutes()}
      </div>
      </PersistGate>
    </Provider>,
    document.getElementById('root'))

    registerServiceWorker()
}

init()
