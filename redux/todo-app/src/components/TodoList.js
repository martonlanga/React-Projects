import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';

const TodoList = ({
  filteredTodos,
  actions
}) =>
  <ul className='main__todo-list'>
    {filteredTodos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
        completeTodo={actions.completeTodo}
      />))
    }
  </ul>;

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};

export default TodoList;
