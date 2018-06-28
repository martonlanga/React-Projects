import * as types from '../constants/ActionTypes';

export const addTodo = (text) => ({type: types.ADD_TODO, text});
export const deleteTodo = (id) => ({type: types.DELETE_TODO, id});
export const editTodo = (id, text) => ({type: types.ADD_TODO, id, text});
export const completeTodo = (id) => ({type: types.ADD_TODO, id});
export const completeAllTodos = () => ({type: types.ADD_TODO});
export const clearCompleted = () => ({type: types.ADD_TODO});
export const setVisibilityFilter = (filter) => ({type: types.ADD_TODO, filter});
