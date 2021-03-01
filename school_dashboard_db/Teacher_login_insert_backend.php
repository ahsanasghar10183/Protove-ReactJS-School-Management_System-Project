<?php

  // include 'conn.php';
  // header("Access-Control-Allow-Origin: *");
  // header('Access-Control-Allow-Origin: *');
  // header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
  // header('Access-Control-Allow-Headers: *');
  // header('Access-Control-Max-Age: 1728000');
  // header("Content-Length: 0");
  // header("Content-Type: text/plain"); 
  // $postdata= file_get_contents("php://input");
  // $login_arr=[];
  // if(isset($postdata)&& !empty($postdata))
  // {
  //   $request = json_decode($postdata);
  //   $Username_g= $request->Username;
  //   $Email_g = $request->Email;
  //   $Password_g= $request->Password;
  //   echo"This is Insert .php file ".$Username_g;
  //   $fetch_login_credentials= "SELECT `USERNAME`, `EMAIL`, `PASSWORD` FROM `teacher_sign_up_table` WHERE 1"; 
  //   $check_query= mysqli_query($conn, $fetch_login_credentials);
  //   $login_data_count= mysqli_num_rows($check_query);
  //   if($login_data_count>0){
  //     $get_login_data = mysqli_fetch_assoc($check_query);
  //     echo $get_login_data["USERNAME"];
  //   }
  // if (!$conn) {
  //   die("Connection failed: " . mysqli_connect_error());
  // }

  // }

  //  echo json_encode(array("Username"=>"Ahsan G", "Email"=>"ahsanasghar123", "Password"=>123));
  include 'conn.php';
  $postdata = file_get_contents("php://input");
  session_start();
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
  echo "The Username is ".$Username;
  $check_query= "SELECT `USERNAME`, `EMAIL`, `PASSWORD` FROM `teacher_sign_up_table` where EMAIL= '$Email'";
  $send_check_query= mysqli_query($conn, $check_query);
  if($count= mysqli_num_rows($send_check_query)>0)
  {
    while($row= mysqli_fetch_assoc($send_check_query))
    {
      $_SESSION["Username"]=$row["USERNAME"];
      $_SESSION["Email"]= $row["EMAIL"];
      $_SESSION["Password"]= $row["PASSWORD"];
    }
  }
  else{
    echo "Sorry There is an Error in Login Credentials";
  }
  echo json_encode(array("Username"=> $_SESSION["Username"], "Email"=>$_SESSION["Email"], "Password"=>$_SESSION["Password"]));
  ?>