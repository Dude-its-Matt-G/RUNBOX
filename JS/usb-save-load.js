
    function uncheck(){
        
        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch1").checked = checked; 
        if(myonoffswitch1.checked){
                ipcRenderer.send('B1P1', 'ON')
                console.log("Successfully triggered B1P1 ON")
            }else{
                ipcRenderer.send('B1P1', 'OFF')
                console.log("Successfully triggered B1P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch2").checked = checked; 
        if(myonoffswitch2.checked){
                ipcRenderer.send('B1P2', 'ON')
                console.log("Successfully triggered B1P2 ON")
            }else{
                ipcRenderer.send('B1P2', 'OFF')
                console.log("Successfully triggered B1P2 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch3").checked = checked; 
        if(myonoffswitch3.checked){
                ipcRenderer.send('B1P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B1P3', 'OFF')
                console.log("Successfully triggered B1P3 OFF")
            }
  

            
        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch4").checked = checked; 
        if(myonoffswitch4.checked){
                ipcRenderer.send('B2P1', 'ON')
                console.log("Successfully triggered B2P1 ON")
            }else{
                ipcRenderer.send('B2P1', 'OFF')
                console.log("Successfully triggered B2P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch5").checked = checked; 
        if(myonoffswitch5.checked){
                ipcRenderer.send('B2P2', 'ON')
                console.log("Successfully triggered B2P2 ON")
            }else{
                ipcRenderer.send('B2P2', 'OFF')
                console.log("Successfully triggered B2P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch6").checked = checked; 
        if(myonoffswitch6.checked){
                ipcRenderer.send('B2P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B2P3', 'OFF')
                console.log("Successfully triggered B2P3 OFF")
            }
  


        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch7").checked = checked; 
        if(myonoffswitch7.checked){
                ipcRenderer.send('B3P1', 'ON')
                console.log("Successfully triggered B3P1 ON")
            }else{
                ipcRenderer.send('B3P1', 'OFF')
                console.log("Successfully triggered B3P1 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch8").checked = checked; 
        if(myonoffswitch8.checked){
                ipcRenderer.send('B3P2', 'ON')
                console.log("Successfully triggered B3P2 ON")
            }else{
                ipcRenderer.send('B3P2', 'OFF')
                console.log("Successfully triggered B3P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch69"));
        document.getElementById("myonoffswitch9").checked = checked; 
        if(myonoffswitch9.checked){
                ipcRenderer.send('B3P3', 'ON')
                console.log("Successfully triggered B3P3 ON")
            }else{
                ipcRenderer.send('B3P3', 'OFF')
                console.log("Successfully triggered B3P3 OFF")
            }
            
    console.log("ALL CLEAR")
        }





    function save01() {
        console.log("Save01 CLICKED!")
      var checkbox = document.getElementById("myonoffswitch1");
      localStorage.setItem("myonoffswitch1", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch2");
      localStorage.setItem("myonoffswitch2", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch3");
      localStorage.setItem("myonoffswitch3", checkbox2.checked);
      
      var checkbox = document.getElementById("myonoffswitch4");
      localStorage.setItem("myonoffswitch4", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch5");
      localStorage.setItem("myonoffswitch5", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch6");
      localStorage.setItem("myonoffswitch6", checkbox2.checked);

      var checkbox = document.getElementById("myonoffswitch7");
      localStorage.setItem("myonoffswitch7", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch8");
      localStorage.setItem("myonoffswitch8", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch9");
      localStorage.setItem("myonoffswitch9", checkbox2.checked);
    }
  




    function load01(){
        console.log("load01 CLICKED!")
        var checked = JSON.parse(localStorage.getItem("myonoffswitch1"));
        document.getElementById("myonoffswitch1").checked = checked; 
        if(myonoffswitch1.checked){
                ipcRenderer.send('B1P1', 'ON')
                console.log("Successfully triggered B1P1 ON")
            }else{
                ipcRenderer.send('B1P1', 'OFF')
                console.log("Successfully triggered B1P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch2"));
        document.getElementById("myonoffswitch2").checked = checked; 
        if(myonoffswitch2.checked){
                ipcRenderer.send('B1P2', 'ON')
                console.log("Successfully triggered B1P2 ON")
            }else{
                ipcRenderer.send('B1P2', 'OFF')
                console.log("Successfully triggered B1P2 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch3"));
        document.getElementById("myonoffswitch3").checked = checked; 
        if(myonoffswitch3.checked){
                ipcRenderer.send('B1P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B1P3', 'OFF')
                console.log("Successfully triggered B1P3 OFF")
            }
  

            
        var checked = JSON.parse(localStorage.getItem("myonoffswitch4"));
        document.getElementById("myonoffswitch4").checked = checked; 
        if(myonoffswitch4.checked){
                ipcRenderer.send('B2P1', 'ON')
                console.log("Successfully triggered B2P1 ON")
            }else{
                ipcRenderer.send('B2P1', 'OFF')
                console.log("Successfully triggered B2P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch5"));
        document.getElementById("myonoffswitch5").checked = checked; 
        if(myonoffswitch5.checked){
                ipcRenderer.send('B2P2', 'ON')
                console.log("Successfully triggered B2P2 ON")
            }else{
                ipcRenderer.send('B2P2', 'OFF')
                console.log("Successfully triggered B2P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch6"));
        document.getElementById("myonoffswitch6").checked = checked; 
        if(myonoffswitch6.checked){
                ipcRenderer.send('B2P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B2P3', 'OFF')
                console.log("Successfully triggered B2P3 OFF")
            }
  


        var checked = JSON.parse(localStorage.getItem("myonoffswitch7"));
        document.getElementById("myonoffswitch7").checked = checked; 
        if(myonoffswitch7.checked){
                ipcRenderer.send('B3P1', 'ON')
                console.log("Successfully triggered B3P1 ON")
            }else{
                ipcRenderer.send('B3P1', 'OFF')
                console.log("Successfully triggered B3P1 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch8"));
        document.getElementById("myonoffswitch8").checked = checked; 
        if(myonoffswitch8.checked){
                ipcRenderer.send('B3P2', 'ON')
                console.log("Successfully triggered B3P2 ON")
            }else{
                ipcRenderer.send('B3P2', 'OFF')
                console.log("Successfully triggered B3P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch9"));
        document.getElementById("myonoffswitch9").checked = checked; 
        if(myonoffswitch9.checked){
                ipcRenderer.send('B3P3', 'ON')
                console.log("Successfully triggered B3P3 ON")
            }else{
                ipcRenderer.send('B3P3', 'OFF')
                console.log("Successfully triggered B3P3 OFF")
            }
    }
  

    function save02() {
        console.log("Save02 CLICKED!")
        var checkbox = document.getElementById("myonoffswitch1");
      localStorage.setItem("myonoffswitch1_2", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch2");
      localStorage.setItem("myonoffswitch2_2", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch3");
      localStorage.setItem("myonoffswitch3_2", checkbox2.checked);
      
      var checkbox = document.getElementById("myonoffswitch4");
      localStorage.setItem("myonoffswitch4_2", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch5");
      localStorage.setItem("myonoffswitch5_2", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch6");
      localStorage.setItem("myonoffswitch6_2", checkbox2.checked);

      var checkbox = document.getElementById("myonoffswitch7");
      localStorage.setItem("myonoffswitch7_2", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch8");
      localStorage.setItem("myonoffswitch8_2", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch9");
      localStorage.setItem("myonoffswitch9_2", checkbox2.checked);
    }
  


    function load02(){
        console.log("load02 CLICKED!")
        var checked = JSON.parse(localStorage.getItem("myonoffswitch1_2"));
        document.getElementById("myonoffswitch1").checked = checked; 
        if(myonoffswitch1.checked){
                ipcRenderer.send('B1P1', 'ON')
                console.log("Successfully triggered B1P1 ON")
            }else{
                ipcRenderer.send('B1P1', 'OFF')
                console.log("Successfully triggered B1P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch2_2"));
        document.getElementById("myonoffswitch2").checked = checked; 
        if(myonoffswitch2.checked){
                ipcRenderer.send('B1P2', 'ON')
                console.log("Successfully triggered B1P2 ON")
            }else{
                ipcRenderer.send('B1P2', 'OFF')
                console.log("Successfully triggered B1P2 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch3_2"));
        document.getElementById("myonoffswitch3").checked = checked; 
        if(myonoffswitch3.checked){
                ipcRenderer.send('B1P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B1P3', 'OFF')
                console.log("Successfully triggered B1P3 OFF")
            }
  

            
        var checked = JSON.parse(localStorage.getItem("myonoffswitch4_2"));
        document.getElementById("myonoffswitch4").checked = checked; 
        if(myonoffswitch4.checked){
                ipcRenderer.send('B2P1', 'ON')
                console.log("Successfully triggered B2P1 ON")
            }else{
                ipcRenderer.send('B2P1', 'OFF')
                console.log("Successfully triggered B2P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch5_2"));
        document.getElementById("myonoffswitch5").checked = checked; 
        if(myonoffswitch5.checked){
                ipcRenderer.send('B2P2', 'ON')
                console.log("Successfully triggered B2P2 ON")
            }else{
                ipcRenderer.send('B2P2', 'OFF')
                console.log("Successfully triggered B2P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch6_2"));
        document.getElementById("myonoffswitch6").checked = checked; 
        if(myonoffswitch6.checked){
                ipcRenderer.send('B2P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B2P3', 'OFF')
                console.log("Successfully triggered B2P3 OFF")
            }
  


        var checked = JSON.parse(localStorage.getItem("myonoffswitch7_2"));
        document.getElementById("myonoffswitch7").checked = checked; 
        if(myonoffswitch7.checked){
                ipcRenderer.send('B3P1', 'ON')
                console.log("Successfully triggered B3P1 ON")
            }else{
                ipcRenderer.send('B3P1', 'OFF')
                console.log("Successfully triggered B3P1 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch8_2"));
        document.getElementById("myonoffswitch8").checked = checked; 
        if(myonoffswitch8.checked){
                ipcRenderer.send('B3P2', 'ON')
                console.log("Successfully triggered B3P2 ON")
            }else{
                ipcRenderer.send('B3P2', 'OFF')
                console.log("Successfully triggered B3P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch9_2"));
        document.getElementById("myonoffswitch9").checked = checked; 
        if(myonoffswitch9.checked){
                ipcRenderer.send('B3P3', 'ON')
                console.log("Successfully triggered B3P3 ON")
            }else{
                ipcRenderer.send('B3P3', 'OFF')
                console.log("Successfully triggered B3P3 OFF")
            }

    }
  

    function save03() {
        console.log("Save03 CLICKED!")
      var checkbox = document.getElementById("myonoffswitch1");
      localStorage.setItem("myonoffswitch1_3", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch2");
      localStorage.setItem("myonoffswitch2_3", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch3");
      localStorage.setItem("myonoffswitch3_3", checkbox2.checked);

      var checkbox = document.getElementById("myonoffswitch4");
      localStorage.setItem("myonoffswitch4_3", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch5");
      localStorage.setItem("myonoffswitch5_3", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch6");
      localStorage.setItem("myonoffswitch6_3", checkbox2.checked);

      var checkbox = document.getElementById("myonoffswitch7");
      localStorage.setItem("myonoffswitch7_3", checkbox.checked);
      var checkbox2 = document.getElementById("myonoffswitch8");
      localStorage.setItem("myonoffswitch8_3", checkbox2.checked);
      var checkbox2 = document.getElementById("myonoffswitch9");
      localStorage.setItem("myonoffswitch9_3", checkbox2.checked);
    }
  


    function load03(){
        console.log("load03 CLICKED!")
        var checked = JSON.parse(localStorage.getItem("myonoffswitch1_3"));
        document.getElementById("myonoffswitch1").checked = checked; 
        if(myonoffswitch1.checked){
                ipcRenderer.send('B1P1', 'ON')
                console.log("Successfully triggered B1P1 ON")
            }else{
                ipcRenderer.send('B1P1', 'OFF')
                console.log("Successfully triggered B1P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch2_3"));
        document.getElementById("myonoffswitch2").checked = checked; 
        if(myonoffswitch2.checked){
                ipcRenderer.send('B1P2', 'ON')
                console.log("Successfully triggered B1P2 ON")
            }else{
                ipcRenderer.send('B1P2', 'OFF')
                console.log("Successfully triggered B1P2 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch3_3"));
        document.getElementById("myonoffswitch3").checked = checked; 
        if(myonoffswitch3.checked){
                ipcRenderer.send('B1P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B1P3', 'OFF')
                console.log("Successfully triggered B1P3 OFF")
            }
  

            
        var checked = JSON.parse(localStorage.getItem("myonoffswitch4_3"));
        document.getElementById("myonoffswitch4").checked = checked; 
        if(myonoffswitch4.checked){
                ipcRenderer.send('B2P1', 'ON')
                console.log("Successfully triggered B2P1 ON")
            }else{
                ipcRenderer.send('B2P1', 'OFF')
                console.log("Successfully triggered B2P1 OFF")
            }

        var checked = JSON.parse(localStorage.getItem("myonoffswitch5_3"));
        document.getElementById("myonoffswitch5").checked = checked; 
        if(myonoffswitch5.checked){
                ipcRenderer.send('B2P2', 'ON')
                console.log("Successfully triggered B2P2 ON")
            }else{
                ipcRenderer.send('B2P2', 'OFF')
                console.log("Successfully triggered B2P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch6_3"));
        document.getElementById("myonoffswitch6").checked = checked; 
        if(myonoffswitch6.checked){
                ipcRenderer.send('B2P3', 'ON')
                console.log("Successfully triggered B1P3 ON")
            }else{
                ipcRenderer.send('B2P3', 'OFF')
                console.log("Successfully triggered B2P3 OFF")
            }
  


        var checked = JSON.parse(localStorage.getItem("myonoffswitch7_3"));
        document.getElementById("myonoffswitch7").checked = checked; 
        if(myonoffswitch7.checked){
                ipcRenderer.send('B3P1', 'ON')
                console.log("Successfully triggered B3P1 ON")
            }else{
                ipcRenderer.send('B3P1', 'OFF')
                console.log("Successfully triggered B3P1 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch8_3"));
        document.getElementById("myonoffswitch8").checked = checked; 
        if(myonoffswitch8.checked){
                ipcRenderer.send('B3P2', 'ON')
                console.log("Successfully triggered B3P2 ON")
            }else{
                ipcRenderer.send('B3P2', 'OFF')
                console.log("Successfully triggered B3P2 OFF")
            }
        var checked = JSON.parse(localStorage.getItem("myonoffswitch9_3"));
        document.getElementById("myonoffswitch9").checked = checked; 
        if(myonoffswitch9.checked){
                ipcRenderer.send('B3P3', 'ON')
                console.log("Successfully triggered B3P3 ON")
            }else{
                ipcRenderer.send('B3P3', 'OFF')
                console.log("Successfully triggered B3P3 OFF")
            }
    }
