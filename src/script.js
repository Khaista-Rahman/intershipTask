const imageSlider = document.getElementById('imageSlider');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const sliderButtons = document.querySelectorAll('.slider-btn');

let currentIndex = 0;
const totalImages = imageSlider.children.length;

function slideImages(index) {
  const offset = index * -100;
  imageSlider.style.transform = `translateX(${offset}%)`;
  updateActiveButton(index);
}


function updateActiveButton(index) {
  sliderButtons.forEach((button, i) => {
    button.style.backgroundColor = i === index ? 'black' : 'transparent';
  });
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages; 
  slideImages(currentIndex);
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
  slideImages(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages; // Loop forward
  slideImages(currentIndex);
}, 2500);

sliderButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentIndex = i;
    slideImages(currentIndex);
  });
});

updateActiveButton(currentIndex);

