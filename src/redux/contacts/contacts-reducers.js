// import { ADD, DELETE, FILTER } from './contacts-types';
// import { combineReducers } from 'redux';

// const itemReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(el => el.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   items: itemReducer,
//   filter: filterReducer,
// });

/////////////////////////////////////////////////////////////////////////////////////
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addUser, deleteUser, filterUser } from './contacts-actions';

export const itemReducer = createReducer([], {
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) => state.filter(el => el.id !== payload),
});

export const filterReducer = createReducer('', {
  [filterUser]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
