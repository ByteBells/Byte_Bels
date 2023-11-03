document.getElementById("reservation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const checkInDate = document.getElementById("check-in-date").value;
    const checkOutDate = document.getElementById("check-out-date").value;
    const roomType = document.getElementById("room-type").value;
    const roomCount = document.getElementById("room-count").value;
    const guestCount = document.getElementById("guest-count").value;

    // Calculate the total cost based on the reservation details
    let totalCost = calculateTotalCost(checkInDate, checkOutDate, roomType, roomCount, guestCount);

    // Display the total cost, including any discounts
    alert(`Total Cost: $${totalCost}`);

    // You can send this data to the back-end for further processing and storage
});

function calculateTotalCost(checkInDate, checkOutDate, roomType, roomCount, guestCount) {
    // Your logic for calculating the total cost goes here
    // You can check if the reservation duration is more than 3 nights for a 10% discount
    // Calculate the cost based on room type, room count, and guest count
    // Apply the discount if applicable

    // This is a basic placeholder example, you should implement the logic as needed
    let totalCost = 0;
    if (roomType === "single") {
        totalCost = 100 * roomCount;
    } else if (roomType === "double") {
        totalCost = 150 * roomCount;
    } else if (roomType === "suite") {
        totalCost = 250 * roomCount;
    }

    const reservationDuration = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
    
    if (reservationDuration > 3) {
        totalCost *= 0.9; // Apply 10% discount
    }

    return totalCost;
}
