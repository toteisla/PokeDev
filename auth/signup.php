<?php
require_once '../config/init.php';

if(Authentication::IsLogged())
	header("Location: ../index.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- -DefaulT //-->
<!-- d.faultx@gmail.com //-->
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <title>
        PokeDev - Development Server </title>
    <link href="../img/favicon.ico" type="image/x-icon" rel="icon" />
    <link href="../img/favicon.ico" type="image/x-icon" rel="shortcut icon" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" type="text/css" href="../css/jq.ui.css" />
    <link rel="stylesheet" type="text/css" href="../css/slider.css" />
	<script type="text/javascript" src="../assets/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="../js/jq.ui.js"></script>
    <script type="text/javascript" src="../js/slider.js"></script>
    <script type="text/javascript" src="../js/tooltip.js"></script>
	<script type="text/javascript"> var PLS_config = {ajax_url : '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>',};</script>
	<script type="text/javascript"> var RecaptchaOptions = {theme : 'custom', custom_theme_widget: 'PLS_recaptcha_widget'};</script>
	<script type="text/javascript" src="../assets/js/premiumlogin.min.js"></script>
</head>

<body>


    <!-- header-->
    <div id="header">
        <div class="hbg">
            <!-- logo -->
            <div id="logo">
                <a href="/"><img src="../img/ragbrasil_logo.png" alt="" />
                </a>
            </div>
            <!-- navbar -->
            <div id="navbar">
                <ul>
                    <li><a href="" class="current">Home</a>
                    </li>
                    <li><a href="signup.php" class="">Register</a>
                    </li>
                    <li><a href="about.php" class="">About Server</a>
                    </li>
                    <li><a href="http://pokedev.co.cc/main/ranking.php" class="">Ranking</a>
                    </li>
                    <li><a href="#">Forum</a>
                    </li>
					<?php if(Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
					<li><a href="auth/logout.php">Logout</a>
                    </li>
					<?php endif; ?>
                </ul>
            </div>
        </div>
    </div>

    <div id="secondary">
        <!-- server status -->
        <div class="left">
            <span class="stat-icon s-info"></span> Rates: <span class="blue">1x/1x/1x</span>
            <span class="stat-icon s-event"></span> Beta <span class="purple">event</span>!
            <!--'<span class="stat-icon s-online"></span> The server is <span class="green">Online</span>.'
        <span class="stat-icon s-maintenance"></span> PokeDev is <span class="orange">under maintenance</span>
        <span class="stat-icon s-event"></span> PokeDev is hosting an <span class="purple">event</span>!
        <span class="stat-icon s-disabled"></span> <span class="grey">PokeDev is disabled</span>
        <span class="stat-icon s-info"></span> <span class="blue">50x EXP</span>-->
        </div>
        <!-- search -->

    </div>

    <div id="header-bg">

        <!-- second-bar -->



        <div class="w960">
            <!-- breadcrumbs: top -->
            <div class="breadcrumbs">
               
            </div>

            <!-- social networks -->
            <div class="rel">
                <div class="social">
                    <a href="http://www.facebook.com/pages/PokeDev/241640149215088" title="Facebook" class="sn-fb">Facebook</a>
                    <a href="http://www.youtube.com/user/PokenetDev?feature=mhee" title="Youtube" class="sn-orkut">Youtube</a>
                    <a href="http://twitter.com/#!/PokeDev1" title="Twitter" class="sn-tw">Twitter</a>
                    <a href="http://www.stumbleupon.com/" title="StumbleUpon" class="sn-yt">StumbleUpon</a>
                </div>
            </div>

            <!-- Dialog Google+ -->




        </div>

    </div>
    <!-- main -->
    <div id="main-top">
        <div class="rel">
            <div class="char-top"></div>
        </div>
    </div>
    <div id="main">

        <!-- sidebar -->
        <div id="sidebar">

            <!-- button: download -->
            <a href="http://pokedev.co.cc/main/download.php" title="Download Client" class="sb-special sb-download">PokeDev Client 1.0</a>

            <!-- button: community -->
            <a href="http://pokedev.co.cc/forum/" title="Forum" class="sb-special sb-community">Access the Forum</a>

            <!-- user panel -->
            <div class="sb-title">
                <span class="icon"><span class="icon-user"></span></span>
                <h3>Control Panel</h3>
            </div>
			
            <div class="sb-con">
                <form class="ajaxform" id="UserLoginForm" method="POST" action="">
                        <div class="input text required">
                            <label for="UserLogin"></label>
							<input type="text" name="username" class="bar curved5" maxlength="255" id="UserLogin">
                        </div>
                        <div class="input password required">
                            <label for="UserPassword"></label>
                            <input type="password" name="password" class="bar curved5" id="UserPassword" />
                        </div>
						<div class="input text required">
							<input id="rememberme" type="checkbox" name="rememberme"> Remember me
						</div>
						<input type="hidden" name="action" value="login">
                        
						<input class="btn s1" type="submit" name="login" value="Login" />
                        
						<a href="auth/signup.php" class="btn s2">Register</a>
                </form>
                <div class="sb-sep"></div>
                <a href="#" class="ilink">Forgot your Password?</a>
                <br />
				

            </div>
			
			<div class="sb-end"></div>

            <!-- calendar -->
            <div class="sb-title">
                <span class="icon"><span class="icon-moon"></span></span>
                <h3>Events</h3>
            </div>
            <div class="sb-con">
                <div class="servertime">Current Time: </div>
                <div class="sb-sep"></div>
                <div id="calendar"></div>
                <a href="/events" class="ilink">View all events</a> </div>
            <div class="sb-end"></div>

            <!-- ranking -->
            <div class="sb-title">
                <span class="icon"><span class="icon-ranking"></span></span>
                <h3 id="sb-ranking-title">Ranking</h3>
            </div>
            <div class="sb-con">

                <div id="sb-ranking-menu">
                    <div class="sb-links">
                        <a href="javascript:void(0);" id="ranking-revolution-players" class="i-bullet sb-ranking-btn">PokeDev</a> </div>
                    <a href="javascript:void(0)" class="ilink right ilink2 curved3 switch-menu">Menu</a>
                    <div class="clearfix"></div>
                </div>

                <div id="sb-ranking-revolution-players" class="sb-ranking-div">
                    <a href="http://pokedev.co.cc/ranking.php" class="ilink left">View All</a>
                    <a href="javascript:void(0)" class="ilink right ilink2 curved3 switch-menu">View All</a>
                    <div class="clearfix"></div>
                </div>

            </div>
            <div class="sb-end"></div>

            <!-- facebook -->
            <div class="sb-title">
                <span class="icon"><span class="icon-fb"></span></span>
                <h3>Join Facebook</h3>
            </div>
            <div class="sb-con">
                <div class="fblike curved5">
                    <div id="fb-root"></div>
                    <fb:like-box href="http://www.facebook.com/pages/PokeDev/241640149215088" width="202" height="270" show_faces="true" border_color="#FFF" stream="false" header="false"></fb:like-box>
                </div>
            </div>
            <div class="sb-end"></div>
        </div>
        <!-- sidebar:end -->

        <!-- content -->
        <div id="content">
            <div class="box-top"></div>

            <div class="box-title">

                <span class="icon"><span class="icon-r"></span></span>

                <h2>Register</h2>

            </div>

            <div class="box-con">

                <div class="box-margin">

                    <div style="float:right;background: url('../img/register-kafra.png');width:171px;height:341px;margin:-30px 50px 15px 30px;"></div>

                    <br/>

                    <form class="ajaxform" method="POST" action="">
						<div class="input text">
                            <label for="login">Username:</label>
                            <input name="username" type="text" class="bar curved5" id="user" />
                        </div>
						<div class="input text">
                            <label for="email">E-mail:</label>
                            <input name="email" type="text" class="bar curved5" id="email1" />
                        </div>
                        <div class="input password">
                            <label for="password">Password:</label>
                            <input type="password" name="password" class="bar curved5" value="" id="pass1" />
                        </div>
						<div class="input password">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" name="cpassword" class="bar curved5" value="" style="margin-bottom:15px;" id="pass2" />
                        </div>
						<!--
						<div class="input select">
                            <label for="starters">Starter</label>
                            <select name="starter" class="bar curved5" style="margin-bottom:15px;" id="starter">
                                <option value="Bulbasaur">Bulbasaur</option>
                                <option value="Charmander">Charmander</option>
                                <option value="Squirtle">Squirtle</option>
                                <option value="Chikorita">Chikorita</option>
                                <option value="Cyndaquil">Cyndaquil</option>
                                <option value="Totodile">Totodile</option>
                                <option value="Treecko">Treecko</option>
                                <option value="Torchic">Torchic</option>
                                <option value="Mudkip">Mudkip</option>
                                <option value="Turtwig">Turtwig</option>
                                <option value="Chimchar">Chimchar</option>
                                <option value="Piplup">Piplup</option>
                            </select>
                        </div>
                        <div class="input select">
                            <label for="regions">Region</label>
                            <select name="region" class="bar curved5" style="margin-bottom:15px;" id="region">
                                <option value="Kanto">Kanto</option>

                            </select>
                        </div>
                        <div class="input select">
                            <label for="sexs">Sex</label>
                            <select name="sex" class="bar curved5" style="margin-bottom:15px;" id="sex">
                                <option value="11">Male</option>
                                <option value="20">Female</option>

                            </select>
                        </div>
						-->
						<div style="padding-left:60px;">
							<div id="PLS_recaptcha_widget">
								<div id="recaptcha_image" style="border: 1px solid #b3d8fe;"></div>
								<a class="recaptcha-text" href="javascript:Recaptcha.reload()">Reload</a>
								<a class="recaptcha-text" class="recaptcha_only_if_image link" href="javascript:Recaptcha.switch_type('audio')">Listen</a>
								<a class="recaptcha-text" class="recaptcha_only_if_audio link" href="javascript:Recaptcha.switch_type('image')">Image</a>
								<a class="recaptcha-text" class="link" href="javascript:Recaptcha.showhelp()">Help</a><br>
								<input type="text" class="bar curved5" id="recaptcha_response_field" name="recaptcha_response_field">
							</div>
							<input type="hidden" name="action" value="signup"><br>
							<button type="submit" class="btn s2" style="opacity: 0.7;" name="signup">SIGN UP</button>
						</div>
					</form>
                    <br><br>
					<div class="social-login">
						<a href="connect.php?method=facebook" title="Forum" class="facebook-login" style="opacity: 0.9;"></a>
						<a href="connect.php?method=twitter" title="Forum" class="twitter-login" style="opacity: 0.9;"></a>
						<a href="connect.php?method=google" title="Forum" class="google-login" style="opacity: 0.9;"></a>
					</div>
					<br><br><br>
		<script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=<?php echo Config::Get('captcha.public'); ?>"></script>
                </div>

            </div>

            <div class="box-btm"></div>

        </div>
        <!-- content:end -->

        <div class="clearfix"></div>
    </div>
    <div id="main-btm"></div>

    <div class="w960">
        <!-- breadcrumbs: bottom -->
        <div class="breadcrumbs">
            <a class="top" href="#">Top</a>
        </div>
    </div>

    <div id="footer">
        <div class="w960">
            <!-- info -->
            <div class="left">
                <a href="/"><img src="../img/ragbrasil_logo_s.png" alt="" />
                </a> Copyright &copy; PokeDev 2011 - 2012. All rights reserved to the respective owners.
            </div>
            <!-- links -->
            <!-- <div class="right">
        <a href="#" title="Homepage">Home</a> <span>&frasl;</span>
        <a href="#" title="Privacy Policy">Privacy Policy</a> <span>&frasl;</span>
        <a href="#" title="Terms of Service">Terms of Service</a> <span>&frasl;</span>
        <a href="#" title="Disclaimer">Disclaimer</a> <span>&frasl;</span>
        <a href="#" title="About us">About</a> <span>&frasl;</span>
        <a href="#" title="Contact us">Contact</a>      
      </div>
	  -->
        </div>
    </div>




    <script type="text/javascript" src="../js/init.js"></script>
</body>

</html>
<div style="background: #FFF">
</div>
<!-- -DefaulT //-->
<!--d.faultx@gmail.com //-->