<?php
$servername = "localhost";
$username="root";

// Create connection
$conn = mysqli_connect($servername, $username);
mysqli_select_db($conn, 'school_app_database');

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
?>