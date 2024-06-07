const tabs = document.querySelectorAll(".component-tab");
const tabsContent = document.querySelectorAll(".content");
const tabContainer = document.querySelector(".tabs-container");
const selectLocContainer = document.querySelector(".select-location-container");
const searchLocContainer = document.querySelector(".search-location-container");
const allLocContainer = document.querySelector(".all-locations-container");
const upIcon = document.querySelector(".up-icon");
const locationsList = document.querySelector(".options");
const searchBox = document.querySelector(".search-box");
const options = document.querySelectorAll(".options li");
// function to register click handlers

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".component-tab");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("component-tab--active"));
  tabsContent.forEach((c) => c.classList.remove("content--active"));

  clicked.classList.add("component-tab--active");

  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("content--active");
});

selectLocContainer.addEventListener("click", function (e) {
  selectLocContainer.classList.add("hidden");
  searchLocContainer.classList.remove("hidden");
  allLocContainer.classList.remove("hidden");
});
upIcon.addEventListener("click", function (e) {
  selectLocContainer.classList.remove("hidden");
  searchLocContainer.classList.add("hidden");
  allLocContainer.classList.add("hidden");
});

// Check if search country present in menu list
searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.toLowerCase();
  options.forEach((option) => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});
