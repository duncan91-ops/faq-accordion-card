const questions = document.querySelectorAll(".question");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.classList.contains("active")) {
      return;
    } else {
      questions.forEach((question) => question.classList.remove("active"));
      question.classList.add("active");
    }
  })
);
