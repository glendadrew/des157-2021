(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('section')
    let mode = 'color';

    button.addEventListener('click', function() {
        if (mode === 'color') {
            body.className = 'switch';
            banner.className = 'switch';
            footer.className = 'switch';
            for (let section of sections) {
                section.className = 'switch';
            }
            mode = 'sunflower';
            banner.innerHTML = '<div id="diag1"></div><div id="diag2"></div><div id="diag3"></div>'
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            footer.removeAttribute('class');
            for (let section of sections) {
                section.removeAttribute('class');
            }
            banner.innerHTML = '<div id="st1"></div><div id="st2"></div><div id="st3"></div><div id="st4"></div><div id="st5"></div><div id="st6"></div><div id="st7"></div><div id="st8"></div><div id="st9"></div><div id= "st10"></div><div id = "st11"></div><div id="st12"></div><div id="st13"> </div><div id="st14"></div><div id="st15"></div><div id="st16"></div> <div id="st17"></div><div id="st18"></div><div id="st19"></div><div id="st20"></div><div id="st21"></div><div id="st22"></div><div id="st23" ></div><div id="st24"></div><div id="st25"></div><div id="st26"></div> <div id="st27"></div>'
            mode = 'color'
        }
    })
})()