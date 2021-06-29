
var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

$(document).keydown(function(event) {
    if(!started){
        $('#level-title').text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(this);
    playSound(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamepattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length===gamepattern.length){
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    }else{
        playSound("wrong");
        
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },200);

        $('#level-title').text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level=0;
    gamepattern=[];
    started=false;
}

function nextSequence(){

    userClickedPattern=[];

    level++;
    $('#level-title').text("Level "+level);

   var randomNumber=Math.floor(Math.random()*4);   
   var randomChosenColour=buttonColours[randomNumber];
   gamepattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}

function playSound(name){
    var audio=new Audio('./sounds/' + name + '.mp3');
    audio.play();
} 

function animatePress(currentColor){
    $(currentColor).addClass("pressed");
    setTimeout(()=>{
        $(currentColor).removeClass("pressed");
    },100)
}



