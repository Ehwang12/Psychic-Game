$(document).ready(function() {
    // score variables
    var wins = 0;
    var loss = 0;
    var tries = 9;
    
    //array to hold guesses 
    var keystroke = [];
    //array holding alphabet
    var alphabet = ["a","b","c","d","e","f","o","p","q","r","s","t","u","v","w","x","y","z"];
    //variable holding random letter to guess
    var randomLetter = null;

    //game logic

    //randomly pick letter and put into variable
    function getRandomLetter() {
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    };
    
    function updateGuesses() {
        //display guesses entered
        $("#guesses").text( keystroke );
    };

    function updateTriesLeft() {
        //update how many guesses are left
        $("#triesLeft").html(tries);
    };

    //function will be called when game resets
    function reset() {
        tries = 9;
        keystroke = [];
        getRandomLetter();
        updateGuesses();
        updateTriesLeft();
    };

    //execute when page loads
    getRandomLetter();
    updateTriesLeft();

    //track which keys are being hit on the keyboard
    $(document).keydown(function(e) {
        
        //decrement tries left
        tries--;
        //lowercase the letter
        var letter = event.key.toLowerCase();
        console.log(letter);

        //store guess into array
        keystroke.push(letter);
        //then run update functions
        updateGuesses();
        updateTriesLeft();

        //check if letters match
        if ( letter === randomLetter ){
            //update win and update DOM
            wins++;
            $("#wins").html(wins);
            //then reset game
            reset();
        } 

        //if we run out of guesses
        if ( tries === 0 ) {
            //then increment loss and update DOM
            loss++;
            $("#loss").html(loss);
            //reset game
            reset();
        }
    });
})