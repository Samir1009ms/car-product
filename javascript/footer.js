const footerForm =document.querySelector(".footer-form")
const footerRegex = /^[a-zA-Z0-9]{4,30}$/

footerForm.addEventListener("submit",e=>{
    e.preventDefault()

    if(footerRegex.test(footerForm.footer.value)){
        alert("Mesaage Succes")
    }
    else{
    // console.log("sehv");
    alert("Message none")
    }
})
