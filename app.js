let gameSeq =[];
let userSeq = [];

let randomSeq = ['yellow', 'purple', 'green', 'red'];
let started = false;
let level = 0;

let h3 = document.querySelector('h3');
document.addEventListener('keypress', function(){
    if(started == false){
        console.log('game started');
        started = true;

        levelUp();
    }    
});

function levelUp(){
    userSeq =[];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = randomSeq[randomIdx];
    gameSeq.push(randomColor)
    console.log(gameSeq);
    let randomBtn = document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
}
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        h3.innerText = `Game Over! Your score is ${level}.\n Press any key to start.`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout( function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150)
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    gameSeq =[];
    userSeq =[];
    level =0;
    started = false;
}