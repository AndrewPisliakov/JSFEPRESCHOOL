
let currentGamer = 'X';
let win = false;

class Field {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.matrixField = [];
    }
    // создаем и отрисовываем игровое поле
    fillMatrixField() {
        const table = document.createElement('table');
        table.setAttribute('id', 'table');
        document.body.prepend(table);

        for (let i = 0; i < this.row; i++) {
            let str = [];
            let tr = document.createElement('tr');

            for (let j = 0; j < this.col; j++) {
                let td = document.createElement('td');
                tr.append(td);
                str.push(td);
            }

            this.matrixField.push(str);
            table.append(tr);
            str = [];
        }

        fillCell();
    }
}



let field = new Field(3, 3);
field.fillMatrixField();

function fillCell() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.addEventListener('click', assignValueCell);
    });
}


function assignValueCell() {
    
    this.innerHTML = currentGamer;

    winningCombination();
    if (win === true) return;
    console.log(win);


    if (currentGamer === 'X') {
        computerMove();

    } else {
        currentGamer = 'O';
    };


    this.removeEventListener('click', assignValueCell);

};


function winningCombination() {
    if (win === true) return;
    let matrix = field.matrixField;

    function winningCombinationRow() {
        if (win === true) return;
        let rowCurrentCell = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                rowCurrentCell.push(matrix[i][j].innerHTML);
            }

            let checkRowX = rowCurrentCell.every((cell) => {
                if (cell === 'X') {
                    return true;
                }
            });
            let checkRowO = rowCurrentCell.every((cell) => {
                if (cell === 'O') {
                    return true;
                }
            });

            if (checkRowX || checkRowO) {
                win = true;
                alert('winner');
                removeListener();

            }

            rowCurrentCell = [];

        }
    }

    function winningCombinationCol() {
        if (win === true) return;
        let colCurrentCell = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                colCurrentCell.push(matrix[j][i].innerHTML);
            }

            let checkColX = colCurrentCell.every((cell) => {
                if (cell === 'X') {
                    return true;
                }
            });
            let checkColO = colCurrentCell.every((cell) => {
                if (cell === 'O') {
                    return true;
                }
            });

            if (checkColX || checkColO) {
                win = true;
                alert('winner');

                removeListener();
            }

            colCurrentCell = [];
        }
    }

    function winningCombinationMainAxis() {
        if (win === true) return;
        let mainAxisCurrentCell = [];

        for (let i = 0; i < matrix.length; i++) {
            mainAxisCurrentCell.push(matrix[i][i].innerHTML);
        }

        let checkMainAxisX = mainAxisCurrentCell.every((cell) => {
            if (cell === 'X') {
                return true;
            }
        });
        let checkMainAxisO = mainAxisCurrentCell.every((cell) => {
            if (cell === 'O') {
                return true;
            }
        });

        if (checkMainAxisX || checkMainAxisO) {
            win = true;
            alert('winner');

            removeListener();
        }

        mainAxisCurrentCell = [];

    }

    function winningCombinationSecondAxis() {
        if (win === true) return;
        let secondAxisCurrentCell = [];

        for (let i = 0; i < matrix.length; i++) {
            let currentCell = matrix[i][matrix[i].length - 1 - i];
            secondAxisCurrentCell.push(currentCell.innerHTML);
        }

        let checSecondAxisX = secondAxisCurrentCell.every((cell) => {
            if (cell === 'X') {
                return true;
            }
        });
        let checkSecondAxisO = secondAxisCurrentCell.every((cell) => {
            if (cell === 'O') {
                return true;
            }
        });

        if (checSecondAxisX || checkSecondAxisO) {
            win = true;
            alert('winner');

            removeListener();
        }

        secondAxisCurrentCell = [];
    }

    winningCombinationRow();
    winningCombinationCol();
    winningCombinationMainAxis();
    winningCombinationSecondAxis();
}


function getCells() {
    return document.querySelectorAll('td');
}

function removeListener() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.removeEventListener('click', assignValueCell);
    });
}



function getRndInteger(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function computerMove() {

    let matrix = field.matrixField;
    let maxNumber = field.matrixField.length - 1;
    let i = getRndInteger(maxNumber);
    let j = getRndInteger(maxNumber);

    if (matrix[i][j].innerHTML === '') {
        matrix[i][j].innerHTML = 'O';
        //currentGamer = 'O';

        /*  let event = new Event("click");
         matrix[i][j].dispatchEvent(event); */


    } else {
        computerMove();
    }
}


//setInterval( () => { console.log(currentGamer) }, 3000);


