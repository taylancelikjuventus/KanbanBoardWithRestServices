-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2021 at 02:09 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kanban_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `taskid` int(11) NOT NULL,
  `taskname` varchar(50) NOT NULL,
  `tasktext` varchar(255) NOT NULL,
  `taskstatus` varchar(100) NOT NULL,
  `deadline` varchar(50) NOT NULL,
  `timeadded` datetime NOT NULL DEFAULT current_timestamp(),
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`taskid`, `taskname`, `tasktext`, `taskstatus`, `deadline`, `timeadded`, `userid`) VALUES
(1, 'JobTitle', 'JobText', 'done', '2023-06-15', '2021-12-27 15:39:47', 7),
(2, 'JobTitle', 'JobText', 'inProgress', '2023-06-15', '2021-12-27 15:41:10', 7),
(12, 'Important Task ', 'some text is here ...', 'inProgress', '12-05-2024', '2021-12-28 22:51:59', 2),
(14, 'Task Title7', 'Task Text7', 'done', '2023-06-15', '2021-12-30 07:01:26', 7),
(15, 'Important Task 2', 'sample text...', 'backlog', '12-05-2024', '2021-12-30 22:57:17', 2),
(16, 'Important Task 2', 'sample text...', 'todo', '12-05-2024', '2021-12-30 23:28:29', 2),
(17, 'Wash car', 'some text...', 'backlog', '2022-05-05', '2021-12-30 23:41:13', 2),
(18, 'abc', 'qwerty', 'todo', '2021-02-02', '2021-12-30 23:42:22', 2),
(19, 'Task A', 'description...', 'todo', '05-05-2025', '2021-12-30 23:43:46', 4),
(20, 'Task T', 'asdadfasdaf', 'done', '02-05-2021', '2021-12-30 23:45:01', 4),
(21, 'Task ABC', 'your task ...', 'backlog', '02-05-2021', '2021-12-30 23:45:56', 4),
(22, 'Wrestling Match', 'A tough guy was ...', 'backlog', '2015-05-08', '2021-12-30 23:53:15', 8),
(23, 'Task Hard', 'text...', 'todo', '2025-02-05', '2021-12-31 00:00:18', 8),
(24, 'task 100', 'asfasfsadf', 'done', '2025-02-05', '2021-12-31 00:29:01', 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `username`) VALUES
(2, 'Brock Lesnar'),
(4, 'Bud Spencer'),
(7, 'Marlon Brando'),
(8, 'Hulk Hogan'),
(11, 'Paco De Lucia'),
(12, 'Diego Maradona');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`taskid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `taskid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
