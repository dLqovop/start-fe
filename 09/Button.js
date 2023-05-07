function createButton({ text = '', onClick }) {
  const $Btn = document.createElement('button');
  $Btn.textContent = text;
  $Btn.addEventListener('click', onClick);
  return $Btn;
}

export default Button;
