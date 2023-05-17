import openModal from './modal.js';

$btn.addEventListener('click', () => {
  openModal({
    text: '모달입니다.',
  });
});
