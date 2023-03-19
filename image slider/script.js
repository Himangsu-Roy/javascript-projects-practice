const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const img = [
    "./images/photo1 (1).jpg",
    "./images/photo1 (2).jpg",
    "./images/photo1 (3).jpg",
    "./images/photo1 (4).jpg",
    "./images/photo1 (5).jpg",
    "./images/photo1 (6).jpg",
    "./images/photo1 (7).jpg",
    "./images/photo1 (8).jpg",
    "./images/photo1 (9).jpg",
    "./images/photo1 (10).jpg"
]


let index = 0
setInterval(() => {
    const sliderUrl = document.getElementById("slider-img");

    if(index === img.length) {
        index = 0;
    }
    sliderUrl.setAttribute("src", img[index])
    console.log(index, img[index])

    index++
    // index--
}, 2000);


rightArrow.addEventListener("click", () => {
    index++;
    if(index >= img.length) {
        index = 0;
    }   
});

leftArrow.addEventListener("click", () => {
    index--;
    if(index < 0) {
        index = img.length - 1;
    }
});