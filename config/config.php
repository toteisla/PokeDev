<?php

return array(

	//your site base url
	'base_url' => 'http://minimon.ddns.net/',

	//database connect credentials
	'db' => array(
		'host' => 'localhost',
		'username' => 'root',
		'password' => '',
		'name' => 'minimon',
		'table' => 'players',
		),

	//recaptha API keys -- fill in if you want to use captha
	//(www.recaptcha.net)
	'captcha' => array(
		'public' => '6LeguPsSAAAAAK2JhL7hwvVwcRqJqw84ys53vKjj',
		'private' => '6LeguPsSAAAAAKMp6khwCNRzIenESqKhe5dkmuva',
		),
	
	//social login API --- fill in if you want to connect with social networks
	'social' => array(

		//(https://developers.facebook.com/)
		'facebook' => array(
			'id' => '312993435552058',
			'secret' => 'fdf2a49dd7c992fa5cc51dbdab7d88ae',
			),
		//(https://console.developers.google.com/project)
		'google' => array(
			'id' => '',
			'secret' => '',
			'dev' => '',
			),
		//(https://dev.twitter.com/)
		'twitter' => array(
			'id' => '',
			'secret' => '',
			),
		),

	'avatar' => array(
		'upload_path' => 'uploads/',
		'maxsize' => '3000000',
		'resolution' => '400',
		),

	'validation' => array(
		'password_lenght' => 6,
		'use_captcha' => true,
		'email_activation' => true,
		),

	'email' => array(
		'use_PHPMailer' => true,
		'use_smtp' => true,
		'smtp_auth' => true,
		'smtp_secure' => 'ssl',
		'host' => 'smtp.gmail.com',
		'port' => 465,
		'username' => '', //email account
		'password' => '', 
		'from' => '',     //email account
		'from_name' => '',// display name
		),
	);