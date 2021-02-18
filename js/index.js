const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) { //relative to whole rendered page
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) { //relative to visible portion of page
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return { x: posx, y: posy }
}

class HoverImageFx {
    constructor(el) {
        this.DOM = {el: el};

        this.DOM.reveal = document.createElement('div');
        this.DOM.reveal.className = 'hover-reveal';
        this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
        this.DOM.el.appendChild(this.DOM.reveal);
        this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
        this.DOM.revealInner.style.overflow = 'hidden';
        this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

        this.initEvents();
    }

    initEvents() {
        this.positionElement = (ev) => {
            const mousePos = getMousePos(ev);
            
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            };

            this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
            this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
        };

        this.mouseenterFn = (ev) => {
            this.positionElement(ev);
            this.showImage();
        }
        
        this.mousemoveFn = ev => requestAnimationFrame(() => {
            this.positionElement(ev);
        });

        this.mouseleaveFn = () => {
            this.hideImage();
        }

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    showImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                this.DOM.reveal.style.opacity = 1;
                TweenMax.set(this.DOM.el, {zIndex: 1000});
            }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.2, {
            ease: Sine.easeOut,
            startAt: {x: '-100%'},
            x: '0%'
        }), 'begin')
        .add(new TweenMax(this.DOM.revealImg, 0.2, {
            ease: Sine.easeOut,
            startAt: {x: '100%'},
            x: '0%'
        }), 'begin');
    }

    hideImage() {
        TweenMax.killTweensOf(this.DOM.revealInner);
        TweenMax.killTweensOf(this.DOM.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                TweenMax.set(this.DOM.el, {zIndex: 999});
            },
            onComplete: () => {
                TweenMax.set(this.DOM.el, {zIndex: ''});
                TweenMax.set(this.DOM.reveal, {opacity: 0});
            }
        })
        .add('begin')
        .add(new TweenMax(this.DOM.revealInner, 0.2, {
            ease: Sine.easeOut,
            x: '100%'
        }), 'begin')
        
        .add(new TweenMax(this.DOM.revealImg, 0.2, {
            ease: Sine.easeOut,
            x: '-100%'
        }), 'begin');
    }
}

// console.log([...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')]);
// console.log([...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')]);
[...document.querySelectorAll('[data-fx="1"] > h1 > a')].forEach(link => new HoverImageFx(link));

//mouse cursor
if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle"),
        mouseMiddle = document.getElementById("mouse-middle");
        

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";

        mouseMiddle.style.top = mousePosY + "px";
        mouseMiddle.style.left = mousePosX + "px";

    }
    delayMouseFollow();
    
}
