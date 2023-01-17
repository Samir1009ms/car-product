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
// const old =document.querySelector(".old")
// old.addEventListener("click",()=>{

//     carall.forEach(element=>{
//         if(element.dataset.name=="bmw"){}
//     })
// })


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
  carall.forEach(element=>{
    if(element.dataset.name=="bmw"){
      element.style.display = "none";
        
    }
})
});

popular.addEventListener("click",()=>{

    carall.forEach(element=>{
    
        element.style.display = "";

    })
})
