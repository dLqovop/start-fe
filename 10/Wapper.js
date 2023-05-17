function Wrapper({ text = 0, className = '' }) {
  const setText = text => {
    $wrapper.textContent = text;
  };

  const $wrapper = document.createElement('div');
  $wrapper.classList.add(className);
  $wrapper.textContent = text;

  return { $wrapper, setText };
}

export default Wrapper;

// function CreateCountWrapper({ count = 0, className = '' }) {
//   const setCount = (count) => {
//     $count.textContent = count;
//   };

//   const $count = document.createElement('div');
//   $count.classList.add(className);
//   $count.textContent = count;

//   return { $count, setCount };
// }

// export default Wapper;
