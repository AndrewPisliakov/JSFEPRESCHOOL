
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


function assignValueCell(event) {
    this.innerHTML = currentGamer;
    console.log(event.target);

    if (currentGamer === 'X') {
        currentGamer = 'O'
    } else {
        currentGamer = 'X';
    };

    this.removeEventListener('click', assignValueCell);
};

function getCells() {
    return document.querySelectorAll('td');
}

function winningCombination() {
    let matrix = field.matrixField;
    console.log(matrix);
    
}

winningCombination();



/* let matrix = [];
let num = 'i';
for (let i = 0; i < 5; i++) {
    let arr = [];
    matrix.push(arr);
    for (let j = 0; j < 5; j++) {
        arr.push(num);
    }
}

console.log(matrix); */