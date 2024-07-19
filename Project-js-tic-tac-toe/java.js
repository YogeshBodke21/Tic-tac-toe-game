
let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let msg = document.querySelector('.win-msg');
let newbtn = document.querySelector('.new-btn')
let upperMsg = document.querySelector('.msg-info');




let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            // console.log('O');
            box.innerHTML = 'O';
            turn0 = false;
        } else {
            // console.log('X');
            box.innerHTML = 'X';
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner){
            gamedraw();
        }

    });
});

const resetGame = () => {
    for (b of boxes){
        b.disabled = false;
        b.innerHTML = '';
        count = 0 ;
        upperMsg.classList.add('hide');
        
    }
}

const gamedraw = () =>{
    msg.innerHTML = `Match is Draw..!!`;
    upperMsg.classList.remove('hide');
    disableBox();

}

const disableBox = () => {
     for (let b of boxes){
        b.disabled = true;
     }
}


const showWinner = (winner) =>{
    msg.innerHTML = `Congratulation, Winner is ${winner} !!` ;
    upperMsg.classList.remove('hide');
    disableBox();
    
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerHTML
        let pos2val = boxes[pattern[1]].innerHTML
        let pos3val = boxes[pattern[2]].innerHTML

        if (pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`Winner is ${pos1val}`);
                showWinner(pos1val);
                return true;
            }
        }
    }
};

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);