var languageBar = document.querySelector('.language');
var languageList = document.querySelector('.sub-language');

languageBar.addEventListener('click', () => {
  languageList.classList.toggle("clicked");
})

document.addEventListener('click', (e) => {
  if (e.target.closest('.language')) {
    return;
  }

  languageList.classList.remove("clicked");
})

// drop down directory
var dropDownItem = document.querySelectorAll(".directory-list > li")
var dropDownList = document.querySelectorAll(".medicare");

dropDownItem.forEach((item, index) => item.addEventListener('click', () => {
  dropDownList[index].classList.toggle("clicked");
}))

document.addEventListener('click', (e) => {
  if (e.target.closest('.directory-list li')) {
    return;
  }

  dropDownList.forEach((item) => item.classList.remove("clicked"));
})

//slider button arrow change color on and off hover
var sliderButton = document.querySelectorAll(".slider-button button")

sliderButton.forEach((item) => item.addEventListener('mouseover', (e) => {
  var sliderButtonContent = e.target.querySelector("div svg path");
  if (sliderButtonContent) {
    sliderButtonContent.setAttribute("fill", "#fff");
  }
}))

sliderButton.forEach((item) => item.addEventListener('mouseleave', (e) => {
  var sliderButtonContent = e.target.querySelector("div svg path");
  sliderButtonContent.setAttribute("fill", "#000");
}))

// slider function
  // set current value, get image and text elements
var current = 0;
var sliderText = document.querySelectorAll('.slider-text .member-review')
var sliderImages = document.querySelectorAll('.slider-image-box image')
  // Clear all images
function reset () {
  sliderImages.forEach((item) => item.style.display = "none");
  sliderText.forEach((item) => item.style.display = "none");
}
  // Initiate the slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
  sliderText[0].style.display = "block";
}
  // Show Previous
function showPrev () {
  reset();
  sliderImages[current - 1].style.display = "block";
  sliderText[current - 1].style.display = "block";
  current--;
}
  // Show Next
function showNext () {
  reset();
  sliderImages[current + 1].style.display = "block";
  sliderText[current + 1].style.display = "block";
  current++;
}
  // Click Left on Slider
sliderButton[0].addEventListener('click', () => {
  if(current === 0) {
    current = sliderImages.length;
  }
  showPrev();
})
  //Click Right on Slider
sliderButton[1].addEventListener('click', () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  showNext();
})

startSlide();
