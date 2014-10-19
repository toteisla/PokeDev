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
		<script type="text/javascript"> var PLS_config = {ajax_url : '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>',};</script>
		<script type="text/javascript"> var RecaptchaOptions = {theme : 'custom', custom_theme_widget: 'PLS_recaptcha_widget'};</script>
		<script type="text/javascript" src="../assets/js/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="../assets/js/premiumlogin.min.js"></script>
	</head>
	<body style="text-align:center;margin:auto;width:300px;">
		<h2>Sign Up</h2>
		<form class="ajaxform"  method="POST" action="">
			<div class="message-box"></div><br>
			Username: 
			<input type="text" name="username"><br>
			Email:
			<input type="text" name="email"><br>
			Password:
			<input type="password" name="password"><br>
			Confirm password:
			<input type="password" name="cpassword"><br>
			<div id="PLS_recaptcha_widget">
				<div id="recaptcha_image"></div>
				<a href="javascript:Recaptcha.reload()">Reload</a>
				<a class="recaptcha_only_if_image link" href="javascript:Recaptcha.switch_type('audio')">Listen</a>
				<a class="recaptcha_only_if_audio link" href="javascript:Recaptcha.switch_type('image')">Image</a>
				<a class="link" href="javascript:Recaptcha.showhelp()">Help</a><br>
				Recaptcha:
				<input type="text" id="recaptcha_response_field" name="recaptcha_response_field">
			</div>
			<input type="hidden" name="action" value="signup">
			<button type="submit" name="signup">SIGN UP</button>
		</form>
		<br><br>
		<span>or, log in with</span><br>
		<a href="connect.php?method=facebook">FACEBOOK</a>
		<a href="connect.php?method=twitter">TWITTER</a>
		<a href="connect.php?method=google">GOOGLE +</a><br><br>
		<a href="login.php">Log In</a>
		<a href="recover.php">Forgot Password</a>
		<a href="reactivate.php">Resend Activation Email</a>
		<script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=<?php echo Config::Get('captcha.public'); ?>"></script>
	</body>
</html>