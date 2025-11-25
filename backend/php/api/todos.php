<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Content-Type: application/json');

$mysqli = new mysqli('db', 'root', 'rootpassword', 'todo_app');

$result = $mysqli->query("SELECT * FROM todos");

$todos = [];
while ($row = $result->fetch_assoc()) {
    $todos[] = $row;
}

echo json_encode($todos);
