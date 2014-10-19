<?php
require_once 'config/init.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>PokeDev - Development Server</title>
    <link href="img/favicon.ico" type="image/x-icon" rel="icon" />
    <link href="img/favicon.ico" type="image/x-icon" rel="shortcut icon" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/jq.ui.css" />
    <link rel="stylesheet" type="text/css" href="css/slider.css" />
	<script type="text/javascript" src="../assets/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="js/jq.ui.js"></script>
    <script type="text/javascript" src="js/slider.js"></script>
    <script type="text/javascript" src="js/tooltip.js"></script>
	<script type="text/javascript">var PLS_config = {ajax_url: '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>'};</script>
	<script type="text/javascript" src="assets/js/premiumlogin.min.js"></script>
</head>

<body>



    <!-- header-->
    <div id="header">
        <div class="hbg">
            <!-- logo -->
            <div id="logo">
                <a href="/"><img src="img/ragbrasil_logo.png" alt="" />
                </a>
            </div>
            <!-- navbar -->
            <div id="navbar">
                <ul>
                    <li><a href="" class="current">Home</a>
                    </li>
					<?php if(!Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
                    <li><a href="auth/signup.php" class="">Register</a>
                    </li>
					<?php endif; ?>
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
        </div>
    </div>

    <div id="header-bg">
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
			
			<?php if(!Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
            <!-- button: download -->
            <a href="#" class="sb-special sb-download">Minimon Client v.0.2</a>
			<!-- button: community -->
            <a href="#" class="sb-special sb-community">Meet your friends</a>
			<?php else: ?>
			<!-- button: download -->
            <a href="user/game.php" class="sb-special sb-download">Minimon Client v.0.2</a>
			<!-- button: community -->
            <a href="user/world-map.php" class="sb-special sb-community">Meet your friends</a>
			<?php endif; ?>

			<?php if(!Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
            <!-- user panel -->
            <div class="sb-title">
                <span class="icon"><span class="icon-user"></span></span>
                <h3>Control Panel</h3>
            </div>
			
            <div class="sb-con">
                <form class="ajaxform" id="UserLoginForm" method="POST" action="">
                    <div style="display:none;">
                        <input type="hidden" name="_method" value="POST" />
                        <input type="hidden" name="data[_Token][key]" value="aa53de0e1ad69e03d80c9e86bd5c74cb5a5bbc80" id="Token1894939656" />
                    </div>
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
			
			<?php endif; ?>

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

                    <a href="http://pokedev.co.cc/main/ranking.php" class="ilink left">View All</a>
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
            <!-- slider -->
            <div class="box-top"></div>
            <div class="box-con">
                <div class="slider">
                    <ul id="slider">
                        <li>
                            <a href="#"><img src="img/slides/04.jpg" alt="" /><span>Create a pokemon team!</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src="img/slides/02.jpg" alt="" /><span>Beta!</a></li>
	<li><a href="#"><img src="img/slides/03.jpg" alt="" /><span>Explore new places!</span>
                            </a>
                        </li>
                    </ul>
                    <div class="slider-overlay"></div>
                </div>
            </div>
            <div class="box-btm"></div>

            <!-- announcement -->
            <div class="box-top"></div>
            <div class="box-title">
                <span class="icon"><span class="icon-ann"></span></span>
                <h2>Beta: <span>Welcome!</span></h2>
            </div>
            <div class="box-con">
                <div class="rel">
                    <div class="char-con"></div>
                </div>
				
				<?php if(Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
			<p>
			<img src="<?php echo $user->GetAvatar(); ?>" style="width:30px;"> <br>
			Welcome back, <?php echo $user->Get('username') ?><br>
			<a href="user/">Settings</a><br>
			<?php if($user->IsAdmin()) : ?>
				<a href="admin/">Admin</a><br>
			<?php endif; ?>
			<a href="auth/logout.php">Logout</a></p>
		<?php else: ?>
			<p>
                    Hello Bets Testers!
                    <br />
                    <br /> PokeDev has been release. Please dont bother registering on the site since its not linked to the game database yet, register in the game client instead! Please be sure to report all bugs on the forum!
                    <br />
                    <br /> Sincerely,
                    <br /> -DefaulT
                </p>
                <div class="sep"></div>
                <a href="http://pokedev.co.cc/forum/viewtopic.php?f=4&t=13&sid=47a4f76035223663fbefa93e58dc517c" class="ilink">View All</a>
		<?php endif; ?>
            </div>
            <div class="box-btm"></div>

            <!-- news -->
            <div class="box-top"></div>
            <div class="box-title">
                <span class="icon"><span class="icon-info"></span></span>
                <h2>Recent News</h2>
            </div>
            <div class="box-con">
                <div class="news">
                    <a href="http://pokedev.co.cc/forum/viewtopic.php?f=7&t=75&sid=ed12493cfef4fc36d6f2100289858543">
                        <span class="ntype t-update">[UPDATE]</span>
                        <img src="img/news/01.jpg" alt="" />
                        <span class="title">Sprite Changer</span>
                        <span class="date">09/24/2011</span>
                    </a>
                    <a href="http://pokedev.co.cc/forum/viewtopic.php?f=7&t=26&sid=20714b6ac6be82d21e017bb900c9c39b">
                        <span class="ntype t-update">[UPDATE]</span>
                        <img src="img/news/01.jpg" alt="" />
                        <span class="title">Patch v1.1</span>
                        <span class="date">09/22/2011</span>
                    </a>
                    <a href="http://pokedev.co.cc/forum/viewtopic.php?f=4&t=13&sid=47a4f76035223663fbefa93e58dc517c">
                        <span class="ntype t-new">[NEW]</span>
                        <img src="img/news/01.jpg" alt="" />
                        <span class="title">Welcome To Beta!</span>
                        <span class="date">09/19/2011</span>
                    </a>


                </div>
                <a href="http://pokedev.co.cc/forum/" class="ilink">View More</a>
            </div>
            <div class="box-btm"></div>

            <!-- screenshots -->
            <div class="box-top"></div>
            <div class="box-title">
                <span class="icon"><span class="icon-cam"></span></span>
                <h2>Screenshots</h2>
            </div>
            <div class="box-con">
                <div class="screenshots">
                    <a href="#"><img src="img/screenshots/01.jpg" alt="01" />
                    </a>
                    <a href="#"><img src="img/screenshots/02.jpg" alt="02" />
                    </a>
                    <a href="#"><img src="img/screenshots/03.jpg" alt="03" />
                    </a>
                    <a href="#"><img src="img/screenshots/04.jpg" alt="04" />
                    </a>
                    <a href="#"><img src="img/screenshots/05.jpg" alt="05" />
                    </a>
                </div>
                <div class="sep"></div>
                <a href="/simple/media" class="ilink">View more screenshots</a>
            </div>
            <div class="box-btm"></div>

            <!-- about -->
            <div class="box-top"></div>
            <div class="box-title">
                <span class="icon"><span class="icon-r"></span></span>
                <h2>What is PokeDev?</h2>
            </div>
            <div class="box-con">
                <div class="rel2">
                    <div class="char-about"></div>
                </div>
                <p style="text-align: justify">
                    PokeDev is an open source Pokemon MMORPG that is based off of the Pokenet server files. Coded in java this project is being developed by -DefaulT and the community of RaGEZONE. More to come later.
                </p>
                <div class="sep"></div>
                <a href="http://pokedev.co.cc/main/about.php" class="ilink">Learn more</a>
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
                <a href="/"><img src="img/ragbrasil_logo_s.png" alt="" />
                </a> Copyright &copy; PokeDev 2011 - 2012. All rights reserved to the respective owners.
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/init.js"></script>
</body>

</html>
<div style="background: #FFF">
</div>
<!-- -DefaulT //-->
<!--d.faultx@gmail.com //-->