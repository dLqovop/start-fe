/*
 긴글 주석은 /** 쳐주면 자동으로 나옴.
 */

//변수선언
var title = 'abc';

console.log(title);

//////////////////데이터타입

//Number
var count=5;
//String
var count ="5";
console.log(count);

var count ='AJ';
var nick ="AJ";

var isMan = true;

var log=function(str){
    console.log(str);
};
log(nick)

var image={alt: 'test'}; //오브젝트를 놓고 설정도 한번에 할 수 있다.

image.width=100;//해당 이미지 오브젝트의 속성이다. 해당 이미지 오브젝트의 값이다.
image.height=100;

console.log(image);
console.log(image.width);
console.log(image['width'])//대괄호로도 호출할 수 있는데 안엔 문자열로 사용

image=['1.jpg','2.jpg'];
console.log(image, image.length, nick); //,을 찍으면 변수를 쭉쭉 출력해볼 수 있음.

image[0]='3.jpg';
image[3]='4.jpg';
console.log(image);

var nice='';//null보다는 초기화 이렇게 함.
var title=-1;//또는 이렇게
var abc=null; //true false null

var a;
var b='undefined';
console.log(b);
console.log(a, b);

//////////배열

var arr=[1,2,3,4,5];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
};

