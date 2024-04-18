const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this port as needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to receive webhook notifications from Google Sheets
app.post('/google-sheet-webhook', (req, res) => {
    // Handle webhook payload
    const updatedData = req.body;
    
    // Process the updated data as needed
    console.log('Received webhook notification from Google Sheets:', updatedData);

    // Respond with a success status
    res.status(200).send('Webhook notification received successfully.');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
