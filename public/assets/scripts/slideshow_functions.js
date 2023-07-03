const images = [
  { 'id': '1', 'url': './public/assets/images/cat-01.jpg' },
  { 'id': '2', 'url': './public/assets/images/cat-02.jpg' },
  { 'id': '3', 'url': './public/assets/images/cat-03.jpg' },
  { 'id': '4', 'url': './public/assets/images/cat-04.jpg' },
];

const image = document.querySelector('.slideshow__content-img');
const nextBtn = document.querySelector('.slideshow__content__next-button');
const prevBtn = document.querySelector('.slideshow__content__prev-button');
const switchBtns = document.querySelectorAll('.slideshow__switch-button');
let i = 0;
let iBtn = 0;

function next() {
  nextAnimation();
  i++;
  if (i > 3) {
    i = 0;
  }
  image.src = images[i].url;
  nextButtonSwitcher();
};

function previous() {
  prevAnimation();
  i--;
  if (i < 0) {
    i = 3;
  }
  image.src = images[i].url;
  prevButtonSwitcher()
};

const nextEffect = [
  { transform: 'translate(20px)',
    opacity: '0.3'},
  { transform: 'translate(0px)',
    opacity: '1.0'},
];

const prevEffect = [
  { transform: 'translate(-20px)',
    opacity: '0.3'},
  { transform: 'translate(0px)',
    opacity: '1.0'},
];

const timer = {
  duration: 500,
  iterations: 1,
};

function nextAnimation() {
  image.animate(nextEffect, timer);
};

function prevAnimation() {
  image.animate(prevEffect, timer);
};

function nextButtonSwitcher() {
  switchBtns[iBtn].classList.remove("active");
  iBtn++;
  if (iBtn > 3) {
    iBtn =  0;
  }
  switchBtns[iBtn].classList.add("active");
};

function prevButtonSwitcher() {
  switchBtns[iBtn].classList.remove("active");
  iBtn--;
  if (iBtn < 0) {
    iBtn =  3;
  }
  switchBtns[iBtn].classList.add("active");
};

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', previous);
