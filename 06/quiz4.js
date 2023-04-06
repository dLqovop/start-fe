// const $box = document.getElementById("box");
let $box = null;

let x =0; let y =0; let isDown = false;

const startdrag = event =>{
    isDown=true;
    $box = event.target; // 이벤트가 발생한 요소를 $box 변수에 저장합니다.
};

const drag = event=>{
    if(isDown===true){

        x = event.clientX;
        y = event.clientY;
        console.log(event);

        $box.style.left = `${x-50}px`;
        $box.style.top = `${y-50}px`;
    }
};

const stopDrag = event =>{
    isDown=false;
    $box = null; // 이벤트가 종료되면 $box 변수를 null로 초기화합니다.
};

function addEvent(box){
    box.addEventListener("mousemove",drag);
    box.addEventListener("mouseup", stopDrag);
}

function init(){
    document.querySelectorAll('#box').forEach($box =>{
        $box.addEventListener('mousedown', startdrag);
        addEvent($box); // "box" 요소를 찾아 이벤트를 등록합니다.
    });
}

init();



// $box.addEventListener('mousedown', ()=>{
//     isDown=true;
// });

// $box.addEventListener("mouseup", ()=>{
//     isDown=false;
// });

// $box.addEventListener("mousemove", (event)=>{
//     if(isDown===true){
//         x = event.clientX;
//         y = event.clientY;
//         $box.style.left = `${x-50}px`;
//         $box.style.top = `${y-50}px`;
//     }
// });

//-----------------------------------------------------------

//코드의 재사용성 박스가 무제한 늘어나도 코드 수정 없이 계속 동작할 수 있도록.