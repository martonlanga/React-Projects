import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    text: 'It works',
    completed: true
  },
  {
    id: 1,
    text: 'Heey',
    completed: false
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];
    case DELETE_TODO:
      return;
    case EDIT_TODO:
      return;
    case COMPLETE_TODO:
      return;
    case COMPLETE_ALL_TODOS:
      return;
    case CLEAR_COMPLETED:
      return;
    default:
      return state;
  }
};

export default todos;
