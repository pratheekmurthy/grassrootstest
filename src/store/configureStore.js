import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logReducer,accountsReducer} from '../reducers/logreducer'


// assigning reducer
const root = {
    log :logReducer,
    accounts :accountsReducer
}

//configuring store
const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore