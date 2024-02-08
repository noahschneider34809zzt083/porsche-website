var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var score = 0;

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },600);
}

var time = 1.5;

var speed = setInterval(function() {
    if (score >= 14 && score < 20) {
        block.style.animation = "block 1.4s  infinite linear";
        time = 1400
    } else if(score >= 20 && score < 30) {
        block.style.animation = "block 1.3s infinite linear";
        time = 1300
    } else if(score >= 30 && score < 40) {
        block.style.animation = "block 1.2s infinite linear";
        time = 1200
    } else if(score >= 40 && score < 51) {
        block.style.animation = "block 1.1s infinite linear";
        time = 1100
    } else if(score >= 51 && score < 62) {
        block.style.animation = "block 1.0s infinite linear";
        time = 1000
    } else if(score >= 62 && score < 71) {
        block.style.animation = "block .9s infinite linear";
        time = 900
    } else if(score >= 71 && score < 81) {
        block.style.animation = "block .8s infinite linear";
        time = 800
    } else if(score >= 81 && score < 90) {
        block.style.animation = "block .7s infinite linear";
        time = 700
    } else if(score >= 90 && score < 100) {
        block.style.animation = "block .6s infinite linear";
        time = 600
    } else if(score >= 100 && score < 110) {
        block.style.animation = "block .5s infinite linear";
        time = 500
    } else if(score >= 110) {
        block.style.animation = "block .4s infinite linear";
        time = 400
    } else {
        block.style.animation = "block 1.5s infinite linear"; 
        time = 1500;
    }
}, time)

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    console.log(characterTop)
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
    console.log(blockLeft)
    if(blockLeft<153 && blockLeft>-175 && characterTop>=280){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1.5s infinite linear";
    }else{
        counter++;
        score = Math.floor(counter/100);
        document.getElementById("scoreSpan").innerHTML = score;
    }
    if(block.style.animation== "0%") {
        console.log("animation")
    }
    console.log(block.style.animation)
        
}, 10);