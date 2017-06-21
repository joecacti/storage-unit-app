<?php 
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from submitting data & storing in new variables.
$name = mysqli_real_escape_string($con, $data->name);
$email = mysqli_real_escape_string($con, $data->email);
$phone = mysqli_real_escape_string($con, $data->telephone);
$time = mysqli_real_escape_string($con, $data->time);
$location = mysqli_real_escape_string($con, $data->location);
$size = mysqli_real_escape_string($con, $data->size);
// mysqli insert query
$query = "INSERT into cust_details (cust_name,cust_email,cust_telephone,cust_time,cust_location,cust_size) VALUES ('$name','$email','$phone','$time','$location','$size')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>