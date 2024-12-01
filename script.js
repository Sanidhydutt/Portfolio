document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card, .skill-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert("You clicked on: " + card.querySelector(".card-title").innerText);
        });
    });
});

