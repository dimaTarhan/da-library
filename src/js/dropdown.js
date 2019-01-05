window.onload = function() {
  document.addEventListener("click", event => {
    if (event.target.matches(".da-menu-button")) {
      event.target.nextElementSibling.classList.toggle("visible");
    }
    const clickDropdown = event.target.closest(".dropdown");

    [...document.querySelectorAll(".dropdown")].forEach(currentDropdown => {
      if (currentDropdown !== clickDropdown) {
        currentDropdown.querySelector(".da-menu").classList.remove("visible");
      }
    });
    if (event.target.closest(".da-menu")) {
      console.dir(event.target.innerText);
    }
  });
};
