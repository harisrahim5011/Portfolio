
// nav bar responsive display
let navIcon = document.getElementById('navIcon')as HTMLElement;
navIcon.addEventListener('click',()=>{
    document.getElementById('navMenu')!.style.display = 'block'
    document.getElementById('navClose')!.style.display='block'
    navIcon.style.display='none'
})
document.getElementById('navClose')?.addEventListener('click',()=>{
    document.getElementById('navMenu')!.style.display = 'none'
    document.getElementById('navClose')!.style.display='none'
    document.getElementById('navIcon')!.style.display = 'block'
})


// slider 
let sliderDiv = document.getElementById('sliderImg') as HTMLImageElement;
const sliderImges: string[] = ['../images/sliderPics/pic1.jpg', '../images/sliderPics/pic2.jpg', '../images/sliderPics/pic3.jpg', '../images/sliderPics/pic4.jpg']

setInterval(sliderImageChanger, 3000)
let imageIndex = 0;
function sliderImageChanger(images: string[] = sliderImges): void {
    sliderDiv.src = sliderImges[imageIndex];
    if (imageIndex < images.length-1) {
        imageIndex++;
    }else{
        imageIndex = 0; 
    }

}




