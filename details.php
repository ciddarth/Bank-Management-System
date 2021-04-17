<!DOCTYPE html>
<html>
<head>
<title>CUSTOMER DETAILS</title>
</head>
<body>
<table>
<tr>
	<th>id</th>
	<th>name</th>
	<th>account_type</th>
	<th>account_number</th>
	<th>mobile_number</th>
</tr>
<?php
$conn = mysqli_connect("localhost", "root" ,"", "new")
if ($conn-> connect_error){
	die("Connection failed:". $conn-> connect_error);
}
$sql= "SELECT id,name,account_type,account_number,mobile_number from login";
$result = $conn-> query($sql);

if($result-> num_rows>0) {
	while($row = $result->fetch_assoc()) {
		echo "<tr><td>". $row["id"] ."</td><td>". $row["name"]."</td><td>".$row["account_type"]."</td><td>".$row["account_number"]."</td><td>".$row["mobile_number"]."</td></tr>";
	}
	echo "</table>";
}
else{
	echo "0 result";
}
$conn->close();
?>
</table>
</body>
</html>