import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// action은 redux의 두번째 인자이다.

const countModifier = (count = 0, action) => {
  console.log(count, action);

  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

// dispatch 를 하면 reducer 에 액션(메세지)를 보낼 수 있다.
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });

console.log(countStore.getState());
