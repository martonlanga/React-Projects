import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  static propTypes = {
    newTodo: PropTypes.bool,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string,
    editing: PropTypes.bool
  };

  state = {
    text: this.props.text || ''
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.which === 13) {
      this.props.onSave(this.state.text); // == e.target.value.trim
      if (this.props.newTodo) {
        this.setState({text: ''});
      }
    }
  };

  onBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text);
    }
  };

  render () {
    return (
      <input
        className={classnames({
          'header__input': true,
          'header__input--edit': this.props.editing,
          'header__input--new-todo': this.props.newTodo
        }) }
        type='text'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        onBlur={this.onBlur}
        placeholder={this.props.placeholder}
        autoFocus='true'
      />
    );
  }
}
