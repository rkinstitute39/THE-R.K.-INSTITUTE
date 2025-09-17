// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const message = document.getElementById('newsletter-message');

  if (emailInput.value.trim() === "") {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Thank you for subscribing!";
  message.style.color = "lightgreen";
  emailInput.value = "";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});
