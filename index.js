let imageIndex = 0;
let imageCount = document.getElementsByClassName('recipe-pic').length;
let carousel = document.getElementById('carousel');
let slider = document.getElementById('sliderBox');

carousel.addEventListener('click', function(event) {
  imageIndex = (imageIndex >= imageCount - 1) ? 0 : imageIndex + 1;
  console.log((100 * imageIndex) + "%");
  slider.style.left = (-100 * imageIndex) + "%";
})