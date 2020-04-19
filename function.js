let buttonn = document.querySelector(".click");
let test = document.querySelector(".test");
let question = document.querySelector(".questions");

buttonn.addEventListener("click", function () {
    test.style.display = "none";
    question.style.display = "block";
});