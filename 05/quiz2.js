var $board = document.getElementById("board");
let chessboard = 16;
let str = '';
let boardcolor = 'black';

for(var i=0; i<4; i++){
    str+='<span class="'+boardcolor+'"></span>';
    for(var j=0; j<3; j++){
            if(boardcolor==='black'){
                boardcolor='white';
                str+='<span class="'+boardcolor+'"></span>';
            }else{
                boardcolor='black';
                str+='<span class="'+boardcolor+'"></span>';
            }
        $board.innerHTML=str; 
    }
}


var $boards = document.querySelectorAll('span');
let change = '';
let $select = null;

function select(event){
    if($select){
        $select.className=$select.className.replace('change','');
    }

    let evn = event.currentTarget;
    evn.className+=' change';
    $select=evn;

}

for(var i=0; i<$boards.length; i++){
    $boards[i].addEventListener('click', select);
}



/*
for(var i=0; i<chessboard; i++){
    if(i%4===0){
        str+='<span class="'+boardcolor+'"></span>';
    }else{
        if(boardcolor==='black'){
            boardcolor='white';
            str+='<span class="'+boardcolor+'"></span>';
        }else{
            boardcolor='black';
            str+='<span class="'+boardcolor+'"></span>';
        }
    }
    $board.innerHTML=str; 
}
*/