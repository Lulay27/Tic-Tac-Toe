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

    const boardArrVal = () => {
        console.log(boardArr)
    }

    const testingMethod = (name) => {
        console.log(name + ' is my name');
    }

    const markMethod = (selector,message) => {    // marks point on array
        doc.querySelector(selector).innerHTML = message;
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
const displayController = (() => {


})();   



// tmr task change so div names arent index and set up array for that




// for (let i = 0; i < 9; i++) {
//     const squareDiv = document.createElement('div');
//     squareDiv.className = 'square';
//     boardArr.push(squareDiv)
//     document.querySelector('.board-container').appendChild(squareDiv);
// } 

const boardSelector = document.querySelector('.board-container');

boardSelector.addEventListener('click',cross);

function cross(e) {
    const index = e.target.className;
    if (index.length == 1) {      // why when this was = instead of == made 4
        gameBoard.markMethod(index,'X');
        // e.target.innerHTML = 'please work';
    }
    // alert(e.target);
}




gameBoard.renderBoard();