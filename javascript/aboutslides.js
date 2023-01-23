const clientsSlides=document.querySelectorAll(".clients-cont")

const circle = document.querySelectorAll(".circle");

let sildew = clientsSlides.length - 1;
let length = clientsSlides.length;
let aboutsay = 1;

function left11() {
  console.log("ss");
  if (aboutsay === length-1) {
    aboutsay = 0;
  }
  else {
    aboutsay++;
  }

  clientsSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - aboutsay) * 106.5}%)`;
  });

  circle.forEach((element, indx) => {
    element.addEventListener("click", () => {
      console.log(element);
    aboutsay=indx
      circle.forEach((element,indx)=>{
        if (indx == aboutsay) {
            element.style.color = "#ffd000";
          } else {
            element.style.color = "black";
          }
    })

      clientsSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - indx) * 106.5}%)`;
      });
    });

    circle.forEach((element, indxx) => {
      if (indxx == aboutsay) {
        element.style.color = "#ffd000";
        console.log(indxx);
      } else {
        element.style.color = "black";
      }
    });
  });

}
left11()
// let i=setInterval(() => {
//     left11()
// }, 4000);
