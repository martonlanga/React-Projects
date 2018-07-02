import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoTextInput from '../components/TodoTextInput';
import { addTodo, completeAllTodos } from '../actions';

export const Header = ({addTodo, completeAllTodos}) => (
  <header className='header'>
    <h1>TODOS</h1>
    <button
      className='toggle-all'
      onClick={completeAllTodos}
    />
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder='Learn Redux'
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

export default connect(null, {addTodo, completeAllTodos})(Header);
