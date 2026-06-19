// ========================================
// JAGUAR CLOTHING – PART 3 VALIDATION
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");

      // Reset error messages
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      // ✅ Name validation
      if (name.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        valid = false;
      }

      // ✅ Email validation (regex pattern)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (!email.value.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      }

      // ✅ Message validation
      if (message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
      }

      // ✅ Stop submission if invalid
      if (!valid) {
        e.preventDefault();
      } else {
        alert("Enquiry submitted successfully!");
      }
    });
  }
});
// ========================================
// PRODUCT SEARCH FILTER
// ========================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {
      const productName = product.getAttribute("data-name");

      if (productName.includes(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}
