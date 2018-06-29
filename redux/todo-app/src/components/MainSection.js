import React from 'react';
import PropTypes from 'prop-types';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const MainSection = ({todosCount, completedCount, actions}) =>
  <section className='main'>
    <VisibleTodoList />
    {
      !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          clearCompleted={actions.clearCompleted}
        />
    }
  </section>;

export default MainSection;
