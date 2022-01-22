//  Adding code

let elLoginForm = document.querySelector(".form");
let elList = document.querySelector(".lists-for-movie");
let firstInputCode = document.querySelector(".firsCode");
let secondInputCode = document.querySelector(".secondCode");
let elSection = document.querySelector(".visually-hidden");
elLoginForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let firstInputValue = Number(firstInputCode.value);
  //   let secondInputValue = secondInputCode.value;
  //   console.log(secondInputValue);
  if (firstInputValue === 1) {
    elSection.classList.remove("visually-hidden");
  }
});

// movies.forEach((movie) => {});

for (let movie of movies) {
  console.log(movie);
}
