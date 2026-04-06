const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const btn = card.querySelector("button");

  btn.addEventListener("click", () => {
    card.classList.toggle("active-card");
    card.classList.contains("active-card") ? btn.innerText = "Fechar" : btn.innerText = "Abrir"
  });

});
