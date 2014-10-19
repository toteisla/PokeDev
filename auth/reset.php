<?php
require_once '../config/init.php';

if(Authentication::IsLogged())
	header("Location: ../index.php");

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script type="text/javascript"> var PLS_config = {	ajax_url : '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>',};</script>
		<script type="text/javascript" src="../assets/js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="../assets/js/premiumlogin.min.js"></script>
	</head>
	<body style="text-align:center;margin:auto;width:300px;">
		<h2>Reset your password</h2>
		<form class="ajaxform"  method="POST" action="">
			<div class="message-box"></div>
			Password:
			<input type="password" name="password"><br>
			Confirm password:
			<input type="password" name="cpassword"><br>
			<input type="hidden" name="key" value="<?php echo @$_GET['key']; ?>">
			<input type="hidden" name="action" value="reset">
			<button type="submit" name="reset">RESET PASSWORD</button>
		</form><br><br>
		<a href="../index.php">Go back</a>
	</body>
</html>
