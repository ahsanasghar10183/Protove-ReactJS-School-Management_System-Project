<?php
  include 'conn.php';
  $q= "Select * from  `daily_task_tb`";
  $fetch_login_credentials="SELECT * FROM `student_sign_up_table`";
  $student=[];
  if($result = mysqli_query($conn,$q))
  {
      $cr=0;
      while($row= mysqli_fetch_assoc($result))
      {
          $student[$cr]['id']= $row['id'];
          $student[$cr]['TASK_NAME']= $row['TASK_NAME'];
          $student[$cr]['TASK_DETAIL']= $row['TASK_DETAIL'];
          $student[$cr]['TIME']= $row['TIME'];
          $cr++;
      }
      //print_r($student);
      echo json_encode($student);
  }
  else
  {
      http_response_code(404);

  }

?>