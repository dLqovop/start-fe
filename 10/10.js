/*
const count = document.getElementsByClassName('count')[0];
const plus = document.querySelector('button');
const minus = document.querySelectorAll('button')[1];
let value = 0;

count.innerHTML = value;

plus.addEventListener('click', (event) => {
  if (value < 5) {
    value++;
    count.innerHTML = value;
  }
});
minus.addEventListener('click', (event) => {
  if (value > 0) {
    value--;
    count.innerHTML = value;
  }
});

//아 이게 아니구나..
*/
import Button from './Button.js';
import Wrapper from './Wrapper.js';

const $root = document.querySelector('#root');

let count = 0;
function plus() {
  console.log('plus');
  // ++count;
  // document.querySelector('.count').textContent = ++count;
  setCount(++count);
}

function minus() {
  console.log('minus');
  // --count;
  // document.querySelector('.count').textContent = --count;
  setCount(--count);
}

const $plusButton = Button({ text: 'plus', onClick: plus });
const $minusButton = Button({ text: 'minus', onClick: minus });
const { $wrapper: $countWrapper, setText: setCount } = Wrapper({
  text: 0,
  className: 'count',
});

$root.append($countWrapper, $plusButton, $minusButton);

// import Button from './Button.js';
// import wapper from './Wapper.js';

// const $root = document.querySelector('#root');

// let count = 0;
// function plus() {
//   console.log('plus');
//   //   document.querySelector('.count').textContent = ++count;
//   setCount(++count);
// }
// function minus() {
//   console.log('minus');

//   //   document.querySelector('.count').textContent = --count;
//   setCount(--count);
// }
// const $plusButton = createButton({ text: 'plus', onClick: plus });
// const $minusButton = createButton({ text: 'minus', onClick: minus });
// // $count = CreateCountWrapper({ count: 0, className: 'count' });
// const { $count, serCount } = CreateCountWrapper({
//   count: 0,
//   className: 'count',
// });

// $root.append($count, $plusButton, $minusButton);
