let mousePosX = 0,
mousePosY = 0,
mouseCircle = document.getElementById("mouse-outer"),
mouseMiddle = document.getElementById("mouse-inner");


document.onmousemove = (e) => {
// mousePosX = e.pageX;
// mousePosY = e.pageY;
mousePosX = e.clientX;
mousePosY = e.clientY;
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