let turns=0;
let boxno;
let bid;
let x=0;
let y=0;
let p1=[];
let p2=[];
let p1w=false;
let p2w=false;
let gameon=true;
let isturn=true;
let elt;
const btn=document.getElementById('btn');
const msg=document.getElementById('vm');
let icon=document.getElementById('icon');
let playericon=document.getElementById('p1i');
const victory=document.getElementById('victory');
const gameover=document.getElementById('gameover');
const movex=document.getElementById('movex');
const moveo=document.getElementById('moveo');
const change=document.getElementById('change');
const clock=document.getElementById('clock');
const go=document.getElementById('go');
const laugh=document.getElementById('robolaugh');
const bgm=document.getElementById('bg');
bgm.volume=0.5;


function sound() {
    if (gameon) {
        clock.play();
        setTimeout(sound,clock.duration-750);
    }
}

window.onload = function() {
    sound();
};


btn.addEventListener("click",function(){
    location.reload()
});

function makeMove(box){
    elt=document.getElementById(box);
    if(turns%2==0&&elt.innerHTML===""&&gameon){
        movex.play();
    elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
    p1[x]=parseInt(box[1]);
    console.log(p1);
    x++;
    turns++;
    document.querySelector('.column1').classList.remove("active-con");
    document.querySelector('.column3').classList.add("active-con");
    }
    else if(turns%2==1&&elt.innerHTML===""&&gameon){
        
        moveo.play();
        elt.innerHTML=`<i class="fa-regular fa-circle" id="circle"></i>`;
        p2[y]=parseInt(box[1]);
        console.log(p2);
        y++;
        turns++;
        document.querySelector('.column3').classList.remove("active-con");
        document.querySelector('.column1').classList.add("active-con");
    }
        if(x>=3){
                if(p1.indexOf(1)>=0&&p1.indexOf(2)>=0&&p1.indexOf(3)>=0)
                    p1w=true;
                if(p1.indexOf(4)>=0&&p1.indexOf(5)>=0&&p1.indexOf(6)>=0)
                    p1w=true;
                if(p1.indexOf(7)>=0&&p1.indexOf(8)>=0&&p1.indexOf(9)>=0)
                    p1w=true;
                if(p1.indexOf(1)>=0&&p1.indexOf(4)>=0&&p1.indexOf(7)>=0)
                    p1w=true;
                if(p1.indexOf(2)>=0&&p1.indexOf(5)>=0&&p1.indexOf(8)>=0)
                    p1w=true;
                if(p1.indexOf(3)>=0&&p1.indexOf(6)>=0&&p1.indexOf(9)>=0)
                    p1w=true;
                if(p1.indexOf(1)>=0&&p1.indexOf(5)>=0&&p1.indexOf(9)>=0)
                    p1w=true;
                if(p1.indexOf(3)>=0&&p1.indexOf(5)>=0&&p1.indexOf(7)>=0)
                    p1w=true;
        }

        if(y>=3){
            if(p2.indexOf(1)>=0&&p2.indexOf(2)>=0&&p2.indexOf(3)>=0)
                p2w=true;
            if(p2.indexOf(4)>=0&&p2.indexOf(5)>=0&&p2.indexOf(6)>=0)
                p2w=true;
            if(p2.indexOf(7)>=0&&p2.indexOf(8)>=0&&p2.indexOf(9)>=0)
                p2w=true;
            if(p2.indexOf(1)>=0&&p2.indexOf(4)>=0&&p2.indexOf(7)>=0)
                p2w=true;
            if(p2.indexOf(2)>=0&&p2.indexOf(5)>=0&&p2.indexOf(8)>=0)
                p2w=true;
            if(p2.indexOf(3)>=0&&p2.indexOf(6)>=0&&p2.indexOf(9)>=0)
                p2w=true;
            if(p2.indexOf(1)>=0&&p2.indexOf(5)>=0&&p2.indexOf(9)>=0)
                p2w=true;
            if(p2.indexOf(3)>=0&&p2.indexOf(5)>=0&&p2.indexOf(7)>=0)
                p2w=true;
    }
    if(p1w){
        let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
        gameon=false;
        victory.play();
        console.log("Player-1 Wins");
        msg.textContent="Player 1 wins!";
        document.querySelector('.viccon').classList.add("visible");
    }
    if(p2w){
        let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
        victory.play();
        gameon=false;
        console.log("Player-2 Wins");
        msg.textContent="Player 2 wins!";
        document.querySelector('.viccon').classList.add("visible");
    }
    if(turns==9&&p1w==false&&p2w==false){
        let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
        gameover.play();
        gameon=false;
        console.log("Draw");
        icon.classList.replace("fa-crown", "fa-scale-balanced");
        msg.textContent="Draw!";
        document.querySelector('.viccon').classList.add("visible");
}
}

function show(){
    document.querySelector('.viccon').classList.remove("visible");
}

function gameModeSelect(mode){
    p1=[];
    p2=[];
    x=0;
    y=0;
    turns=0;
    p1w=false;
    p2w=false;
    gameon=true;
    isturn=true;
    sound();
    bgm.pause();
    bgm.currentTime=0;
    document.getElementById('easy').classList.add("active-diff");
    document.getElementById('hard').classList.remove("active-diff");
    document.getElementById('easy').style.backgroundColor= "#0f3460";
    document.getElementById('hard').style.backgroundColor= "#1a1a2e";
    playericon.classList.replace("bi","fa-solid");
    playericon.classList.replace("bi-robot","fa-robot");
    icon.classList.replace("fa-scale-balanced", "fa-crown");
    icon.classList.replace("fa-circle-exclamation", "fa-crown");
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    for(let i=1;i<=9;i++)
    {
        let box="b"+i;
        elt=document.getElementById(box);
        elt.innerHTML="";
        console.log(elt.innerHTML);
    }
    change.play();
    if(mode=="player"){
        document.querySelector('.diffbutt').style.display="none";
        document.querySelector('.column1').classList.add("active-con");
        document.getElementById('p1').textContent="Player 1";
        playericon.classList.replace("fa-robot", "fa-user");
        document.getElementById('p2').textContent="Player 2";
        document.getElementById('player').classList.add("active-mode");
        document.getElementById('robot').classList.remove("active-mode");
    }
    else if(mode=="robot"){
        document.querySelector('.diffbutt').style.display="inline-block";
        document.querySelector('.column3').classList.add("active-con");
        document.getElementById('p1').textContent="Robot";
        playericon.classList.replace("fa-user", "fa-robot");
        document.getElementById('p2').textContent="Player";
        document.getElementById('robot').classList.add("active-mode");
        document.getElementById('player').classList.remove("active-mode");
    }
    
}

function roboGame(box){
    elt=document.getElementById(box);
    console.log(elt);
    if(elt.innerHTML===""&&gameon&&isturn){
        moveo.play();
    elt.innerHTML=`<i class="fa-regular fa-circle" id="circle"></i>`;
    p1[x]=parseInt(box[1]);
    console.log(p1);
    x++;
    turns++;
    isturn=false;
    document.querySelector('.column3').classList.remove("active-con");
    document.querySelector('.column1').classList.add("active-con");
        if(x>=3){
            if(p1.indexOf(1)>=0&&p1.indexOf(2)>=0&&p1.indexOf(3)>=0)
                p1w=true;
            if(p1.indexOf(4)>=0&&p1.indexOf(5)>=0&&p1.indexOf(6)>=0)
                p1w=true;
            if(p1.indexOf(7)>=0&&p1.indexOf(8)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(1)>=0&&p1.indexOf(4)>=0&&p1.indexOf(7)>=0)
                p1w=true;
            if(p1.indexOf(2)>=0&&p1.indexOf(5)>=0&&p1.indexOf(8)>=0)
                p1w=true;
            if(p1.indexOf(3)>=0&&p1.indexOf(6)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(1)>=0&&p1.indexOf(5)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(3)>=0&&p1.indexOf(5)>=0&&p1.indexOf(7)>=0)
                p1w=true;
    }

    if(y>=3){
        if(p2.indexOf(1)>=0&&p2.indexOf(2)>=0&&p2.indexOf(3)>=0)
            p2w=true;
        if(p2.indexOf(4)>=0&&p2.indexOf(5)>=0&&p2.indexOf(6)>=0)
            p2w=true;
        if(p2.indexOf(7)>=0&&p2.indexOf(8)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(1)>=0&&p2.indexOf(4)>=0&&p2.indexOf(7)>=0)
            p2w=true;
        if(p2.indexOf(2)>=0&&p2.indexOf(5)>=0&&p2.indexOf(8)>=0)
            p2w=true;
        if(p2.indexOf(3)>=0&&p2.indexOf(6)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(1)>=0&&p2.indexOf(5)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(3)>=0&&p2.indexOf(5)>=0&&p2.indexOf(7)>=0)
            p2w=true;
}
if(p1w){
    victory.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Player Wins");
    msg.textContent="Player wins!";
    document.querySelector('.viccon').classList.add("visible");
}
if(p2w){
    gameover.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Robot Wins");
    msg.textContent="Robot wins!";
    icon.classList.replace("fa-crown", "fa-circle-exclamation");
    document.querySelector('.viccon').classList.add("visible");
}
if(turns==9&&p1w==false&&p2w==false){
    gameover.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Draw");
    icon.classList.replace("fa-crown", "fa-scale-balanced");
    msg.textContent="Draw!";
    document.querySelector('.viccon').classList.add("visible");
}
if(gameon){
    setTimeout(()=>{
        boxno=Math.ceil(Math.random()*9);
    bid="b"+boxno;
    let robmove=document.getElementById(bid);
    while(robmove.innerHTML!=""&&turns<9&&gameon)
    {
        boxno=Math.ceil(Math.random()*9);
        bid="b"+boxno;
        robmove=document.getElementById(bid);
    }
        movex.play();
        robmove.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
        p2[y]=boxno;
        console.log(p2);
        y++;
        turns++;
        isturn=true;
        if(x>=3){
            if(p1.indexOf(1)>=0&&p1.indexOf(2)>=0&&p1.indexOf(3)>=0)
                p1w=true;
            if(p1.indexOf(4)>=0&&p1.indexOf(5)>=0&&p1.indexOf(6)>=0)
                p1w=true;
            if(p1.indexOf(7)>=0&&p1.indexOf(8)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(1)>=0&&p1.indexOf(4)>=0&&p1.indexOf(7)>=0)
                p1w=true;
            if(p1.indexOf(2)>=0&&p1.indexOf(5)>=0&&p1.indexOf(8)>=0)
                p1w=true;
            if(p1.indexOf(3)>=0&&p1.indexOf(6)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(1)>=0&&p1.indexOf(5)>=0&&p1.indexOf(9)>=0)
                p1w=true;
            if(p1.indexOf(3)>=0&&p1.indexOf(5)>=0&&p1.indexOf(7)>=0)
                p1w=true;
    }

    if(y>=3){
        if(p2.indexOf(1)>=0&&p2.indexOf(2)>=0&&p2.indexOf(3)>=0)
            p2w=true;
        if(p2.indexOf(4)>=0&&p2.indexOf(5)>=0&&p2.indexOf(6)>=0)
            p2w=true;
        if(p2.indexOf(7)>=0&&p2.indexOf(8)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(1)>=0&&p2.indexOf(4)>=0&&p2.indexOf(7)>=0)
            p2w=true;
        if(p2.indexOf(2)>=0&&p2.indexOf(5)>=0&&p2.indexOf(8)>=0)
            p2w=true;
        if(p2.indexOf(3)>=0&&p2.indexOf(6)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(1)>=0&&p2.indexOf(5)>=0&&p2.indexOf(9)>=0)
            p2w=true;
        if(p2.indexOf(3)>=0&&p2.indexOf(5)>=0&&p2.indexOf(7)>=0)
            p2w=true;
}
if(p1w){
    victory.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Player Wins");
    msg.textContent="Player wins!";
    document.querySelector('.viccon').classList.add("visible");
}
if(p2w){
    gameover.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Robot Wins");
    msg.textContent="Robot wins!";
    icon.classList.replace("fa-crown", "fa-circle-exclamation");
    document.querySelector('.viccon').classList.add("visible");
}
if(turns==9&&p1w==false&&p2w==false){
    gameover.play();
    let element = document.querySelector('.active-con');
        if (element) {
            element.classList.remove("active-con");
        }
    gameon=false;
    console.log("Draw");
    icon.classList.replace("fa-crown", "fa-scale-balanced");
    msg.textContent="Draw!";
    document.querySelector('.viccon').classList.add("visible");
}
        document.querySelector('.column1').classList.remove("active-con");
        document.querySelector('.column3').classList.add("active-con");

    },2000*Math.random());
    
    }
}
  
}


function game(box){
    let current=document.querySelector('.active-mode');
    let currentid=current.id;
    let diffic=document.querySelector('.active-diff');
    let difficid=diffic.id;
    console.log(currentid);
    if(currentid=="player")
        makeMove(box);
    else if(currentid=="robot"&&difficid=="easy")
        roboGame(box);
    else if(currentid=="robot"&&difficid=="hard")
        roboGameHard(box);
}

function setDifficulty(diff){
    p1=[];
    p2=[];
    x=0;
    y=0;
    turns=0;
    p1w=false;
    p2w=false;
    gameon=true;
    isturn=true;
    bgm.pause();
    bgm.currentTime=0;
    for(let i=1;i<=9;i++)
        {
            let box="b"+i;
            elt=document.getElementById(box);
            elt.innerHTML="";
            console.log(elt.innerHTML);
        }
    icon.classList.replace("fa-scale-balanced", "fa-crown");
    icon.classList.replace("fa-circle-exclamation", "fa-crown");
    if(diff=="easy"){
        bgm.pause();
        bgm.currentTime=0;
        laugh.play();
        playericon.classList.replace("bi","fa-solid");
        playericon.classList.replace("bi-robot","fa-robot");
        document.getElementById('easy').classList.add("active-diff");
        document.getElementById('hard').classList.remove("active-diff");
        document.getElementById('easy').style.backgroundColor= "#0f3460";
        document.getElementById('hard').style.backgroundColor= "#1a1a2e";
    }
    else if(diff=="hard"){
        go.play();
        playericon.classList.replace("fa-solid", "bi");
        playericon.classList.replace("fa-robot", "bi-robot");
        document.getElementById('hard').classList.add("active-diff");
        document.getElementById('easy').classList.remove("active-diff");
        document.getElementById('hard').style.backgroundColor= "#0f3460";
        document.getElementById('easy').style.backgroundColor= "#1a1a2e";
        elt=document.getElementById('b1');
        document.querySelector('.column3').classList.remove("active-con");
        document.querySelector('.column1').classList.add("active-con");
        isturn=false;
        setTimeout(()=>{
            bgm.play();
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            movex.play();
            document.querySelector('.column1').classList.remove("active-con");
        document.querySelector('.column3').classList.add("active-con");
        isturn=true;
        },1500);

        
    }
}


function roboGameHard(box){
    elt=document.getElementById(box);
    if(elt.innerHTML==""&&turns%2==0&&isturn){
        elt.innerHTML=`<i class="fa-regular fa-circle" id="circle"></i>`;
        moveo.play();
        console.log(elt.innerHTML);
        turns++;
        document.querySelector('.column3').classList.remove("active-con");
        document.querySelector('.column1').classList.add("active-con");
    }
    let n=parseInt(box[1]);
    isturn=false;
    setTimeout(()=>{
    if((n==4||n==6||n==8||n==5||n==9||n==7)&&turns==1)
    {
        elt=document.getElementById("b"+3);
        elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
        turns++;
    }
    else if((n==2||n==3)&&turns==1)
    {
        elt=document.getElementById("b"+7);
        elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
        turns++;
    }
    else if(turns==3&&document.querySelector("#b7 i.fa-xmark")&&(document.querySelector("#b2 i.fa-circle")||document.querySelector("#b3 i.fa-circle"))){
        if(n==4){
            elt=document.getElementById("b"+9);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            elt=document.getElementById("b"+4);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
            p2w=true;
        }
    }
    else if(turns==3&&document.querySelector("#b3 i.fa-xmark")&&(document.querySelector("#b6 i.fa-circle")||document.querySelector("#b8 i.fa-circle")||document.querySelector("#b9 i.fa-circle"))){
        if(document.querySelector("#b8 i.fa-circle")){
            if(n==2){
            elt=document.getElementById("b"+5);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
            }
            else{
            p2w=true;
            elt=document.getElementById("b"+2);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
            }
        }
        else{
        if(n==2){
            elt=document.getElementById("b"+7);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+2);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    }
    else if(turns==3&&document.querySelector("#b3 i.fa-xmark")&&(document.querySelector("#b4 i.fa-circle")||document.querySelector("#b7 i.fa-circle"))){
        if(n==2){
            elt=document.getElementById("b"+9);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+2);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    else if(turns==3&&document.querySelector("#b3 i.fa-xmark")&&(document.querySelector("#b5 i.fa-circle"))){
        if(n==2){
            elt=document.getElementById("b"+8);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+2);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }

    else if(turns==5&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b9 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&(document.querySelector("#b4 i.fa-circle")||document.querySelector("#b7 i.fa-circle"))){
        if(n==5){
            p2w=true;
            elt=document.getElementById("b"+6);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+5);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    else if(turns==5&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b7 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&(document.querySelector("#b6 i.fa-circle")||document.querySelector("#b8 i.fa-circle")||document.querySelector("#b9 i.fa-circle"))){
        if(n==4){
            p2w=true;
            elt=document.getElementById("b"+5);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+4);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    else if(turns==5&&document.querySelector("#b7 i.fa-xmark")&&document.querySelector("#b9 i.fa-xmark")&&document.querySelector("#b4 i.fa-circle")&&(document.querySelector("#b2 i.fa-circle")||document.querySelector("#b3 i.fa-circle"))){
        if(n==5){
            p2w=true;
            elt=document.getElementById("b"+8);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+5);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    else if(turns==5&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b5 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b8 i.fa-circle")){
        if(n==9){
            p2w=true;
            elt=document.getElementById("b"+7);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else{
            p2w=true;
            elt=document.getElementById("b"+9);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
    }
    else if(turns==5&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b8 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b5 i.fa-circle")){
        if(n==4){
            elt=document.getElementById("b"+6);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else if(n==6){
            elt=document.getElementById("b"+4);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
        }
        else if(n==7){
            elt=document.getElementById("b"+6);
            elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
            turns++;
    }
        else if(n==9){
                elt=document.getElementById("b"+4);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
        }
    }
    else if(turns==7){
        if(document.querySelector("#b6 i.fa-circle")&&document.querySelector("#b4 i.fa-xmark")&&document.querySelector("#b8 i.fa-xmark")&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b5 i.fa-circle")){
            if(n==7){
                p1w=true;
                elt=document.getElementById("b"+9);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
            else if(n==9){
                p2w=true;
                elt=document.getElementById("b"+7);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
        }
        else if(document.querySelector("#b4 i.fa-circle")&&document.querySelector("#b6 i.fa-xmark")&&document.querySelector("#b8 i.fa-xmark")&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b5 i.fa-circle")){
            console.log(n);
            if(n==7){
                p2w=true;
                elt=document.getElementById("b"+9);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
            else if(n==9){
                p1w=true;
                elt=document.getElementById("b"+7);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
            else{
                p2w=true;
                elt=document.getElementById("b"+9);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
        }
        else if(document.querySelector("#b9 i.fa-circle")&&document.querySelector("#b4 i.fa-xmark")&&document.querySelector("#b8 i.fa-xmark")&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b5 i.fa-circle")){
            if(n==7){
                p1w=true;
                elt=document.getElementById("b"+5);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
            else if(n==5){
                p2w=true;
                elt=document.getElementById("b"+7);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
        }
        else if(document.querySelector("#b7 i.fa-circle")&&document.querySelector("#b6 i.fa-xmark")&&document.querySelector("#b8 i.fa-xmark")&&document.querySelector("#b3 i.fa-xmark")&&document.querySelector("#b2 i.fa-circle")&&document.querySelector("#b5 i.fa-circle")){
            console.log(n);
            if(n==4){
                p2w=true;
                elt=document.getElementById("b"+9);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
            else if(n==9){
                p1w=true;
                elt=document.getElementById("b"+4);
                elt.innerHTML=`<i class="fa-solid fa-xmark" id="cross"></i>`;
                turns++;
            }
        }
    }
    movex.play();
    document.querySelector('.column1').classList.remove("active-con");
    document.querySelector('.column3').classList.add("active-con");
    if(p1w){
        bgm.pause();
        bgm.currentTime=0;
        gameover.play();
        let element = document.querySelector('.active-con');
            if (element) {
                element.classList.remove("active-con");
            }
        gameon=false;
        console.log("Draw");
        msg.textContent="Draw!";
        icon.classList.replace("fa-crown", "fa-scale-balanced");
        document.querySelector('.viccon').classList.add("visible");
    }
    if(p2w){
        bgm.pause();
        bgm.currentTime=0;
        laugh.play();
        let element = document.querySelector('.active-con');
            if (element) {
                element.classList.remove("active-con");
            }
        gameon=false;
        console.log("Robot Wins");
        msg.textContent="Robot wins!";
        icon.classList.replace("fa-crown", "fa-circle-exclamation");
        document.querySelector('.viccon').classList.add("visible");
    }
    isturn=true;
},2500*Math.random());
}