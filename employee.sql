-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 12, 2016 at 07:37 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `employee`
--
/*
CREATE DATABASE IF NOT EXISTS `storage_customer` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `storage_customer`;
*/
-- --------------------------------------------------------

--
-- Table structure for table `emp_details`
--

CREATE TABLE IF NOT EXISTS `cust_details` (
  `cust_id` int(255) NOT NULL AUTO_INCREMENT,
  `cust_name` varchar(255) NOT NULL,
  `cust_email` varchar(255) NOT NULL,
  `cust_time` varchar(255) NOT NULL,
  `cust_telephone` varchar(255) NOT NULL,
  `cust_location` varchar(255) NOT NULL,
  `cust_size` varchar(255) NOT NULL,
  `cust_submittedTime` timestamp NOT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `emp_details`
--

INSERT INTO `cust_details` (`cust_id`, `cust_name`, `cust_email`, `cust_time`, `cust_telephone`, `cust_location`, `cust_size`, `cust_submittedTime`) VALUES
(1, 'Justin', 'justin@yahoo.com', '7pm', '555.555.5555', 'Elm', '10 x 10', '5/21/2017 - 8:13'),
(2, 'Mark', 'Mark@gmail.com', '10am', '555.555.5555', 'Temple', '10 x 40', '5/21/2017 - 8:13'),
(3, 'Sachin', 'sachin05@gmail.com', '1pm', '555.555.5555', 'Temple', '10 x 25', '5/21/2017 - 8:13'),
(4, 'Rachel', 'rachel1221@outlook.com', 'after 5pm', '555.555.5555', 'Temple', '10 x 25', '5/21/2017 - 8:13'),
(5, 'John', 'john55@yahoo.com', 'anytime', '555.555.5555', 'Elm', '10 x 15', '5/21/2017 - 8:13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
