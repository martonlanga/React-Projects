import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {children, onChange, value, onSubmit} = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input
          type='text'
          onChange={onChange}
          value={value}
          ref={(node) => {this.input = node;}}
        />
        <button type='submit'>
          {children}
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
};

export default Search;
