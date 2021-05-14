import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//여기서는 countModifier가 reducer 이다.
//count를 increase 하거나 decrease한다.
//return 하는 것이 data가 될것이다.
const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
