<?php
	$conn = mysqli_connect('localhost', 'u920651695_sXm', '$J$7AHNC#Q8u', 'u920651695_sXm');
	
	if (!$conn) {
		echo "Error: " . mysqli_connect_error();
		exit();
	}
	
	date_default_timezone_set("Asia/Kolkata"); 
?>