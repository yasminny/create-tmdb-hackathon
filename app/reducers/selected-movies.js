const initialData = [];

export default function selectedMoviesReducer(data = initialData, action) {
  if (action.type === 'SET_SELECTED_MOVIES') {
    return action.data;
  }

  return data;
}

