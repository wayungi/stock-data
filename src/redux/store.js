/** @format */

import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import gamesReducer, { actionLeagues } from './reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

store.dispatch(actionLeagues());

export { store };
export default rootReducer;
