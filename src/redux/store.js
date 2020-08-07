import {
  createStore,
  applyMiddleware
} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root.reducer'

import { fetchCollectionsStart } from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)