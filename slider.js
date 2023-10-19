
let currentSlide = 1;

sliderelement = document.getElementById('slider')
const total = sliderelement.childElementCount;
console.log(total)

function next() {
    if (currentSlide < total) {
        currentSlide++;
        showSlide()
        // console.log(currentSlide)
    }

}

function prev() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide()
    }

}

function showSlide() {
    const slides = document.getElementById('slider').getElementsByTagName('li')
    for (let i = 0; i < total; i++) {
        const element = slides[i];
        if (currentSlide === i + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }
    // console.log(currentSlide)

    if (currentSlide === total) {
        document.getElementById('next').classList.add('opacity-30')

    } else {
        document.getElementById('next').classList.remove('opacity-30')
    }
}



