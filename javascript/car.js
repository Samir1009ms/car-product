const popular = document.querySelector(".popular");
const nev = document.querySelector(".new");
const map = document.querySelector(".map");
const full = document.querySelector(".car-full");
const dodge = document.querySelector(".dodge");
const bmw = document.querySelector(".bmw");
const amg = document.querySelector(".amg");
const nissan = document.querySelector(".nissan");
const ford = document.querySelector(".ford");
const carall = document.querySelectorAll(".car-photo");
const carBtnFull = document.querySelectorAll(".car-bar2-button");
const carbuton = document.querySelectorAll(".car-button");
const carbar2 = document.querySelectorAll(".car-bar2-button");
let cont;
let sayy;
carbar2.forEach((element, index) => {
  element.addEventListener("click", () => {
    sayy = index;
    carbar2.forEach((element, index) => {
      if (index == sayy) {
        element.classList.add("car-bar2-btn");
      } else {
        element.classList.remove("car-bar2-btn");
      }
    });
  });
});

carbuton.forEach((element, index) => {
  element.addEventListener("click", () => {
    cont = index;
    carbuton.forEach((element, index) => {
      if (index == cont) {
        element.classList.add("car-bar1-btn");
      } else {
        element.classList.remove("car-bar1-btn");
      }
    });
  });
});

full.addEventListener("click", () => {
  carall.forEach((element) => {
    element.style.display = "";
  });
});

dodge.addEventListener("click", () => {
  carall.forEach((element) => {
    console.log(element);
    element.style.display = "";
    if (element.dataset.name !== "dodge") {
      element.style.display = "none";
    }
  });
});

bmw.addEventListener("click", () => {
  carall.forEach((element) => {
    console.log(element);
    element.style.display = "";
    if (element.dataset.name !== "bmw") {
      element.style.display = "none";
    }
  });
});

amg.addEventListener("click", () => {
  carall.forEach((element) => {
    console.log(element);
    element.style.display = "";
    if (element.dataset.name !== "amg") {
      element.style.display = "none";
    }
  });
});

nissan.addEventListener("click", () => {
  carall.forEach((element) => {
    console.log(element);
    element.style.display = "";
    if (element.dataset.name !== "nissan") {
      element.style.display = "none";
    }
  });
});

ford.addEventListener("click", () => {
  carall.forEach((element) => {
    console.log(element);
    element.style.display = "";
    if (element.dataset.name !== "ford") {
      element.style.display = "none";
    }
  });
});

nev.addEventListener("click", () => {
  bmw.setAttribute("style", "display:none");
  carBtnFull.forEach((element) => {
    if (element.textContent !== "bmw") {
      element.setAttribute("style", "width:19.5%");
    }
  });
  carall.forEach((element) => {
    if (element.dataset.name === "bmw") {
      // element.style.display = "none";
      element.remove();
    }
    element.style.display = "";
  });
});

const bmwAppend = document.querySelector(".bmwww");
const carContainer = document.querySelector(".car-select");
popular.addEventListener("click", () => {
  carBtnFull.forEach((element) => {
    if (element.textContent !== "bmw") {
      element.setAttribute("style", "width:16.2%");
    }
  });

  carall.forEach((element) => {
    element.style.display = "";
  });
  bmw.setAttribute("style", "display:");
  carContainer.appendChild(bmwAppend);
});

//*person-----------------------------------

const personBar = document.querySelectorAll(".person-left-container");
const personImg = document.querySelectorAll(".person-center");
const personText = document.querySelectorAll(".person-right-container");
let sss;

personBar.forEach((element, index) => {
  element.addEventListener("click", () => {
    sss = index;
    personBar.forEach((element, index) => {
      if (index == sss) {
        element.classList.add("leftactive");
        // console.log(element.innerText);
      } else {
        element.classList.remove("leftactive");
      }
    });
    personImg.forEach((element, index) => {
      if (index == sss) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
    personText.forEach((element, index) => {
      if (index == sss) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  });
});

// const carj = document.querySelectorAll(".car-jpg");


// let t;

// carj.forEach((element, index) => {
//   element.addEventListener("click", () => {
//     t = index;
//     m.forEach((element, index) => {
//       element.addEventListener("click", () => {
//         m.forEach((element, index) => {
//           if (index === t) {
//               let o =element.innerText
//               console.log("ss",o);
//             cart.forEach((elemen, index) => {
//               console.log(elemen.textContent);
//               if(o==elemen.textContent){
//                 elemen.style.display="block"
//               }
//               else{
//               console.log("s");
//               }
            
//             });
//           }
//         });
//       });
//     });
    
//   });
// });
