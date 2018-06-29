import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({
  filteredTodos,
  actions
}) =>
  <ul>
    {filteredTodos.map(todo => <li key={todo.id}>{todo.text}</li>)}
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
