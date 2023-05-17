function Button({ text = '', onClick }) {
  const $btn = document.createElement('button');
  $btn.textContent = text;
  $btn.addEventListener('click', onClick);

  return $btn;
}

export default Button;

// function createButton({ text = '', onClick }) {
//   const $Btn = document.createElement('button');
//   $Btn.textContent = text;
//   $Btn.addEventListener('click', onClick);
//   return $Btn;
// }

// export default Button;
