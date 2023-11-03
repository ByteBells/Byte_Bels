
document.addEventListener("DOMContentLoaded", function () {
    const reservationList = document.getElementById("reservation-list");
  

    const reservations = [
      {
        checkInDate: "2023-11-10",
        checkOutDate: "2023-11-15",
        roomType: "Standard",
        roomCount: 2,
        guestCount: 4,
        specialFeatures: "Balcony, Ocean View",
      },
      {
        checkInDate: "2023-11-12",
        checkOutDate: "2023-11-17",
        roomType: "Deluxe",
        roomCount: 1,
        guestCount: 2,
        specialFeatures: "Spa, Pool Access",
      },
    ];
  
    // Populate the reservation list with data
    reservations.forEach(function (reservation, index) {
      const row = reservationList.insertRow();
      row.innerHTML = `
        <td>${reservation.checkInDate}</td>
        <td>${reservation.checkOutDate}</td>
        <td>${reservation.roomType}</td>
        <td>${reservation.roomCount}</td>
        <td>${reservation.guestCount}</td>
        <td>${reservation.specialFeatures}</td>
        <td><button class="button" onclick="cancelReservation(${index})">Cancel</button></td>
      `;
    });
  
  
    function cancelReservation(index) {

      reservationList.deleteRow(index + 1);
    }
  });
  

  