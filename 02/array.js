/////////////배열
// var words=['a','b','c'];
// console.log(words.pop(), words); //pop() stack처럼 뒷부분 값 삭제하며 해당 값 출력
// words.push('d');
// console.log(words);

// console.log(words.join('-'));
// //join은 하나의 문자열로 묶어 출력 join('-')이면 a-b-c
// console.log(words);

// /**해당 원본이 변경될 수 있는 명령어는 조심해서 사용. pop이나 push 같은거 */

// var num=[1,2,3];
// cole.log(words.concat(num));// 기존 배열에 합쳐 새 배열을 반환 'a','b','c',1,2,3

const words=['a','b','c'];
// const newWords = words.unshift('z');
console.log(words.unshift('z')); //unshift 새로운 요소를 배열 맨 앞쪽에 추가, 새로운 길이 반환
console.log(words);

console.log(words.slice(2)); //2번 배열부터 반환 원본배열 영향x
console.log(words.slice(0,2));//i부터 j-1까지 반환 원본배열 영향x
console.log(words);

// console.log(words.splice(0,2)); //삭제,교체,추가하여 배열 내용 변경
// console.log(words);//결과 b,c 원본배열 영향 ㅇ

words.forEach(function(words,i){
    console.log(words,i);
});

var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords);

//콜백에서 주어지는 조건에 맞는 애들만 새로운 배열로 모아줌
//특정 특징만 가진 값들을 뽑을 수 있음.

var nums=[1,2,3,4,5]
// var newWords=[];
// for(var i=0; i<nums; i++){
//     if(words[i]>=3){
//         newWords.push(nums[i]); //다시확인
//     }
// }

// var newNums = nums.filter(function(num){
//     return false; // true=>[1,2,3,4,5] false=>[]
// });

var newNums = nums.filter(function(num){
    return num>=3; //3,4,5
  })
  .map(function(num){  //3,4,5에 10씩 더하여 출력
    return num+10; // 13,14,15
  });


  console.log(newNums);