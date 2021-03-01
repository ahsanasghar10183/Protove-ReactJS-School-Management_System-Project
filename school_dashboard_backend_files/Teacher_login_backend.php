<?php
  include 'conn.php';
  $login_arr=[];
  $fetch_login_credentials= "SELECT `Username`, `Email`, `Password` FROM `teacher_sign_up_table`;";
  if($login_data= mysqli_query($conn, $fetch_login_credentials)){
    $counter=0;
      while($row= mysqli_fetch_assoc($login_data))
      {
          
          $login_arr[$counter]['Username']= $row['Username'];
          $login_arr[$counter]['Email']=$row['Email'];
          $login_arr[$counter]['Password']=$row['Password'];
          $counter++;

      }
      echo json_encode($login_arr);
  }

  ?>