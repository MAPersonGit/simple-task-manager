import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {taskListApp, initialState} from './reducers/taskReducers';


const persistConfig = {
    key: 'portfolio',
    whitelist: ['user'],
}

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any }
}


export default function configureStore(): any {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = applyMiddleware(thunk);

    const store = createStore(
        taskListApp,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    return {store};
}