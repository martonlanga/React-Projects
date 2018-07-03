import { connect } from 'react-redux';
import { addTodo, completeAllTodos } from '../actions';
import Header from '../components/Header';

export default connect(null, {addTodo, completeAllTodos})(Header);
