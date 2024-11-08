let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let Winner = document.querySelector(".winner");
let message = document.querySelector(".message");
let turnO = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];
    

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(box.innerText === ""){
                if(turnO){
                    box.innerText ="O";
                    boxColor();
                    turnO = false;
                }
                else{
                    box.innerText ="X";
                    turnO = true;
                }
            winnerCheck();
            }          
        });
    }); 

    
 
    const showWinner=(winner)=>{
        Winner.innerHTML=`congratulations , ${winner}`;
        message.classList.remove("hide");
       
    };
let winnerCheck=()=>{
    for(let pattern of winningPattern){
       /*  console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,//pos1
            boxes[pattern[1]].innerText,//pos2
            boxes[pattern[2]]//pos3); */

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1=== pos2 && pos2=== pos3){
                showWinner(pos1);
                for(let box of boxes){
                    box.disabled = true;
                }
            }
            else{
                Winner.innerText="Match drawn";
            }
        }
    }
};

let enabled =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const resetGame =()=>{
    turnO=true;
    enabled();
    message.classList.add("hide");
}


resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);

/*const drawMatch =()=>{
    idx=0;
    for(let box of boxes){
        if(pos1!= pos2 && pos2!= pos3){
            Winner.innerText="Match Drawn";
        }
        idx++;
    }
} */

const boxColor=()=>{
    idx=0;
    for(let box of boxes){
        if(box.innerText== "O"){
            box.style.color="white";
        }
        else{
            box.style.color="red";
        }
    idx++;
    }
}