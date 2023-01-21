const articles = document.querySelectorAll(".articles-container");
const buttonPrew = document.querySelector(".buttonPrew");
const buttonNext = document.querySelector(".buttonNext");
const button = document.querySelectorAll(".button");

let u = 1;

function blogLeft() {
  if (u == articles.length - 1) {
    u = 0;
    articles[0].style.display = "none";
    articles[1].style.display = "block";
  } else {
    u++;
    articles[1].style.display = "none";
    articles[0].style.display = "block";
  }

  button.forEach((element, index) => {
    element.addEventListener("click", () => {
      u = index;

      button.forEach((element, index) => {
        if (index == u) {
          element.style.background = "#ffd000";
        } else {
          element.style.background = "#fff";
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
    button.forEach((element,index)=>{
        if(index==u){
            element.style.background = "#ffd000";
        }
        else{
            element.style.background = "#fff";
        
        }
    })
  });
}

blogLeft();

buttonPrew.addEventListener("click", blogLeft);

function blogRight() {
  if (u == 0) {
    u = articles.length - 1;
    articles[1].style.display = "none";
    articles[0].style.display = "block";
  } else {
    u--;
    articles[0].style.display = "none";
    articles[1].style.display = "block";
  }

  button.forEach((element, index) => {
    element.addEventListener("click", () => {
      u = index;

      button.forEach((element, index) => {
        if (index == u) {
          element.style.background = "#ffd000";
        } else {
          element.style.background = "#fff";
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
    button.forEach((element,index)=>{
        if(index==u){
            element.style.background = "#ffd000";
        }
        else{
            element.style.background = "#fff";
        
        }
    })
  });
}

buttonNext.addEventListener("click", blogRight);
