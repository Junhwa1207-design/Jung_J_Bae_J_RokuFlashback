<?php
   include('connect.php');
   include('functionA.php');
  // include('functionB.php');
   include('send.php');


// if we need one piece, run a getOne function
// else get all the pieces W

if (isset($_GET["id"])) {
    //get one item from the database - whichever one you clicked on and asked for in the UI

    $targetID = $_GET["id"];
    $result = getSingleUser($pdo, $targetID);

    return $result;
} else {
    // user must want to see all items in the database
    $allUsers = getAllUsers($pdo);

    return $allUsers;
}
