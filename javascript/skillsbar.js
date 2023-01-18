const progress1=document.querySelector(".progress1")
const progress2=document.querySelector(".progress2")
const progress3=document.querySelector(".progress3")
let say1=0
let say2=0
let say3=0
let skills1= setInterval(() => {

    if(say1===550){
        clearInterval(skills1)
    }else{
    say1+=10
    }

    progress1.textContent=say1 +"+"
// console.log(say1);
}, 25);



let skills2=setInterval(() => {
    if(say2===250){
    clearInterval(skills2)
    }else{
    say2+=5
    }
    progress2.textContent=say2+"+"
    // console.log(say2);


}, 25);
let skills3 = setInterval(() => {
    if(say3===50){
    clearInterval(skills3)
    }else{
    say3++
    }
    progress3.textContent=say3+"+"
    // console.log(say3);


}, 25);