// import { createStore, combineReducers } from 'redux';
// import { reducer } from './contacts/contacts-reducers';

// const rootReducer = combineReducers({ contacts: reducer });
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;

////////////////////////////////////////////////////////////////////////////
import { configureStore } from '@reduxjs/toolkit';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './contacts/contacts-reducers';

// const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
