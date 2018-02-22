// javascript for trivia game
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}




// this is the local time for the page

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }


// sets a 60 second timer countdown
// button starts the trivia game
    i = 60;
    function startTheGame() {
    document.getElementById("gameStart").innerHTML = i;
    i--;
    if (i < 0) {
        alert("Times Up!");
    }
    else {
        setTimeout(startTheGame, 1000);
    }

    };
// create the counter for wins and losses

    function answer () {
        var correct= 0;
        var incorrect = 0;
        var total = 5;
        if ( document.getElementById("russian4").checked && document.getElementById("dog2").checked && document.getElementById("oscar1").checked && document.getElementById("charity2").checked && document.getElementById("student2").checked) {
            correct=5;
            incorrect=0;
        } else if 
            (document.getElementById("dog2").checked && document.getElementById("oscar1").checked && document.getElementById("charity2").checked && document.getElementById("student2").checked) {
               correct=4;
                incorrect=1;
        } else if 
            (document.getElementById("oscar1").checked && document.getElementById("charity2").checked && document.getElementById("student2").checked) {
                correct=3;
                incorrect=2;
        } else if 
            (document.getElementById("charity2").checked && document.getElementById("student2").checked) {
                correct=2;
                incorrect=3;
        } else if 
            (document.getElementById("student2").checked){
                correct=1;
                incorrect=4;
        } else {
                incorrect=5;
        }
            var d=(correct/total);
            document.getElementById("win").innerHTML = correct;
            document.getElementById("loss").innerHTML = incorrect;
            document.getElementById("score").innerHTML = d;
        }; 
        
    
    


// The player chooses the correct answer to question 1 the russian.  answer is Rocky IV






