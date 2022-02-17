
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

let field = new Field(4, 4);
field.fillMatrixField();

function fillCell() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.addEventListener('click', assignValueCell);
    });
}

function removeListener() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.removeEventListener('click', assignValueCell);
    });
}

function assignValueCell(event) {
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

function winningCombination() {

    let matrix = field.matrixField;
    let rowCurrentCell = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            rowCurrentCell.push(matrix[i][j].innerHTML);  
        }

        let check = rowCurrentCell.every((cell) => {
            if (cell === 'X') {
                return true;
            } 
        });
        let check2 = rowCurrentCell.every((cell) => {
            if (cell === 'O') {
                return true;
            } 
        });

        if (check || check2) {
            alert('winer');
            removeListener();
        }

        rowCurrentCell = [];
    }

}



