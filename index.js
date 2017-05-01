/* ===== audio info ===== */
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];


/* ===== variables  ===== */
var random = [];
var playerNum = [];
var newStart = false;
var count = 0;

/* ===== game start ===== */
$(document).ready(function(){

// click start button. "normal mode"
$("#start").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
  gameRound();
 }); 

// click strict button. "strict mode" 
$("#strict").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
 $( '#strict' ).addClass( 'strict-on' );
  console.log("#strict");
  gameRound();
 }); 

/* ===== game round ===== */
function gameRound(){
   playerNum = [];

   //random number 
   var i = Math.floor((Math.random()*4)+1);
   random.push(i); 
   count++;
   
  if (count < 21){
  $("#count").html("" + count);
    randomNum(); 
    console.log("gameRound");
  } else {
  // game finish! 
  $("#count").html("#");
  alert("YOU MADE IT! YOU WON!!!");
  }
}

/* ===== highlight ===== */

function randomNum(){
   for (var i = 0; i < random.length; i++){
     checkTimeout(i);
 } 
}

function checkTimeout(i){
  setTimeout(function(){
  highlight(random[i]);
   }, 900 * i + 1000);
  setTimeout(function(){
  playAudio(random[i]);
   }, 900 * i + 1000);
   }

 function highlight(i){
   $(".slice" + i).css("opacity", "0.5");
    setTimeout(function(){
    $(".slice" + i).css("opacity", "1.0");
    },600);  
  }

 function playAudio(i){
  new Audio(url + audio[i-1]).play();
};

/* ===== player move ===== */

$(".slice1").on("click",function(){
    newStart = false;
    playerNum.push(1);
     setTimeout(function(){
      highlight(1);
      playAudio(1);
    }, 500);
     checkColor();
 }); 

$(".slice2").on("click",function(){
   newStart = false;
    playerNum.push(2);
    setTimeout(function(){
      highlight(2);
      playAudio(2);
    }, 500);
    checkColor();
 }); 

$(".slice3").on("click",function(){
    newStart = false;
    playerNum.push(3);
     setTimeout(function(){
      highlight(3);
      playAudio(3);
    }, 500);
      checkColor();
 }); 

$(".slice4").on("click",function(){
    newStart = false;
    playerNum.push(4);
    setTimeout(function(){
    highlight(4);
    playAudio(4);
    }, 500);
    checkColor();
 }); 



/* ===== check color and array ===== */

// check array length 
function checkColor(){
  if(random.length === playerNum.length){
   console.log(" possible");
   checkNum();
  } 
  };

function checkNum(){

// check if random array and playerNum matches 
var check = random.every(function(element, index){
    return element === playerNum[index];
  });
  console.log(check);

// if random array and playerNum matches, moves to next count 
  if(check === true){
     newStart = true;
     playerNum = [];
      setTimeout(function(){
      gameRound();
      },1000);

    // test 
      console.log("random arr" + "" + random);
      console.log("player arr" + "" + playerNum);
      console.log("count" + "" + count);
      console.log("---------------------");
       
    }  
    else 
    { // if strict mode is on, restart from 1st count. 
      if ($("#strict").hasClass("strict-on")){
        
         playerNum = [];
         random = [];
         count = 0;
      setTimeout(function(){
         alert("WRONG!!  START AGAIN!!!");
         gameRound();
         },2000);
        } 
       else {
      // if it's normal mode, continue with current count.
      
      newStart = false;
      playerNum = [];
      setTimeout(function(){
      alert("WRONG!! TRY ONE MORE TIME!!!");
      randomNum();
       },2000);
        }
        }
  };

/* ===== game reset ===== */
$("#reset").on("click",function(){
  $("#count").html("0");
  random = [];
  playerNum = [];
 });
});

