// array for button color 
// var button = [red,blue,green,yellow];

// add sound 
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];

// array
//show round , up to 20
var round = [];
var random = [];
//store random pad number
var num = [];
var playerNum = [];

//game start 
$(document).ready(function(){
$("#start").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
  startGame();
  
 }); 
   }); 

// STRT GAME FUNCTION 

 function startGame(){
  var i = Math.floor((Math.random()*4)+1);
  random.push(i);
  count++;
  if (count < 21){
    $("#count").html("" +count);
    randomHighlight();
  } else {
    // game finish! 
    $("#count").html("#");
  }
}

// Function randomHighlight : Light up to random sequence in the random array 

function randomHighlight(){
  for (var i = 0; i < random.length; i++){
    // checkTimeout(i);
    checkTimeout(i);
  }
}

// Function checkTimeout: setup Time 
function checkTimeout(i){
  setTimeout(function(){
  highlight(random[i]);
  }, 1000 * i + 1000);
}

function highlight(i){
   $(".slice" + i).css("opacity", "0.5");
    setTimeout(function(){
    $(".slice" + i).css("opacity", "1.0");
    },3000);
    new Audio(url + audio[i]).play(); 
    console.log("ran: " + ".slice" + i);
    console.log("random");
    console.log("playerNum");
  
}

//Function playerMove : 


$(".slice1").on("click",function(){
  playerNum.push(1);
  $(".slice1").css("opacity", "0.5");
    setTimeout(function(){
    $("..slice1").css("opacity", "1.0");
    },200);
    new Audio(url + audio[1]).play(); 
  alert(playerNum);
 }); 
 
 $(".slice2").on("click",function(){
  playerNum.push(2);
   checkTimeout(i);
  alert(playerNum);
 }); 
  
  $(".slice3").on("click",function(){
  playerNum.push(3);
    checkTimeout(i);
  alert(playerNum);
 }); 
  
  $(".slice4").on("click",function(){
  playerNum.push(4);
    checkTimeout(i);
  alert(playerNum);
 }); 
  
  console.log(random);
  console.log(playerNum);
  startGame();


// function checkColor: check if random arr and player arr matches 
/* function checkColor(arr1,arr2){
  if(arr1[i] === arr2[i]){
    startGame();
  } else {
    alert("noo");
  }
}

/*function playerMove(){
  $("li").click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass("slice1")){
     alert("slice1");
   }
  })
  startGame();
};  

/*var button = $("li");

button.click(function(e){
  e.preventDefault();
  alert("2");
  if($(this).attr("class") == "slice1")
    alert("1");
})

/*function playerMove(){
  $("button").click(function(e) {
    e.preventDefault();
    if(!$(this).hasClass("red")){
     alert("slice1");
   }
  })
  startGame();
};  
*/
  