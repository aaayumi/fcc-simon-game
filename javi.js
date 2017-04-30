/* ===== sound info ===== */
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];


/* ===== array ===== */
// store information. random number.player number.
var random = [];
var playerNum = [];
var simonTurn = false;
var lastEvent;

/* ===== game start ===== */
$(document).ready(function(){
$("#start").on("click",function(){
  count = 0;
  random = [];
  playerNum = [];
  setupPlayerListeners();
  startRound();
 }); 


/* ===== game round ===== */
function startRound(){
  playerNum = [];
  count++;
console.log("start round");
  if (count < 6){
   $("#count").html("" + count);
   simonTurn = true; 
   simonMove( );
   simonTurn = false; 
    console.log("--------");
  } else {
  // game finish! 
  $("#count").html("#");
  alert("finish!");
  random = [];
  playerNum = [];
  }
}

/* ===== select random number ===== */

function simonMove()
{
  var slice = Math.floor(　(Math.random()*4)+1);
  random.push(　slice　);
  console.log( "simon says " + slice);
   console.log("@@@@@@@@@@");
console.log("random arr " + random);

console.log(" First simon" + random[0]);
  var promise = updateSlice(random[0]);

   for ( var i = 1; i < random.length ; ++i) 
   {
  //  updateSlice(random[i]);
      var simonSelection = random[i];
      console.log("Simon" + simonSelection + " i " + i);
      var nextStep = function(){
        console.log("Simon async slice" + simonSelection);
        return $(".slice" + simonSelection).fadeToggle("slow", "linear")
                  .queue(function() {
                    playSound(simonSelection);
                    $( this ).dequeue();
                  })
                  .fadeToggle("slow", "linear")
                  .delay( 1000 ).promise();
      };

      promise = promise.then(nextStep);
   }
}

/* ===== highlight ===== */

function updateSlice(i)
{
  console.log("Update slice " + i);
  return $(".slice" + i).fadeToggle("slow", "linear")
                  .queue(function() {
                    playSound(i);
                    $( this ).dequeue();
                  })
                  .fadeToggle("slow", "linear")
                  .delay( 1000 ).promise();
}

function playSound(i)
{
   new Audio(url + audio[i-1]).play();
}

/* ===== player move ===== */
function setupPlayerListeners(){

var handleEvent = function(i){
    playerNum.push(i);
    updateSlice(i);
    setTimeout(function(){
      checkColor();
    },1000 * i + 1000);
}

$(".slice1").on("click",function(){
  handleEvent(1);
 }); 

$(".slice2").on("click",function(){
  handleEvent(2);
 }); 

$(".slice3").on("click",function(){
  handleEvent(3);
 }); 

$(".slice4").on("click",function(){
  handleEvent(4);
 }); 
 
}

/* ===== check number/color ===== */

function checkColor(){
  for ( var i = 0; i < random.length; i++ )
  {
      console.log("********");
    console.log("random[i] " + random[i] + "playerNum[i]" + playerNum[i]);
    if ( random[i] != playerNum[i] )
    {
      alert("wrong");
      break;
    } else {
      checkLength()
    }
  }
};

function checkLength(){
  if( random.length === playerNum.length )
  { startRound();
    console.log("startRound");
} else {
  setupPlayerListeners();
  console.log("one more time");
}
};

/* function checkColor( )
{
  if ( random.length === playerNum.length )
  {
    checkNum( );
  } 
  else 
  {
    console.log("not  handled " + random.length+ " player.length "+ playerNum.length);
  }
}

function checkNum()
{
  var isEqual = true;
  for ( var i = 0; i < random.length; i++ )
  {

    console.log("random[i] " + random[i] + "playerNum[i]" + playerNum[i]);
    if ( random[i] != playerNum[i] )
    {
      isEqual = false;
      break;
    }
  }

  if ( isEqual ) 
  {
    playerNum = [ ];
    console.log("random arr " + random);
    console.log("player arr " +  playerNum);
    console.log("count " + count);
    console.log("---------------------");
    startRound( );
  } else 
  {
      console.log(" checknum not implemented");
  }
}

/* ===== game reset ===== */
$("#reset").on("click",function(){
  alert("reset");
   $("#count").html("0");
  random = [];
  playerNum = [];
 });
}); 
