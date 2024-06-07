const slideContainers = document.querySelectorAll(".slider");
const sidebarBtn = document.querySelector(".left-right-arrow-icon");
const sidebar = document.querySelector(".sidebar");
const filterOptContainer = document.querySelector(".filter-options-container");

slideContainers.forEach((slideContainer) => {
  const slides = slideContainer.querySelectorAll(".slide");

  const btnLeft = slideContainer.querySelector(".slider__btn--left");
  const btnRight = slideContainer.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  goToSlide(0);

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
});
sidebarBtn.addEventListener("click", function () {
  filterOptContainer.classList.toggle("hidden");
  sidebar.classList.toggle("collapsed");
});
/* 
const carListsContainer = document.querySelector(".car-lists-container");
carListsContainer.addEventListener("click", function (e) {
  const target = e.target.closest(".slider__btn");
  if (!target) return;
  if (target.classList.value.includes("left")) {
    console.log("left");
  }
  if (target.classList.value.includes("right")) {
    console.log("right");
  }
});
*/
