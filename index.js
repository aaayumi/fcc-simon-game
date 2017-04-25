// game object 
var game = {
    computer:"",
    player:"",
    start:"",
    end:"",
    move:0,
};


// array for button color 
// var button = [red,blue,green,yellow];

// add sound 
var url = "https://s3.amazonaws.com/freecodecamp/";
var audio =["simonSound1.mp3","simonSound2.mp3","simonSound3.mp3","simonSound4.mp3"];
var num = [];

//game start 
$(document).ready(function(){

 $("#start").on("click",function(){
  highlight();
 });
});

function highlight(){
  index = 0;
  index++;
  var i = Math.floor((Math.random()*4)+1);
   $(".slice" + i ).effect("highlight", {color: 'pink'},3000);
   new Audio(url + audio[i-1]).play();
  num.push(i);
  playerPlay();
  console.log(num);
}

 function playerPlay(){
   for(var i=0; i<num.length; i++){
    $("#game" + num[i]).click(function(){
    $("#game" + num[i] ).css("background","black");
    new Audio(url + audio[num[i]-1]).play();
    })
    }
     };                    
 
   /* 
   $("#game" +i).css("background","black");
   audio.play(url + audio[1]);
    audio.play(url + audio[2]);
    audio.play(url + audio[3]);*/   



 