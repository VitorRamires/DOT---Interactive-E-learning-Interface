const discursive = document.querySelector(".discursive");
const textArea = discursive.querySelector("textarea");
const [answerBtn, changeBtn] = [".answer", ".change"].map((s) =>
  discursive.querySelector(s),
);
const feedback = discursive.querySelector(".its-right");
const KEY = "discursive-answer";

const updateState = (isDone) => {
  textArea.disabled = isDone;
  feedback.style.display = isDone ? "block" : "none";
  answerBtn.classList.toggle("disabledBtn", isDone || !textArea.value.trim());
  changeBtn.classList.toggle("disabledBtn", !isDone);
  if (!isDone) textArea.focus();
};

textArea.value = localStorage.getItem(KEY) || "";
updateState(!!textArea.value);

textArea.addEventListener("input", () => updateState(false));

answerBtn.addEventListener("click", () => {
  if (answerBtn.classList.contains("disabledBtn")) return;
  localStorage.setItem(KEY, textArea.value.trim());
  updateState(true);
  
});

changeBtn.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  updateState(false);
});
