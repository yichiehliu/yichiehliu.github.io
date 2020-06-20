
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
    var rows = 6;
    var cols = 6;
    var bombs = 7;
    var cnt = 1;
    var tr = [];
    var DataArray = createData(rows, cols, bombs);
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
                    .attr({ class: ["btn"], 'data-index': cnt, 'data': DataArray[i + 1][j + 1], 'data-disabled': true })
                    .appendTo(td);
                cnt += 1;
            }
        }
    } else {
        alert("Error");
    }
    bbtable.appendTo(".content");
}
createFramework();

console.log("yes")

// 0要怎麼一起點開
// data要先隱藏


$(".btn").click(function () {
    // console.log($(this))
    $(this).attr("data-disabled", false);
    // if (this.attr("data-disabled") == false) {

    // }
});