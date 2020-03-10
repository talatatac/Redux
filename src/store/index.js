import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';



//React Redux tool kullanımı için eklendi.
// redux-devtools-extension
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;



// MiddleWare için eklendi.


const middlewares = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

const combinedReducers = combineReducers({...reducers});

const store = createStore(combinedReducers, enhancer)


export default store;

window.store = store;
