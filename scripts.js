//Function expression to select elements
const selectElement = s => document.querySelector(s);

//Open the mobile menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Close the mobile menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
