<?php 
	header("Content-type: application/json");
	$message = array("message"=>"Thank you for your reservation");
	echo json_encode($message); 
?>