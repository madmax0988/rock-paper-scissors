let playbutton=document.getElementById("play-button");
let yourScoreDiv=document.getElementById("youscore");
let youscore=0
let compScoreDiv=document.getElementById("compscore");
let compscore=0
let optionYouSelected=document.getElementById("optionyouselected")
let options= Array.from(document.getElementsByClassName("options"));
let optionCompSelected=document.getElementById("optioncompselected")
let gameoverDiv=document.getElementById("gameover-div")
let imgArr=["assets/rock-hand.png","assets/paper-hand.png","assets/scissors-hand.png"]
let winstatement=document.getElementById("winstatement")
let optionsContainer=document.getElementById("optionscontainer")
let playagainbtn=document.getElementById("playagain-btn")

function randomOption(){
    let num = Math.floor(Math.random()*3); 
    return num
}
options.forEach((item,i)=>{
    item.onclick=()=> {
        let selectedOption=imgArr[i];
        optionYouSelected.src=selectedOption
        let randomIndex=randomOption()
        optionCompSelected.src=imgArr[randomIndex]
       if(i!=randomIndex){
        if(i==0){
            if(randomIndex==1){
                compscore++
                compScoreDiv.textContent=compscore
            }else if(randomIndex==2){
                youscore++
                yourScoreDiv.textContent=youscore
            }
        } else
        if(i==1){
            if(randomIndex==0){
                youscore++
                yourScoreDiv.textContent=youscore
            }else if(randomIndex==2){
                compscore++
                compScoreDiv.textContent=compscore
            }
        } else 
        if(i==2){
            if(randomIndex==0){
                compscore++
                compScoreDiv.textContent=compscore
            }else if(randomIndex==1){
                youscore++
                yourScoreDiv.textContent=youscore
            }
        }
       }
       if(youscore==5 || compscore==5){
        if(compscore==5){
        winstatement.textContent="Comp won the game"}
        optionsContainer.style.display="none"
        displayResult()
       }
    }
})
function displayResult(){
    gameoverDiv.style.display="block"
}
playagainbtn.addEventListener("click",()=>{location.href="game.html"})
