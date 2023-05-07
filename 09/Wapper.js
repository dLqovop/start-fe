function CreateCountWrapper({ count = 0, className = '' }) {
  const setCount = (count) => {
    $count.textContent = count;
  };

  const $count = document.createElement('div');
  $count.classList.add(className);
  $count.textContent = count;

  return { $count, setCount };
}

export default Wapper;
