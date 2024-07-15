const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

console.log('Server starting...');

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('Middleware set up');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
console.log('Static files served');

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, message } = req.body;

    // Basic validation
    if (!name || !message) {
        console.log('Form validation failed');
        return res.status(400).send('Please fill in all fields.');
    }

    // Log the form data to the console (or save to a database)
    console.log('Form data received:', { name, message });

    // Send a response back to the client
    res.send('Thank you for your message!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});