import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import thunk from 'redux-thunk'
import {users} from '../reducers'
import persistState from 'redux-localstorage'


const enhancer = compose(
    applyMiddleware(thunk),
    persistState(),
)

const rootReducer = combineReducers({
    users,
    routing
})

const configureStore = () => createStore(
    rootReducer,
    enhancer
)

export default configureStore