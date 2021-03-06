<p align="center">
<a href="https://www.buymeacoffee.com/Dude.its.Matt.G"><img alt="Hotdogs!" src="https://img.shields.io/badge/Buy%20Me%20a%20Hotdog-%F0%9F%8C%AD-blue?style=for-the-badge"></a>
<img alt="GitHub Sponsors" src="https://img.shields.io/github/sponsors/Dude-its-Matt-G?style=for-the-badge"></img>
<img alt="GitHub followers" src="https://img.shields.io/github/followers/Dude-its-Matt-G?style=for-the-badge"></img>
<img alt="GitHub User's stars" src="https://img.shields.io/github/stars/Dude-its-Matt-G?style=for-the-badge"></img>
</p>

---
<p align="center">
  <img width="830" height="332" src="https://github.com/Dude-its-Matt-G/RUNBOX/blob/main/RBSC.png">
</p>
 
<p align="center">
The RUNBOX is a GUI for touch screens built on Electron.js - Bootstrap for toggling GPIO enabled USB hubs on a Raspberry Pi.
<br> 
A touch screen USB hub for short.๐
</p>

---

# Things You'll Need ๐ง


* Raspberry Pi 4 8gb - smaller RAM variants not tested
* Micro SD card 32gb
* Touch screen (Currently using a Waveshare HDMI touch screen at 1024x600)
* 5v 3a PSU Micro USB for Waveshare monitor
* 3x Yepkit Ykush3
* 3x USB 3.0 cables A-male to micro-B - for connecting the ykush to the PC/Laptop 
* Access to a laser engraver/cutter (for laser-cut case - file not in repo yet - requires cleaning)
* 1/8th inch ply wood for housing OR Plexiglass of same thickness
* Female to female jumper cable x 40 20cm
* ~~Micro-USB power supply - 5.1V 2.5A, UL Listed - for ykush3 boards~~
  * See Notes below
* Momentary non-latching switch for pi on/off power switching without keyboard and mouse (see notes)
* 40 pin header strip 2.54mm - for GPIO on ykush3 boards
* Micro USB male to 5 pin screw terminal female solderless charging and data transfer converter adapter
* Jumper wires - for running power to the ykush boards
* Soldering tools

---

# How-to ๐คจ
## Super Beginner Stuff
```diff
- Install the Raspberry Pi OS onto an SD card
```
https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up
```diff
- Install NPM ande NODE.JS
```
https://www.makersupplies.sg/blogs/tutorials/how-to-install-node-js-and-npm-on-the-raspberry-pi
```diff
- Setup github capabilities
```
https://projects.raspberrypi.org/en/projects/getting-started-with-git
<br>
<br>


## Cloning Repo

1. Clone the repo
```sh
git clone git@github.com:Dude-its-Matt-G/RUNBOX.git
```
2. Install NPM packages
```sh
npm install
```
3. Rebuild modules
```sh
./node_modules/.bin/electron-rebuild
```
4. Run the application
```sh
npm run start
```


## Ykush Setup

You will need to enable GPIO control manually as these don't come preconfigured out of the box.
It's fairly simple, just follow Yepkits instructions on their website.
This will mean installing the ykushcmd package in order to communicate with the boards.<br>
https://learn.yepkit.com/tutorial/ykush3-gpio-control-interface<br>
<br>
You will also need to manually solder the header pins for the GPIO on the boards yourself.
If you have never done such a thing, there are youtube videos that explain perfectly on how to successfully solder.<br>
https://www.youtube.com/watch?v=tfIwHuGzUEk<br>
<br>
The Ykush3 does not show active port indications when the board it not connected to a computer via the upstream port.
At the time of writing, in order to gain this functionality, you will need to contact Yepkit for a firmware update.
It is not mandatory, just a nicety. You can do this project without this.
<br>
<br>
Connect the Pi to the Ykush boards through GPIO using female to female jumpers as followed
<br>
| Board | Ykush GPIO | Pi Pin # | | Board | Ykush GPIO | Pi Pin # | | Board | Ykush GPIO | Pi Pin # |
|-------|------------|---------|-|-------|------------|---------|-|-------|------------|---------|
|      1|      1     |   08 (GPIO14)    | |          2|      1     |   22 (GPIO25)   | | 3|      1     |   36 (GPIO16)   |
|       |      2     |   10 (GPIO15)   | |       |      2     |   24 (GPIO08)   | |       |      2     |   38 (GPIO20)   |
|       |      3     |   12 (GPIO18)   | |       |      3     |   26 (GPIO07)   | |       |      3     |   40 (GPIO21)   |
<br>
You can change the pins by changing main.js

```javascript
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
```
The last three lines are for a fourth board I was running at one point.
<br>


## Waveshare Setup

In order to get the Waveshare to display properly you will need to edit the config.txt.
To do so, open the terminal and type:
```
sudo nano /boot/config.txt
```
You will need to add the following:
```
# 1920x1080 monitor (0 means monitor 1 the outside most hdmi port)
hdmi_force_hotplug:0=1
hdmi_group:0=0
hdmi_mode:0=82

# waveshare (inside most hdmi port)
hdmi_force_hotplug:1=1
hdmi_group:1=2
hdmi_mode:1=87
hdmi_cvt:1=1024x600 60
```

*Ensure not to plug the monitors to the wrong ports.*

Now, after you plug in the Waveshare's USB cable into the Pi for touch screen control youll notice that the touch inputs are being sent to the wrong screen. To fix this you will need to run an xinput command in the terminal that tells the Pi which screen the input should go to.
Now this command may differ from time to time especially if you don't have two monitors plugged in. Since I do at all times the script never needs to be changed. I have this line in the same startup script as the lines for opening the app on boot.

```
xinput map-to-output 9 HDMI-2
```

Please visit this page for instructions on how to tailor this code for your own use:\
https://networks.guru/2018/11/23/using-dual-monitor-dual-touch-screens-on-ubuntu/


## Startup Service Setup

The script I have running at boot is located in the "/home/pi" directory and named startup.sh for ease of use.
Inside this file looks like this:

```
#! /bin/bash

xinput map-to-output 9 HDMI-2
cd "home/pi/RUNBOX" && npm start
export NODE_ENV=development
npm start
```
As you can see we are sending the xinput command so that we don't have to do it ourselves at startup and we are also sending the commands for the app to open.

You can follow these instructions to assist in the creation of startup services:\\
https://scruss.com/blog/2017/10/22/creating-a-systemd-user-service-on-your-raspberry-pi/


# Notes ๐

* I added an on/off button using the instructions from:
  * https://howchoo.com/g/mwnlytk3zmm/how-to-add-a-power-button-to-your-raspberry-pi
* I use this switch from Amazon because GRTA :)
  * https://www.amazon.com/dp/B07SRGG7KF?psc=1&ref=ppx_yo2_dt_b_product_details
* I found that my motherboard doesnt like to supply power to all the of these Ykush boards at once and the wall-wart doesnt like it either.<br>
  * As a solution, make sure one board is on external power, the other two are on USB power until I fab up a power supply for the three boards. Ideas are welcome!
* You probably realized that you can change the theme pretty easily. If not, now you know!<br>
Go to https://codepen.io/ for the best experience (in my humble opinion).<br>
This is what I used to get the baseline theme down. In the future, I will provide a link to mine that you can use as a template.
  * Did you make a pretty sick GUI? Fork the project, Add it, and open a pull request!
* I believe I added the script to push the app to the second monitor in main.js lines 30 through 39


---
# Conclusion ๐

Voila! You should now have the whole shebang all good to go!
<br>
There are still quite a few things that I'd like to incorporate. You can see some of it in the **Goals** section below!
<br>
Find bugs? Have better ways to do things? Additions? Feel free to contribute!
<br>

---
# Contributions ๐ญ
<p align="center">
There are many ways to contribute to the project! Adding features, fixing features or even just buying me a hotdog!
<br>
Sounds silly but every hotdog goes towards achieving goals! Wanna buy me a hotdog? Click below!<br></p>
<p align="center">
<a href="https://www.buymeacoffee.com/Dude.its.Matt.G"><img alt="Yay hotdogs!" src="https://img.shields.io/badge/Buy%20Me%20a%20Hotdog-%F0%9F%8C%AD-blue?style=for-the-badge"></a></p>
<br>
<p align="center">
Please be sure to read the contribution guide!</p>
<p align="center">
<a href="https://github.com/Dude-its-Matt-G/RUNBOX/blob/main/CONTRIBUTING.md"><img alt="Contributing Guide" src="https://img.shields.io/badge/Contribution%20Guide-%F0%9F%93%96-orange?style=for-the-badge"></a>
</p>

---
# Dependencies ๐คฏ
### Auto-installed with this repo so don't sweat this part. It's just informational

* @popperjs/core ^2.9.2
* bootstrap ^5.0.1
* jquery ^3.6.0
* onoff 6.0.3
* popper.js ^1.14.3

---
# Credits ๐
### Thank you! ๐
* Raspberry Pi
* Search Engines
* Video hosting services
* Social media outlets
* Yepkit
* https://github.com/boraciner/electron-gpio

---
# Goals ๐ฏ
- [ ] Proprietary board solution (๐๏ธ In Work)
- [ ] GUI Editable button names
- [ ] Better save profile management
- [ ] Better theme managemnent
- [ ] VoiceMeeter control
- [ ] Spotify control (๐๏ธ In Work - currently using Now Playing Visualizer by [Jose Manuel Perez](https://github.com/JMPerez/spotify-player))
- [ ] Hardware temperature monitoring
- [ ] Stream control 
- [ ] Remove unnecessary dependencies
- [ ] MOAR THEMES
