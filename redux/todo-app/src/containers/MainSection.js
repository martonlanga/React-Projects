import MainSection from '../components/MainSection';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions';

const mapStateToProps = (state) => ({
    todosCount: state.todos.present.length,
    completedCount: state.todos.present.reduce((count, todo) =>
                      todo.completed ? count + 1 : count,
                      0
                    ),
    visibilityFilter: state.visibilityFilter
  });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
