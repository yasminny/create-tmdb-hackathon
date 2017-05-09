import { createStore, combineReducers } from 'redux';

import movies from './reducers/movies';
import selectedMovies from './reducers/selected-movies';

const reducer = combineReducers({
  movies,
  selectedMovies
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
