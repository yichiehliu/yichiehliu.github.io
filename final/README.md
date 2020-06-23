## 製作踩地雷遊戲
**https://yichiehliu.github.io**
## 主要用到的檔案
***

**Folder:resized_images/ 放網頁會用到的圖檔 favicon_io/是網頁tab icon圖檔 icon/則是網頁內的icon圖檔<br>**
**html:index.html index.html<br>**
**Css:index.css game.css<br>**
**js:index.js game.js<br>**
***

### 讀取Cookie
**https://www.fooish.com/javascript/cookie.html**

**1.遊戲設定選單<br>**
**有難易度、長寬和炸彈數量可以設定**
**簡單版:8 x 8，10顆炸彈**
**中等版:16 x 16，24顆炸彈**
**困難版:24 x 24，99顆炸彈**


**2.踩地雷畫面**
**2.1 製造炸彈、準備畫面呈現**
**2.1.1 先利用Cookie獲取使用者在前一夜設定的遊戲難度**
**2.1.2 獲得遊戲設定資訊之後就可以利用亂數產生器(RNG)產生炸彈位子**


**(2)踩地雷遊戲進行邏輯**
**(3)製造炸彈**

**3.遊戲結果**



**參考其他網頁設計後開始自己的設計<br>**
**HTML是自己手動刻<br>**
**CSS也是自己寫為主，以下有列出來的1-4點有參考css程式碼，或是不會的語法會用參考其他教學網站 codepen範例進行修改<br>**
**js的部分也是以下1-4點參考，但都有因為自己的用途修改程式碼<br>**

## 網頁版本
**原本有已經做好第一版了，一開始設計稿也是以第一版為主，以球體動畫為主軸，<br>github網址：https://github.com/yichiehliu/ycliu.github.io<br>但後來覺得太醜，於是全部砍掉重寫<br>**
**後來寫的第二版才是現在連結到的版本**
***
## 設計稿圖檔
**第一版設計：<br>https://excalidraw.com/#json=5660845757431808,QTwDapHgQiGk1C4G_wdBag<br>**
**第二版設計：<br>https://www.figma.com/file/VglTf4p6DWG1zpmgGFoUMl/Untitled?node-id=0%3A1**

## 內容呈現

**內容分為六個部分<br>**
**0.Header:Logo在滑鼠滑過會跳起，旁邊a標籤會跳轉至下面對應的部分<br>**
**1.About: 主頁，利用scrollma做淡入特效<br>**
**2.Projects:Show出我做過相關project的主題，上面有對應主題的icon，點view more可以連結到專案的github網址<br>**
**3.Internships: 利用scrollma Show出我的實習經歷和照片<br>**
**4.Activity: Show出我曾經參加的活動和簡述，圖片會放大縮小，點圖片可以連結到相應的活動網址或粉專<br>**
**5.Contact:可以利用表單聯繫我，會由EmailJS的服務進行email傳送，另有相關社群媒體icon可以聯繫<br>**

**加入響應式設計，分為兩個版型<br>**
**1.980px以下，for 手機平板等<br>**
**2.980px以上 for 電腦**

***
## 程式碼參考
**1.Internship主頁Particles程式碼參考**
**https://vincentgarreau.com/particles.js/#default<br>**

**2.Scroll事件程式碼參考<br>**
**https://russellgoldenberg.github.io/scrollama/sticky-side/<br>**
**https://github.com/russellgoldenberg/scrollama/blob/master/docs/sticky-side/index.html<br>**

**3.Email js 套件程式碼參考<br>**
**https://www.emailjs.com/docs/rest-api/send/**

**4.header scroll改變位置<br>**
**https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp**
***

## 設計參考
**色彩設計<br>**
**https://cssgradient.io/<br>**
**https://colorhunt.co/palettes/<br>**

**設計版型參考<br>**
**https://muffingroup.com/#homePage<br>**
**https://leo9studio.com/<br>**
**https://oceanstart.dev/<br>**
**https://skookum.com/<br>**
**http://praticca.com.br/<br>**
**https://dwl.media/**

