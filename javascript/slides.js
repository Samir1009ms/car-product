const slides = document.querySelectorAll(".slyde");
const slider = document.querySelector(".slider-container");

let uzunluq = slides.length;
let saygac = 1;
function right() {
  if (saygac === uzunluq - 1) {
    saygac = 0;
  } else {
    saygac++;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - saygac) * 100}%)`;
  });
}

setInterval(() => {
  right();
}, 1500);

const serviceSlides = document.querySelectorAll(".services-bottom-container");
const servicesContainer=document.querySelector(".services-container")
const servicesLeftBtn =document.querySelector(".servicesLeft")
const servicesRightBtn =document.querySelector(".servicesRight")
let leng = serviceSlides.length;
let say = 1;

function servicesLeft() {
  if (say === 0) {
    say = leng;

    if (say === leng) {
      say--;
    }
  } else {
    say--;
  }
  servicesContainer.style.height="500px"
  serviceSlides.forEach((slides, index) => {
    slides.style.transform = `translateX(${(index - say) * 105}%)`;
  });

//   servicesRightBtn.addEventListener("click",()=>{})
}
servicesLeft()
//    console.log( servicesLeft());
    servicesLeftBtn.addEventListener("click",servicesLeft)

    say=0
function servicesRight() {
  if (say === leng - 1) {
    say = 0;
  console.log(say);

  } else {
    say++;
  }
  serviceSlides.forEach((slides, index) => {
    slides.style.transform = `translateX(${(index - say) * 105}%)`;
  });
  console.log("ss");
}

servicesRightBtn.addEventListener("click",servicesRight)