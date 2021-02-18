// const ideationButton = document.getElementById('ideation-button');
// const ideationTable = document.getElementById('ideation-table');

const storyButton = document.getElementById('storyboard-button');
const storyboard = document.getElementById('storyboard');

let smHL;
let windowHeight;

// let sections;
// let sectionAnchors;

//toggle storyboard
storyboard.style.display = 'none';
storyButton.addEventListener('click', toggle);
//toggle ideation table
// ideationTable.style.display = 'none';
// ideationButton.addEventListener('click', toggle);

function toggle(e) {
    if (e.target.id === 'storyboard-button') {
        if (storyboard.style.display === 'none') {
            storyboard.style.display = 'block';
            storyButton.innerHTML = 'Hide Storyboard';
        } else if (storyboard.style.display === 'block') {
            storyboard.style.display = 'none';
            storyButton.innerHTML = 'Click Here to View Storyboard';
        }
    }

    // else if (e.target.id === 'ideation-button') {
    //     if (ideationTable.style.display === 'none') {
    //         ideationTable.style.display = 'block';
    //         ideationButton.innerHTML = 'Hide Table';
    //     } else if (ideationTable.style.display === 'block') {
    //         ideationTable.style.display = 'none';
    //         ideationButton.innerHTML = 'Click Here to View All 20 Solutions';
    //     }
    // }

}



function init() {
    windowHeight = window.innerHeight;

    //highlight SM sentences on view
    smHL = document.getElementsByClassName('hl');    
}

// function getSections() {
    // const overview = document.getElementsByClassName('overview');
    // console.log(overview);
    // const otherSections = document.getElementsByClassName('section');
    // console.log(otherSections);
    // otherSections.remove([0])

    // sections = document.querySelectorAll('.overview', '.section');
    // sections = document.querySelectorAll('.section, .overview');
    // sections = document.querySelectorAll('.overview, .sm-problem');
    // sections = document.querySelectorAll('.overview');
    // sectionAnchors = document.querySelectorAll('.anchor');
    // console.log(sectionAnchors);
    // console.log(sections);
// }

function checkPos() {

    //iterate through highlighted elements
    for (let i = 0; i < smHL.length; i++) {
        let element = smHL[i];
        let posFromTop = smHL[i].getBoundingClientRect().top;
        let posFromBottom = smHL[i].getBoundingClientRect().bottom;
        if (posFromTop >= 0 && posFromBottom <= windowHeight) {
            // element.classList.add('sm-hl-trigger');
            // console.log(element.style.background);
            element.style.backgroundPosition = 'left bottom';
            // element.style.color = 'white';
        // } else element.classList.remove('sm-hl-trigger');
        } else element.style.backgroundPosition = 'right bottom'
    }

    //iterate through sections
    // for (let i = 0; i < sections.length; i++) {
    //     let element = sections[i];
    //     let posFromTop = sections[i].getBoundingClientRect().top;
    //     let posFromBottom = smHL[i].getBoundingClientRect().bottom;
    //     let midWindow = windowHeight * 0.75;
    //     console.log(posFromTop, {windowHeight});
    //     // console.log(posFromTop);
    //     // console.log(windowHeight*0.75+20)
    //     // console.log(windowHeight*0.75-20)
    //     // if (posFromTop <= windowHeight*0.75 + 300 && posFromTop >= windowHeight * 0.75 - 300) {
    //     // if (posFromTop >= 0 && posFromBottom <= windowHeight) {
    //         if (posFromTop <= midWindow) {
    //         // element.style.display = 'none';
    //         // console.log({posFromTop});
    //         console.log('hi')

    //         // if (element.classList.contains('overview')) {
    //         //     console.log('hi');
    //         //     // for (let anchor of sectionAnchors) {
    //         //     //     console.log(anchor);
    //         //     // }
    //         // } 
    //     } else console.log('bye');
    // }
}


window.addEventListener('scroll', checkPos);
window.addEventListener('resize', init);

init();
// getSections();
checkPos();