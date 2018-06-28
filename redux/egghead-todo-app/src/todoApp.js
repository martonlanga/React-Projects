import { createStore } from 'redux';
import { Provider, connect} from 'react-redux';
import todoApp from './reducers/rootReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer  />
    </div>
  );
};

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp  />
  </Provider>,
  document.getElementById('root')
);
