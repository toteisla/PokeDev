-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 17. Okt 2014 um 22:40
-- Server Version: 5.6.16
-- PHP-Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `minimon`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `activity`
--

CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL,
  `plays` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Daten für Tabelle `activity`
--

INSERT INTO `activity` (`id`, `time`, `plays`) VALUES
(1, '0000-00-00 00:00:00', 1),
(2, '0000-00-00 00:00:00', 1),
(3, '0000-00-00 00:00:00', 1),
(4, '0000-00-00 00:00:00', 1),
(5, '0000-00-00 00:00:00', 1),
(6, '0000-00-00 00:00:00', 1),
(7, '0000-00-00 00:00:00', 1),
(8, '0000-00-00 00:00:00', 1),
(9, '0000-00-00 00:00:00', 1),
(10, '0000-00-00 00:00:00', 1),
(11, '0000-00-00 00:00:00', 1),
(12, '0000-00-00 00:00:00', 1),
(13, '0000-00-00 00:00:00', 1),
(14, '0000-00-00 00:00:00', 1),
(15, '0000-00-00 00:00:00', 1),
(16, '0000-00-00 00:00:00', 1),
(17, '0000-00-00 00:00:00', 1),
(18, '0000-00-00 00:00:00', 1),
(19, '0000-00-00 00:00:00', 1),
(20, '0000-00-00 00:00:00', 1),
(21, '0000-00-00 00:00:00', 1),
(22, '0000-00-00 00:00:00', 1),
(23, '0000-00-00 00:00:00', 1),
(24, '0000-00-00 00:00:00', 1),
(25, '0000-00-00 00:00:00', 1),
(26, '0000-00-00 00:00:00', 1),
(27, '0000-00-00 00:00:00', 1),
(28, '0000-00-00 00:00:00', 1),
(29, '0000-00-00 00:00:00', 1),
(30, '0000-00-00 00:00:00', 1),
(31, '0000-00-00 00:00:00', 1),
(32, '0000-00-00 00:00:00', 1),
(33, '0000-00-00 00:00:00', 1),
(34, '0000-00-00 00:00:00', 1),
(35, '0000-00-00 00:00:00', 1),
(36, '0000-00-00 00:00:00', 1),
(37, '0000-00-00 00:00:00', 1),
(38, '0000-00-00 00:00:00', 1),
(39, '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `houses`
--

CREATE TABLE IF NOT EXISTS `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(50) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '1',
  `style` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Daten für Tabelle `houses`
--

INSERT INTO `houses` (`id`, `owner`, `level`, `style`) VALUES
(1, 'develix', 1, 'default'),
(2, 'felix.maier', 2, 'default'),
(3, 'derTester', 5, 'sprite');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `maps`
--

CREATE TABLE IF NOT EXISTS `maps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `side_n` varchar(60) NOT NULL,
  `side_s` varchar(60) NOT NULL,
  `side_w` varchar(60) NOT NULL,
  `side_e` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=117 ;

--
-- Daten für Tabelle `maps`
--

INSERT INTO `maps` (`id`, `name`, `side_n`, `side_s`, `side_w`, `side_e`) VALUES
(1, 'Anchore Town', '1', '1', '1', '1'),
(116, 'Anchore Town', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `objects`
--

CREATE TABLE IF NOT EXISTS `objects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `objects_placed`
--

CREATE TABLE IF NOT EXISTS `objects_placed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(10) NOT NULL,
  `y` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `players`
--

CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `activation_key` varchar(50) NOT NULL,
  `activation_state` tinyint(1) NOT NULL,
  `social_id` varchar(50) NOT NULL,
  `social_type` varchar(10) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `about` varchar(150) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `x` int(6) NOT NULL DEFAULT '2080',
  `y` int(6) NOT NULL DEFAULT '4480',
  `zone` varchar(32) NOT NULL DEFAULT 'RsWorld',
  `direction` varchar(5) NOT NULL DEFAULT 'down',
  `skin` varchar(10) NOT NULL DEFAULT '455',
  `state` varchar(20) NOT NULL DEFAULT 'idle',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Daten für Tabelle `players`
--

INSERT INTO `players` (`id`, `username`, `email`, `password`, `user_type`, `activation_key`, `activation_state`, `social_id`, `social_type`, `avatar`, `fullname`, `phone`, `location`, `about`, `gender`, `join_date`, `x`, `y`, `zone`, `direction`, `skin`, `state`) VALUES
(2, 'develix', 'rewertwert@admin.com', 'fbd5d72fbcdfcf2eb78b609d29058fef', 'admin', '', 1, '', 'normal', '1jpg', '', '', '', '', '', '2014-05-13 18:35:08', 2112, 4512, 'RsWorld', 'up', 'boy', 'idle'),
(16, 'felix.maier', '234gdfgrgr@gmail.com', 'fbd5d72fbcdfcf2eb78b609d29058fef', 'user', '', 1, '706680039411731', 'facebook', '1jpg', 'Mr.Test', '', '', '', 'M', '2014-09-13 18:55:45', 2080, 4496, 'RsWorld', 'up', 'boy', 'idle');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `players_pokemon`
--

CREATE TABLE IF NOT EXISTS `players_pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `user` int(11) NOT NULL,
  `box` int(11) NOT NULL DEFAULT '0',
  `dex` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `forme` int(11) NOT NULL,
  `level` int(3) NOT NULL DEFAULT '5',
  `move_1` varchar(12) NOT NULL,
  `move_2` varchar(12) NOT NULL,
  `move_3` varchar(12) NOT NULL,
  `move_4` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Daten für Tabelle `players_pokemon`
--

INSERT INTO `players_pokemon` (`id`, `name`, `user`, `box`, `dex`, `pid`, `forme`, `level`, `move_1`, `move_2`, `move_3`, `move_4`) VALUES
(1, 'Bulbasaur', 6, -1, 320, 1, 1, 5, '', '', '', ''),
(2, 'Bulbasaur', 7, -1, 320, 1, 1, 5, '', '', '', ''),
(3, 'Bulbasaur', 2, -1, 320, 1, 1, 30, 'Tackle', 'Yawn', '', ''),
(4, 'Schiggy', 4, -1, 1, 1, 1, 5, '', '', '', ''),
(5, 'Glumanda', 16, -1, 320, 1, 1, 5, '', '', '', '');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `premiumlogin`
--

CREATE TABLE IF NOT EXISTS `premiumlogin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `activation_key` varchar(50) NOT NULL,
  `activation_state` tinyint(1) NOT NULL,
  `social_id` varchar(50) NOT NULL,
  `social_type` varchar(10) NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `location` varchar(20) NOT NULL,
  `about` varchar(150) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `x` int(6) NOT NULL DEFAULT '2080',
  `y` int(6) NOT NULL DEFAULT '4480',
  `zone` varchar(32) NOT NULL DEFAULT 'RsWorld',
  `direction` varchar(5) NOT NULL DEFAULT 'down',
  `skin` varchar(10) NOT NULL DEFAULT '455',
  `state` varchar(20) NOT NULL DEFAULT 'idle',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Daten für Tabelle `premiumlogin`
--

INSERT INTO `premiumlogin` (`id`, `username`, `email`, `password`, `user_type`, `activation_key`, `activation_state`, `social_id`, `social_type`, `avatar`, `fullname`, `phone`, `location`, `about`, `gender`, `join_date`, `x`, `y`, `zone`, `direction`, `skin`, `state`) VALUES
(2, 'develix', 'rewertwert@admin.com', 'fbd5d72fbcdfcf2eb78b609d29058fef', 'admin', '', 1, '', 'normal', '1jpg', '', '', '', '', '', '2014-05-13 18:35:08', 2112, 4512, 'RsWorld', 'up', 'boy', 'idle'),
(16, 'felix.maier', '234gdfgrgr@gmail.com', 'fbd5d72fbcdfcf2eb78b609d29058fef', 'user', '', 1, '706680039411731', 'facebook', '1jpg', 'Mr.Test', '', '', '', 'M', '2014-09-13 18:55:45', 2080, 4496, 'RsWorld', 'up', 'boy', 'idle');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `work`
--

CREATE TABLE IF NOT EXISTS `work` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `gold` int(11) NOT NULL,
  `timeleft` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
