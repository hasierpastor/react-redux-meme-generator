import { ADD, REMOVE } from './actionTypes';
export function add(meme) {
  return { type: ADD, meme };
}

export function remove(id) {
  return { type: REMOVE, id };
}
