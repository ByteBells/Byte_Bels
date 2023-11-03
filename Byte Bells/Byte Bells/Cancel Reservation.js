
document.addEventListener("DOMContentLoaded", function () {
  const cancelForm = document.getElementById("cancel-form");
  const message = document.getElementById("message");
  const reservationIdInput = document.getElementById("reservation-id");

  cancelForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const reservationId = reservationIdInput.value;


    displayMessage(`Reservation with ID ${reservationId} is canceled successfully.`);
  });

  function displayMessage(text) {
    message.textContent = text;
    message.classList.remove("hidden");
  }
});

  