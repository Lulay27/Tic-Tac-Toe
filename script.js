function game() {

}

const gameBoard = (() => {

})();

const displayController = (() => {

})();


for (let i = 0; i < 9; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className = "square";
    document.querySelector('.board-container').appendChild(squareDiv);
} 

const boardSelector = document.querySelector('.board-container');

boardSelector.addEventListener('click',cross);

function cross(e) {
    if (e.target.className = 'square') {
        e.target.innerHTML = 'COOL';
    }
    // alert(e.target);
}