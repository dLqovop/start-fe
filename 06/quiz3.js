
//아 이거 과제 아님 아~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const addred = document.querySelector('.add-red');
let box = document.querySelector('.box');

const addbtn = document.querySelector('.add-btn');
const deletebtn = document.querySelector('.delete-btn');
const resetbtn = document.querySelector('.reset-btn');
const textbtn = document.querySelector('.text-btn');
const image = document.querySelector('.image-btn');

const togglebtn = document.querySelector('.toggle-btn');
let isToggle = true;

const startred =  event=>{
    box.classList.add('red'); //빨간색으로
};

const takebox = event=>{
    const addboxdiv = document.createElement('div');
    addboxdiv.className=box.className;
    box.appendChild(addboxdiv); //box list 내용에 따라 새로운 box 생성

    reset(addboxdiv);

    text(addboxdiv);
};

function reset(addboxdiv){
    resetbtn.addEventListener("click", event=>{
        box.classList.remove('red'); //처음 모양으로 초기화
        if(addboxdiv){
            addboxdiv.remove(); //생성했던 box들 모두 초기화
        }
      });
}
function text (addboxdiv){
    textbtn.addEventListener('click', event =>{
        const text = document.querySelector('.txt').value;
        addboxdiv.innerHTML=text;
        
    });
}


const deletebox = event=>{
    const boxes = document.querySelectorAll('.box > div');
    const lastBox = boxes[boxes.length-1];
    if (lastBox) {
      lastBox.remove();
    }
  };

  const toggle = event=>{
    if(isToggle){
        box.style.display = "none";
        isToggle=false;
    }else{
        box.style.display="block";
        isToggle=true;
    }
};

function addEvent(){
    addred.addEventListener('click', startred);
    addbtn.addEventListener('click', takebox);
    deletebtn.addEventListener('click', deletebox);
    reset();
    togglebtn.addEventListener('click', toggle);
}

function boxquiz(){
    addEvent();
}

addEvent();


image.addEventListener("click", event=>{
    var img = document.createElement('img'); 
    img.src = 'https://i.imgur.com/69NjYBH.png'; 
	box.appendChild(img);
});