document.addEventListener("DOMContentLoaded", function () {
  const fertilizers = [
      { name: "Urea", use: "Provides nitrogen for plant growth." },
      { name: "DAP (Diammonium Phosphate)", use: "Improves root strength and flowering." },
      { name: "Potash", use: "Enhances water retention and disease resistance." },
      { name: "NPK 20-20-20", use: "Balanced nutrient supply for overall growth." },
      { name: "Compost", use: "Organic fertilizer that enriches soil health." }
  ];

  const container = document.getElementById("fertilizer-list");

  fertilizers.forEach(fertilizer => {
      let card = document.createElement("div");
      card.classList.add("fertilizer-card");
      card.innerHTML = `<h2>${fertilizer.name}</h2><p>${fertilizer.use}</p>`;
      container.appendChild(card);
  });
});
