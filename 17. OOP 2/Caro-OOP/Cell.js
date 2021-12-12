class Cell {
    x;
    y;
    value;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = empty_Value;
    }

    drawCell() {
        let left = this.x * cellSize;
        let top = this.y * cellSize;
        return '<div id="cell-' + this.x + '-' + this.y + '" class="cell" ' +
            'onclick="play(' + this.x + ',' + this.y + ')" style="position: absolute; width: ' + cellSize + 'px;' +
            'height: ' + cellSize + 'px;' + 'left: ' + left + 'px;top:' + top + 'px;' +
            'line-height: ' + cellSize + 'px">';
    }

    drawValue() {
        let cellDiv = document.getElementById("cell-" + this.x + "-" + this.y);
        switch (this.value) {
            case value_X: {
                cellDiv.innerHTML = "X";
                break;
            }
            case value_0: {
                cellDiv.innerHTML = "0";
                break;
            }
            default: {
                cellDiv.innerHTML = "";
                break;
            }
        }
    }
}