         <script type ="text/javascript">
         
          <script> 
            var system={
                win:false,
                mac:false,
                xll:false,
                ipad:false
            };
          var p =navigator.platform;
          system.win = p.indexof("win")== 0;
          system.mac = p.indexof("mac")== 0;
          system.xll = (p == "x11") || (p.indexof("linux") == 0);
          system.ipad = (navigator.useragent.match(/ipad/i) !=null)?ture:false;
          
          if(system.win || system.mac || system.xll||system.ipad){
          } else {
               window.location = "222.html";
          }
          </script>
