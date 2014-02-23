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
