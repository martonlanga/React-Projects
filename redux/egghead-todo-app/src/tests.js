// import expect from 'expect';
// import deepfreeze from 'deepfreeze';

/* TEST
const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };

  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false,
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: false,
  }];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };

  deepfreeze(stateBefore);
  deepfreeze(action);

  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false,
  },
  {
    id: 1,
    text: 'Go shopping',
    completed: true,
  }];

  deepfreeze(stateBefore);
  deepfreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log('All tests passed.');
*/
