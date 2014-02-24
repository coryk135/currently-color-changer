// Authors: Cory Kinberger and Austin Brogle
// Github: https://github.com/coryk135/currently-color-changer
//         https://github.com/broglea

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