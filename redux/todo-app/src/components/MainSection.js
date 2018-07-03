import React from 'react';
import PropTypes from 'prop-types';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const MainSection = ({
  todosCount,
  completedCount,
  visibilityFilter,
  actions}) =>
  <main className='main'>
    <VisibleTodoList />
    {
      !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          clearCompleted={actions.clearCompleted}
          setVisibilityFilter={actions.setVisibilityFilter}
          visibilityFilter={visibilityFilter}
        />
    }
  </main>;

export default MainSection;

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
