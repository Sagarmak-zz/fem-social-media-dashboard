function toggleDarkMode() {
  const toggleSwitch = document.querySelector("input[type=checkbox]");
  let body = document.body;
  body.classList.toggle("light-bg");

  let cards = document.querySelectorAll(".card");
  let small_cards = document.querySelectorAll(".small-card");
  let darkTexts = document.querySelectorAll(".dark-text");
  let lightTexts = document.querySelectorAll(".light-text");
  let darkGreyTexts = document.querySelectorAll(".dark-grey-text");
  let lightGreyTexts = document.querySelectorAll(".light-grey-text");

  let darkInstaBG = document.querySelector(".dark-insta-bg");
  let lightInstaBG = document.querySelector(".light-insta-bg");

  if (toggleSwitch.checked) {
    // dark to light - cards
    cards.forEach((card, i) => {
      if (!card.classList.contains("light-insta-bg")) {
        card.classList.remove("card-light-bg");
        card.classList.add("card-dark-bg");
      }
    });
    small_cards.forEach((card, i) => {
      card.classList.remove("card-light-bg");
      card.classList.add("card-dark-bg");
    });
    // dark to light - dark-text
    lightTexts.forEach((item, i) => {
      item.classList.remove("light-text");
      item.classList.add("dark-text");
    });
    // dark to light - light-grey-text
    lightGreyTexts.forEach((item, i) => {
      item.classList.remove("light-grey-text");
      item.classList.add("dark-grey-text");
    });
    // dark to light insta bg
    lightInstaBG.classList.remove("light-insta-bg");
    lightInstaBG.classList.add("dark-insta-bg");
  } else {
    // light to dark - cards
    cards.forEach((card, i) => {
      if (!card.classList.contains("dark-insta-bg")) {
        card.classList.remove("card-dark-bg");
        card.classList.add("card-light-bg");
      }
    });
    small_cards.forEach((card, i) => {
      card.classList.remove("card-dark-bg");
      card.classList.add("card-light-bg");
    });
    // light to dark - dark-text
    darkTexts.forEach((item, i) => {
      item.classList.remove("dark-text");
      item.classList.add("light-text");
    });
    // light to dark - dark-grey-text
    darkGreyTexts.forEach((item, i) => {
      item.classList.remove("dark-grey-text");
      item.classList.add("light-grey-text");
    });
    // light to dark insta bg
    darkInstaBG.classList.remove("dark-insta-bg");
    darkInstaBG.classList.add("light-insta-bg");
  }

  // card.classList.toggle("card-dark-bg");
}
