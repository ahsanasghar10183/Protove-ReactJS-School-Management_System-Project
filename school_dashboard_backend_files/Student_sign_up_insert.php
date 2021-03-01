<?php
  include 'conn.php';
  $postdata = file_get_contents("php://input");
  if(isset($postdata)&& !empty($postdata))
  {
      $request= json_decode($postdata);
      $Username=$request->Username;
      $Email=$request->Email;
      $Password=$request->Password;
      $S_ID= $request->S_ID;
  }
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  $check_query= "Select * from `student_sign_up_table` where EMAIL= '$Email'";
  $send_check_query= mysqli_query($conn, $check_query);
  if($count= mysqli_num_rows($send_check_query)>0)
  {
    echo "Sorry User Already Registered! ";
    echo json_encode(1);

  }
  else{
    $q = "INSERT INTO `student_sign_up_table` (`S_ID`, `USERNAME`, `Email`, `PASSWORD`) VALUES ('$S_ID', '$Username', '$Email', '$Password')";
  
  if (mysqli_query($conn, $q)) {
    echo "Registration Successfull";
  } else {
    echo "Error: " . $q . "<br>" . mysqli_error($conn);
  }
  }
  

  ?>