/* ===== sound info ===== */
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];


/* ===== array ===== */
// store information. random number.player number.
var random = [];
var playerNum = [];
var computerTurn = false;

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
  count++;

  if (count < 10){
  $("#count").html("" + count);
   setTimeout(function(){
    randomNum();
    console.log("gameRound");
  },1000);
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  }
}

/*function gameContinue(){
  playerNum = [];
  if (count < 10){
  $("#count").html("" +count);
   setTimeout(function(){
    randomNum();
  },500);
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  }
}

/* ===== select random number ===== */

function randomNum(){
   computerTurn = true;
   var i = Math.floor((Math.random()*4)+1);
   random.push(i);

   for (var i = 0; i < random.length; i++){
    checkTimeout(i);
     playerMove();
   /* setTimeout(function(){
    checkTimeout(i);
   },3000 * i + 3000)

   playerMove(); */
 } 
}
   /* for (var i = 0; i < random.length; i++){
  
   checkTimeout(i);
   console.log("setRandomNumber");

   playerMove();
}
}*/

/* ===== highlight ===== */

function checkTimeout(i){
  setTimeout(function(){
  highlight(random[i]);
   }, 900 * i + 1000);
   console.log("checktimeout" + "" + random);
   }


   /*var move = setInterval(function(){
    highlight(random[i]);
    if ( i >= random.length){
      clearInterval(move);
    }
  }, 900 * i + 1000);
  }
  /*
  setTimeout(function(){
  highlight(random[i]);
  }, 900 * i + 1000);
   console.log("checktimeout" + "" + random);
   clearTimeout(); :?
} */

function highlight(i){
   $(".slice" + i).css("opacity", "0.5");
    setTimeout(function(){
    $(".slice" + i).css("opacity", "1.0");
    },1000);
    new Audio(url + audio[i-1]).play();
     console.log("highlight" + "" + random);
    clearTimeout();
}

/* ===== player move ===== */
function playerMove(){

$(".slice1").on("click",function(){
    playerNum.push(1);
    setTimeout(function(){
      highlight(1);
    }, 500);
    clearTimeout();
     console.log("slice1" + "" + random);
    checkColor();
 }); 

$(".slice2").on("click",function(){
    playerNum.push(2);
    checkTimeout(2);
    setTimeout(function(){
      highlight(2);
    }, 500);
    clearTimeout();
    console.log("slice2" + "" + random);
     checkColor();
 }); 

$(".slice3").on("click",function(){
    playerNum.push(3);
    checkTimeout(3);
      setTimeout(function(){
      highlight(3);
    }, 500);
      clearTimeout();
      console.log("slice3" + "" + random);
     checkColor();
 }); 

$(".slice4").on("click",function(){
    playerNum.push(4);
    checkTimeout(4);
      setTimeout(function(){
      highlight(4);
    }, 500);
      clearTimeout();
      console.log("slice4" + "" + random);
     checkColor();
 }); 
 computerTurn = false;
}

/* ===== check number/color ===== */
function checkColor(){
  if(random.length === playerNum.length){

    checkNum();
  } else {
    setTimeout(function(){
    },1000 * count);
  }
}

function checkNum(){
  for(var i=0; i<random.length; i++){
    if(random[i] === playerNum[i]){
      console.log("random arr" + "" + random);
      console.log("player arr" + "" + playerNum);
      console.log("count" + "" + count);
      console.log("---------------------");
      setTimeout(function(){
        gameRound();
    },3000 * count);
      clearTimeout();
    } else {
      console.log("not possible");
      
    }
  }
}

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
