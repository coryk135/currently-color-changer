currently-color-changer
=======================

This is a script that adds a really neat color changing effect to the Currently Chrome Extension

Copy and paste this code into the developer console when you are on the Currently page.

```javascript
(function () {
    'use strict';
    var h = 200;
    var delay = 100
    function loopBackground() {
        $('#main')[0].style.backgroundColor = "hsl(" + h + ",80%,60%)";
        h = (h + 1 + 360) % 360;
    }
    var id = setInterval(loopBackground, delay);
})();

```

How to make this change permanent
=================================
First, locate where the Chrome extensions are located on you computer
* Mac (confirmed): ```~/Library/Application\ Support/Google/Chrome/Default/Extensions/```
* Windows: ```%USERPROFILE%\AppData\Local\Google\Chrome\User Data\Default\Extensions\```
* Linux (*unconfirmed*): ```~/.config/google-chrome/Default/Extensions/```
* Linux Chromium (*unconfirmed*): ```~/.config/chromium/Default/Extensions/```

Next, figure out which folder belongs to Currently and add in the code.

**Method 1:**
* Open the dev console in Chrome (Mac: cmd+alt+i and Windows/Linux: F12)
* Hit esc or click on the console tab
* Type ```document.URL```
* The long string of characters between "chrome-extension://" and "/index.html" is the name of the folder that Currently is located in
* Navigate into that folder and locate ```index.html```.
* Edit this file and paste ```<script type="text/javascript" src="js/custom.js"></script>``` above the ```</html>``` tag at the bottom.
* Create a file named ```custom.js``` inside of the js folder.
* Copy and paste the contents of ```currently-color-changer.js``` into custom.js, save, and you're done!

**Note:** If currently is updated you may have to repeat this process.
