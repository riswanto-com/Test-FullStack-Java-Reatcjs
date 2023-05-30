-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2023 at 10:23 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_person`
--

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `end` int(11) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `id_person` int(11) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `name_university` varchar(255) DEFAULT NULL,
  `start` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `city`, `end`, `grade`, `id_person`, `major`, `name_university`, `start`) VALUES
(1, 'jakarta', 2023, 'Strata satu', 2, 'Sistem', 'Universitas', 2020);

-- --------------------------------------------------------

--
-- Table structure for table `employment_history`
--

CREATE TABLE `employment_history` (
  `id` int(11) NOT NULL,
  `end` date DEFAULT NULL,
  `id_person` int(11) DEFAULT NULL,
  `job_desc` longtext DEFAULT NULL,
  `name_company` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `start` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employment_history`
--

INSERT INTO `employment_history` (`id`, `end`, `id_person`, `job_desc`, `name_company`, `position`, `start`) VALUES
(1, '2023-05-30', 2, 'test', 'PT apa Ajaa', 'IT', '2023-02-07');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `address` longtext DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `driving_license` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `job_title` varchar(100) DEFAULT NULL,
  `name_first` varchar(100) DEFAULT NULL,
  `name_last` varchar(100) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `photo` varchar(15) DEFAULT NULL,
  `place_of_birth` varchar(100) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `professional_summary` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `address`, `date_of_birth`, `driving_license`, `email`, `job_title`, `name_first`, `name_last`, `nationality`, `phone`, `photo`, `place_of_birth`, `postal_code`, `city`, `country`, `professional_summary`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'Jl. Kesana', '2023-03-30', '44344455', 'wawan2072@gmail.com', 'Software Engineer', 'Test', 'saja', 'WNI', '089634922954', NULL, 'Jakarta', '23009', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id` int(11) NOT NULL,
  `id_person` int(11) DEFAULT NULL,
  `name_skill` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id`, `id_person`, `name_skill`) VALUES
(1, 2, 'Java');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employment_history`
--
ALTER TABLE `employment_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employment_history`
--
ALTER TABLE `employment_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
