import { ADD, REMOVE } from './actionTypes';
const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === ADD) {
    return { memes: [...state.memes, action.meme] };
  }

  if (action.type === REMOVE) {
    let newMemes = state.memes.filter(meme => {
      return meme.id !== action.id;
    });
    return { meme: newMemes };
  }
  return state;
}

export default rootReducer;
