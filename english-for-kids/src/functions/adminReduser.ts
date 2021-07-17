import { Action } from '@reduxjs/toolkit';

export function adminReducer(state = { value: 'TRAIN' }, action: Action) {
  switch (action.type) {
    case 'IN':
      return { value: 'IN' };
    case 'OUT':
      return { value: 'OUT' };
    default:
      return state;
  }
}
