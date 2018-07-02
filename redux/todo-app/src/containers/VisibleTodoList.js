import VisibleTodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constants/TodoFilters';

const getVisibleTodos = state => {
  switch (state.visibilityFilter) {
    case SHOW_ALL:
      return state.todos;
    case SHOW_ACTIVE:
      return state.todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return state.todos.filter(todo => todo.completed);
    default:
      return state;
  }
};

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
