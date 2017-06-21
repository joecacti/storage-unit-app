<?php 
// Including database connections
require_once 'database_connections.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input")); 
// Escaping special characters from updated data
$name = mysqli_real_escape_string($con, $data->name);
$email = mysqli_real_escape_string($con, $data->email);
$phone = mysqli_real_escape_string($con, $data->telephone);
$time = mysqli_real_escape_string($con, $data->time);
$location = mysqli_real_escape_string($con, $data->location);
$size = mysqli_real_escape_string($con, $data->size);
// mysqli query to insert the updated data
$query = "UPDATE cust_details SET cust_name='$name',cust_email='$email',cust_telephone='$phone',cust_time='$time',cust_location='$location',cust_size='$size' WHERE cust_id=$id";
mysqli_query($con, $query);
echo true;
?>