import {applyMiddleware, createStore, compose} from 'redux'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducers from './Reducers'
import {routerMiddleware} from 'react-router-redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reduxReset from 'redux-reset'

class ReduxStore {
  store
  persistor
  constructor() {
    this.store = null
    this.persistor = null
  }
  setupStore() {
    const middleware = [thunk, routerMiddleware(createBrowserHistory)]

    if (window.location.hostname.indexOf('localhost') > -1 ){
      middleware.push(createLogger())
    }

    const persistConfig = {
      key: 'root',
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducers)

    const store = createStore(persistedReducer, compose(
      reduxReset(),
      applyMiddleware(...middleware)
    ))
    const persistor = persistStore(store)
    return { store, persistor }
  }


  resetStore() {
    this.store.dispatch({type: 'RESET'})
    this.persistor.purge()
  }
}

export let reduxStore = new ReduxStore()
