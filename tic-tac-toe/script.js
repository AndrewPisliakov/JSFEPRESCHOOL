function createTable(row, col) {
    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    document.body.prepend(table);

    for (let i = 0; i < row; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < col; j++) {
            let td = document.createElement('td');
            row.append(td);
        }
        table.append(row);
    }
}

createTable(3, 3);