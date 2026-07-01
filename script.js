const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});