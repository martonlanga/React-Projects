import PropTypes from 'prop-types';
import React from 'react';
import TodoTextInput from '../components/TodoTextInput';
import ReactSVG from 'react-svg';
import UndoRedo from '../containers/UndoRedo';

const Header = ({addTodo, completeAllTodos}) => (
  <header className='header'>
    <button
      className='button header__toggle'
      onClick={completeAllTodos}
    >
      <ReactSVG path='../assets/done_all.svg' />
    </button>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder='Heey'
    />
    <UndoRedo />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired,
};

export default Header;
