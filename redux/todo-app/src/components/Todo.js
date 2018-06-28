import React from 'react';

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li onClick={onClick}>
    {completed ? <strike>{text}</strike> : text}
  </li>
);

export default Todo;
