let currentGamer = 'X';
let win = false;
const button = document.querySelector('#button');
let field;
let inputValueO = document.querySelector('#currentO');
let inputValueX = document.querySelector('#currentX');
let numX = 1;
let numO = 1;

class Field {
    constructor() {
        this.matrixField = [];
    }
    // создаем и отрисовываем игровое поле
    fillMatrixField(row = 3, col = 3) {

        const table = document.createElement('table');
        table.setAttribute('id', 'table');
        document.body.prepend(table);

        for (let i = 0; i < row; i++) {
            let str = [];
            let tr = document.createElement('tr');

            for (let j = 0; j < col; j++) {
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

    removeMatrixField() {
        if (document.querySelector('table')) {
            document.querySelector('table').remove();
            this.matrixField = [];
        }
    }
}

field = new Field();
field.fillMatrixField();

button.addEventListener('click', function func() {
    field.removeMatrixField();
    const col = document.querySelector('#col');
    const row = document.querySelector('#row');

    let valueCol = col.value;
    let valueRow = row.value;

    field.fillMatrixField(valueRow, valueCol);
});

function fillCell() {
    let cells = getCells();
    cells.forEach((сell) => {
        сell.addEventListener('click', assignValueCell);
    });
}

function assignValueCell() {
    setCalcX(inputValueX);
    this.innerHTML = currentGamer;
    winningCombination();

    if (win === true) return;

    if (currentGamer === 'X') {
        computerMove();
        winningCombination();
    } else {
        currentGamer = 'X';
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

                let currentArrCells = matrix[i];
                currentArrCells.forEach((elem) => {
                    elem.classList.add('winner');
                });

                removeListener();
                showResetGame();
                return;
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

                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[j][i].classList.add('winner');
                }

                removeListener();
                showResetGame();
                return;
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

            for (let i = 0; i < matrix.length; i++) {
                matrix[i][i].classList.add('winner');
            }

            removeListener();
            showResetGame();
            return;
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
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][matrix[i].length - 1 - i].classList.add('winner');
            }

            removeListener();
            showResetGame();
            return;
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
        setCalcO(inputValueO);
    } else {
        computerMove();
    }
}

function showResetGame() {
    const windowReset = document.createElement('button');
    windowReset.setAttribute('id', 'restart');
    document.body.append(windowReset);
    windowReset.style.fontSize = '30px';
    windowReset.style.color = 'red';
    windowReset.innerHTML = 'Возобновить игру?';

    windowReset.addEventListener('click', function () {
        field.removeMatrixField();
        windowReset.style.display = 'none';
        window.location.reload();
    });
}

function setCalcX (elem) {  
    elem.value = numX;
    numX++; 
}

function setCalcO (elem) {  
    elem.value = numO;
    numO++; 
}

console.log(`
Ваша отметка - 40 балла(ов)
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр
2) Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов
3) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.

`);








