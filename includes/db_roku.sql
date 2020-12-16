-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 15, 2020 at 05:21 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movieChannelA`
--

CREATE TABLE `tbl_movieChannelA` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movieChannelA`
--

INSERT INTO `tbl_movieChannelA` (`id`, `name`, `year`, `description`, `image`) VALUES
(1, 'Ingrid Goes West', '2017 | 1h 38m', 'Desperate for human contact, an obsessive young woman moves to Venice Beach, Calif., to strike up a friendship with a social media celebrity.', 'movieChannelA1.jpg'),
(2, 'Racer and the Jailbird', '2017 | 2h 10m', 'From the Academy Award nominated director of Bullhead.', 'movieChannelA2.jpg'),
(3, 'Bad Ass', '2012 | 1h 45m', 'A decorated Vietnam War veteran (Danny Trejo) takes justice into his own hands when his best friend is murdered and the police are slow to solve the case.', 'movieChannelA3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tvChannelA`
--

CREATE TABLE `tbl_tvChannelA` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tvChannelA`
--

INSERT INTO `tbl_tvChannelA` (`id`, `name`, `year`, `description`, `image`) VALUES
(1, 'Hell\'s Kitchen', '2005', 'Genres: Reality | Cooking', 'tvChannelA1.jpg'),
(2, 'Forensic Files', '1996', 'Genres: Documentary | Crime | Medical\r\n\r\nRetracing the steps of real investigations with interviews and dramatic re-creations as experts draw on forensic science to solve baffling crimes and other mysteries.', 'tvChannelA2.jpg'),
(3, 'Doc Martin', '2004', 'Genres: Comedy drama | Medical\r\nDr Martin Ellingham leaves a busy London practice to start a small surgery in Portwenn, but his abrasive bedside manner leaves the locals wanting him gone.', 'tvChannelA3.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_movieChannelA`
--
ALTER TABLE `tbl_movieChannelA`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_tvChannelA`
--
ALTER TABLE `tbl_tvChannelA`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_movieChannelA`
--
ALTER TABLE `tbl_movieChannelA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_tvChannelA`
--
ALTER TABLE `tbl_tvChannelA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
