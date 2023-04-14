// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력
const id = 'hello';
const pw = 'world';
const h2 = document.getElementById('result');

const form = document.querySelector('button');

form.addEventListener(
  'click',
  (e) => {
    e.preventDefault();
    const inputid = document.getElementsByName('id')[0].value; //input name으로 값 가져오는 경우 배열값 필수로 넣어줘야 함.
    const inputpw = document.getElementsByName('pw')[0].value; //input class로 값 가져오는 경우에도 배열 인덱스 필수
    checkIdPw(inputid, inputpw);
  },
  true
);

function checkIdPw(inputid, inputpw) {
  if (inputid === id && inputpw === pw) {
    h2.classList.add('success');
    h2.innerHTML = 'SUCCESS!!!!!!!!!!!!!!!';
  } else {
    h2.classList.add('error');
    h2.innerHTML = 'ERROR.';
  }
}
