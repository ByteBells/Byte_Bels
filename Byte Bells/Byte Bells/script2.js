const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/create-room-type', (req, res) => {
    
    const { roomTypeName, maxGuests, ratePerNight } = req.body;

    res.json({ success: true, message: 'Room type created successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
