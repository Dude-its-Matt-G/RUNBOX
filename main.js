const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const {screen} = require('electron');
const path = require('path')
var Gpio = require('onoff').Gpio;
var B1P1 = new Gpio(14, 'out');
var B1P2 = new Gpio(15, 'out');
var B1P3 = new Gpio(18, 'out');

var B2P1 = new Gpio(25, 'out');
var B2P2 = new Gpio(08, 'out');
var B2P3 = new Gpio(07, 'out');

var B3P1 = new Gpio(16, 'out');
var B3P2 = new Gpio(20, 'out');
var B3P3 = new Gpio(21, 'out');

var B4P1 = new Gpio(13, 'out');
var B4P2 = new Gpio(19, 'out');
var B4P3 = new Gpio(26, 'out');




app.whenReady().then(() => {
  const displays = screen.getAllDisplays()
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (externalDisplay) {
    win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,},      
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50,
      kiosk: true,
      
    })
    win.loadFile('index.html')
  }
})


app.on('crashed', (e) => {
  app.relaunch();
  app.quit()
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipcMain.on('B1P1', (event, arg) => {
    console.log("B1P1",arg)
    if(arg==='ON'){
        B1P1.write(1)
    }
    else{
        B1P1.write(0)
    }
  });
  
ipcMain.on('B1P2', (event, arg) => {
    console.log("B1P2",arg)
    if(arg==='ON'){
        B1P2.write(1)
    }
    else{
        B1P2.write(0)
    }
  });

  ipcMain.on('B1P3', (event, arg) => {
    console.log("B1P3",arg)
    if(arg==='ON'){
        B1P3.write(1)
    }
    else{
        B1P3.write(0)
    }
  });



  ipcMain.on('B2P1', (event, arg) => {
    console.log("B2P1",arg)
    if(arg==='ON'){
        B2P1.write(1)
    }
    else{
        B2P1.write(0)
    }
  });
  
ipcMain.on('B2P2', (event, arg) => {
    console.log("B2P2",arg)
    if(arg==='ON'){
        B2P2.write(1)
    }
    else{
        B2P2.write(0)
    }
  });

  ipcMain.on('B2P3', (event, arg) => {
    console.log("B2P3",arg)
    if(arg==='ON'){
        B2P3.write(1)
    }
    else{
        B2P3.write(0)
    }
  });



  ipcMain.on('B3P1', (event, arg) => {
    console.log("B3P1",arg)
    if(arg==='ON'){
        B3P1.write(1)
    }
    else{
        B3P1.write(0)
    }
  });
  
ipcMain.on('B3P2', (event, arg) => {
    console.log("B3P2",arg)
    if(arg==='ON'){
        B3P2.write(1)
    }
    else{
        B3P2.write(0)
    }
  });

  ipcMain.on('B3P3', (event, arg) => {
    console.log("B3P3",arg)
    if(arg==='ON'){
        B3P3.write(1)
    }
    else{
        B3P3.write(0)
    }
  });



  ipcMain.on('B4P1', (event, arg) => {
    console.log("B4P1",arg)
    if(arg==='ON'){
        B4P1.write(1)
    }
    else{
        B4P1.write(0)
    }
  });
  
ipcMain.on('B4P2', (event, arg) => {
    console.log("B4P2",arg)
    if(arg==='ON'){
        B4P2.write(1)
    }
    else{
        B4P2.write(0)
    }
  });

  ipcMain.on('B4P3', (event, arg) => {
    console.log("B4P3",arg)
    if(arg==='ON'){
        B4P3.write(1)
    }
    else{
        B4P3.write(0)
    }
  });
