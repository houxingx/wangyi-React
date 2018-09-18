import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

//创建store并将store暴露出去
const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk)))

export default store