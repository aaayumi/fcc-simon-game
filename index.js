/* ===== sound info ===== */
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];


/* ===== array ===== */
// store information. random number.player number.
var random = [];
var playerNum = [];


/* ===== game start ===== */
$(document).ready(function(){
$("#start").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
  gameRound();
 }); 
}); 

/* ===== game round ===== */
function gameRound(){
  playerNum = [];
  count++;
  if (count < 10){
  $("#count").html("" +count);
  randomNum();
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  }
}

function gameContinue(){
  playerNum = [];
  if (count < 10){
  $("#count").html("" +count);
  randomNum();
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  }
}

/* ===== select random number ===== */

function randomNum(){
   var i = Math.floor((Math.random()*4)+1);
   random.push(i);
   for (var i = 0; i < random.length; i++){
   checkTimeout(i);
}
}

/* ===== highlight ===== */

function checkTimeout(i){
  setTimeout(function(){
  highlight(random[i]);
  }, 1000 * i + 1000);
  
}

function highlight(i){
   $(".slice" + i).css("opacity", "0.5");
    setTimeout(function(){
    $(".slice" + i).css("opacity", "1.0");
    },1000);
    new Audio(url + audio[i-1]).play();
}

/* ===== player move ===== */
$(".slice1").on("click",function(){
    playerNum.push(1);
    setTimeout(function(){
      highlight(1);
    }, 500);
    checkColor();
 }); 

$(".slice2").on("click",function(){
    playerNum.push(2);
    checkTimeout(2);
    setTimeout(function(){
      highlight(2);
    }, 500);
     checkColor();
 }); 

$(".slice3").on("click",function(){
    playerNum.push(3);
    checkTimeout(3);
      setTimeout(function(){
      highlight(3);
    }, 500);
     checkColor();
 }); 

$(".slice4").on("click",function(){
    playerNum.push(4);
    checkTimeout(4);
      setTimeout(function(){
      highlight(4);
    }, 500);
     checkColor();
 }); 


/* ===== check number/color ===== */
function checkColor(){
  for(var i=0; i<random.length; i++){
    if(random[i] === playerNum[i]){
      console.log("check random/player");
      console.log(random[i]);
      console.log(playerNum[i]);
      console.log("random arr" + "" + random);
      console.log("player arr" + "" + playerNum);
      console.log("count" + "" + count);
      setTimeout(function(){
         gameRound();
      },3000);

    } else {
      console.log("not possible");
      
    }
  }
}
