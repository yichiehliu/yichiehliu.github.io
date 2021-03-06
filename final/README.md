## 製作踩地雷遊戲
**https://yichiehliu.github.io/final**
***

>## 專案運行環境限制
因為我在紀錄使用者遊戲設定有用到cookie，所以在本地端跑這個程式的時候請開terminal跑npm 的server(需要有安裝node.js)，基本上以下三步驟:<br>
1. terminal位置要開在這個專案的位子<br>x
2. 在terminal打npx browser-sync start --server<br>
3. server成功運行之後打開browser在網址列輸入在terminal上顯示允許的port，通常是localhost:3000。<br>

這樣就可以本地運行這個專案了<br>
用file直接打開會跑不出踩地雷的格子，因為後台cookie沒有讀取到<br>
***

>## 主要用到的檔案
* Folder: images/ 放網頁會用到的圖檔和icon<br>
* html: index.html / index.html<br>
* CSS: index.css / game.css<br>
* JS/Jquery: index.js / game.js<br>
***
>## 踩地雷
 

### 1. 遊戲設定選單<br>
* 介面<br>有難易度、長寬和炸彈數量可以設定
    * 簡單版:8 x 8，10顆炸彈
    * 中等版:16 x 16，24顆炸彈
    * 困難版:24 x 24，99顆炸彈<br>
    * 自訂:長寬最高可到30，最低是5，炸彈數不可以超過長*寬，也不可以空白
* 程式邏輯
    * 利用Cookie存下使用者的遊戲設定
    * 只要有使用者選擇簡單、中等、困難的難度，底下長寬和炸彈數自動更改


### 2. 踩地雷遊戲畫面<br>
* 介面
  * 左上: 現在還可以點開的格子/可以點開的格子總數
  * 右上: 計時器
  * 左下: 跳回menu
  * 右下: 重新整理頁面
  * 按左鍵: 點開格子
  * 按右鍵: 標記格子，不能點選已經標記的格子
* 程式邏輯
    * 利用Cookie獲取使用者在前一頁設定的遊戲難度
    * 利用亂數產生器製造炸彈位子
    * 產生使用者輸入的長*寬的2D陣列，並把有炸彈的位子標記為-1
    * 算每一格周圍8格的炸彈數量，把每一格的數字都填上
    * 產生table，每一格都是一個button，
      * 利用`data-index-x`和
    `data-index-y`
    紀錄該button對應到2D陣列的index
      * `data-array`紀錄周圍炸彈數量，沒打開之前都是-99
      * `data-disabled`紀錄是否被打開過

### 3. 踩地雷遊戲邏輯<br>
* 介面
  * 點開第一個button就會開始計時
  * 左上的會跟玩家說現在還可以點的數量
  * 點開會有閃光(css)
  * 按右鍵可以標記，邊框會變藍色
  * 如果點到是0則會以周圍8格繼續擴張，直到碰到格子不是0，是數字就會停止
  * 如果點到是1-8的數字就直接顯示
  * 如果點到炸彈則遊戲結束

* 程式邏輯
  * 利用queue資料結構管理0的展開
    * 一開始有點到0則把該位子push進queue
    * while迴圈管理，只要queue裡面有東西就會把裡面最早push進去的位子拿出來
    * 把那個0周圍的8格的值都檢視一遍，如果是0則要把這個0這個點也push進queue，下一輪繼續檢查這個0的八個方位的格子是什麼，如果是數字1-8就直接打開
    * 這裡考慮要開的格子是要還沒被開過且如果被標記的話不用被打開
    * 只要queue裡面還有0就繼續開(代表還有格子沒到邊界)
    * 一直開到queue清空為止

### 4. 遊戲結果<br>
* 介面
  * 點開如果是炸彈遊戲結束，會跳出所有炸彈，和Replay和跳回main menu的兩個button
  * 畫面剩下沒點開的button都是炸彈，則勝利，遊戲結束，會跳到勝利畫面，會顯示剛剛玩家用了多少時間破關
  * 按下炸彈之後就停止計時、按鈕也都無法再按
* 程式邏輯
  * 按鈕的畫面跳轉都是用`location.reload(true);`和`window.location.href`進行
  * 遊戲的設定因為都是用cookie紀錄，所以重新整理之後還是可以獲得同樣得遊戲設定


***
>## RWD
加入響應式設計，分為兩個版型<br>
1. 768px以下，for 手機平板等<br>
2. 768px以上 for 電腦**

***
>## 程式碼參考
1. Cookie
https://www.fooish.com/javascript/cookie.html


2. Timer
https://codepen.io/PaulBrUK1972/pen/zAbpg
***



