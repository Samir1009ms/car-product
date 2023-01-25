const closeBtnup = document.querySelector(".qeydiyyatsiz-text");
const formlogin = document.querySelector(".loginParol");
const form = document.querySelector(".registerform");
const sifr = /^[a-zA-Z0-9]{8,12}$/;
const namee = /^[a-zA-Z0-9]{2,12}$/;

formlogin.sifre.addEventListener("keyup", (event) => {
  if (sifr.test(event.target.value)) {
    event.target.setAttribute("style", "border:1px solid green");
  } else {
    event.target.setAttribute("style", "border:1px solid red");
    sifreerror.classList.remove("hidden");
  }
});
const registerform = document.querySelector(".registerform");
const sifreerror1 = document.querySelector(".sifreerror1");
const sifreerror2 = document.querySelector(".sifreerror2");

const paroll = document.querySelector(".paroll");
let password = document.getElementById("sifre");
let password2 = document.getElementById("sifre2");
const mail2 = document.querySelector(".mail2");
const mailerror = document.querySelector(".mailerror");
const emailll = localStorage.getItem("email");
const passwordd = localStorage.getItem("password");
const addd = document.querySelector(".ad");
form.sifre.forEach((event) => {
  event.addEventListener("keyup", (x) => {
    if (sifr.test(x.target.value) && password.value === password2.value) {
      x.target.setAttribute("style", "border:1px solid green");
      yanlis.classList.add("hidden");
      password.setAttribute("style", "border:2px solid green");
      password2.setAttribute("style", "border:2px solid green");
    } else {
      x.target.setAttribute("style", "border:1px solid red");
      yanlis.classList.remove("hidden");
      password.setAttribute("style", "border:2px solid red");
      password2.setAttribute("style", "border:2px solid red");
      sifreerror1.classList.add("hidden");
      sifreerror2.classList.add("hidden");
    }
  });
});
const yanlis = document.querySelector(".yanlis");
const aderror = document.querySelector(".aderror");
const add = document.querySelector(".ad");
const soyad2 = document.querySelector(".soyad2");
const soyaderror = document.querySelector(".soyaderror");
const loc = localStorage.getItem("form");

let acu = [];

registerform.addEventListener("submit", (e) => {
  e.preventDefault();
  form.sifre.forEach((event) => {
    if (sifr.test(password.value) && sifr.test(password2.value)) {
      sifreerror1.classList.add("hidden");
      sifreerror2.classList.add("hidden");
      password.setAttribute("style", "border:2px solid green");
      password2.setAttribute("style", "border:2px solid green");
      //   localStorage.setItem("password", password.value);
    } else {
      sifreerror1.classList.remove("hidden");
      sifreerror2.classList.remove("hidden");
      password.setAttribute("style", "border:2px solid red");
      password2.setAttribute("style", "border:2px solid red");
    }
  });

  if (text.test(registerform.email.value)) {
    mail2.setAttribute("style", "border:1px solid green");
    mailerror.classList.add("hidden");
    // localStorage.setItem("email", registerform.email.value);
    // if (emailll == registerform.email.value) {
    // }
  } else {
    mailerror.classList.remove("hidden");
    mail2.setAttribute("style", "border:2px solid red");
  }
  if (namee.test(registerform.ad.value)) {
    aderror.classList.add("hidden");
    add.setAttribute("style", "border:1px solid green");
  } else {
    aderror.classList.remove("hidden");
    add.setAttribute("style", "border:2px solid red");
  }
  if (namee.test(registerform.soyad.value)) {
    soyaderror.classList.add("hidden");
    soyad2.setAttribute("style", "border:2px solid green");
  } else {
    soyaderror.classList.remove("hidden");
    soyad2.setAttribute("style", "border:2px solid red");
  }
  // console.log(registerform.ad.value);
});
const byu = document.querySelector(".daxil-ol1");
// let registeredMails = JSON.parse(loc)
// console.log(registeredMails[1].email);


function data() {
  
    let aco = {};
    aco.id = acu.length;
    aco.name = addd.value;
    aco.soyad = soyad2.value;
    aco.email = mail2.value;
    acu.push(aco);
    console.log(acu);
localStorage.setItem("form", JSON.stringify(acu));
  
}

byu.addEventListener("click", data);

// console.log(loc.email);

const loginSign = document.querySelector(".loginSign");
const loginSignup = document.querySelector(".loginSignup");
const Sign = document.querySelector(".Sign");
const signUp = document.querySelector(".Signup");
const loginBtn = document.querySelector(".loginBtn");

loginSign.addEventListener("click", () => {
  loginSign.setAttribute("style", "background:#ffd000");
  loginSignup.setAttribute("style", "background:none");
  signUp.classList.add("hidden");
  Sign.classList.remove("hidden");
  loginBtn.classList.remove("height");
});
loginSignup.addEventListener("click", () => {
  loginSign.setAttribute("style", "background:none");
  loginSignup.setAttribute("style", "background:#ffd000");
  Sign.classList.add("hidden");
  signUp.classList.remove("hidden");
  loginBtn.classList.add("height");
});

const emailerror = document.querySelector(".emailerror");
const mail = document.querySelector(".mail");
const sifreerror = document.querySelector(".sifreerror");
const parol = document.querySelector(".parol");
const text =
  /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
formlogin.addEventListener("submit", (e) => {
  e.preventDefault();

  if (text.test(formlogin.email.value) && formlogin.email.value == emailll) {
    mail.setAttribute("style", "border:1px solid green");
    emailerror.classList.add("hidden");
    console.log(formlogin.email.value);
    // console.log(emailll.value);
  } else {
    mail.setAttribute("style", "border:2px solid red");
    emailerror.classList.remove("hidden");
  }
  if (sifr.test(formlogin.sifre.value)) {
    sifreerror.classList.add("hidden");
    parol.setAttribute("style", "border:2px solid green");
  } else {
    sifreerror.classList.remove("hidden");
    parol.setAttribute("style", "border:2px solid red");
  }
});

const rulesExit = document.querySelector(".rulesExit");
const rules = document.querySelector(".rules");
const qayda = document.querySelector(".qaydalink");

rulesExit.addEventListener("click", () => {
  rules.classList.toggle("hidden");
});
qayda.addEventListener("click", () => {
  rules.classList.toggle("hidden");
});
