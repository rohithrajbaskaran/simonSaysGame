var playerMoves = new Array;
var pattern = new Array;
var level = 0;

startGame();

function startGame() {

    $(document).off("keydown");
    $(document).on("keydown", function () {
        if (event.key == 'a') {
            $(document).off("keydown");
            level++;
            $("h1").text(`${"Level "}${level}`);
            blinkTile();
            $(document).click(trackPlayerMoves);
        }
    })

}

function compMoves() {

    if (playerMoves[(playerMoves.length - 1)] == pattern[(playerMoves.length - 1)]) {
        return true;
    }
    else {
        return false;
    }

}

function gameOver() {
    
    playerMoves.length = 0;
    pattern.length = 0;
    level = 0;

} 

function blinkTile() {

    $(document).off("keydown");

    let randNum = Math.floor((Math.random() * 4) + 1);

    switch (randNum) {
        case 1:
            $(".red").animate({ opacity: 0.3 }).animate({ opacity: 1 });
            pattern.push(1);
            break;
        case 2:
            $(".green").animate({ opacity: 0.3 }).animate({ opacity: 1 });
            pattern.push(2);
            break;
        case 3:
            $(".blue").animate({ opacity: 0.3 }).animate({ opacity: 1 });
            pattern.push(3);
            break;
        case 4:
            $(".yellow").animate({ opacity: 0.3 }).animate({ opacity: 1 });
            pattern.push(4);
            break;
    }
    
    // console.log(pattern);
    
}

function trackPlayerMoves(event) {

    let clickedElement = $(event.target);
    
    if (clickedElement.hasClass("red") == true) {
        playerMoves.push(1);
    }
    else if (clickedElement.hasClass("green") == true) {
        playerMoves.push(2);
    }
    else if (clickedElement.hasClass("blue") == true) {
        playerMoves.push(3);
    }
    else {
        playerMoves.push(4);
    }

    // console.log(`${"Player Moves: "}${playerMoves}`);
    
    if (!compMoves()) {
        gameOver();
        $("h1").text("You lose! Press A to start again");
        changeBackgroundColor();
        $(document).off("click");
        startGame();
    } else if (playerMoves.length == pattern.length) {
        playerMoves.length = 0;
        level++;
        $("h1").text(`${"Level "}${level}`);
        setTimeout(blinkTile, 500);
    }

}

function changeBackgroundColor() {

    let originalColor = $("body").css("background-color");
    $("body").css("background-color", "red");
    

    setTimeout(function () {
        $("body").css("background-color", originalColor);
    }, 300);

}