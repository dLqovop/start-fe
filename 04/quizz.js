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

let total = 0;

var numbers = point1.concat(point2);

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
const items1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;
let temp = [];

for(var i=pageSize-1; i>=0; i--){
    temp.push(items1[i]);
}
for(var i=0; i<pageSize; i++){
    console.log(temp.pop());
}

// items1.forEach(function(asdf){
//     for(var i=0; i<pageSize; i++){
//         console.log(temp =asdf );
//     }
// })
//출력: a,b,c---d,e,f---g,h,i---j