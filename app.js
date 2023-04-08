let btn =document.querySelector('#checkbtn');
let cross =document.querySelector('.corss');
let slider = document.querySelector('.slider')


// toggle wala part 
function navigation(){
    if(slider.classList.contains("slidershow")){
        slider.classList.remove("slidershow")

    }
    else{
        slider.classList.add("slidershow");
    }
  

}
btn.addEventListener('click',navigation)




// cross k liye 

function crossbtn(){
    if(slider.classList.contains("slidershow")){
        slider.classList.remove("slidershow")
    }
    else{
        slider.classList.add("slidershow")
    }
}
cross.addEventListener('click',crossbtn)

