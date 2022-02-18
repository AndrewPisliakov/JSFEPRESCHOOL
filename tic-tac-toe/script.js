
let currentGamer = 'X';

class Field {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.matrixField = [];
    }

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
    //console.log(event.target);

    if (currentGamer === 'X') {
        currentGamer = 'O'
    } else {
        currentGamer = 'X';
    };

    this.removeEventListener('click', assignValueCell);
    winningCombination();
};

function getCells() {
    return document.querySelectorAll('td');
}

function removeListener() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.removeEventListener('click', assignValueCell);
    });
}

function winningCombination() {

    let matrix = field.matrixField;

    function winningCombinationRow() {
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
                alert('winner');

                removeListener();
            }

            rowCurrentCell = [];
        }
    }

    function winningCombinationCol() {
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
                alert('winner');

                removeListener();
            }
    
            colCurrentCell = [];
        }
    }

    winningCombinationCol();
    winningCombinationRow();
}



