currently-color-changer
=======================

This is a script that adds a really neat color changing effect to the Currently Chrome Extension

Copy and paste this code into the developer console when you are on the Currently page.

```javascript
(function () {
    'use strict';
    var h = Math.floor(Math.random() * 361);
    var s = 50;
    var l = 80;
    var delay = 100;
    function loopBackground() { 
    	//background and content are opposite on the color wheel always
    	//Comment out either to turn off color changing on any one of them
        $('#main')[0].style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)";
        $('#content')[0].style.color = "hsl(" + ((h+180) % 360) + "," + s + "%," + (l/2) + "%)"
        h = (h - 1 + 360) % 360;
    }
    var id = setInterval(loopBackground, delay);
})();

```

How to make this change permanent
=================================
First, locate where the Chrome extensions are located on you computer
* Mac (confirmed): ```~/Library/Application\ Support/Google/Chrome/Default/Extensions/```
* Windows (confirmed): ```%USERPROFILE%\AppData\Local\Google\Chrome\User Data\Default\Extensions\```
* Linux (*unconfirmed*): ```~/.config/google-chrome/Default/Extensions/```
* Linux Chromium (*unconfirmed*): ```~/.config/chromium/Default/Extensions/```

Next, look for the folder named ```ojhmphdkpgbibohbnpbfiefkgieacjmh``` 
#####If you do not see this folder:
* Open the Currently tab
* Open the dev console (Mac: cmd+alt+i Windows/Linux: F12)
* Hit esc or click on the console tab
* Type ```document.URL```
* The long string of characters between "chrome-extension://" and "/index.html" is the name of the folder that Currently is located in

Finally,
* Navigate into that folder and locate ```index.html```.
* Edit this file and paste ```<script type="text/javascript" src="js/custom.js"></script>``` above the ```</html>``` tag at the bottom.
* Create a file named ```custom.js``` inside of the js folder.
* Copy and paste the contents of ```currently-color-changer.js``` into custom.js, save, and you're done!

**Note:** If currently is updated you may have to repeat this process.
