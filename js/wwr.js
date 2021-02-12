let wwrHL;
let windowHeight;

function init() {
    windowHeight = window.innerHeight;
    wwrHL = document.getElementsByClassName('hl');    
}

function checkPos() {

    //iterate through highlighted elements
    for (let i = 0; i < wwrHL.length; i++) {
        let element = wwrHL[i];
        let posFromTop = wwrHL[i].getBoundingClientRect().top;
        let posFromBottom = wwrHL[i].getBoundingClientRect().bottom;
        if (posFromTop >= 0 && posFromBottom <= windowHeight) {
            // element.classList.add('wwr-hl-trigger');
            element.style.backgroundPosition = 'left bottom';
        // } else element.classList.remove('wwr-hl-trigger');
        } else element.style.backgroundPosition = 'right bottom'

    }
}

window.addEventListener('scroll', checkPos);
window.addEventListener('resize', init);

init();
checkPos();