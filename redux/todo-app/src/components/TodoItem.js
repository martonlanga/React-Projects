import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSVG from 'react-svg';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  state = {
    editing: false,
    value: this.props.todo.text
  };

  onChange = (e) => {
    this.setState({
      editing: true,
      value: e.target.value
    });
  };

  handleSave = () => {
    const id = this.props.todo.id;
    const text = this.state.value;
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({editing: false});
  };

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;
    return (
      <li
        className={classnames({
          'main__todo': true,
          'main__todo--completed': todo.completed,
          'main__todo--editing': this.state.editing
        })}
      >
        <button
          className='button main__todo--toggle'
          onClick={() => completeTodo(todo.id)}
        >
          <ReactSVG path='../assets/done.svg' />
        </button>
        <input
          className='main__todo--input'
          value={this.state.value}
          onChange={(e) => this.onChange(e)}
          onBlur={this.handleSave}
        />
        <button
          className='button main__todo--delete'
          onClick={() => deleteTodo(todo.id)}
        >
          <ReactSVG path='../assets/clear.svg' />
        </button>
      </li>
    );
  }
}
