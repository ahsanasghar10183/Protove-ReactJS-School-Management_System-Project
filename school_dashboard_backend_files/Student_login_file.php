<?php
  include 'conn.php';
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
  header('Access-Control-Allow-Headers: *');
  header('Access-Control-Max-Age: 1728000');
  header("Content-Length: 0");
  header("Content-Type: text/plain"); 
  // $postdata = file_get_contents("php://input");
  // if(isset($postdata) && !empty($postdata))
  // {
  //     $request = json_decode($postdata);
  //     $Username= $request->Username;
  //     $Email = $request->Email;
  //     $Regno = $request->Regno;
  //     $Password= $request->Password;
  session_start();
  $check_query= "SELECT * FROM `student_sign_up_table` where `S_ID`= 1";
  $send_check_query= mysqli_query($conn, $check_query);
  if($count= mysqli_num_rows($send_check_query)>0)
  {
    while($row= mysqli_fetch_assoc($send_check_query))
    {
      $_SESSION["S_ID"]=$row["S_ID"];
      $_SESSION['Username']=$row["USERNAME"];
      $_SESSION["Email"]= $row["EMAIL"];
      $_SESSION["Password"]= $row["PASSWORD"];
    }
  }
  else{
    echo "Sorry There is an Error in Login Credentials";
  }
  echo json_encode(array("S_ID"=>$_SESSION['S_ID'], "Username"=>$_SESSION['Username'], "Email"=>$_SESSION['Email'], "Password"=>$_SESSION['Password']));
// else{
//   echo " There is an error in post Request in php File!";
// }
  // }
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
  ?>