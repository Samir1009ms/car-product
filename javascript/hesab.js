const form = document.querySelector(".form")
const adError = document.querySelector(".ad-error")
const soyadError = document.querySelector(".soyad-error")
const emailError = document.querySelector(".email-error")
const nomreError = document.querySelector(".nomre-error")
const tarixError = document.querySelector(".tarix-error")
const sifr = /^[a-zA-Z0-9]{8,12}$/
const namee = /^[a-zA-Z0-9]{4,12}$/
const text = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
const num = /^[0-9+]{11,12}$/
const date = /^[0-9/]{10}$/
const ad = document.querySelector(".ad")
const soyad = document.querySelector(".soyad")
const email = document.querySelector(".email")
const nomre = document.querySelector(".number")
const tarix = document.querySelector(".tarix")

loc =localStorage.getItem("form")
let ssxs =JSON.parse(loc)
ad.value=ssxs[1].name

form.addEventListener("submit", event => {
    event.preventDefault()

    if (namee.test(form.ad.value)) {
        ad.setAttribute("style", "border:1px solid green")
        adError.classList.add("hidden")
    } else {
        ad.setAttribute("style", "border:2px solid red")
        adError.classList.remove("hidden")
    }
    if (namee.test(form.soyad.value)) {
        soyad.setAttribute("style", "border:1px solid green")
        soyadError.classList.add("hidden")
    } else {
        soyad.setAttribute("style", "border:2px solid red")
        soyadError.classList.remove("hidden")
    }
    if (text.test(form.email.value)) {
        email.setAttribute("style", "border:1px solid green")
        emailError.classList.add("hidden")
    } else {
        email.setAttribute("style", "border:2px solid red")
        emailError.classList.remove("hidden")
    }
    if (num.test(form.nomre.value)) {
        nomre.setAttribute("style", "border:1px solid green")
        nomreError.classList.add("hidden")
    } else {
        nomre.setAttribute("style", "border:2px solid red")
        nomreError.classList.remove("hidden")
    }
    if (date.test(form.tarix.value)) {
        tarix.setAttribute("style", "border:1px solid green")
        tarixError.classList.add("hidden")
    } else {
        tarix.setAttribute("style", "border:2px solid red")
        tarixError.classList.remove("hidden")
    }
})


const esas = document.querySelector(".esas")

esas.addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/index.html", "_self");
})

const yeniform = document.querySelector(".right-form")
const cari = document.querySelector(".cari")
const yeni1 = document.querySelector(".yeni1")
const yeni2 = document.querySelector(".yeni2")
const cariError = document.querySelector(".cari-error")
const yeni1Error = document.querySelector(".yeni1-error")
const yeni2Error = document.querySelector(".yeni2-error")

yeniform.yeni.forEach(event => {
    event.addEventListener("keyup", (x) => {
        if (sifr.test(x.target.value) && yeni1.value === yeni2.value) {
            x.target.setAttribute("style", "border:1px solid green")
            yeni2Error.classList.add("hidden")
            yeni1.setAttribute("style", "border:2px solid green")
            yeni2.setAttribute("style", "border:2px solid green")
        }
        else {
            x.target.setAttribute("style", "border:1px solid red")
            yeni2Error.classList.remove("hidden")   
            yeni1Error.classList.add("hidden")
            yeni1.setAttribute("style", "border:2px solid red")
            yeni2.setAttribute("style", "border:2px solid red")
        }
    })
});

yeniform.addEventListener("submit", event => {
    event.preventDefault()

    if (sifr.test(yeniform.cari.value)) {
        cariError.classList.add("hidden")
        cari.setAttribute("style", "border:2px solid green")
    }
    else{
        cariError.classList.remove("hidden")
        cari.setAttribute("style", "border:2px solid red")
    }
    if(sifr.test(yeni1.value)&&sifr.test(yeni2.value)){
        yeni1Error.classList.add("hidden")
        yeni1.setAttribute("style", "border:2px solid green")
        yeni2.setAttribute("style", "border:2px solid green")
    }else{
        yeni1Error.classList.remove("hidden")
        yeni1.setAttribute("style", "border:2px solid red")
        yeni2.setAttribute("style", "border:2px solid red")
    
    }
})

