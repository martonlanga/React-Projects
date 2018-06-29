import React from 'react';
import PropTypes from 'prop-types';

const VisibleTodoList = ({
  todos
}) =>
  <ul>
    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>;

export default VisibleTodoList;
