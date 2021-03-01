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
    $TASK_NAME= $request->Task_name;
    $TASK_DESCRIPTION = $request->Task_Desc;
    $TASK_TIME= $request->Time;
    echo"This is Insert .php file ".$TASK_NAME;
  }
  
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  
  $q = "INSERT INTO `daily_task_tb` (`TASK_NAME`, `TASK_DETAIL`, `TIME`) VALUES ('$TASK_NAME','$TASK_DESCRIPTION' ,'$TASK_TIME')";
  
  if (mysqli_query($conn, $q)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $q . "<br>" . mysqli_error($conn);
  }
?>