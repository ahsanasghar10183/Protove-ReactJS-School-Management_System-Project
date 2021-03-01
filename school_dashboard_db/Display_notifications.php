<?php
  include 'conn.php';
  $q= "SELECT * FROM `notifications`";
  $student=[];
  if($result = mysqli_query($conn,$q))
  {
      $cr=0;
      while($row= mysqli_fetch_assoc($result))
      {
          $student[$cr]['N_ID']= $row['N_ID'];
          $student[$cr]['N_TITLE']= $row['N_TITLE'];
          $student[$cr]['N_DETAILS']= $row['N_DETAILS'];
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