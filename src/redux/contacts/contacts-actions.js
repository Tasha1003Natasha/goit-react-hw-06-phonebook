// import { ADD, DELETE, FILTER } from './contacts-types';
// import { nanoid } from 'nanoid';

// export const addUser = user => ({
//   type: ADD,
//   payload: { ...user, id: nanoid() },
// });
// export const deleteUser = id => ({ type: DELETE, payload: id });
// export const filterUser = value => ({ type: FILTER, payload: value });
///////////////////////////////////////////////////////////////
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const deleteUser = createAction('contacts/delete');
export const filterUser = createAction('contacts/filter');
export const addUser = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
