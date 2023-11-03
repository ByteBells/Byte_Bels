
const roomTypes = [
    {
        name: "Single Room",
        capacity: 1,
        rate: 100,
        features: ["TV", "Wi-Fi"],
    },
    {
        name: "Double Room",
        capacity: 2,
        rate: 150,
        features: ["TV", "Wi-Fi", "Balcony"],
    },
    {
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
        <h3>${roomType.name}</h3>
        <p>Maximum Guest Capacity: ${roomType.capacity}</p>
        <p>Rate per Night: $${roomType.rate}</p>
        <p>Special Features: ${roomType.features.join(", ")}</p>
    `;
    roomTypeList.appendChild(listItem);
});
