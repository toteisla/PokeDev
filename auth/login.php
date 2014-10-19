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
		<script type="text/javascript"> var PLS_config = {ajax_url: '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>',};</script>
		<script type="text/javascript" src="../assets/js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="../assets/js/premiumlogin.min.js"></script>
	</head>
	<body style="text-align:center;">
		<h2>Lof In</h2>
		<form class="ajaxform" method="POST" action="">
			<div class="message-box"></div>
			Username:
			<input type="text" name="username" ><br>
			Password:
			<input type="password" name="password" ><br>
			<input id="rememberme" type="checkbox" name="rememberme">
			<label for="rememberme">Remember me</label><br>
			<input type="hidden" name="action" value="login">
			<button type="submit" name="login">LOG IN</button><br><br>
		</form>
		<span>or, connect with</span><br>
		<a href="connect.php?method=facebook">FACEBOOK</a>
		<a href="connect.php?method=twitter">TWITTER</a>
		<a href="connect.php?method=google">GOOGLE +</a><br><br>
		<a href="signup.php">Sign Up</a>
		<a href="recover.php">Forgot Password</a>
		<a href="reactivate.php">Resend Activation Email</a>
	</body>
</html>
