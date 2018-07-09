import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';
import undoable, {distinctState} from 'redux-undo';

const initialState = [
  {
    id: 0,
    text: 'Learn React',
    completed: true
  },
  {
    id: 1,
    text: 'Get a job',
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
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
        {...todo, text: action.text}
        : todo);
    case COMPLETE_TODO:
      return state.map(todo => todo.id === action.id ?
        {...todo, completed: !todo.completed}
        : todo);
    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({...todo, completed: !areAllMarked}));
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const undoableTodos = undoable(todos, {
  filter: distinctState()
});

export default undoableTodos;
