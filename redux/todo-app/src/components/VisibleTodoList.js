import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import toggleTodo from '../actions/toggleTodoAction';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
};

const mapStateToTodoProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToTodoProps = (dispatch) => {
  return {
    onTodoClick: id =>
      dispatch(toggleTodo(id))
  };
};
const VisibleTodoList = connect(
  mapStateToTodoProps,
  mapDispatchToTodoProps
)(TodoList);

export default VisibleTodoList;
