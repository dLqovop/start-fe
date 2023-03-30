console.log('05');

const wrap = document.getElementById('wrap');
console.log(wrap);
const item = document.querySelector('.item'); //무조건 하나만 가져옴 id보다는 얘나
const item2 = document.querySelector('#warp > .item'); // item이 자식인
console.log(item);


//all은 전체를 갖져옴
const elements =  document.querySelectorAll('div'); //얘를 많이 사용
console.log(elements);


const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div);

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
//document.querySelector('#debug').appendChild(span);


const text = '<span>hello</span>'; 
//document.querySelector('#debug').innerHTML = text;


const el = document.getElementById('div1');
//el.remove();

const list = document.getElementById('list'); 
//list.removeChild(list.children[0]);

//<body onload="alert(1)">
//안 쓰는 이유 : 코드랑 html이랑 분리되어야 관리하기 편하기 때문


/*
//DOM 레벨2
window.addEventListener('load', function(){
    alert("load");
});
이제는 이렇게 이벤트를 줌

*/

//DOM 레벨2
window.addEventListener('load', function(){
    alert("window load event1");
});

window.addEventListener('click', function(){ //클릭했을 때 이벤트
    alert("window load event2");
});



/*
event.stopPropagation(); // 이벤트 전파 중지

event.preventDefault(); // 기본 행동 중지

*/