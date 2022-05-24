
// factory function
const player = (turn,player) => {
    const getTurn = () => turn;
    const getplayerNumber = () => player;


    
    return {player, turn}
};
// module
const gameBoard = ((doc) => {       // add doc
    let boardArr = [];

    const renderBoard = () => {
        for (let i = 0; i < 9; i++) {
            const squareDiv = document.createElement('div');
            squareDiv.className = 'square';
            document.querySelector('.board-container').appendChild(squareDiv);
            boardArr.push(squareDiv)
        } 
    }

    const boardArrVal = (index) => {
        return(boardArr[index].innerHTML);
    }

    const markMethod = (eventTarget,message) => {    // marks point on array
        eventTarget.innerHTML = message;
    }

    return {
        markMethod,
        renderBoard,
        boardArrVal
    };  // must put document here and use 'doc' b/c markMethod
    // uses DOM that grabs document from outside the module
})(document);

//module
const displayController = ((doc) => {

    // const Lyon = player(1,1);   // player1 goes first as X
    // const Eric = player(2,2);

    const gameOver = () => {
        // display tictactoe when line is made
        const msg = doc.createElement('div');
        msg.innerHTML = "GAME OVER";
        doc.querySelector('header').appendChild(msg);
        boardSelector.removeEventListener('click',cross);
    }

    const gameLine = () => {    // should be 8 lines of winning 3 hori 3 vert and 2 cross
        if ((gameBoard.boardArrVal(0) && gameBoard.boardArrVal(1) && gameBoard.boardArrVal(2)) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(3) && gameBoard.boardArrVal(4) && gameBoard.boardArrVal(5) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(6) && gameBoard.boardArrVal(7) && gameBoard.boardArrVal(8) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(0) && gameBoard.boardArrVal(3) && gameBoard.boardArrVal(6) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(1) && gameBoard.boardArrVal(4) && gameBoard.boardArrVal(7) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(2) && gameBoard.boardArrVal(5) && gameBoard.boardArrVal(8) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(0) && gameBoard.boardArrVal(4) && gameBoard.boardArrVal(8) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(2) && gameBoard.boardArrVal(4) && gameBoard.boardArrVal(6) == 'X') {
            return true;
        }
        
        else {
            return false;
        }
    }

    const playerTurn = (player) => {
        return player.turn;
    }

    const playerTurnend = (player) => {
        player.turn = 2;
    }

    return {
        gameOver,
        gameLine,
        playerTurnend,
        playerTurn
    };
})(document);   

const boardSelector = document.querySelector('.board-container');
boardSelector.addEventListener('click',cross);
const Lyon = player(1,1);   // player1 goes first as X
const Eric = player(2,2);

function cross(e) {
    
    const index = e.target;

    while(displayController.playerTurn(Lyon) == 1) {
        if (index.innerHTML == '') {      // why when this was = instead of == made 4

            gameBoard.markMethod(e.target,'X');
            
        }
    }
    
    
    if (displayController.gameLine() == true) {
        displayController.gameOver();
    }
    //  alert(e.target.innerHTML);
}

gameBoard.renderBoard();
// encapsulate all the (e) functions into a start module that starts everything