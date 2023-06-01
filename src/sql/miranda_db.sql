-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2023 a las 12:39:32
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `miranda_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bookings`
--

CREATE TABLE `bookings` (
  `bookingId` int(11) NOT NULL,
  `guest` varchar(50) NOT NULL,
  `orderDate` date NOT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `specialRequest` text NOT NULL,
  `roomId` int(255) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bookings`
--

INSERT INTO `bookings` (`bookingId`, `guest`, `orderDate`, `checkIn`, `checkOut`, `specialRequest`, `roomId`, `status`) VALUES
(1, 'Jim Stevenson', '2021-04-01', '2021-05-01', '2021-06-01', 'Request from Jim', 1, 'Check Out');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rooms`
--

CREATE TABLE `rooms` (
  `roomId` int(255) NOT NULL,
  `roomName` varchar(30) NOT NULL,
  `isAvaliable` tinyint(1) NOT NULL,
  `offerPrice` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `roomNumber` int(11) NOT NULL,
  `roomType` varchar(15) NOT NULL,
  `amenities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`amenities`)),
  `photos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`photos`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rooms`
--

INSERT INTO `rooms` (`roomId`, `roomName`, `isAvaliable`, `offerPrice`, `price`, `roomNumber`, `roomType`, `amenities`, `photos`) VALUES
(1, 'Deluxe A-1', 0, 100, 145, 101, 'Single Bed', '[\"suite bath\",\"suite bath\",\"suite bath\",\"suite bath\"]', '[\"https://images.unspla.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80\"]'),
(8, 'Deluxe A-1', 0, 100, 145, 101, 'Single Bed', '[\"suite bath\",\"suite bath\",\"suite bath\",\"suite bath\"]', '[\"https://images.unspla.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80\"]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `startDate` date NOT NULL,
  `descriptionJob` text NOT NULL,
  `contact` int(20) NOT NULL,
  `isActive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `name`, `photo`, `email`, `startDate`, `descriptionJob`, `contact`, `isActive`) VALUES
(1, 'Finnley Hopfman', 'https://randomuser.me/api/portraits/men/59.jpg', 'finnley@gmail.com', '2021-01-01', 'recepcionist', 611111111, 0),
(58, 'Finnley Kaufman', 'https://randomuser.me/api/portraits/men/59.jpg', 'finnley@gmail.com', '2021-01-01', 'recepcionist', 611111111, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingId`),
  ADD KEY `ForeignKey` (`roomId`);

--
-- Indices de la tabla `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`roomId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `ForeignKey` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`roomId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
