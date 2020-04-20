const buttonn = document.querySelector(".click");
const test = document.querySelector(".test");
const question = document.querySelector(".questions");

buttonn.addEventListener("click", function () {
    test.style.display = "none";
    question.style.display = "block";
});