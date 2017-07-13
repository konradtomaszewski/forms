-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Lip 2017, 15:32
-- Wersja serwera: 10.1.13-MariaDB
-- Wersja PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `angular_project`
--
CREATE DATABASE IF NOT EXISTS `angular_project` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `angular_project`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dca_users`
--

CREATE TABLE `dca_users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sidenav_bg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `dca_users`
--

INSERT INTO `dca_users` (`id`, `username`, `password`, `email`, `sidenav_bg`) VALUES
(1, 'asd', '7815696ecbf1c96e6894b779456d330e', 'asd@asd.pl', '1.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `dca_users`
--
ALTER TABLE `dca_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `dca_users`
--
ALTER TABLE `dca_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
