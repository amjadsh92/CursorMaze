
 var boundaries =  document.querySelectorAll(".boundary");
 var start = document.getElementById("start");
 var end = document.getElementById("end")
 var status = document.getElementById("end")


 var gameRunning = False;
 
 start.addEventListener("mouseenter", function(){

    gameRunning = true
    status.textContent = "The game has started"

 });


 end.addEventListener("mouseenter", function(){

    if(gameRunning){

        lose();

    }

 });

 boundaries.forEach(function(boundary){
    boundary.addEventListener("mouseEnter", function(){
                                    if (gameRunning){

                                    }
    })
 })


 function lose(){
    gameRunning = false
    boundaries.forEach( function(boundary){ boundary.classList.add("highlighted")})
    status.textContent = "You Lost"
 }