document.addEventListener("DOMContentLoaded", function () {
  const learnButton = document.querySelector(".learn-button");
  const downloadButton = document.querySelector(".download-button");
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".popup .close-btn");
  const showLoginBtn = document.querySelector("#show-login");

  // Function to show the popup
  function showPopup() {
    popup.classList.add("active");
    learnButton.classList.add("hidden");
    downloadButton.classList.add("hidden");

    setTimeout(function () {
      document
        .querySelector(".form-background")
        .classList.add("white-background");
    }, 10);
  }

  function hidePopup() {
    popup.classList.remove("active");
    learnButton.classList.remove("hidden");
    downloadButton.classList.remove("hidden");
    document
      .querySelector(".form-background")
      .classList.remove("white-background");
  }

  learnButton.addEventListener("click", showPopup);
  downloadButton.addEventListener("click", showPopup);
  showLoginBtn.addEventListener("click", showPopup);

  closeBtn.addEventListener("click", hidePopup);

  const formBackground = document.querySelector(".form-background");

  formBackground.addEventListener("mousedown", function () {
    formBackground.classList.toggle("white-background");
  });
});
