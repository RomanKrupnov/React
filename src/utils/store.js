import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from './../reducers';
import middlewares from '../middlewares';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer'],
};
export const history = createBrowserHistory();
function initStore() {
    const initialStore = {};

    return createStore(
        initReducers(history),
        initialStore,
        compose(
            applyMiddleware(routerMiddleware(history),...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),


        );
}

export default initStore;