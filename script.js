
let square;

for (let i = 0; i < 9; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.className = "square";
    document.querySelector('.board-container').appendChild(squareDiv);
} 

