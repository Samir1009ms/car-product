const carDetails = document.querySelectorAll(".car-details-container");
const CarPrew = document.querySelector(".prew");
const CarNext = document.querySelector(".next");
const Click = document.querySelectorAll(".click");

let c = 1;

function carleft() {
  if (c == carDetails.length - 1) {
    c = 0;
    carDetails[1].classList.add("hidden");
    carDetails[0].classList.remove("hidden");
  } else {
    c++;
    // carDetails[0].style.display = "none";
    // carDetails[1].style.display = "block";
    carDetails[0].classList.add("hidden");
    carDetails[1].classList.remove("hidden");
  }

  Click.forEach((element, index) => {
    element.addEventListener("click", () => {
      c = index;
      Click.forEach((element, index) => {
        if (index == c) {
          element.classList.add("bb");
        } else {
          element.classList.remove("bb");
        }
      });

      carDetails.forEach((element, index) => {
        if (index == u) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      });
    });
    Click.forEach((element, index) => {
      if (index == c) {
        element.classList.add("bb");
      } else {
        element.classList.remove("bb");
      }
    });
  });
}
carleft();
CarPrew.addEventListener("click", carleft);

function carright() {
  if (c == 0) {
    c = carDetails.length - 1;
    carDetails[0].classList.add("hidden");
    carDetails[1].classList.remove("hidden");
  } else {
    c--;
    // carDetails[0].style.display = "none";
    // carDetails[1].style.display = "block";
    carDetails[1].classList.add("hidden");
    carDetails[0].classList.remove("hidden");
  }

  Click.forEach((element, index) => {
    element.addEventListener("click", () => {
      c = index;
      Click.forEach((element, index) => {
        if (index == c) {
          element.classList.add("bb");
        } else {
          element.classList.remove("bb");
        }
      });

      carDetails.forEach((element, index) => {
        if (index == u) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      });
    });
    Click.forEach((element, index) => {
      if (index == c) {
        element.classList.add("bb");
      } else {
        element.classList.remove("bb");
      }
    });
  });
}

CarNext.addEventListener("click", carright);

let  df =0;
// console.log(divx);
// const divx =document.querySelectorAll(".div")

 const carDetailsButton = document.querySelectorAll(".car-details-button");
 function ss(){
    carDetailsButton.forEach((element, index) => {
        element.addEventListener("click", () => {
          df = index;
          carDetailsButton.forEach((element, index) => {
            if (index == df) {
              console.log(element, index);
            }
          });
        //   divx.forEach((element,index)=>{
        //     console.log(element);
        //     if(index==df){

        //         element.classList.remove("hidden")
        //         console.log(element);
        //     }else{
        //         element.classList.add("hidden")
            
        //     }
        //     console.log(index);
        // })
          
        });
      });
      
}

ss()