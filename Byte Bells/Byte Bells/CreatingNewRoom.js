document.getElementById("add-room-button").addEventListener("click", function () {
    const roomForm = document.getElementById("room-form");
    roomForm.classList.remove("hidden");
});

document.getElementById("room-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const roomType = document.getElementById("room-type").value;
    const roomNumber = document.getElementById("room-number").value;

    // Send this data to the server for further processing
    console.log("Room Type: " + roomType);
    console.log("Room Number: " + roomNumber);

    // You can send this data to the back-end for storage and validation
});