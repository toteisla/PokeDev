<?php
require_once '../config/init.php';

if(!Authentication::IsLogged())
	header('Location: ../index.php');

$user = Session::Get('current_user');
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>
        PokeDev - Development Server </title>
	<!-- Stylesheets -->
    <link href="../img/favicon.ico" type="image/x-icon" rel="icon" />
    <link href="../img/favicon.ico" type="image/x-icon" rel="shortcut icon" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <!--<link rel="stylesheet" type="text/css" href="../css/jq.ui.css" />-->
    <link rel="stylesheet" type="text/css" href="../css/slider.css" />
	<!-- / Stylesheets -->
	
	<!-- Javascripts -->
	<!--<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">-->
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js" ></script>
	<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
    <script type="text/javascript" src="../js/slider.js"></script>
    <script type="text/javascript" src="../js/tooltip.js"></script>
	<script type="text/javascript"> var PLS_config = {ajax_url : '<?php echo Config::Get('base_url').'auth/ajax.php'; ?>',};</script>
	<script type="text/javascript"> var RecaptchaOptions = {theme : 'custom', custom_theme_widget: 'PLS_recaptcha_widget'};</script>
	<script type="text/javascript" src="../assets/js/premiumlogin.min.js"></script>
    <script type="text/javascript" src="http://minimon.ddns.net:9090/socket.io/socket.io.js"></script>
    <script type="text/javascript" src="lib/impact/impact.js"></script>
    <script type="text/javascript" src="lib/game/main.js"></script>
        <script src="battle/scripts/functions/functions.js"></script>
        <script src="battle/scripts/functions/random.js"></script>
        <script src="battle/scripts/objects/unique/Settings.js"></script>
        <script src="battle/scripts/functions/File.js"></script>
        <script src="battle/scripts/objects/unique/FileData.js"></script>
        <script src="battle/scripts/data/constants.js"></script>
        <script src="battle/scripts/objects/unique/Type.js"></script>
        <script src="battle/scripts/objects/unique/Move.js"></script>
        <script src="battle/scripts/objects/unique/Map.js"></script>
        <script src="battle/scripts/data/Moves.js"></script>
        <script src="battle/scripts/data/Pokemon.js"></script>
        <script src="battle/scripts/data/Abilities.js"></script>
        <script src="battle/scripts/data/Items.js"></script>
        <script src="battle/scripts/data/machines.js"></script>
        <script src="battle/scripts/data/accessories.js"></script>
        <script src="battle/scripts/objects/unique/Widgets.js"></script>
        <script src="battle/scripts/objects/unique/Textbox.js"></script>
        <script src="battle/scripts/objects/unique/Display.js"></script>
        <script src="battle/scripts/objects/unique/View.js"></script>
        <script src="battle/scripts/objects/unique/Game.js"></script>
        <script src="battle/scripts/objects/unique/Pokedex.js"></script>
        <script src="battle/scripts/objects/unique/visuals.js"></script>
        <script src="battle/scripts/objects/general/bag.js"></script>
        <script src="battle/scripts/objects/general/party.js"></script>
        <script src="battle/scripts/objects/general/trainer.js"></script>
        <script src="battle/scripts/objects/general/battler.js"></script>
        <script src="battle/scripts/objects/general/pokemon.js"></script>
        <script src="battle/scripts/objects/unique/Client.js"></script>
        <script src="battle/scripts/objects/unique/Battle.js"></script>
        <script src="battle/battle.js"></script>
        <link href="battle/battle.css" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,600italic,300,600&subset=latin-ext,latin" rel="stylesheet" type="text/css">
	<!-- / Javascripts -->
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
                <div class="ingame-social">
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

        <!-- content -->
        <div id="game-content">
            <div class="box-top"></div>
            <div class="box-con">
				<div class="box-margin">
				
				<?php if(Authentication::IsLogged()): $user = Session::Get('current_user'); ?>
				<!-- Battle window -->
				<div id="battle-window" style="display:none;">
						<canvas id="game-battle" tabindex="1"></canvas>
						<canvas id="game-textbox"></canvas>
				</div>
				<div style="display:none;">
							<canvas id="fps" class="corner"></canvas>
							<button id="connect">Connect</button>
							<span>with the name</span>
							<input id="name" type="text" value="Dark Matter">
							<button id="randomise" class="small">⚄</button>
							<span>or initiate an</span>
							<span>Battle with the following Pokémon:</span>
							<ul id="team" class="zebra"></ul>
							<ul id="users"></ul>
				</div>
				<!-- / Battle window -->
					<canvas id="canvas"></canvas>
					<div id="chat">
						<div>
							<input type="text" id="input" autocomplete="off"></input>
						</div>
					</div>
	
				<?php endif; ?>
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
        </div>
    </div>




    <script type="text/javascript" src="../js/init.js"></script>
	<script type="text/javascript">
	document.onkeydown = function(){
		var unallowedKeys = [32, 38, 37, 39, 40];
		
		if (unallowedKeys.indexOf(event.which) != -1 && !$('#game-content').focus()) {
			return false;
		}
		
	}
	</script>	
</body>

</html>
<div style="background: #FFF">
</div>
<!-- -DefaulT //-->
<!--d.faultx@gmail.com //-->