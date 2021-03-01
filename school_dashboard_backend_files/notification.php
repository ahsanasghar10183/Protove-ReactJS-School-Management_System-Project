<?php
include 'conn.php';
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
  header('Access-Control-Allow-Headers: *');
  header('Access-Control-Max-Age: 1728000');
  header("Content-Length: 0");
  header("Content-Type: text/plain"); 
  $postdata= file_get_contents("php://input");
  if(isset($postdata)&& !empty($postdata))
  {
    $request = json_decode($postdata);
    $notification_title= $request->title;
    $notification_details= $request->details;
    echo"This is Insert .php file ".$notification_title;
  }
  
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  
  $q = "INSERT INTO `notifications` (`N_ID`, `N_TITLE`, `N_DETAILS`) VALUES (NULL, '$notification_title', '$notification_details');";
  
  if (mysqli_query($conn, $q)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $q . "<br>" . mysqli_error($conn);
  }
?>