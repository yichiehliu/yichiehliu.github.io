
function RNG(range, amt) {
    var nums = [],
        ranNums = [],
        i = amt;

    for (var i = 0; i < amt; ++i) {
        j = Math.floor(Math.random() * (range)) + 1;
        while (nums.includes(j)) {
            j = Math.floor(Math.random() * (range)) + 1;
        }
        nums[i] = j;

    }
    return nums;

}




function createData(numrows, numcols, numbomb) {
    var arr = [];

    for (var i = 0; i <= numrows + 1; ++i) {
        var columns = [];
        for (var j = 0; j <= numcols + 1; ++j) {
            if (i == 0 || j == 0 || i == numrows + 1 || j == numcols + 1) {
                columns[j] = -99;
            }
            else {
                columns[j] = 9;
            }

        }
        arr[i] = columns;
    }

    // 0是周圍都沒有炸彈，-1是炸彈，正常數字1-8是周圍格子炸彈數量
    var bombpos = RNG(numrows * numcols, numbomb);
    console.log(bombpos);
    // 放炸彈
    for (var i = 0; i < numbomb; i++) {
        var row = 0;
        var col = 0;
        if ((bombpos[i] % numcols) > 0) {
            col = (bombpos[i] % numcols);
        }
        else {
            col = numcols;
        }

        if ((bombpos[i] / numcols) > Math.floor(bombpos[i] / numcols)) {
            row = Math.floor(bombpos[i] / numcols) + 1;
        }
        else {
            row = Math.floor(bombpos[i] / numcols);
        }

        arr[row][col] = -1;
    }



    for (var i = 1; i <= numrows; ++i) {
        for (var j = 1; j <= numcols; ++j) {
            var cntBomb = 0;
            if (arr[i][j] != -1) {
                if (arr[i - 1][j - 1] == -1) {
                    cntBomb += 1;
                }
                if (arr[i][j] == -1) {
                    cntBomb += 1;
                }
                if (arr[i + 1][j + 1] == -1) {
                    cntBomb += 1;
                }
                if (arr[i - 1][j] == -1) {
                    cntBomb += 1;
                }
                if (arr[i - 1][j + 1] == -1) {
                    cntBomb += 1;
                }
                if (arr[i + 1][j - 1] == -1) {
                    cntBomb += 1;
                }
                if (arr[i + 1][j] == -1) {
                    cntBomb += 1;
                }
                if (arr[i][j - 1] == -1) {
                    cntBomb += 1;
                }
                if (arr[i][j + 1] == -1) {
                    cntBomb += 1;
                }
                arr[i][j] = cntBomb;
            }
        }
    }



    return arr;


}

function createFramework() {
    bbtable = $("<table></table>").attr({ id: "bbtable" });
    // new Number($("#rowcount").val());
    var rows = 8;
    var cols = 8;
    var bombs = 10;
    var cnt = 1;
    var tr = [];
    DataArray = createData(rows, cols, bombs);
    console.log(DataArray);
    // return;

    if ((row && cols) != "") {
        for (var i = 0; i < rows; i++) {
            var row = $("<tr></tr>")
                .attr({ class: ["row", "row" + i] })
                .appendTo(bbtable);
            for (var j = 0; j < cols; j++) {

                var td = $("<td></td>")
                    .attr({ class: ["cell", "cell" + j] })
                    .appendTo(row);
                $("<button></button>")
                    .attr({ class: ["btn"], 'data-index-x': i + 1, 'data-index-y': j + 1, 'data-array': -99, 'data-disabled': true })
                    .appendTo(td);
                cnt += 1;
            }
        }
    } else {
        alert("Error");
    }
    bbtable.appendTo(".content");
}

var DataArray = []
createFramework();

console.log(DataArray)

function whiteAni() {

}

function assignShowArr(x, y) {
    $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-array", DataArray[x][y]);
    $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-disabled", false);
}

function doubleSelect(x, y) {
    var bool = false
    bool = $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-disabled")
    return bool;
}


$(".btn").contextmenu(function () {


})

$(".btn").click(function () {
    // console.log($(this))

    var curX = +$(this).attr("data-index-x");
    var curY = +$(this).attr("data-index-y");
    var queue = [];
    // assignShowArr(curX, curY)

    if (DataArray[curX][curY] == 0) {
        queue.push([curX, curY])
        while (queue.length > 0) {
            // console.log(1)
            const [cX, cY] = queue.shift();

            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    // console.log(2)
                    // $.each(queue, function (index, val) {
                    //     console.log(val);
                    // });
                    // console.log(4)
                    // if (!(i == 0 && j == 0)) {

                    // console.log(DataArray[cX + i][cY + j], doubleSelect(cX + i, cY + j))
                    if (DataArray[cX + i][cY + j] == 0 && doubleSelect(cX + i, cY + j) == "true") {
                        // console.log(123)
                        queue.push([cX + i, cY + j])
                    }
                    assignShowArr(cX + i, cY + j)

                }
            }
            // queue.forEach(element => console.log(element));


        }



    }
    else if (DataArray[curX][curY] == -1) {
        assignShowArr(curX, curY)
    }
    else {
        assignShowArr(curX, curY)
    }






    // if (this.attr("data-disabled") == false) {

    // }
});