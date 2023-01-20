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
const Carbar = document.querySelector(".car-bar2");
const Carselect = document.querySelector(".car-select");
const CarMap = document.querySelector(".map-cont");

map.addEventListener("click", () => {
  Carbar.style.display = "none";
  Carselect.style.display = "none";
  CarMap.style.display = "";
});

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
  Carbar.style.display = "";
  Carselect.style.display = "";
  CarMap.style.display = "none";
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
    Carbar.style.display = "";
    Carselect.style.display = "";
    CarMap.style.display = "none";
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

const carj = document.querySelectorAll(".car-jpg");
const details = document.querySelectorAll(".details-top");
const dateilsContainer = document.querySelector(".car-details-info");
// let t;

carj.forEach((element, index) => {
  element.addEventListener("click", () => {
    t = index;

    carj.forEach((element, index) => {
      if (index == t) {
        console.log(index);
      }
    });
    details.forEach((element, index) => {
      if (index == t) {
        element.style.display = "flex";
        dateilsContainer.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
  });
});

const detailsSend = document.querySelectorAll(".detailsend");

// detailsend.addEventListener("click",()=>{
//   dateilsContainer.style.display="none"
//   console.log("");

// })

detailsSend.forEach((detail) => {
  detail.addEventListener("click", () => {
    console.log("ssz");

    detail.parentNode.parentNode.parentNode.style.display = "none";
  });
});

const detailsImgContainer1 = document.querySelectorAll(".det1");
const detailsImgInfo = document.querySelector(".details-img-info");
const imgRight = document.querySelector(".img-right ");
const imgLeft = document.querySelector(".img-left ");

let imgSay;

detailsImgContainer1.forEach((element, index) => {
  element.addEventListener("click", () => {
    imgSay = index;
    console.log(detailsImgContainer1.src);

    // console.log(element.src);

    detailsImgContainer1.forEach((element, index) => {
      if (index == imgSay) {
        console.log(element);
        detailsImgInfo.src = element.src;
      }
    });
  });
});

let ImgCont = 0;

imgLeft.addEventListener("click", () => {
  console.log(detailsImgContainer1.length - 1);
  if (ImgCont == 0) {
    ImgCont = detailsImgContainer1.length - 1;
  } else {
    ImgCont--;
    // console.log("s");
  }
  console.log("photo", detailsImgContainer1[ImgCont].src);
  detailsImgInfo.src = detailsImgContainer1[ImgCont].src;
});
imgRight.addEventListener("click", () => {
  console.log("S");
  if (ImgCont == detailsImgContainer1.length - 1) {
    console.log(ImgCont);
    ImgCont = 0;
  } else {
    ImgCont++;
    console.log("sx", ImgCont);
  }
  detailsImgInfo.src = detailsImgContainer1[ImgCont].src;
});

//*2--------start
const detailsImgContainer2 = document.querySelectorAll(".det2");
const detailsImgInfo2 = document.querySelector(".details-img-info2");
const imgRight2 = document.querySelector(".img-right2");
const imgLeft2 = document.querySelector(".img-left2");

let imgSay2;

detailsImgContainer2.forEach((element, index) => {
  element.addEventListener("click", () => {
    imgSay2 = index;
    console.log(detailsImgContainer2.src);

    // console.log(element.src);

    detailsImgContainer2.forEach((element, index) => {
      if (index == imgSay2) {
        console.log(element.src);
        detailsImgInfo2.src = element.src;
      }
    });
  });
});

let ImgCont2 = 0;

imgLeft2.addEventListener("click", () => {
  console.log(detailsImgContainer2.length - 1);
  if (ImgCont2 == 0) {
    ImgCont2 = detailsImgContainer1.length - 1;
  } else {
    ImgCont2--;
    // console.log("s");
  }
  console.log("photo", detailsImgContainer2[ImgCont2].src);
  detailsImgInfo2.src = detailsImgContainer2[ImgCont2].src;
});
imgRight2.addEventListener("click", () => {
  console.log("S");
  if (ImgCont2 == detailsImgContainer2.length - 1) {
    console.log(ImgCont);
    ImgCont2 = 0;
  } else {
    ImgCont2++;
    console.log("sx", ImgCont);
  }
  detailsImgInfo2.src = detailsImgContainer2[ImgCont2].src;
});
