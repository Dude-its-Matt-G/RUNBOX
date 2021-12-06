    const { ipcRenderer } = require('electron')
    let isOn = false
        function B1P1(cb) {
            console.log("Clicked, new value = " + cb.checked);
                if(cb.checked){
                    ipcRenderer.send('B1P1', 'ON')
                        }else{
                    ipcRenderer.send('B1P1', 'OFF')
                    }
        }                   
        function B1P2(cb) {
            console.log("Clicked, new value = " + cb.checked);
                if(cb.checked){
                    ipcRenderer.send('B1P2', 'ON')
                        }else{
                    ipcRenderer.send('B1P2', 'OFF')
                    }
        }
            
                    function B1P3(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B1P3', 'ON')
                        }else{
                            ipcRenderer.send('B1P3', 'OFF')
                        }
                    }
            
                    function B2P1(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B2P1', 'ON')
                        }else{
                            ipcRenderer.send('B2P1', 'OFF')
                        }
                    }
            
                    function B2P2(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B2P2', 'ON')
                        }else{
                            ipcRenderer.send('B2P2', 'OFF')
                        }
                    }
            
                    function B2P3(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B2P3', 'ON')
                        }else{
                            ipcRenderer.send('B2P3', 'OFF')
                        }
                    }
            
                    function B3P1(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B3P1', 'ON')
                        }else{
                            ipcRenderer.send('B3P1', 'OFF')
                        }
                    }
            
                    function B3P2(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B3P2', 'ON')
                        }else{
                            ipcRenderer.send('B3P2', 'OFF')
                        }
                    }
            
                    function B3P3(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B3P3', 'ON')
                        }else{
                            ipcRenderer.send('B3P3', 'OFF')
                        }
                    }
            
                    function B4P1(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B4P1', 'ON')
                        }else{
                            ipcRenderer.send('B4P1', 'OFF')
                        }
                    }
            
                    function B4P2(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B4P2', 'ON')
                        }else{
                            ipcRenderer.send('B4P2', 'OFF')
                        }
                    }
            
                    function B4P3(cb) {
                        console.log("Clicked, new value = " + cb.checked);
                        if(cb.checked){
                            ipcRenderer.send('B4P3', 'ON')
                        }else{
                            ipcRenderer.send('B4P3', 'OFF')
                        }
                    }