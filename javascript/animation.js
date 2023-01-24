const animation =document.querySelector(".animation")
const header =document.querySelector(".header")
const footer =document.querySelector(".footer")
const main =document.querySelector(".contact")

function animations (){
    animation.classList.remove("hidden")
    let set =setTimeout(() => {
        animation.classList.add("hidden")
        header.classList.remove("hidden")
        main.classList.remove("hidden")
        footer.classList.remove("hidden")
        clearInterval(set)
    }, 2000);
}

window.addEventListener("load",animations)