-- phpMyAdmin SQL Dump
-- version 3.5.8.1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Фев 15 2014 г., 13:15
-- Версия сервера: 5.1.70-beget-log
-- Версия PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- --------------------------------------------------------

--
-- Структура таблицы `modx_exam_sheet`
--
-- Создание: Фев 15 2014 г., 09:15
-- Последнее обновление: Фев 15 2014 г., 09:15
--

DROP TABLE IF EXISTS `modx_exam_sheet`;
CREATE TABLE IF NOT EXISTS `modx_exam_sheet` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `student` varchar(255) DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `course` int(1) unsigned DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `examiner` varchar(255) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `score` int(1) unsigned DEFAULT NULL,
  `created_by` int(10) unsigned DEFAULT NULL,
  `add1` varchar(255) DEFAULT NULL,
  `add2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `date` (`date`,`created_by`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
