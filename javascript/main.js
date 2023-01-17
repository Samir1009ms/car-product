const video = document.querySelector(".video");

// video.addEventListener("loadeddata", () => {
//     // video.play()
// });

video.addEventListener("ended", () => {
  video.play();
});

// const s = [
//   "home",
//   "about",
//   "services",
//   "cars",
//   "pages",
//   "blog",
//   "contact",
//   "login",
// ];
// let listlink = document.querySelectorAll(".list-link");

// for (let index = 0; index < listlink.length; index++) {
//   // const element = array[index];

//   listlink[index].onclick=function(){

//     let s = listlink[0];

//     while (s) {
//       if (s.tagName == "A") {
//         s.style.coor = "red";

//       }
//     }
//     this.style.color = "green";
  
//   }
    


// }

// console.log(s[3]);

// s.forEach((x) => {
//   if (x.includes("home")) {
//     listlink[0].style.color = "red";
//   } else {
//   }
// });

// listlink.forEach((x) => {
//   x.addEventListener("click", () => {
//     console.log(x.textContent);
//     console.log(s[2]);

//     if (x.textContent.includes(s[x])) {
//     } else {
//     }
//     // for (let index = 0; index < s.length; index++) {

//     // }
//   });
// });
