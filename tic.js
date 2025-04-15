let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-Btn");
let newGameBtn=document.querySelector("#new-Btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turnO=true;//playerX, playerY

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    winSound.pause();
    winSound.currentTime = 0;
    drawSound.pause();
    drawSound.currentTime = 0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        
        if(turnO){
            //player 0
            box.innerText="O";
            oSound.play(); 
            turnO=false;
        }else{
            //player x
            box.innerText="X";
            xSound.play(); 
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const winSound = new Audio("romantic-love-8-march-195029.mp3");
const oSound = new Audio("pop-up-something-160353.mp3");
const xSound = new Audio("new-message-31-183617.mp3");
const drawSound = new Audio("cartoon-trombone-sound-effect-241387.mp3");

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    winSound.play();

    // ✅ Yeh 2 line PHP ko winner bhejti hai
    document.getElementById("winnerInput").value = winner;
    document.getElementById("saveForm").submit();

    const balloons = document.querySelector(".balloons");
    balloons.classList.remove("hide");

    const cloned = balloons.cloneNode(true);
    balloons.parentNode.replaceChild(cloned, balloons);

    setTimeout(() => {
        cloned.classList.add("hide");
    }, 3000);
};






const showDraw = () => {
    msg.innerText = "It's a draw! You both are losers";
    msgContainer.classList.remove("hide");
    disableBoxes();
    drawSound.play();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner " + pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }

    let allFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        showDraw();
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

