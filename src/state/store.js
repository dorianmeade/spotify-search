import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import artistsReducer from '../reducers/artists'
import albumReducer from '../reducers/albums'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// sets global state
export const store = createStore(
    combineReducers({
        albums: albumReducer, 
        artists: artistsReducer
    }), 
    composeEnhancers(applyMiddleware(thunk))
);

