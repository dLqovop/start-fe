const print99 = document.getElementById('btn');
const addresult = document.getElementById('result');
let check = /^[0-9]+$/;
print99.addEventListener('click', function(){
    let inputvalue = document.getElementById('num').value;
    if(!check.test(inputvalue)){
        alert('숫자를 입력해주세요');
    }else{
        template(inputvalue);
    }
});

function template(val){
    addresult.innerHTML = '';
    let temp = 0;
    for(let i=1; i<10; i++){
        temp = val*i;
        addresult.innerHTML+=`${val} X ${i} = ${temp}<br>`;
    }
}