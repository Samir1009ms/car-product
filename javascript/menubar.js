const mainBtn=document.querySelector(".hamburgr")
const navbar =document.querySelector(".nav-list")
let menusay = 0
mainBtn.addEventListener("click", () => {
   
    if(menusay===0){
        navbar.style.display="flex"
        menusay++
    }
    else{
        navbar.style.display="none"
       menusay--
    }


})


const blogDrop=document.querySelector(".blogDrop")
const drow =document.querySelector(".drow")

blogDrop.addEventListener("click",()=>{
    drow.classList.toggle("hidden")
    
})

const pagesDrop=document.querySelector(".pagesDrop")
const drow2 =document.querySelector(".drow2")

pagesDrop.addEventListener("click",()=>{
    drow2.classList.toggle("hidden")
    
})


const detailsDrop=document.querySelector(".detailsdrop")
const drow3 =document.querySelector(".drow3")

detailsDrop.addEventListener("click",()=>{
    drow3.classList.toggle("hidden")
    
})
