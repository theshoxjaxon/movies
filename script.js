//  Adding code

let elLoginForm = document.querySelector(".form");
let elList = document.querySelector(".lists-for-movie");
let firstInputCode = document.querySelector(".firsCode");
let secondInputCode = document.querySelector(".secondCode");
let elSection = document.querySelector(".visually-hidden");
// elLoginForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let firstInputValue = Number(firstInputCode.value);
//   //   let secondInputValue = secondInputCode.value;
//   //   console.log(secondInputValue);
//   // if (firstInputValue === 1) {
//   //   elSection.classList.remove("visually-hidden");
//   //   creatFilms;
//   // } else {
//   //   alert("bu sayga kirishiz kerak yoki admindan kodni sorang");
//   // }
// });

for (let movie of movies) {
  console.log(movie);
  let newItem = document.createElement("li");
  newItem.classList.add("items-for-movie");
  let newImg = document.createElement("img");
  newImg.classList.add("imges");
  newImg.setAttribute("src", movie.image);
  newImg.setAttribute("width", "300");
  newImg.setAttribute("height", "450");
  newItem.appendChild(newImg);
  elList.appendChild(newItem);
}
// console.log(creatFilms(elList));
