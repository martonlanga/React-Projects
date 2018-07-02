import React from 'react';
import PropTypes from 'prop-types';

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
    let className = todo.completed ? 'todo--completed' : '';
    className = this.state.editing ? ' todo--editing' : '';
    return (
      <li
        className={'todo__item ' + className}
      >
        <div className='todo__view'>
          <input
            className='todo__checkbox'
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <input
            className='todo__input'
            value={this.state.value}
            onChange={(e) => this.onChange(e)}
            onBlur={this.handleSave}
          />
          <button
            className='todo__destroy'
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </li>
    );
  }
}
