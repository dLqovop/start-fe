// var cp = '블로그-블로그-만들기-블로그의-종류별';
// var cp2 = '-그리고-가입하는-방법-1';
// var url = 'https://curiousknowledgesf.tistory.com/entry/\
// 블로그-블로그-만들기-블로그의-종류별\
// 티스토리-네이버-구글-추천' +cp2 ;
// console.log(url);

// //es6
// const url2 = `https://curiousknowledgesf.tistory.com/entry/\
// ${cp}\
// 티스토리-네이버-구글-추천\
// ${cp2}`;
// console.log(url2);

// //es5
// const arr = [1,2,3].map(function (item) {
//     return item*item;
// });
// console.log(arr);


// //es6
// const array = [1, 2, 3].map(item => item * item);
// console.log(array);


//es5
const x1 = [1, 2, 3, 4, 5];
const a1=x1[0];
const b1=x1[1];
const c1=x1[2];
const d1=x1[3];
const e1=x1[4];
console.log(a1+b1+c1+d1+e1);

//es6
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
const [a, b, c, d, e] = x;
console.log(y);
console.log(z);
console.log(a+b+c+d+e);