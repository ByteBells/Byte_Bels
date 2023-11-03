// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservation-form");
    const message = document.getElementById("message");
  
    reservationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // You can implement the logic to update reservations here
      // For demonstration purposes, display a message
      message.textContent = "Reservation updated successfully.";
    });
  });
  