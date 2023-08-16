let active = 0;

function slide(n) {
  active = active + n;

  page();
}

function control(index) {
  active = index - 1;

  page();
}

function page() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (active >= slides.length) {
    active = 0;
  }
  if (active < 0)  {
    active = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }

  slides[active].style.display = "block";
  dots[active].classList.add('active');
}