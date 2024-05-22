"use strict";
var _a;
let navIcon = document.getElementById('navIcon');
navIcon.addEventListener('click', () => {
    document.getElementById('navMenu').style.display = 'block';
    document.getElementById('navClose').style.display = 'block';
    navIcon.style.display = 'none';
});
(_a = document.getElementById('navClose')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    document.getElementById('navMenu').style.display = 'none';
    document.getElementById('navClose').style.display = 'none';
    document.getElementById('navIcon').style.display = 'block';
});
let sliderDiv = document.getElementById('sliderImg');
const sliderImges = ['../images/sliderPics/pic1.jpg', '../images/sliderPics/pic2.jpg', '../images/sliderPics/pic3.jpg', '../images/sliderPics/pic4.jpg'];
setInterval(sliderImageChanger, 3000);
let imageIndex = 0;
function sliderImageChanger(images = sliderImges) {
    sliderDiv.src = sliderImges[imageIndex];
    if (imageIndex < images.length - 1) {
        imageIndex++;
    }
    else {
        imageIndex = 0;
    }
}
