(function() {
    'use strict';
    console.log('reading');
    const vid = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        console.log(myVideo.currentTime)
        if (0 < myVideo.currentTime && myVideo.currentTime < 4) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (7 < myVideo.currentTime && myVideo.currentTime < 9) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }

        if (11 < myVideo.currentTime && myVideo.currentTime < 13) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
        if (13.5 < myVideo.currentTime && myVideo.currentTime < 16) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
        if (17 < myVideo.currentTime && myVideo.currentTime < 19) {
            line5.className = "showing";
        } else {
            line5.className = "hidden";
        }
        if (21 < myVideo.currentTime && myVideo.currentTime < 24) {
            line6.className = "showing";
        } else {
            line6.className = "hidden";
        }
    }

    fs.addEventListener('click', function() {
        console.log('requestfullscreen')
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    })
})()