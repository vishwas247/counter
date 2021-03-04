import reducer from './count'
import createSagaMiddleware from 'redux-saga'
import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'

const sagaMiddleWare = createSagaMiddleware()
export default function () {
    return configureStore({
         reducer,
         middleware:[
              ...getDefaultMiddleware(),
              //sagaMiddleWare
         ]
    })
}