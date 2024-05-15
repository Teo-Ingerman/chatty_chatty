<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the data sent from the HTML form
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Example: Insert the data into a database
    // Replace the database credentials with your own
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "your_database";

    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare an SQL statement to insert the data into a table
    $sql = "INSERT INTO your_table (name, email) VALUES ('$name', '$email')";

    // Execute the SQL statement
    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
