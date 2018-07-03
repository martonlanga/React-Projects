import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import classnames from 'classnames';
import React from 'react';
import ReactSVG from 'react-svg';

let UndoRedo = ({
  canUndo,
  canRedo,
  onUndo,
  onRedo
}) => (
  <div className='header__timetravel'>
    <button
      className={classnames({
        'button': true,
        'button--disabled': !canUndo
      })}
      onClick={onUndo}
    >
      <ReactSVG path='../assets/undo.svg' />
    </button>
    <button
      className={classnames({
        'button': true,
        'button--disabled': !canRedo
      })}
      onClick={onRedo}
    >
      <ReactSVG path='../assets/redo.svg' />
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  };
};

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export default UndoRedo;
