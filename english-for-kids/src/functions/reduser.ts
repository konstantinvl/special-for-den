import { Action } from '@reduxjs/toolkit';

export function reducer(state = { value: 'TRAIN' }, action: Action) {
  switch (action.type) {
    case 'GAME':
      return { value: 'GAME' };
    case 'TRAIN':
      return { value: 'TRAIN' };
    default:
      return state;
  }
}
