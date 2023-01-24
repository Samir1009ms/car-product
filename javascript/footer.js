const footerForm = document.querySelector(".footer-form");
const footerRegex = /^[a-zA-Z0-9]{4,30}$/;
const footerMesaj = document.querySelector(".footer-mesaj");
const footerInput = document.querySelector(".footer-input");
const footerSucces = document.querySelector(".footer-succes");

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (footerRegex.test(footerForm.footer.value)) {
    // alert("Mesaage Succes");
    footerSucces.classList.remove("hidden")
    footerInput.value=""

    let sett=setTimeout(() => {
        footerSucces.classList.add("hidden")
    }, 2500);
  } else {
    footerMesaj.classList.remove("hidden");
    footerInput.setAttribute("style", "border:1px solid red");
    let set = setTimeout(() => {
      footerMesaj.classList.add("hidden");
      footerInput.setAttribute("style", "border:1px solid #ffd000");

      clearTimeout(set);
    }, 2500);
  }
});
