let gameseq = [];
let userseq = [];
let highestscore = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h4 = document.querySelector("h4");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
}
function checkAns(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
            }
    }
    else {
        highestscore.push(level);
        let highest = 0;
        for (let i = 0; i < highestscore.length; i++) {
            if (highestscore[i] > highest) {
                highest = highestscore[i];
            }
            else {
                highest = highest;
            }
        }
        h4.innerHTML = `Game Over!!Your Score was <b>${level}</b> <br>Your highest score till now is<b> ${highest}</b> <br> Press any key to start... `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

    function btnPress() {
        
        let btn = this;
        console.log(this);
        userFlash(btn);
        userColor = this.getAttribute("id");
        userseq.push(userColor);
        checkAns(userseq.length - 1);
    }
    function reset() {
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;
    }
    
    let allbtns = document.querySelectorAll(".btn");
    for (btn of allbtns) {
        btn.addEventListener("click", btnPress);
    }

