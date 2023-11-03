document.getElementById("add-room-type-button").addEventListener("click", function () {
    const roomTypeForm = document.getElementById("room-type-form");
    roomTypeForm.classList.remove("hidden");
});

document.getElementById("room-type-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const roomTypeName = document.getElementById("room-type-name").value;
    const maxGuests = document.getElementById("max-guests").value;
    const ratePerNight = document.getElementById("rate-per-night").value;

    
    console.log("Room Type Name: " + roomTypeName);
    console.log("Maximum Guest Capacity: " + maxGuests);
    console.log("Rate per Night: " + ratePerNight);

    
});
