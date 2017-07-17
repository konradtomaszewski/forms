<?php 

require_once '../../../system/config/config.database.php';
 
//define database object
global $dbc;
 
$stmt = $dbc->prepare("SELECT username,password from dca_users WHERE 
username='".$_POST['username']."' AND password='".  md5($_POST['password'])."'");
 
$stmt->execute();
 
$row = $stmt->rowCount();
 
if ($row > 0){    
    echo 'correct';
} else{ 
    echo 'wrong';
}
 
?>