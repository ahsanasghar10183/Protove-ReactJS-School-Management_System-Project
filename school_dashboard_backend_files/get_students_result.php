<?php
  include 'conn.php';
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
  header('Access-Control-Allow-Headers: *');
  header('Access-Control-Max-Age: 1728000');
  header("Content-Length: 0");
  header("Content-Type: text/plain"); 
  session_start();
  $get_result_query="Select SELECT `ROLLNO`, `SUBJECT`, `TOTAL_MARKS`, `OBTAINED_MARKS`, `CHAPTER`, `DATE` FROM `students_result_tb` where ROLLNO = $_SESSION['S_ID]";
  $Send_query= mysqli_query($con,$get_result_query);
  $counter=0;
  while($row = mysqli_fetch_assoc($Send_query))
  {
      $roll_no = $row[$counter]['ROLLNO'];
      $subject = $row[$counter]['SUBJECT'];
      $total_marks = $row[$counter]['TOTAL_MARKS'];
      $obtained_marks = $row[$counter]['OBTAINED_MARKS'];
      $chapter = $row[$counter]['CHAPTER'];
      $date = $row[$counter]['DATE'];
      $counter++;
  }
  echo json_encode(array("ROLLNO"=>$roll_no,"subject"=>$subject, "total_marks"=>$total_marks, "obtained_marks"=>$obtained_marks,"chapter"=>$chapter, "date"=>$date));

 ?>