(function() {
var chrome_warning_text = "建議使用最新版 chrome 瀏覽器才能正常執行本網頁",
chrome_protocol_text = "如您已安裝 Chrome，請同意用 Chrome 開啟網站，才能確保執行正常。或是請取消後自行改用外部瀏覽器開啟本頁面網址",
isLine = userAgent.indexOf("Line") > -1,
  
try{  
catch {
if (isLine) {
location.href = thisHref.indexOf("?") > 0 ? "https://dts24839169.github.io/wapaul-1/&openExternalBrowser=1" : "https://dts24839169.github.io/wapaul-1/?openExternalBrowser=1";  

}else (
confirm(chrome_protocol_text)){
}
}
}
}
