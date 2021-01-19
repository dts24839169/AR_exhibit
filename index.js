<script>
  (function() {
     thisHref = location.href,  
     thisUrl = location.hostname + location.pathname;  
     function isIos() {
        return ( 
         (navigator.userAgent.match(/iPhone|iPad|iPod/i))>-1
  );
 }
  
    if( isIos()) {
         location.href = 'googlechrome://dts24839169.github.io/wapaul-1/222.html' + thisUrl;  
        
    }else {
         location.href = 'googlechrome://navigate?url=dts24839169.github.io/wapaul-1/222.html' + thisUrl;
    }
    })();


   // if (/Line/.test(navigator.userAgent)) {
     //    location.href = location.href + ‘?openExternalBrowser=1’; }
    
</script>








