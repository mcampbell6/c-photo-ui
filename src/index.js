import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {reduxStore} from './ReduxStore'
import Header from './components/header/Header'
import './index.css'
import getRoutes from './Routes'
import {PersistGate} from 'redux-persist/integration/react'

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
