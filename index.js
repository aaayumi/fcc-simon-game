/* ===== sound info ===== */
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];


/* ===== array ===== */
// store information. random number.player number.
var random = [];
var playerNum = [];
var computerTurn = false;
var newStart = false;

/* ===== game start ===== */
$(document).ready(function(){
$("#start").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
  gameRound();
 }); 


/* ===== game round ===== */
function gameRound(){
   playerNum = [];
   var i = Math.floor((Math.random()*4)+1);
   random.push(i);
   count++;

  if (count < 5){
  $("#count").html("" + count);
    randomNum();
    console.log("gameRound");
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  }
}

/* ===== select random number ===== */

function randomNum(){
   for (var i = 0; i < random.length; i++){
     checkTimeout(i);
 } 
}

/* ===== highlight ===== */

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
     console.log("slice1" + "" + random);
       if(checkColor() == true){
         playerNum = [];
         newStart = true;
        gameRound();
        console.log("checkRound");
      }
 }); 

$(".slice2").on("click",function(){
   newStart = false;
    playerNum.push(2);
    setTimeout(function(){
      highlight(2);
      playAudio(2);
    }, 500);
    console.log("slice2" + "" + random);
       if(checkColor() == true){
         playerNum = [];
         newStart = true;
        gameRound();
        console.log("checkRound");
      }
 }); 

$(".slice3").on("click",function(){
    newStart = false;
    playerNum.push(3);
     setTimeout(function(){
      highlight(3);
      playAudio(3);
    }, 500);
      console.log("slice3" + "" + random);
       if(checkColor() == true){
         playerNum = [];
         newStart = true;
        gameRound();
        console.log("checkRound");
      }
 }); 

$(".slice4").on("click",function(){
    newStart = false;
   playerNum.push(4);
     setTimeout(function(){
      highlight(4);
      playAudio(4);
    }, 500);
      console.log("slice4" + "" + random);

      if(checkColor() == true){
         playerNum = [];
         newStart = true;
        gameRound();
        console.log("checkRound");
      }
 }); 



/* ===== check number/color ===== */
function checkColor(){
  if(random.length === playerNum.length){
   console.log(" possible");
   checkNum();
  } else {
    setTimeout(function(){
    },1000 * count);
  }
}

function checkNum(){
  //for(var i = random.length; i--;)
          if(playerNum.indexOf(random)){
          console.log("random arr" + "" + random);
      console.log("player arr" + "" + playerNum);
      console.log("count" + "" + count);
      console.log("---------------------");
        newStart = true;
        setTimeout(function(){
           gameRound();
         },1000);
       
    } else {
      console.log("not possible");
      }
    }
/* function checkLength(){
  if( random.length === playerNum.length )
  {  
     setTimeout(function(){
     gameRound();
    },3000 * count);
     console.log(random);
     console.log(count);
      console.log("startRound");
} else {
  console.log("one more time");
}
};

/* ===== game reset ===== */
$("#reset").on("click",function(){
  alert("reset");
   $("#count").html("0");
  random = [];
  playerNum = [];
  console.log("random arr" + "" + random);
  console.log("player arr" + "" + playerNum);
 });
 });

