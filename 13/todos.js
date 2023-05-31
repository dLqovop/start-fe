// DOM 요소 가져오기
const todoForm = document.querySelector('.new-task');
const todoInput = document.querySelector('.new-task input');
const todoList = document.querySelector('ul');
const deleteButtons = document.querySelectorAll('.delete');

// 폼 제출에 이벤트 리스너 추가하기
todoForm.addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 제출 방지

  const inputValue = todoInput.value.trim(); // 입력값 공백 제거

  if (inputValue !== '') {
    // 새로운 Todo 아이템 생성하기
    const newTodo = document.createElement('li');
    newTodo.innerHTML = `
      <button class="delete">×</button>
      <input type="checkbox" class="toggle-checked" />
      <span class="text">${inputValue}</span>
    `;
    // 삭제 버튼에 이벤트 리스너 추가하기
    const deleteButton = newTodo.querySelector('.delete');
    deleteButton.addEventListener('click', function () {
      newTodo.remove(); // 리스트에서 Todo 아이템 제거하기
    });

    // 새로운 Todo 아이템을 리스트에 추가하기
    todoList.appendChild(newTodo);

    // 입력 필드 비우기
    todoInput.value = '';
  }
});
