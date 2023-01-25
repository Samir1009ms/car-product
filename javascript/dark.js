const toggleBtnx = document.querySelector("#buton");
const theme = localStorage.getItem("theme");
const dark = document.querySelector(".light")
const them = localStorage.getItem("them")

if (theme === "dark") document.body.classList.add("dark")
if (them === "dark") dark.classList.add("dark")

toggleBtnx.addEventListener("click", () => {
    dark.classList.toggle("dark")
    document.body.classList.toggle("dark")

    if (theme === "dark" && them === "dark") {
        localStorage.setItem("them", "light")
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
        localStorage.setItem("them", "dark")
    }
})