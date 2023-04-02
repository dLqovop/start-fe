//1

const year = 2022;
const month = 11;
const day = 3;

day2 = String(day).padStart(2,0);
month2 = String(month).padStart(2,0);

const dateString = year +'-'+month2+'-'+ day2;

console.log(dateString);

//출력 : 2022-11-3 이거 03으로 만들어야함.

//2
const dateString2 = "2022-12-12";
const a = dateString2.slice(0,4);
const b = dateString2.slice(5,7);
const c = dateString2.slice(8,10);

const arr = [a, b, c];
console.log(arr);

//출력 : ['2022', '12', '12']


//3
const texts = "나는 XX를 좋아해";
const item = "JS";
const re = texts.replace('XX', item);
console.log(re);

//출력 : 나는 JS를 좋아해

//4
const text = "안녕하세요. 나는 사람입니다.";
const searchText = '사람';

const result = text.includes(searchText);
console.log(result);
// 출력: true

//5
//point3 = [1,2,3]이 추가되었을 때 대응할 수 있는 코드
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

const point3 = [ 1, 2, 3];
let total = 0;

var numbers = [];

if(point3){
  numbers = point1.concat(point2);  
  numbers = point3.concat(numbers);
}else{
  numbers = point1.concat(point2);
}


for(var i=0; i<numbers.length; i++){
    total += numbers[i];
};
console.log(total);
//출력: 373




//6
const a1 = 1.2;
const b1 = 3.4;

console.log(parseInt(a1)+parseInt(b1));
//출력 : 4

//7
const min = 1;
const max = 10;
var jsrandom = Math.random();

console.log(Math.floor(Math.random()*max)+min); 
//출력: 1~10

//8
const target = 10;
const num = 3;

console.log(target%num===0);
// 출력: false

//9
const nick = "kakao";
console.log(nick.toUpperCase());
//출력 : KAKAO

//10
//typeof(null) 하면 object 나오는 버그 있음.
const items = [ 1, "a", true, ["a"], { n: 1 }];
let array = [];

for(var i=0; i<items.length ;i++){
    if(typeof items[i] !=='object' && items[i]!==null ){
        array.push(items[i]);
    }
}console.log(array);

//출력: [1,'a',true]

//----------------------------------------------------------------------------

//11
const items11 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize11 = 3;

let temp = "";
for (let i = 0; i < items11.length; i++) {
  temp += items11[i]; //items1의 배열을 temp 스트링으로 연결하는 도중
  if (i !== items11.length - 1) { //마지막 전 인덱스 까지만 동작
    if ((i + 1) % pageSize11 === 0) { //만약 현재 진행중인 인덱스 다음 인덱스가 3(pagesize)의 배수일 경우
      temp += "---"; // --- 출력
    } else { //그게 아니면 , 출력
      temp += ",";
    }
  }
}
console.log(temp);
//출력: a,b,c---d,e,f---g,h,i---j


//replace("/---/"g,'---') // g는 gloval 전체에 /사이에 있는 문자를 오른쪽?? 

//정규표현식

//12
const items12 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize12 = 3;
let temp12 = [];
let items2print = '';

for(let i=0; i<items12.length; i+=pageSize12){
  temp12.push((items12.slice(i,i+pageSize12)));
}
items2print+='[ ';
  for(let i=0; i<temp12.length; i++){
    if(i!=0){
      items2print+=', [';
    }else{
      items2print+='[';
    }
    items2print+=temp12[i];
    items2print+=']';
  }
items2print+=' ]';

console.log(items2print);


//출력 : [ [a,b,c], [d,e,f], [g,h,i], [j] ]


//13
const items13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize13 = 3;

const getStartIndexByPage = function (page) {
  let count13=1;
  for(let i=0; i<items13.length; i+=pageSize13){
    if(count13===page){
      console.log(i);
      break;
    }else{
      count13++;
    }
  }
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6


//14
const phoneNumber = `010-1234-1234`;

const phone=/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
//자바스크립트 정규표현식: 특정 패턴의 문자열을 찾기 위한 표현방식, 형식언어(Formal Language)라고도함
// 010, 016, 017, 018, 019 검사
// 0~9사이 숫자 중 3 또는 4자리 검사
// 0~9사이 숫자 중 4자리 검사
console.log(phone.test(phoneNumber));
//자바스크립트의 test()함수를 사용하여 문자열이 정규 표현식을 만족하는지 판별하여 true/ flase 반환 

// 출력: true

//15
const user = { nick: "nio", age: 20, location: "제주" };

user.age=21;
document.write(user.age);

user.name = '부산';
document.write(user.name);

delete user.location; //제주 삭제

console.log(user);

// 출력: {nick:'nio', age:21, name:'부산'}


//16

const text16 = '{"a":1, "b":2}'; // 원래 코드 => "{a:1, b:2}"
const object16 = JSON.parse(text16);
console.log(object16);

// 출력: {a:1 , b:2}

//17
const user17 = { nick: "nio", age: 20, location: "제주" };

const string17 = JSON.stringify(user17);

console.log(typeof(string17), string17);

// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

//18
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const itemfilter = items18.filter(el=>el%2===0);
console.log(itemfilter);
// 출력: 짝수만 [2,4,6,8,10]

//19
const list = [
  {
    id: 1,
    title: "JS",
    isPublic: true, //0, 012
  },
  {
    id: 2,
    title: "기본",
    isPublic: true, //1, 012
  },
  {
    id: 3,
    title: "ecma",
    isPublic: true, //2, 012
  },
  {
    id: 4,
    title: "dom",
    isPublic: false, //3,012
  },
];
let temp19=[];
let listfilter = list.filter(function(el){
  if(el.isPublic===true){
    temp19.push(el.title);
  }
});
console.log(temp19);

// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기


//20.다음일 구하기
const dday = "2022-02-02";
const newday = dday.split('-');
newday[2]=Number(newday[2])+1;
newday[2]=String(newday[2]).padStart(2,0);

console.log(newday.join('-'));

// 출력: '2022-02-03'