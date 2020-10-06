var btn = document.querySelector('.btnClass');
var call = document.querySelector('.btnCall');
function saveName(e){
  //宣告一個變數，綁定輸入欄，讀取&紀錄使用者輸入的文字
  var int = document.querySelector('.textContent').value;
  localStorage.setItem('myName',int); //把輸入的內容存在瀏覽器 
}
function callName(e){
  int = localStorage.getItem('myName'); //取出已存在瀏覽器的資料
  alert(int);
}

btn.addEventListener('click',saveName)
call.addEventListener('click',callName)

//不確定拆分資料的儲存是不是這樣存，然後不知道該怎麼抓下來