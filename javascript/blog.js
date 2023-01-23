const articles = document.querySelectorAll(".articles-container");
const buttonPrew = document.querySelector(".buttonPrew");
const buttonNext = document.querySelector(".buttonNext");
const buttonx = document.querySelectorAll(".buttonx");

let u = 1;

function blogLeft() {
  if (u == articles.length - 1) {
    u = 0;
    articles[1].style.display = "none";
    articles[0].style.display = "block";
  } else {
    u++;
    articles[0].style.display = "none";
    articles[1].style.display = "block";
  }

  // buttonNext.addEventListener("click",()=>{})
  buttonx.forEach((element, index) => {
    element.addEventListener("click", () => {
      u = index;
      console.log(u);

      buttonx.forEach((element, index) => {
        if (index == u) {
          element.classList.add("bb");
        } else {
          element.classList.remove("bb");
        }
      });
      articles.forEach((element, index) => {
        if (index == u) {
          // console.log(Number(index[u]));
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
    buttonx.forEach((element, index) => {
      if (index == u) {
        element.classList.add("bb");
      } else {
        element.classList.remove("bb");
      }
    });
  });
}

blogLeft();

buttonPrew.addEventListener("click", blogLeft);

u = 0;
function blogRight() {
  if (u == 0) {
    u = articles.length - 1;
    articles[0].style.display = "none";
    articles[1].style.display = "block";
  } else {
    u--;
    articles[1].style.display = "none";
    articles[0].style.display = "block";
  }

  buttonx.forEach((element, index) => {
    element.addEventListener("click", () => {
      u = index;
      buttonx.forEach((element, index) => {
        if (index == u) {
          element.classList.add("bb");

          console.log(index);
        } else {
          element.classList.remove("bb");
        }
      });
      articles.forEach((element, index) => {
        if (index == u) {
          // console.log(Number(index[u]));
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
    buttonx.forEach((element, index) => {
      if (index == u) {
        element.classList.add("bb");
      } else {
        element.classList.remove("bb");
      }
    });
  });
}

buttonNext.addEventListener("click", blogRight);
