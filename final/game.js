// 遊戲前置作業
// 炸彈位子亂數
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



// 製造炸彈格子
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

var rows = 0;
var cols = 0;
var bombs = 0;


// 製造表格框架
function createFramework() {
    bbtable = $("<table></table>").attr({ id: "bbtable" });
    // new Number($("#rowcount").val());
    rows = 5;
    cols = 5;
    bombs = 1;
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
    bbtable.appendTo(".tb-content");
}

var DataArray = []
createFramework();

console.log(DataArray)
// ---------------------------------------------------------------------
// 踩地雷本身
// 打開格子
var clickcnt = cols * rows - bombs
function assignShowArr(x, y) {


    if (($(`[data-index-x="${x}"][data-index-y="${y}"]`).find('div').length == 0) && $(`[data-index-x="${x}"][data-index-y="${y}"]`).css("border-color") != "rgb(112, 199, 243)" && $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-disabled") == "true") {
        clickcnt -= 1;
        // console.log($(`[data-index-x="${x}"][data-index-y="${y}"]`).find('div').length);
        // console.log(DataArray[x][y])

        $("<div></div>")
            .attr({ class: ["white-box"] })
            .appendTo($(`[data-index-x="${x}"][data-index-y="${y}"]`));
        $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-array", DataArray[x][y]);
        $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-disabled", false);
        // 炸彈的話(怕被標記過)所以統一把邊框拿掉
        if (DataArray[x][y] == -1) {
            $(`[data-index-x="${x}"][data-index-y="${y}"]`).css("border-color", "#transparent")
        }
    }

}

function doubleSelect(x, y) {
    var bool = false
    bool = $(`[data-index-x="${x}"][data-index-y="${y}"]`).attr("data-disabled")
    return bool;
}

// 標記炸彈，右鍵，變藍色，不能按左鍵，且要再按一次右鍵才能岸左鍵
$(".btn").contextmenu(function (event) {
    // 避免跳出系統預設右鍵menu
    event.preventDefault();
    var curX = +$(this).attr("data-index-x");
    var curY = +$(this).attr("data-index-y");
    if ($(this).css("border-color") != "rgb(112, 199, 243)" && $(this).attr("data-disabled") == "true") {
        $(this).css("border-color", "rgb(112, 199, 243)")
    }
    else if ($(this).css("border-color") == "rgb(112, 199, 243)" && $(this).attr("data-disabled") == "true") {
        // 會改道炸彈的邊框，所以後面要把-1的border color用掉
        $(this).css("border-color", "#fff")
    }
})

$(".reload").click(function () {
    location.reload(true);
});

var gameOver = 0;

// 點格子，左鍵
$(".btn").click(function () {

    // 1.沒點到炸彈2.要沒被標記 3.也沒被打開
    if (gameOver == 0 && $(this).css("border-color") != "rgb(112, 199, 243)" && $(this).attr("data-disabled") == "true") {
        // 轉INDEX型別

        var curX = +$(this).attr("data-index-x");
        var curY = +$(this).attr("data-index-y");
        var queue = [];

        // 檢查是否是結束遊戲(勝利OR失敗)
        // 點到-1，失敗，把所有炸彈打開，遊戲結束
        if (DataArray[curX][curY] == -1) {
            // assignShowArr(curX, curY)
            gameOver = 1;
            for (var i = 1; i <= rows; i++) {
                for (var j = 1; j <= cols; j++) {
                    if (DataArray[i][j] == -1) {
                        assignShowArr(i, j)
                    }
                }
            }
            // 遊戲結束，重來和main menu
            $(".reload").css("display", "initial")
            $(".menu").css("display", "initial")
        }
        console.log(clickcnt, typeof (clickcnt))

        // 畫面剩下沒點開的都是-1，勝利，遊戲結束
        if (clickcnt == 1) {
            console.log(clickcnt, typeof (clickcnt))
            $(".tb-content").remove()
            $(".winbar").css("display", "flex")
            $(".reload-win").css("display", "initial")
            $(".menu-win").css("display", "initial")


        }



        // 檢查展開
        if (DataArray[curX][curY] == 0) {
            queue.push([curX, curY])
            // 只要queue裡面還有0就繼續開(代表還有格子沒到邊界)
            while (queue.length > 0) {
                const [cX, cY] = queue.shift();
                for (var i = -1; i < 2; i++) {
                    for (var j = -1; j < 2; j++) {
                        // 1.要是空格，就要繼續看他八個方位的格子是什麼 2.要還沒被開過3.如果被標記的話不用管
                        if (DataArray[cX + i][cY + j] == 0 && doubleSelect(cX + i, cY + j) == "true" && $(`[data-index-x="${cX + i}"][data-index-y="${cY + j}"]`).css("border-color") != "rgb(112, 199, 243)") {
                            // console.log(123)
                            queue.push([cX + i, cY + j])
                        }
                        // 不是空格代表是數字(已到邊界，不用進queue)
                        assignShowArr(cX + i, cY + j)
                    }
                }
                // queue.forEach(element => console.log(element));
            }
        }
        // 不是0也不是-1就直接開了
        else {
            assignShowArr(curX, curY)
        }
    }

});