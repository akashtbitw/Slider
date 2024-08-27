const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const length = images.length
let slideNumber = 1

right.addEventListener("click", () => {
    if(slideNumber < length) {
        slider.style.transform = `translateX(-${slideNumber * 800}px)`
        slideNumber++
    }
    else {
        slider.style.transform = `translateX(0px)`
        slideNumber = 1
    }
    
})

left.addEventListener("click", () => {
    if(slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
        slideNumber--
    } 
    else {
        slider.style.transform = `translateX(-${(length - 1) * 800}px)`
        slideNumber = length
    }
    
})

