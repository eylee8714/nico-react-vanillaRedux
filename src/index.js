import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

// 오타를 빨리 찾기위해서, 스트링 대신에 이렇게 쓴다.
const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

// 한번에 함수로 적는방법(동일한코드이다.)
// add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
// minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
