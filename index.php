<?php
	// PHP Data Objects(PDO) Sample Code:
try {
    $conn = new PDO("sqlsrv:server = tcp:breaker.database.windows.net,1433; Database = Frida", "breakerst", "breaker2018;");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "breakerst@breaker", "pwd" => "breaker2018;", "Database" => "Frida", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:breaker.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);

?>