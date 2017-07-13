<?php 

require_once '../../../system/config/database.php';
 
//define database object
global $dbc;
$userDetails=array();

$stmt = $dbc->prepare("SELECT * from dca_users WHERE username='".$_POST['username']."'");
$stmt->execute();

$result = $stmt->fetchAll();
foreach($result as $row)
{
	$userDetails['user_id'] = $row['id'];
	$userDetails['username'] = $row['username'];
	$userDetails['email'] = $row['email'];
	$userDetails['sidenav_bg'] = $row['sidenav_bg'];
	$userDetails['username_letter'] = ucfirst(substr($row['username'], 0, 1));
}

$json = json_encode($userDetails);
echo $json;
exit;