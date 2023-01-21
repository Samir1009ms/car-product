const nav = document.querySelector(".nav");



window.addEventListener("scroll", () => {
  // console.log(window.scrollY)
  if (window.scrollY > 450) {
    nav.setAttribute("style", "background-color: black; transition: 0.35s;");
  } else {
    nav.setAttribute("style", "background-color: rgba(0, 0, 0, 0.3)");
  }
});

const scrollicon = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {

    setTimeout(() => {
      scrollicon.style.transform = `translateY(${10 * 1}px)`;
      // console.log("1lll");
      clearTimeout();
    }, 10);
  } else {
    scrollicon.style.transform = `translateY(${93 * 1}px)`;
    // console.log("22lll");
  }
});

scrollicon.addEventListener("click", () => {
  // console.log("skdfjsdf");
  let say = window.scrollY;
  let interval = setInterval(() => {
    window.scrollTo(0, say);
    say -= 12;
    if (say <= 1) {
      clearInterval(interval);
    }
  }, 5);



});


