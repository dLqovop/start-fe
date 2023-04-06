const $board = document.getElementById('board');
const WHITE_COLOR ='white';
const BLACK_COLOR = 'black';

function createBoard(startcolor){
    // const $board = document.createElement('div');
    // $board.classNmae = 'White';

    const div = `<div class=" ${startcolor} "></div>`
    return div;
}

function createRow(count=4,startcolor){
    let row = '';
    let color = '';
    for(let i =0; i<count; i++){
        if(i%2===0){
            color = startcolor === WHITE_COLOR ? BLACK_COLOR : WHITE_COLOR; 
        }
        row += createBoard(startcolor);
    }
}

function createChessBoard(count=4){
    let board='';
    for(let i =0; i<count; i++){
        const startcolor =i%2=== 0 ? 'white' : 'black'; 
        board +=createRow(startcolor);
    }
    board += createRow(4, 'white');
    board += createRow(4, 'black');
    board += createRow(4, 'white');
    board += createRow(4, 'black');
    return board;
}

let $prevTarget = '';
$board.addEventListener('click', event =>{
    console.log(event.target);
    const $target = event.target;
    $target.classList.add('red');

    $prevTarget && $prevTarget.classLIst.remove('red');
    $prevTarget = $target;
});

$board.innerHTML