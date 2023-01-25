const CarDetailsSlider = document.querySelectorAll(
  ".car-details-right-container"
);
const circl = document.querySelectorAll(".circle");

locall = localStorage.getItem("index");

console.log(locall);
let leng = CarDetailsSlider.length - 1;
let sa = locall;
function detailsleft() {
  // if(sa==0){
  //     sa=leng
  // }else{
  // sa--
  // }

  CarDetailsSlider.forEach((element, index) => {
    element.style.transform = `translateX(${(index - sa) * 106.5}%)`;
  });

  circl.forEach((element, indx) => {
    element.addEventListener("click", () => {
      console.log(element);
      sa = indx;
      circl.forEach((element, indx) => {
        if (indx == sa) {
          element.style.color = "#ffd000";
        } else {
          element.style.color = "black";
        }
      });

      CarDetailsSlider.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - indx) * 106.5}%)`;
      });
    });

    circl.forEach((element, indxx) => {
      if (indxx == sa) {
        element.style.color = "#ffd000";
        console.log(indxx);
      } else {
        element.style.color = "black";
      }
    });
  });
}

detailsleft();

const namee = /^[a-zA-Z0-9 ]{2,30}$/;
const email =
  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;

const formTop = document.querySelector(".form-top");
const nameText = document.querySelector(".nametext");
const emailText = document.querySelector(".emailtext");
const sucess = document.querySelector(".succes");
const mesajText = document.querySelector(".mesajtxt");
const clear =document.querySelector(".clear")

formTop.addEventListener("submit", (e) => {
  e.preventDefault();

  if (namee.test(formTop.name.value)) {
    formTop.name.setAttribute("style", "border:1.5px solid green");
  } else {
    nameText.classList.remove("hidden");
    formTop.name.setAttribute("style", "border:1.5px solid red");

    let sets = setTimeout(() => {
      nameText.classList.add("hidden");
      formTop.name.setAttribute("style", "border:");

      clearTimeout(sets);
    }, 2000);
  }
  if (email.test(formTop.email.value)) {

    formTop.email.setAttribute("style", "border:1.5px solid green");

  } else {
    emailText.classList.remove("hidden");
    formTop.email.setAttribute("style", "border:1.5px solid red");

    let sets = setTimeout(() => {
      emailText.classList.add("hidden");
      formTop.email.setAttribute("style", "border:");

      clearTimeout(sets);
    }, 2000)
  }
  if (namee.test(formTop.mesaj.value)) {

    formTop.mesaj.setAttribute("style", "border:1.5px solid green");

  } else {
    mesajText.classList.remove("hidden");
    formTop.mesaj.setAttribute("style", "border:1.5px solid red");

    let sets = setTimeout(() => {
      mesajText.classList.add("hidden");
      formTop.mesaj.setAttribute("style", "border:");

      clearTimeout(sets);
    }, 2000)
  }

  if((formTop.email.value!="")&&(formTop.name.value!="")&&(formTop.mesaj.value!="")){
    
    sucess.classList.remove("hidden")
    console.log("ss");
    let sets = setTimeout(() => {
      sucess.classList.add("hidden");
      clearTimeout(sets);
    }, 2000)
  }

});

clear.addEventListener("click",()=>{
  formTop.mesaj.value=""
  formTop.name.value=""
  formTop.email.value=""
})






