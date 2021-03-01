<?php
  include 'conn.php';
  $postdata = file_get_contents("php://input");
  if(isset($postdata)&& !empty($postdata))
  {
      $request= json_decode($postdata);
      $Username=$request->Username;
      $Email=$request->Email;
      $Password=$request->Password;
      $Org_name=$request->Org_name;

  }
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  $check_query= "Select * from `teacher_sign_up_table` where EMAIL= '$Email'";
  $send_check_query= mysqli_query($conn, $check_query);
  if($count= mysqli_num_rows($send_check_query)>0)
  {
    echo "Sorry User Already Registered! ";
    echo json_encode(1);

  }
  else{
    $q = "INSERT INTO `teacher_sign_up_table`(`USERNAME`, `EMAIL`, `PASSWORD`, `ORG_NAME`) VALUES('$Username','$Email','$Password', '$Org_name')";
  
  if (mysqli_query($conn, $q)) {
    echo "Registration Successfull";
  } else {
    echo "Error: " . $q . "<br>" . mysqli_error($conn);
  }
  }
  

  ?>