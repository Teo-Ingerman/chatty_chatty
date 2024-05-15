const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Handle POST requests to '/submit_data'
    if (req.method === 'POST' && req.url === '/submit_data') {
        let body = '';

        // Accumulate data from the request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Process data when the request is finished
        req.on('end', () => {
            // Parse the JSON data
            const data = JSON.parse(body);

            // Example: Insert the data into a database
            // Replace this with your own database handling logic
            console.log('Received data:', data);

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received successfully');
        });
    } else {
        // Serve the HTML file
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
