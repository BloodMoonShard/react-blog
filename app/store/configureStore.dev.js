import {createStore, combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {articles} from '../reducers'

const rootReducer = combineReducers({
    articles,
    routing
})

const configureStore = () => createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore