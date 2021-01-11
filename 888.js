<script type ="text/javascript">
                  
/*function isMobile(){
  return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
  );
}

if(!isMobile()) {
window.location = "222.html"
}*/
  
  //重點是下面這行
// true = 是手機，false 就是其他可能（電腦等等的）

/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


//-------------------------------------------------------------------------------------------------------

function is_mobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if(is_mobile()){
    window.location = "222.html";
}else{
    window.location = "404.html";
}

</script>
