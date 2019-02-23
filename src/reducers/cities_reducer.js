// src/reducers/cities_reducer.js

export default function(state, action) {
  if (state === undefined) { return []; }

  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    case 'SET_ACTIVE_CITY':
      return [action.payload];
    default:
      return state;
  }
}
