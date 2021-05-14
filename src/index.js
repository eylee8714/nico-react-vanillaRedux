import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// action은 redux의 두번째 인자이다.

const countModifier = (count = 0, action) => {
  // console.log(count, action);

  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};
const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};

// 한번에 함수로 적는방법(동일한코드이다.)
// add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
// minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
