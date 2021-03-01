-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2021 at 08:28 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_app_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `daily_task_tb`
--

CREATE TABLE `daily_task_tb` (
  `id` int(20) UNSIGNED NOT NULL,
  `TASK_NAME` varchar(30) NOT NULL,
  `TASK_DETAIL` varchar(50) NOT NULL,
  `TIME` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='This Table stores the daily tasks displayed on dashboard';

--
-- Dumping data for table `daily_task_tb`
--

INSERT INTO `daily_task_tb` (`id`, `TASK_NAME`, `TASK_DETAIL`, `TIME`) VALUES
(1, 'Meeting', 'Meeting With Ahsan', '00:00:07'),
(2, 'Ahsan', 'My Name is Ahsan Asghar', '00:00:00'),
(3, 'Ahsan', 'sdg', '00:00:00'),
(4, ' Ahsan', 'cvdsf', '00:00:00'),
(6, '', '', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `N_ID` bigint(20) UNSIGNED NOT NULL,
  `N_TITLE` varchar(50) NOT NULL,
  `N_DETAILS` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`N_ID`, `N_TITLE`, `N_DETAILS`) VALUES
(1, 'Project Completed!', 'Protove a stuning React.js Learning Management Platform got completed By Mr. Ahsan.'),
(168, 'Goals!', 'Implemented the React.js Concepts in a real-world Scenario!'),
(171, 'New Feature Coming Soon!', 'Wonderful Features coming Soon!'),
(172, 'New Update Coming Soon!', 'Stunning Update Coming Soon!');

-- --------------------------------------------------------

--
-- Table structure for table `students_result_tb`
--

CREATE TABLE `students_result_tb` (
  `ROLLNO` int(10) NOT NULL,
  `SUBJECT` varchar(50) NOT NULL,
  `TOTAL_MARKS` int(20) NOT NULL,
  `OBTAINED_MARKS` int(20) NOT NULL,
  `CHAPTER` int(11) NOT NULL,
  `DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students_result_tb`
--

INSERT INTO `students_result_tb` (`ROLLNO`, `SUBJECT`, `TOTAL_MARKS`, `OBTAINED_MARKS`, `CHAPTER`, `DATE`) VALUES
(1, 'Computer Science', 10, 10, 1, '0000-00-00'),
(1, 'Computer Science', 10, 10, 1, '2021-01-11');

-- --------------------------------------------------------

--
-- Table structure for table `student_login_table`
--

CREATE TABLE `student_login_table` (
  `S_ID` int(10) NOT NULL,
  `USERNAME` varchar(40) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_login_table`
--

INSERT INTO `student_login_table` (`S_ID`, `USERNAME`, `Email`, `Password`) VALUES
(0, '', 'ahsanasghar232@gmail.com', 'asdf232');

-- --------------------------------------------------------

--
-- Table structure for table `student_sign_up_table`
--

CREATE TABLE `student_sign_up_table` (
  `S_ID` int(11) NOT NULL,
  `USERNAME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) CHARACTER SET armscii8 NOT NULL,
  `PASSWORD` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_sign_up_table`
--

INSERT INTO `student_sign_up_table` (`S_ID`, `USERNAME`, `EMAIL`, `PASSWORD`) VALUES
(1, 'Ahsan Asghar', 'ahsanasghar232@gmail.com', '123'),
(2, 'Awais Asghar', '', '12345'),
(3, 'Zain Ul Abideen', 'zain123@gmail.com', '123'),
(4, 'ranataimoor', 'ranataimoor123@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_login_table`
--

CREATE TABLE `teacher_login_table` (
  `USERNAME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `PASSWORD` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_sign_up_table`
--

CREATE TABLE `teacher_sign_up_table` (
  `USERNAME` varchar(20) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `PASSWORD` varchar(15) NOT NULL,
  `ORG_NAME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='THIS TABLE STORES THE ADMIN SIGN UP CREDENTIALS.';

--
-- Dumping data for table `teacher_sign_up_table`
--

INSERT INTO `teacher_sign_up_table` (`USERNAME`, `EMAIL`, `PASSWORD`, `ORG_NAME`) VALUES
('Ahsan Asghar', 'ahsanasghar232@gmail.com', '123', 'eduflex'),
('Ahsan Asghar', 'ahsanasghar375@gmail.com', '123', 'eduflex'),
('Awais Asghar', 'awaisasghar232@gmail.com', '123', 'abc'),
('Awais Asghar', 'awaisasghar232@gmail.com', '123', 'abc'),
('Awais Asghar', 'awaisasghar232@gmail.com', '123', 'abc'),
('', '', '', ''),
('Faizan Asghar', 'faizan232@gmail.com', '123', 'PrimeVetClinic'),
('Haseeb Tarar', 'haseeb123@gmail.com', '123', 'Marque'),
('Rao Taimoor', 'ranataimoor123@gmail.com', '123', ''),
('Dr Mohsin', 'mohsin123@gmail.com', '123', 'PrimeVet'),
('ranataimoor', 'rao123@gmail.com', '123', 'MomsKitchen'),
('Ahsan Asghar', 'ahsanasghar123@gmail.com', '12312', 'abc'),
('Faizan Asghar', 'faizanasghar123@gmail.com', '234232', 'Prime vet care'),
('Zain Ul Abideen', 'zain123@gmail.com', '123', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daily_task_tb`
--
ALTER TABLE `daily_task_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD UNIQUE KEY `N_ID` (`N_ID`);

--
-- Indexes for table `student_login_table`
--
ALTER TABLE `student_login_table`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `student_sign_up_table`
--
ALTER TABLE `student_sign_up_table`
  ADD PRIMARY KEY (`S_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daily_task_tb`
--
ALTER TABLE `daily_task_tb`
  MODIFY `id` int(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `N_ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=173;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
