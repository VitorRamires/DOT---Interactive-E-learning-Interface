const objective = document.querySelector(".objective-activity");

const options = objective.querySelectorAll('input[type="checkbox"]');
const answerBtnObj = objective.querySelector("#answerBtnObj");
const changeBtnObj = objective.querySelector("#changeBtnObj");
const feedbackMessage = document.querySelector(".feedback-message");

const STORAGE_KEY = "objective-answer";

answerBtnObj.classList.add("disabledBtn");
changeBtnObj.classList.add("disabledBtn");

const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  saved.split(",").forEach((val) => {
    const option = [...options].find((o) => o.value === val);
    if (option) option.checked = true;
  });
  options.forEach((o) => (o.disabled = true));
  changeBtnObj.classList.remove("disabledBtn");
}

options.forEach((option) => {
  option.addEventListener("change", () => {
    answerBtnObj.classList.toggle(
      "disabledBtn",
      ![...options].some((o) => o.checked),
    );
  });
});

answerBtnObj.addEventListener("click", () => {
  if (answerBtnObj.classList.contains("disabledBtn")) return;
  localStorage.setItem(
    STORAGE_KEY,
    [...options]
      .filter((o) => o.checked)
      .map((o) => o.value)
      .join(","),
  );
  options.forEach((o) => (o.disabled = true));
  answerBtnObj.classList.add("disabledBtn");
  changeBtnObj.classList.remove("disabledBtn");
  feedbackMessage.style.display = "block";
});

changeBtnObj.addEventListener("click", () => {
  if (changeBtnObj.classList.contains("disabledBtn")) return;
  localStorage.removeItem(STORAGE_KEY);
  options.forEach((o) => (o.disabled = false));
  answerBtnObj.classList.remove("disabledBtn");
  changeBtnObj.classList.add("disabledBtn");
});
