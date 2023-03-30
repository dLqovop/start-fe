const title = 'jeju';
const url =
  'https://daum.net/  \
역슬래시 하나 주면 엔터칠 수 있음' + title;
const url2 = `https://daum.net/${title}` //따옴표가 아니라 어퍼스트로피

console.log(url, url2);

//기본 매개변수는 값이 안들어올 때 지정해줄 수 있음.
function sum(x, y = 0) {
    //if (!y) y=0;
  return x + y;
}

console.log(sum(10));



const result = [1,2,3].map( item => item +1);
console.log(result);

function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];
const [x,y,z]=[...numbers];
console.log(x,y,z);
////////////////////////////////////////////


//객체 구조분해 할당/ es5에서는 어떤 변순지 알수 없음 es6에서는 분리하여 보여줌

//es5
const obj = {team:1, area:2};
const team = obj.team;
const area = obj.area;

//es6
const{team1, area1} = obj;

//향상된 객체 표현식
const number = 1;
const objj={
    //number: number; 과거
}


