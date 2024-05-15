document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Get the form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('POST', '/submit_data', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Define what happens on successful data submission
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Display the response from the server
                document.getElementById('response').innerHTML = xhr.responseText;
            } else {
                console.error('Request failed. Status: ' + xhr.status);
            }
        };

        // Define what happens in case of an error
        xhr.onerror = function () {
            console.error('Request failed');
        };

        // Send the request
        xhr.send(JSON.stringify({ name: name, email: email }));
    });
});
