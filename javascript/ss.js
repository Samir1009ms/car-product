const CarDetailsSlider =document.querySelectorAll(".car-details-right-container")
const circl=document.querySelectorAll(".circle")

locall=localStorage.getItem("index")

console.log(locall);
let leng =CarDetailsSlider.length-1
let sa=locall
function detailsleft(){

    // if(sa==0){
    //     sa=leng
    // }else{
    // sa--
    // }

    CarDetailsSlider.forEach((element,index)=>{
        
        element.style.transform = `translateX(${(index - sa) * 106.5}%)`
    })

    circl.forEach((element, indx) => {
        element.addEventListener("click", () => {
          console.log(element);
        sa=indx
          circl.forEach((element,indx)=>{
            if (indx == sa) {
                element.style.color = "#ffd000";
              } else {
                element.style.color = "black";
              }
        })
    
          CarDetailsSlider.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - indx) * 106.5}%)`;
          });
        });
    
        circl.forEach((element, indxx) => {
          if (indxx == sa) {
            element.style.color = "#ffd000";
            console.log(indxx);
          } else {
            element.style.color = "black";
          }
        });
      });



}

detailsleft()