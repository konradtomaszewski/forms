<?php 

require_once '../../../system/config/config.database.php';
 
//define database object
global $dbc;

$stmt = $dbc->prepare("UPDATE dca_users SET sidenav_bg='".$_POST['sidenav_bg']."' WHERE id='".$_POST['user_id']."'");
 
$stmt->execute();

echo "UPDATE dca_users SET sidenav_bg='".$_POST['sidenav_bg']."' WHERE id='".$_POST['user_id']."'";