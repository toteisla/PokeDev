<?php
require_once '../config/init.php';

if(Authentication::IsLogged())
	header("Location: ../index.php");

$success = Authentication::Activate(@$_GET['key']);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<div class="message-box"> <!-- add error/success class here -->
			<ul><li><?php echo (!empty($success)) ? Config::Get('success.activate') : Error::GetFirst(); ?></li></ul>
		</div> 
		<a href="../index.php">Go back</a>
	</body>
</html>
