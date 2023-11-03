const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/hotel-management-system');

// Create a Room model
const Room = mongoose.model('Room', {
  roomType: String,
  numberOfGuests: Number,
  checkInDate: Date,
  checkOutDate: Date,
  isBooked: Boolean
});

// Create an Express app
const app = express();

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route to book a room
app.post('/book-room', async (req, res) => {
  // Get the request body
  const { checkInDate, checkOutDate, roomType, numberOfGuests } = req.body;

  // Validate the request body
  if (!checkInDate || !checkOutDate || !roomType || !numberOfGuests) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  // Create a new Room object
  const room = new Room({
    checkInDate,
    checkOutDate,
    roomType,
    numberOfGuests,
    isBooked: true
  });

  // Save the room to the database
  await room.save();

  // Respond with the success message
  res.json({ message: 'Room booked successfully' });
});

// Define a route to get all rooms
app.get('/rooms', async (req, res) => {
  // Get all rooms from the database
  const rooms = await Room.find();

  // Respond with the rooms data
  res.json({ rooms });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
})