(function() {

userAgent = navigator.userAgent,
thisHref = location.href,
thisUrl = location.hostname + location.pathname,
isAndroid = userAgent.indexOf("Android") > -1,
isIOS = /iPhone|iPad|iPod/i.test(userAgent),

try {
eval("async () => {}");
} catch {
if (isAndroid) {
location.href = "googlechrome://navigate?url="https://dts24839169.github.io/wapaul-1/222.html+ thisUrl
} else {
location.href = "googlechrome://"https://dts24839169.github.io/wapaul-1/222.html+ thisUrl;
}
}
}
