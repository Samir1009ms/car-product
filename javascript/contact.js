const contactForm=document.querySelector(".form-top")
const emailRegex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/
const emailTextRegex = /^[a-zA-Z0-9 ]{2,35}$/

const contactEmail=document.querySelector(".email")
const contactName=document.querySelector(".name")
const contactSubject=document.querySelector(".subject")
const nametext =document.querySelector(".nametext")
const emailtext =document.querySelector(".emailtext")
const subjecttext=document.querySelector(".subjecttext")
const contactMesaj =document.querySelector(".mesaj")
const Mesajtxt=document.querySelector(".mesajtxt")
const succes =document.querySelector(".succes")

contactForm.addEventListener("submit",(e)=>{
e.preventDefault()
    if(emailTextRegex.test(contactForm.name.value)){
        contactName.setAttribute("style", "border:2px solid green")
        nametext.setAttribute("style","display:none;margin-bottom:0px")

    }else{
        contactName.setAttribute("style", "border:2px solid red;margin:0px")
        nametext.setAttribute("style","display:block;margin-bottom:20px")

    }
    if(emailRegex.test(contactForm.email.value)){
        contactEmail.setAttribute("style", "border:2px solid green")
        emailtext.setAttribute("style","display:none;margin-bottom:0px")

    }else{
        contactEmail.setAttribute("style", "border:2px solid red;margin:0px")
        emailtext.setAttribute("style","display:block;margin-bottom:20px")

    }
      if(emailTextRegex.test(contactForm.subject.value)){
        contactSubject.setAttribute("style", "border:2px solid green")
        subjecttext.setAttribute("style","display:none;margin-bottom:0px")

    }else{
        contactSubject.setAttribute("style", "border:2px solid red;margin:0px")
        subjecttext.setAttribute("style","display:block;margin-bottom:20px")

    }

    if(emailTextRegex.test(contactForm.mesaj.value)){
        contactMesaj.setAttribute("style", "border:2px solid green")
        Mesajtxt.setAttribute("style","display:none;margin-bottom:0px")

    }else{
        contactMesaj.setAttribute("style", "border:2px solid red;margin:0px")
        Mesajtxt.setAttribute("style","display:block;margin-bottom:20px")

    }

    if(contactName.value !==""&&contactEmail.value!==""&&contactSubject.value!==""&&contactMesaj.value!==""){
       

        setTimeout(() => {
            contactName.value=""
            contactEmail.value=""
            contactMesaj.value=""
            contactSubject.value=""
            contactName.style.border="1px solid #ffd000"
            contactEmail.style.border="1px solid #ffd000"
            contactMesaj.style.border="1px solid #ffd000"
            contactSubject.style.border="1px solid #ffd000"
            succes.style.display="block"  
            setTimeout(() => {
            succes.style.display="none"  
                
            }, 2000);
        }, 3000);
    }



})

