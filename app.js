let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetBtn");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");


let turnO =true; //playerX, playerO
let count = 0;
//storing the winning patterns
const WinnPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
     console.log("Button was clicked");
     if(turnO){
        box.innerText="O";
        turnO=false;
     }
     else{
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     count++;
     let isWinner = checkWinner();
     if(count===9 && !isWinner){
      gameDraw();
     }
    });
});

const gameDraw = () =>{
    msg.innerText =`Game was drawn`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const showWinner = (winner) =>{
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}
const enableBoxes=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
}

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const checkWinner = () => {
    for(let patterns of WinnPattern){
        let pos1= boxes[patterns[0]].innerText;
        let pos2= boxes[patterns[1]].innerText;
        let pos3= boxes[patterns[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
    };

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);