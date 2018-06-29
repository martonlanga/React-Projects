import MainSection from '../components/MainSection';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions';

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: state.todos.reduce((count, todo) =>
                    todo.completed ? count + 1 : count,
                    0
                  )
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
