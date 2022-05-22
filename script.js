// factory function
const player = (name, turn) => {

    return {name, turn}
};
// let boardArr = [];
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

    const testingMethod = (name) => {
        console.log(name + ' is my name');
    }

    const markMethod = (eventTarget,message) => {    // marks point on array
        eventTarget.innerHTML = message;
    }

    return {
        testingMethod,
        markMethod,
        renderBoard,
        boardArrVal
    };  // must put document here and use 'doc' b/c markMethod
    // uses DOM that grabs document from outside the module
})(document);

//module
const displayController = ((doc) => {

    

    const gameOver = () => {
        // display tictactoe when line is made
        const msg = doc.createElement('div');
        msg.innerHTML = "GAME OVER"
        doc.querySelector('header').appendChild(msg);
    }

    const gameLine = () => {    // should be 8 lines of winning 3 hori 3 vert and 2 cross
        if (gameBoard.boardArrVal(0) && gameBoard.boardArrVal(1) && gameBoard.boardArrVal(2) == 'X') {
            return true;
        }
        
        if (gameBoard.boardArrVal(3) && gameBoard.boardArrVal(4) && gameBoard.boardArrVal(5) == 'X') {
            return true;
        }
        
        else {
            return false;
        }
    }

    return {
        gameOver,
        gameLine
    };
})(document);   



// tmr task change so div names arent index and set up array for that


const boardSelector = document.querySelector('.board-container');

boardSelector.addEventListener('click',cross);

function cross(e) {
    const index = e.target;
    if (index.innerHTML == '') {      // why when this was = instead of == made 4
    
        gameBoard.markMethod(e.target,'X');
    } if (displayController.gameLine() == true) {
        displayController.gameOver();
    }
    //  alert(e.target.innerHTML);
}




gameBoard.renderBoard();

// encapsulate all the (e) functions into a start module that starts everything