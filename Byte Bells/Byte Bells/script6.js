
const roomTypes = [
    {
        id: 1,
        name: "Single Room",
        capacity: 1,
        rate: 100,
        features: ["TV", "Wi-Fi"],
    },
    {
        id: 2,
        name: "Double Room",
        capacity: 2,
        rate: 150,
        features: ["TV", "Wi-Fi", "Balcony"],
    },
    {
        id: 3,
        name: "Suite",
        capacity: 4,
        rate: 250,
        features: ["TV", "Wi-Fi", "Balcony", "Jacuzzi"],
    },
];

const roomTypeList = document.getElementById("room-type-list");

roomTypes.forEach((roomType) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <h3 data-id="${roomType.id}">${roomType.name}</h3>
        <p>Maximum Guest Capacity: ${roomType.capacity}</p>
        <p>Rate per Night: $${roomType.rate}</p>
        <p>Special Features: ${roomType.features.join(", ")}</p>
    `;
    roomTypeList.appendChild(listItem);
});

const editButtons = document.querySelectorAll("h3");
editButtons.forEach((button) => {
    button.addEventListener("click", editRoomType);
});

function editRoomType(event) {
    const roomId = event.target.getAttribute("data-id");

}
