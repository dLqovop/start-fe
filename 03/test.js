// console.log('test.js');

// const a  = 'a';
// console.log(a);
// a='1'; //여기서 오류남. const라서 상수에 변수 재할당이 안됨.
// console.log(a);

const todos = ["운동"];
const todo = "공부";
todos.push(todo);
console.log(todos);

//reset
todos.forEach(function (todo) {
  console.log(todo);
});

const updateTodo = "공부";
// const updateIndex = todos.findIndex(function(todo){
//     return todo===updateTodo;
// });
// todo[updateIndex]='게임'
// console.log(todos);

////

const newTodos = todos.map(function (todo) {
  if (todo === updateTodo) {
    return "게임";
  }
  return todo;
});

console.log(newTodos); // 운동,공부를 운동,게임으로 변경

var a = 1;
var b = a;
b = 2;
console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

// 참조 reference
var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b);

// window 하위의 메소드
alert("alert");

// var who = prompt("당신은 누구세요?"); //결과 스트링으로 반환
// var isDelete = confirm("정말 삭제합니까?"); //true or false
// var enc = encodeURIComponent("카카오"); // url에서 표시될 수 없는 문자들을 인코딩
// var enc = encodeURIComponent("%EC%B9%B4%EC%B9%B4%EC%98%A4"); //결과: 카카오

// isNaN("1"); // 숫자면 false 문자면 true

//setTimeout 은 시간 이후 한번만 실행
//setInterval 은 시간 마다 계속 실행

// function test() {
//   console.log("test()");
// }

//var id = setTimeout(test, 1000); //1초후 1번실행

//var id = setInterval(test, 1000); //1초마다 계속 실행

// var nick = "aji"; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age); //결과 aji 30
// }

// test();
// console.log(age); //결과 error defined

//Hoisting 끌어올린다.

var name = "global";
function test() {
  console.log(name);
  var name = "local";
  console.log(name);
} // 함수 호출이 없어 console.log 결과가 콘솔창에 뜨지 않음.

//함수또한
test2();
function test2() {
  console.log("test");
}

//함수 제일 중요한 데이터타입
//javascript 함수는 다른 함수 내에 중첩되어 정의도 가능
//메서드(method) : 어떤 객체의 속성으로 저장된 javascript 함수

/*
객체를 전달인자로 사용할 수 있음. 객체가 데이터타입이라 가능함
따라서 전달 인자가 많을 경우 유용

global function 에서의 this는 window
method,constructor에서 this 는 오브젝트

해당 문맥의 this를 가리킴.

*/
