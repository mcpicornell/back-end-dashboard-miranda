-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2023 a las 18:53:43
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
  `status` enum('Check In','Check Out','In Progress') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bookings`
--

INSERT INTO `bookings` (`bookingId`, `guest`, `orderDate`, `checkIn`, `checkOut`, `specialRequest`, `roomId`, `status`) VALUES
(0, 'Coy50', '0000-00-00', '0000-00-00', '0000-00-00', 'Expedita quasi culpa ex aut. Perferendis perferendis id hic voluptatibus voluptatum illum. Autem in quas aperiam accusamus necessitatibus delectus itaque sed.', 0, 'Check Out'),
(1, 'Jim Stevenson', '2021-04-01', '2021-05-01', '2021-06-01', 'Request from Jim', 1, 'Check Out'),
(361, 'Willy.Ratke35', '0000-00-00', '0000-00-00', '0000-00-00', 'Quasi alias corporis tempore eaque quidem. Esse vitae autem. Ipsam eos in at aspernatur voluptates sit. Minima facere quaerat dolor eligendi explicabo.', 105, 'Check In'),
(133822, 'Heber_Crooks', '0000-00-00', '0000-00-00', '0000-00-00', 'Accusamus velit molestiae unde sed vero repudiandae delectus. Sed blanditiis perspiciatis. Itaque optio doloribus porro quae error ea. Earum ullam itaque omnis eius amet error eligendi nostrum aliquid. Deserunt pariatur corrupti consectetur enim. Sint tenetur fugit at voluptatibus distinctio voluptatibus officia.', 438126, 'Check In'),
(177101, 'Maegan85', '0000-00-00', '0000-00-00', '0000-00-00', 'Laudantium id consequuntur dolorem veniam laudantium occaecati id commodi. Voluptate dolore occaecati suscipit similique distinctio minus nam unde fugiat. Nam eveniet aut necessitatibus voluptate optio pariatur.', 204483, 'Check In'),
(237622, 'Destany57', '0000-00-00', '0000-00-00', '0000-00-00', 'Rerum neque reiciendis maxime. Hic odio similique repudiandae rem.', 556467, ''),
(283618, 'Barrett_Reilly', '0000-00-00', '0000-00-00', '0000-00-00', 'Id veritatis quae expedita a et perferendis. Aperiam autem fugiat. Amet cupiditate harum. Quia tempore commodi consequuntur.', 712882, 'Check In'),
(286355, 'Arlo.West', '0000-00-00', '0000-00-00', '0000-00-00', 'Nesciunt laudantium facilis ducimus minima voluptas commodi quo natus debitis. Facilis fugit mollitia eligendi quis consequuntur. Quos blanditiis consectetur fugit aut voluptas. Incidunt et ut perspiciatis ullam magni illo dolorem magni perspiciatis. Deleniti sequi aperiam dolores illum.', 290880, 'Check In'),
(288299, 'Hal37', '0000-00-00', '0000-00-00', '0000-00-00', 'Aperiam eveniet sunt atque perferendis a facere. Ipsum amet modi suscipit illum eveniet eligendi doloribus. Temporibus alias fugit quaerat fugit eos deleniti.', 430704, 'Check Out'),
(323306, 'Otis48', '0000-00-00', '0000-00-00', '0000-00-00', 'Eos a sed velit eos enim velit. Explicabo illo nihil quod voluptatibus exercitationem aperiam atque ipsa. Sunt laudantium dolore cumque facilis sint ipsa quis enim. Maxime inventore quibusdam nam ab dolores quisquam dolorem nulla. Explicabo eveniet cum suscipit voluptate incidunt repellat dicta. Fugiat autem nulla voluptatum consequuntur maxime laborum tempora earum.', 622144, 'Check In'),
(408284, 'Jaydon.Rosenbaum90', '0000-00-00', '0000-00-00', '0000-00-00', 'Eligendi laboriosam suscipit maiores neque neque iusto. Doloremque quis impedit optio dignissimos ducimus eos voluptas dolorum. Voluptates nostrum dicta aperiam sint assumenda aperiam. Voluptate hic repellat suscipit.', 138281, 'Check In'),
(507112, 'Colby_Mraz', '0000-00-00', '0000-00-00', '0000-00-00', 'Ullam veritatis quod vel molestias. Velit dolores vitae molestiae sed exercitationem reiciendis doloribus deserunt. Impedit fugiat explicabo qui cum.', 590222, 'Check Out'),
(544243, 'Sadye_Bernhard', '0000-00-00', '0000-00-00', '0000-00-00', 'Porro et accusantium at incidunt dolorum asperiores eius aspernatur. Molestiae architecto minus beatae reiciendis. Suscipit voluptate commodi saepe debitis natus. Exercitationem recusandae ducimus.', 712325, ''),
(581454, 'Graciela_Kuhlman', '0000-00-00', '0000-00-00', '0000-00-00', 'Molestiae quisquam molestiae. Labore accusantium ab tempore accusamus sed. Eveniet culpa laboriosam nesciunt laboriosam. Unde voluptatum quasi voluptatum corporis. Explicabo perferendis delectus amet quas delectus dolore.', 484286, 'Check In'),
(642617, 'Doug.Conn', '0000-00-00', '0000-00-00', '0000-00-00', 'Dolorum ipsum sequi iure id quis minima mollitia quaerat. Cumque voluptate earum aliquid error est iusto.', 595204, ''),
(692398, 'Xander.Hermiston82', '0000-00-00', '0000-00-00', '0000-00-00', 'Exercitationem ratione dolor odit sed nemo. Dolore perferendis aut necessitatibus corporis omnis earum ratione sed. Hic aliquid asperiores aliquam occaecati aperiam distinctio eligendi dicta nihil. Odit inventore ratione maxime sint iure quas possimus fugiat necessitatibus. Quibusdam asperiores nostrum consequatur molestiae quae mollitia.', 595207, 'Check In'),
(716892, 'Myrtis.Towne', '0000-00-00', '0000-00-00', '0000-00-00', 'Dolor aspernatur nulla qui temporibus a nihil dolore non consequuntur. Mollitia quia consequuntur vero maiores alias animi. Quas provident dignissimos placeat commodi quisquam repellat ratione provident. Recusandae enim non quod eius minus ut excepturi. Alias pariatur officia dignissimos ducimus neque sit qui sed laboriosam.', 513032, 'Check Out'),
(902128, 'Llewellyn.Jaskolski', '0000-00-00', '0000-00-00', '0000-00-00', 'Sit suscipit vel perferendis blanditiis. Sequi repellendus molestias cum. Fuga earum maiores vel asperiores perferendis illo aspernatur soluta. Esse repellat quas vel voluptatem expedita commodi. Est necessitatibus quis a sequi. Natus magni temporibus unde iure quis voluptatibus assumenda.', 52230, 'Check Out'),
(928500, 'Pearl_Grimes', '0000-00-00', '0000-00-00', '0000-00-00', 'Officiis labore eius error officia. Asperiores corrupti consectetur. Libero optio atque. Numquam ipsum a eaque nulla omnis omnis. Deserunt praesentium architecto odio voluptatibus nulla dicta tempore expedita.', 658185, ''),
(931913, 'Isom.Moen', '0000-00-00', '0000-00-00', '0000-00-00', 'Cumque cupiditate nam. A accusantium aliquid id soluta facilis. Non distinctio vel commodi modi vel libero vero. Assumenda eius impedit rerum iste cupiditate est aperiam.', 690045, 'Check In'),
(935601, 'Remington_Prohaska24', '0000-00-00', '0000-00-00', '0000-00-00', 'Nostrum dolorum quisquam tempore corporis. Culpa laborum amet enim. Totam voluptas perferendis. Pariatur omnis deleniti quae fugiat repellat fuga. Hic quaerat voluptate magnam tenetur quasi ducimus modi error.', 175140, 'Check Out'),
(2147483647, 'Trace_Stracke-Crooks', '0000-00-00', '0000-00-00', '0000-00-00', 'Ipsa consequuntur voluptatibus repellendus dolor possimus commodi corporis magnam deleniti. Voluptatem eligendi laudantium fugit delectus mollitia iste. Doloribus sit ipsum ad aliquid neque cupiditate. Impedit vel quasi facere quas ipsam sequi hic est neque. Eius neque voluptate incidunt alias aut magni ut. Odio nam aliquam impedit vitae veniam odio aliquam eos repudiandae.', 2147483647, '');

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
  `roomType` enum('Single','Double Bed','Double Superior','Suite') NOT NULL,
  `amenities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`amenities`)),
  `photos` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`photos`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rooms`
--

INSERT INTO `rooms` (`roomId`, `roomName`, `isAvaliable`, `offerPrice`, `price`, `roomNumber`, `roomType`, `amenities`, `photos`) VALUES
(0, 'Z', 0, 141, 640, 140, 'Single', '[\"Serena.Koss43\",\"Bertha_Willms89\",\"Alan.Schultz98\",\"Judson_Paucek78\"]', '[\"https://loremflickr.com/640/480?lock=1142535124680704\",\"https://picsum.photos/seed/Fk8t4p9FlU/640/480\",\"https://picsum.photos/seed/jW7dzE77p/640/480\"]'),
(1, 'Deluxe A-1', 0, 100, 145, 101, '', '[\"suite bath\",\"suite bath\",\"suite bath\",\"suite bath\"]', '[\"https://images.unspla.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80\"]'),
(2, 'q', 1, 36, 880, 679, 'Single', '[\"Edgardo_Abshire35\",\"Zoe85\",\"Graciela.Metz\",\"Jules91\"]', '[\"https://picsum.photos/seed/6P5hyxG/640/480\",\"https://picsum.photos/seed/ZwCYUfoPS/640/480\",\"https://loremflickr.com/640/480?lock=5776719359246336\"]'),
(8, 'Deluxe A-1', 0, 100, 145, 101, '', '[\"suite bath\",\"suite bath\",\"suite bath\",\"suite bath\"]', '[\"https://images.unspla.com/photo-1605346434674-a440ca4dc4c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80\"]'),
(105, 'U', 1, 106, 553, 418, 'Double Superior', '[\"Kyra.Gibson72\",\"Leonora_Kutch\",\"Lacy_Parker\",\"Ena_Ziemann4\"]', '[\"https://picsum.photos/seed/7vDqjPo/640/480\",\"https://picsum.photos/seed/mUoBLZ8M/640/480\",\"https://picsum.photos/seed/tFRtZ/640/480\"]'),
(184, 'w', 1, 193, 949, 716, 'Double Superior', '[\"Brent.Brown\",\"Jaime.Huels56\",\"Valerie20\",\"Arvilla.Little\"]', '[\"https://picsum.photos/seed/XOQrmsE/640/480\",\"https://picsum.photos/seed/CKa85Qv/640/480\",\"https://loremflickr.com/640/480?lock=6842945229553664\"]'),
(223, '6', 1, 284, 818, 19, '', '[\"Vita81\",\"Aglae42\",\"Brian55\",\"Shirley77\"]', '[\"https://loremflickr.com/640/480?lock=5195103549259776\",\"https://picsum.photos/seed/i3tUBuL/640/480\",\"https://loremflickr.com/640/480?lock=1950408599666688\"]'),
(247, 's', 0, 223, 715, 510, '', '[\"Winston15\",\"Dejon42\",\"Enoch.Wisoky\",\"Jessika_Pacocha94\"]', '[\"https://loremflickr.com/640/480?lock=2603166216486912\",\"https://picsum.photos/seed/4Z48ul/640/480\",\"https://loremflickr.com/640/480?lock=2301209991970816\"]'),
(262, 'z', 1, 494, 945, 268, 'Double Superior', '[\"Ada59\",\"Ellen.Waters\",\"Leonor_Metz\",\"Mckayla_Purdy77\"]', '[\"https://picsum.photos/seed/H9VoE/640/480\",\"https://picsum.photos/seed/YLpy4Y/640/480\",\"https://loremflickr.com/640/480?lock=8608801150205952\"]'),
(281, 'r', 0, 497, 814, 580, 'Double Superior', '[\"Ari54\",\"Dorcas_Bailey43\",\"Ron.Rolfson13\",\"Barbara21\"]', '[\"https://picsum.photos/seed/VppzWgC/640/480\",\"https://picsum.photos/seed/yQe6W8qPaY/640/480\",\"https://picsum.photos/seed/jxXHmB/640/480\"]'),
(305, 'b', 0, 221, 573, 83, 'Double Bed', '[\"Earnest1\",\"Destiney18\",\"Georgiana.Romaguera63\",\"Santino50\"]', '[\"https://loremflickr.com/640/480?lock=8561325252804608\",\"https://picsum.photos/seed/a1aEyFszMe/640/480\",\"https://picsum.photos/seed/DldSQa/640/480\"]'),
(355, 'U', 1, 152, 742, 563, 'Double Superior', '[\"Lillian.Vandervort77\",\"Elyssa70\",\"Ralph.Connelly-Yost53\",\"Samir.Davis\"]', '[\"https://loremflickr.com/640/480?lock=2513251302637568\",\"https://picsum.photos/seed/SvYGFM/640/480\",\"https://picsum.photos/seed/IRf4Ch/640/480\"]'),
(442, 'V', 1, 119, 662, 908, '', '[\"Benny.Runolfsdottir-Hackett55\",\"Duane_Schultz76\",\"Geo60\",\"Maia_Wyman\"]', '[\"https://picsum.photos/seed/MVR2odDzla/640/480\",\"https://loremflickr.com/640/480?lock=1219801410174976\",\"https://loremflickr.com/640/480?lock=1518417966268416\"]'),
(36188, 'V', 1, 16, 889, 466, 'Double Bed', '[\"Khalil72\",\"Philip_Lockman\",\"Dallas70\",\"Rosalia67\"]', '[\"https://loremflickr.com/640/480?lock=6464266932584448\",\"https://loremflickr.com/640/480?lock=6191319498096640\",\"https://picsum.photos/seed/Aj9uFi/640/480\"]'),
(44057, 'x', 1, 326, 653, 856, 'Double Bed', '[\"Emelia_Schroeder-Rowe\",\"Albertha.Koss74\",\"Precious.Walter\",\"Aiden.Stokes21\"]', '[\"https://picsum.photos/seed/M5JigYis/640/480\",\"https://loremflickr.com/640/480?lock=3670348916588544\",\"https://loremflickr.com/640/480?lock=6962593073725440\"]'),
(51512, 'G', 0, 280, 543, 647, 'Double Bed', '[\"Sharon15\",\"Kenton_Rath19\",\"Filiberto23\",\"Monique87\"]', '[\"https://loremflickr.com/640/480?lock=7804241406066688\",\"https://loremflickr.com/640/480?lock=6170248304656384\",\"https://loremflickr.com/640/480?lock=99865851854848\"]'),
(52230, 'B', 0, 456, 570, 24, 'Double Bed', '[\"Markus.Skiles\",\"Orin_Torphy97\",\"Jamaal_Aufderhar1\",\"Monica_Monahan47\"]', '[\"https://loremflickr.com/640/480?lock=8319407199617024\",\"https://loremflickr.com/640/480?lock=4587140998496256\",\"https://loremflickr.com/640/480?lock=2610776367955968\"]'),
(53839, 'O', 1, 114, 733, 566, 'Double Bed', '[\"Carlo_Hyatt\",\"Angeline13\",\"Olen_Gleason91\",\"Ray_Lubowitz\"]', '[\"https://picsum.photos/seed/SeleITBFu/640/480\",\"https://picsum.photos/seed/UGT9cyA/640/480\",\"https://picsum.photos/seed/02poxpGV/640/480\"]'),
(101249, 'O', 0, 184, 911, 302, 'Single', '[\"Queenie_Hills30\",\"Cordell93\",\"Kamille72\",\"Clemmie_Wuckert\"]', '[\"https://picsum.photos/seed/rXsBP6i/640/480\",\"https://loremflickr.com/640/480?lock=4392635806515200\",\"https://loremflickr.com/640/480?lock=905691856371712\"]'),
(120002, 'U', 1, 157, 772, 55, '', '[\"Jeramie.Ullrich\",\"Madison.Larkin36\",\"Bettie10\",\"Anibal74\"]', '[\"https://picsum.photos/seed/zjUMypHke/640/480\",\"https://picsum.photos/seed/xu19fwFUH/640/480\",\"https://picsum.photos/seed/GutnBu/640/480\"]'),
(138281, 'f', 1, 95, 652, 475, '', '[\"Leila53\",\"Abner50\",\"Lue_Lindgren30\",\"Tyra.Jast\"]', '[\"https://picsum.photos/seed/tchGYeQ/640/480\",\"https://picsum.photos/seed/tSAhKn65G/640/480\",\"https://picsum.photos/seed/M5G431e/640/480\"]'),
(140555, 'W', 1, 156, 698, 598, 'Double Superior', '[\"Jewel63\",\"Sylvester_Tromp41\",\"Louisa.Wisoky\",\"Sydney53\"]', '[\"https://loremflickr.com/640/480?lock=4196051361726464\",\"https://loremflickr.com/640/480?lock=7627328251232256\",\"https://loremflickr.com/640/480?lock=8328573930700800\"]'),
(175140, 'j', 0, 63, 659, 500, 'Single', '[\"Benton99\",\"Bryon_Quitzon54\",\"Grady_Kozey\",\"Magali7\"]', '[\"https://loremflickr.com/640/480?lock=8020347330756608\",\"https://loremflickr.com/640/480?lock=7494339978592256\",\"https://loremflickr.com/640/480?lock=6449326620409856\"]'),
(200687, 'Y', 0, 223, 819, 402, 'Double Bed', '[\"Charles47\",\"Bradley_Hammes\",\"Fredrick_Crooks11\",\"Cyril43\"]', '[\"https://loremflickr.com/640/480?lock=1285467894972416\",\"https://loremflickr.com/640/480?lock=4940871829028864\",\"https://picsum.photos/seed/LoyLbzfeM/640/480\"]'),
(204483, 'R', 1, 381, 886, 369, 'Double Superior', '[\"Joesph_Barton-Wintheiser62\",\"Moses.Abshire\",\"Zachariah_Bogan\",\"Ezra_OHara98\"]', '[\"https://picsum.photos/seed/mRc8eoQPwu/640/480\",\"https://loremflickr.com/640/480?lock=2721189757714432\",\"https://loremflickr.com/640/480?lock=3938126976253952\"]'),
(212217, 'v', 1, 357, 963, 831, '', '[\"Norbert_Marvin23\",\"Jettie_Wintheiser26\",\"Gretchen.Denesik\",\"Edwardo_Paucek-Steuber10\"]', '[\"https://loremflickr.com/640/480?lock=5248360952889344\",\"https://loremflickr.com/640/480?lock=1723743283970048\",\"https://loremflickr.com/640/480?lock=3609926920306688\"]'),
(222342, 'D', 0, 411, 798, 171, '', '[\"Marian_Tromp74\",\"Isai60\",\"Nathen.Johns60\",\"Aliza69\"]', '[\"https://loremflickr.com/640/480?lock=8747614199611392\",\"https://picsum.photos/seed/3KivZzT/640/480\",\"https://picsum.photos/seed/x0bg7zPL/640/480\"]'),
(267509, '6', 1, 346, 776, 523, 'Single', '[\"Rosemarie38\",\"Anita_Kiehn\",\"Wilfredo.Kihn\",\"Liza10\"]', '[\"https://picsum.photos/seed/dCJ507WEDM/640/480\",\"https://loremflickr.com/640/480?lock=2292548993286144\",\"https://picsum.photos/seed/313tIq/640/480\"]'),
(290880, 'm', 0, 464, 578, 542, 'Double Superior', '[\"Stanley96\",\"Robyn.Becker78\",\"Serena.Murazik5\",\"Florida_Bogisich16\"]', '[\"https://picsum.photos/seed/Hqmsm2Kv5B/640/480\",\"https://picsum.photos/seed/Ez8Ob/640/480\",\"https://loremflickr.com/640/480?lock=4748979287883776\"]'),
(305060, 'M', 1, 452, 730, 968, '', '[\"Dolores_Rath\",\"Haylie0\",\"Lance71\",\"Addie60\"]', '[\"https://picsum.photos/seed/Zae8Vo/640/480\",\"https://loremflickr.com/640/480?lock=1968515561029632\",\"https://picsum.photos/seed/ktfjs5ErS/640/480\"]'),
(350209, 'x', 0, 168, 949, 866, 'Single', '[\"Elena_Jacobson\",\"Juliana.Heidenreich\",\"Greta_Grimes71\",\"Alize.Douglas\"]', '[\"https://picsum.photos/seed/MiYoMT5hws/640/480\",\"https://picsum.photos/seed/FRt0Tmd4/640/480\",\"https://picsum.photos/seed/VMrGHKeJZy/640/480\"]'),
(372546, 'v', 0, 147, 741, 318, 'Double Bed', '[\"May_Barton88\",\"Deion_Purdy\",\"Javier_Hirthe\",\"Silas_Fahey46\"]', '[\"https://loremflickr.com/640/480?lock=4294694307627008\",\"https://loremflickr.com/640/480?lock=2967715258040320\",\"https://picsum.photos/seed/26DRtRM/640/480\"]'),
(381549, 'C', 0, 22, 734, 373, 'Single', '[\"Jeanie0\",\"Keara.Roberts\",\"Estevan50\",\"Adelbert6\"]', '[\"https://picsum.photos/seed/JhvNAmFQud/640/480\",\"https://loremflickr.com/640/480?lock=6642780814180352\",\"https://loremflickr.com/640/480?lock=3912723029032960\"]'),
(430704, 'q', 1, 461, 917, 722, 'Single', '[\"Marlon.Schulist\",\"Krystel_Bins58\",\"Sadye24\",\"Kaycee_Rippin-Wiza\"]', '[\"https://picsum.photos/seed/jpW3dj/640/480\",\"https://picsum.photos/seed/rGAAC/640/480\",\"https://loremflickr.com/640/480?lock=1096828263071744\"]'),
(438126, 'x', 1, 121, 954, 17, 'Single', '[\"Wendell.Bernhard70\",\"Santino.Russel-Abernathy2\",\"Myles.Schinner37\",\"Jada.Bosco3\"]', '[\"https://picsum.photos/seed/xRtWDZd1F/640/480\",\"https://loremflickr.com/640/480?lock=2340815911256064\",\"https://picsum.photos/seed/hOYtSee7/640/480\"]'),
(442165, 'V', 1, 425, 522, 111, 'Double Superior', '[\"Marian.Lemke\",\"Frederique.Donnelly29\",\"Hobart3\",\"Britney.Dietrich88\"]', '[\"https://loremflickr.com/640/480?lock=6404032992116736\",\"https://loremflickr.com/640/480?lock=7175044373413888\",\"https://picsum.photos/seed/NVZoiu2/640/480\"]'),
(465134, 'g', 1, 265, 939, 667, 'Double Superior', '[\"Luella49\",\"Graham24\",\"Tyshawn.Homenick0\",\"Dovie.Schaden80\"]', '[\"https://picsum.photos/seed/Xcwo8GH/640/480\",\"https://picsum.photos/seed/65a4sGj/640/480\",\"https://picsum.photos/seed/KNVJeGe1em/640/480\"]'),
(479836, 'G', 0, 346, 642, 501, '', '[\"Dortha_Thiel78\",\"Tatum29\",\"Francesco45\",\"Johann10\"]', '[\"https://picsum.photos/seed/qEjM8L/640/480\",\"https://picsum.photos/seed/qMzqDKWc/640/480\",\"https://loremflickr.com/640/480?lock=1091952365797376\"]'),
(484286, 'C', 0, 14, 552, 254, '', '[\"Eldred_Emmerich78\",\"Tressie28\",\"Gerry.Dietrich\",\"Alexandrea_Hayes57\"]', '[\"https://picsum.photos/seed/RSxhFbAT4t/640/480\",\"https://loremflickr.com/640/480?lock=174673102897152\",\"https://picsum.photos/seed/qa6VnsP6hQ/640/480\"]'),
(513032, 'L', 0, 273, 500, 140, 'Double Superior', '[\"Demond_Hickle\",\"Malika.Weissnat\",\"Estevan.Wuckert69\",\"Nikolas_Wolff32\"]', '[\"https://loremflickr.com/640/480?lock=1594970865664000\",\"https://picsum.photos/seed/5Ms4D/640/480\",\"https://loremflickr.com/640/480?lock=7730291651117056\"]'),
(556467, '9', 1, 119, 644, 163, 'Single', '[\"Brendan.Lynch31\",\"Ryder41\",\"Dahlia.Heathcote55\",\"Austen19\"]', '[\"https://loremflickr.com/640/480?lock=5801927619117056\",\"https://loremflickr.com/640/480?lock=3266610028609536\",\"https://loremflickr.com/640/480?lock=4697339352580096\"]'),
(572454, 'L', 1, 312, 578, 486, 'Double Bed', '[\"Cydney41\",\"Noble_Herman97\",\"Ted0\",\"Esperanza_Marvin\"]', '[\"https://loremflickr.com/640/480?lock=3254735249342464\",\"https://picsum.photos/seed/1YCeUhWY/640/480\",\"https://loremflickr.com/640/480?lock=1042566017449984\"]'),
(590222, 'd', 0, 288, 777, 437, 'Double Bed', '[\"Keon97\",\"Nya.Schuppe56\",\"Dave.Leuschke40\",\"Gregorio61\"]', '[\"https://loremflickr.com/640/480?lock=1339857754390528\",\"https://loremflickr.com/640/480?lock=3069386264936448\",\"https://picsum.photos/seed/9CGl5pjp/640/480\"]'),
(595204, '7', 0, 415, 815, 446, 'Double Bed', '[\"Madonna92\",\"Rico_Gulgowski\",\"Richard_Howe42\",\"Burnice.Brakus95\"]', '[\"https://picsum.photos/seed/JlKk1siC/640/480\",\"https://loremflickr.com/640/480?lock=7286876599746560\",\"https://picsum.photos/seed/qkgVj5ZEi0/640/480\"]'),
(595205, 'H', 0, 496, 602, 348, 'Double Bed', '[\"Lavern_Spinka-Jakubowski\",\"Carson23\",\"Mckenzie74\",\"Demetrius_Deckow9\"]', '[\"https://picsum.photos/seed/snaJbbJw/640/480\",\"https://loremflickr.com/640/480?lock=5035721205219328\",\"https://picsum.photos/seed/VDhXuk/640/480\"]'),
(595206, 'l', 0, 326, 546, 150, 'Double Bed', '[\"Tate_Moore99\",\"Janie1\",\"Cale_Emmerich\",\"Catharine0\"]', '[\"https://picsum.photos/seed/P1MrrKE/640/480\",\"https://picsum.photos/seed/kXl55u/640/480\",\"https://loremflickr.com/640/480?lock=269955140419584\"]'),
(595207, 'd', 1, 395, 632, 554, 'Double Bed', '[\"Kassandra_Ward45\",\"Maryam_Streich\",\"Edna3\",\"Maymie.Fahey\"]', '[\"https://picsum.photos/seed/292Hqlt/640/480\",\"https://loremflickr.com/640/480?lock=716676230283264\",\"https://loremflickr.com/640/480?lock=3455445704376320\"]'),
(595208, 'X', 1, 374, 705, 3, 'Single', '[\"Verdie.Batz\",\"Elissa24\",\"Idella_Pfeffer21\",\"Fleta_Schinner50\"]', '[\"https://picsum.photos/seed/FbSDp3kjf/640/480\",\"https://picsum.photos/seed/APusp/640/480\",\"https://loremflickr.com/640/480?lock=5958208743014400\"]'),
(622144, 'W', 0, 398, 552, 738, '', '[\"Dwight.Pfeffer51\",\"Cora73\",\"Sedrick93\",\"Jacques_Bradtke\"]', '[\"https://picsum.photos/seed/CD4Bbpae/640/480\",\"https://loremflickr.com/640/480?lock=6920843781210112\",\"https://picsum.photos/seed/jWjB3tu/640/480\"]'),
(649792, 'i', 1, 95, 958, 958, 'Double Bed', '[\"Aniyah_Parker\",\"Derek_Gorczany\",\"Franz84\",\"Raegan65\"]', '[\"https://picsum.photos/seed/9yZTLHXmw/640/480\",\"https://loremflickr.com/640/480?lock=2855383865491456\",\"https://picsum.photos/seed/ZHPIy6hDZy/640/480\"]'),
(658185, 'l', 0, 88, 580, 680, '', '[\"Ricardo74\",\"Abbie90\",\"Queenie.Senger\",\"Matilda.Harvey-OKeefe65\"]', '[\"https://loremflickr.com/640/480?lock=6453251507486720\",\"https://picsum.photos/seed/XDTy6JnpNw/640/480\",\"https://loremflickr.com/640/480?lock=8872278733357056\"]'),
(676267, '2', 0, 337, 839, 473, 'Single', '[\"Kennith.Wiegand-Glover\",\"Sebastian.Effertz\",\"Odie.Jast\",\"Brad.Kozey48\"]', '[\"https://picsum.photos/seed/JxHqAEn8/640/480\",\"https://loremflickr.com/640/480?lock=5597084317122560\",\"https://loremflickr.com/640/480?lock=7888309411905536\"]'),
(690045, 'g', 0, 388, 999, 542, '', '[\"Myles.Hirthe64\",\"Tremayne50\",\"Gustave_Sauer\",\"Keira.Schmidt88\"]', '[\"https://picsum.photos/seed/CrzYSYV/640/480\",\"https://picsum.photos/seed/4HnB03uQy/640/480\",\"https://picsum.photos/seed/td9H5Yy/640/480\"]'),
(712325, 'w', 0, 153, 724, 525, '', '[\"Helena.Medhurst\",\"Thalia91\",\"Winnifred.Gleichner96\",\"Wilson.Jenkins\"]', '[\"https://loremflickr.com/640/480?lock=7358196943421440\",\"https://picsum.photos/seed/ZENcZJV/640/480\",\"https://picsum.photos/seed/Jo4m8/640/480\"]'),
(712882, 'o', 1, 408, 553, 83, 'Double Superior', '[\"Trenton42\",\"Hassie.Berge39\",\"Darrick47\",\"Elinore99\"]', '[\"https://picsum.photos/seed/7mMKr/640/480\",\"https://loremflickr.com/640/480?lock=2312173271384064\",\"https://picsum.photos/seed/UhcF4/640/480\"]'),
(728778, 'U', 1, 288, 960, 712, 'Double Bed', '[\"Beaulah.Beier21\",\"Jolie.Denesik37\",\"Abbie17\",\"Reina85\"]', '[\"https://picsum.photos/seed/pFXTjhqXf/640/480\",\"https://picsum.photos/seed/AsSF55dNWh/640/480\",\"https://picsum.photos/seed/OgC8v/640/480\"]'),
(764370, 'R', 1, 393, 585, 248, 'Single', '[\"Selina98\",\"Alyson.Mante\",\"Sean6\",\"Glen_Kilback89\"]', '[\"https://loremflickr.com/640/480?lock=1541488764780544\",\"https://loremflickr.com/640/480?lock=3996860740009984\",\"https://picsum.photos/seed/Ah1qqO7H/640/480\"]'),
(791938, 'y', 0, 159, 981, 11, 'Single', '[\"Keenan_Maggio\",\"Immanuel_Fadel\",\"Claudine_Denesik45\",\"Alia_Bashirian-Harris63\"]', '[\"https://picsum.photos/seed/o5vqzkw/640/480\",\"https://loremflickr.com/640/480?lock=8850802068160512\",\"https://picsum.photos/seed/4OUjO8X/640/480\"]'),
(806837, 'l', 1, 383, 614, 222, '', '[\"Chanelle.Rath\",\"Vicente.Herzog\",\"Javon_Gislason62\",\"Edythe_Carroll14\"]', '[\"https://loremflickr.com/640/480?lock=247956624113664\",\"https://loremflickr.com/640/480?lock=6928801655160832\",\"https://picsum.photos/seed/OcPdtz/640/480\"]'),
(900575, 'd', 0, 330, 915, 991, 'Double Bed', '[\"Okey.Rolfson\",\"Palma_Koss\",\"Coy.Feeney\",\"Collin_West80\"]', '[\"https://picsum.photos/seed/GoB1bgE7/640/480\",\"https://picsum.photos/seed/ohlSzMJ0p/640/480\",\"https://loremflickr.com/640/480?lock=3554831207759872\"]'),
(909086, 'Z', 0, 80, 672, 182, 'Double Bed', '[\"Alfredo.Brown\",\"Alexandria_Lueilwitz\",\"Roderick.Stoltenberg\",\"Shannon_Schimmel67\"]', '[\"https://picsum.photos/seed/KF7afBO/640/480\",\"https://loremflickr.com/640/480?lock=7239016405532672\",\"https://picsum.photos/seed/X82EI12/640/480\"]'),
(913822, 'P', 1, 307, 972, 677, 'Single', '[\"Helga.Mann\",\"Elinor_Schmeler\",\"Desiree62\",\"Dale_Terry\"]', '[\"https://picsum.photos/seed/X83gRekz/640/480\",\"https://picsum.photos/seed/LuBC9cq6y/640/480\",\"https://loremflickr.com/640/480?lock=646232800231424\"]'),
(961838, 't', 1, 22, 650, 370, '', '[\"Kathlyn_Pagac\",\"Hermina99\",\"Rudy15\",\"Destany.Rippin-Wiegand18\"]', '[\"https://picsum.photos/seed/b0UYTrxa/640/480\",\"https://picsum.photos/seed/x2T7zJQiX/640/480\",\"https://loremflickr.com/640/480?lock=2575198758895616\"]'),
(966228, 'e', 1, 79, 571, 218, 'Double Bed', '[\"Rita78\",\"Garett.Trantow\",\"Kristian_Hegmann1\",\"Colten.Rath16\"]', '[\"https://loremflickr.com/640/480?lock=2594839786946560\",\"https://loremflickr.com/640/480?lock=1388655620915200\",\"https://loremflickr.com/640/480?lock=6196223306366976\"]'),
(2147483647, 'I', 0, 291, 985, 656, 'Double Bed', '[\"Thelma71\",\"Jody_Olson4\",\"Clay91\",\"Chloe.Feeney\"]', '[\"https://picsum.photos/seed/V22DSq/640/480\",\"https://picsum.photos/seed/gfNHO/640/480\",\"https://picsum.photos/seed/FDTlPoAfnl/640/480\"]');

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
(0, 'Alexa_Rolfson36', 'https://avatars.githubusercontent.com/u/90002468', 'Barbara8@gmail.com', '0000-00-00', 'Mollitia quasi illum mollitia totam nesciunt sunt officia.', 68383572, 1),
(402, 'Nadia_Frami45', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1140.jpg', 'Maverick_Herman-Ankunding@gmail.com', '0000-00-00', 'Dolores incidunt sit ad non unde blanditiis ut.', 68643321, 1),
(1550, 'Donald.Anderson', 'https://avatars.githubusercontent.com/u/43870004', 'Ronaldo_Von51@yahoo.com', '0000-00-00', 'Deleniti excepturi voluptas quos.', 72060242, 0),
(36542, 'Nayeli.Collins-Hilll', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/290.jpg', 'Elouise.Weissnat1@yahoo.com', '0000-00-00', 'Quia maiores nobis.', 63448072, 0),
(41915, 'Keaton_Wuckert30', 'https://avatars.githubusercontent.com/u/29244254', 'Joanie83@hotmail.com', '0000-00-00', 'Qui quisquam perferendis dolorum quia.', 79640111, 0),
(47998, 'Bettye.Fahey76', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg', 'Elisha_Murphy8@yahoo.com', '0000-00-00', 'Ducimus sint earum inventore aut suscipit inventore.', 69881385, 0),
(53148, 'Tom.Ward-Von', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg', 'Virginie51@yahoo.com', '0000-00-00', 'Quae hic fugit.', 72839505, 1),
(108510, 'Anthony_Predovic', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg', 'Minnie_Corwin90@hotmail.com', '0000-00-00', 'Aliquid reprehenderit velit.', 73926089, 0),
(109462, 'Lucinda.Weissnat0', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/131.jpg', 'Isadore.Sporer10@yahoo.com', '0000-00-00', 'Delectus nobis minima cumque commodi doloremque.', 73174308, 1),
(120983, 'Dimitri68', 'https://avatars.githubusercontent.com/u/26942524', 'Efren62@yahoo.com', '0000-00-00', 'Excepturi distinctio adipisci distinctio laborum inventore minus expedita totam voluptatum.', 76183609, 0),
(149640, 'Eda.Douglas33', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg', 'Guillermo_Bartell53@yahoo.com', '0000-00-00', 'Nisi quam natus laudantium vitae accusamus enim occaecati quibusdam.', 76516385, 1),
(178102, 'Agustin_Nader91', 'https://avatars.githubusercontent.com/u/4371210', 'Emma_Yundt36@yahoo.com', '0000-00-00', 'Reprehenderit reiciendis deleniti consequatur.', 63083382, 0),
(178187, 'Yoshiko_Kris-Grant58', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/838.jpg', 'Lois78@hotmail.com', '0000-00-00', 'Necessitatibus velit repellat.', 78429346, 0),
(258377, 'Elta55', 'https://avatars.githubusercontent.com/u/15204170', 'Myrtis_Lang@yahoo.com', '0000-00-00', 'Ullam deserunt enim velit aspernatur.', 67233667, 0),
(282257, 'Arvilla_Russel', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/228.jpg', 'Orpha_Greenholt37@hotmail.com', '0000-00-00', 'Officiis tenetur veniam reprehenderit hic maxime eius a.', 71358282, 0),
(285000, 'Brad27', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg', 'Darryl.Gerhold@gmail.com', '0000-00-00', 'Cumque voluptates illo voluptatem quaerat tempore amet.', 78201973, 0),
(290682, 'Jany.Mayert', 'https://avatars.githubusercontent.com/u/16449002', 'Braden.Haag84@yahoo.com', '0000-00-00', 'Ex aliquam laborum eveniet fugit occaecati nisi enim.', 66226011, 0),
(313019, 'Idell.Kohler', 'https://avatars.githubusercontent.com/u/28745803', 'Anibal54@gmail.com', '0000-00-00', 'Debitis temporibus magni non sapiente explicabo maiores molestiae.', 77193059, 0),
(343485, 'Ransom_Maggio33', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1017.jpg', 'Kaylah53@yahoo.com', '0000-00-00', 'At commodi a neque iure sapiente aliquam eveniet.', 62542859, 0),
(358335, 'Delphine8', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/97.jpg', 'Rhoda.MacGyver22@hotmail.com', '0000-00-00', 'Cum necessitatibus dolor magnam impedit culpa cupiditate id laboriosam.', 65567280, 1),
(385395, 'Roselyn36', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg', 'Charley.Kuhic1@hotmail.com', '0000-00-00', 'Modi at quod minus quibusdam aut ratione fuga.', 79250401, 0),
(385548, 'Stanley_Stiedemann', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1052.jpg', 'Arthur.Rowe@hotmail.com', '0000-00-00', 'Doloremque ab neque eligendi nihil quis earum.', 61071260, 0),
(443851, 'Sally_Brakus', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/273.jpg', 'Lou.Kemmer@gmail.com', '0000-00-00', 'Velit optio atque atque officiis voluptate perspiciatis perspiciatis.', 73604134, 1),
(479230, 'Ernestina.DuBuque26', 'https://avatars.githubusercontent.com/u/77150354', 'Earnestine.Douglas@hotmail.com', '0000-00-00', 'Soluta quidem itaque consectetur.', 78780317, 0),
(531711, 'Bessie_Schulist', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/570.jpg', 'Savanah.Sauer@gmail.com', '0000-00-00', 'Dolores illo autem officiis quia voluptates at fugit.', 68026407, 0),
(531877, 'Norbert.Bashirian16', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/524.jpg', 'Rozella_Steuber@hotmail.com', '0000-00-00', 'Pariatur hic dolor enim.', 78382395, 0),
(549983, 'Mekhi.Bins', 'https://avatars.githubusercontent.com/u/97546325', 'Travon94@yahoo.com', '0000-00-00', 'Commodi incidunt animi repudiandae nostrum fugiat harum ipsam.', 73609977, 1),
(561049, 'Raquel_Grimes', 'https://avatars.githubusercontent.com/u/59555812', 'Trisha4@hotmail.com', '0000-00-00', 'Maxime vero qui.', 67421888, 0),
(578457, 'Arden.Spinka46', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg', 'Carlo_Zboncak80@yahoo.com', '0000-00-00', 'Rem quibusdam non facilis nisi explicabo nemo labore.', 61236560, 1),
(597450, 'Lessie_Luettgen62', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg', 'Jackeline_Simonis58@yahoo.com', '0000-00-00', 'Maiores placeat saepe fugiat minus possimus alias sit totam molestiae.', 61112197, 0),
(611802, 'Macey_Smith', 'https://avatars.githubusercontent.com/u/54219753', 'Jacynthe.Fay86@gmail.com', '0000-00-00', 'Voluptate consectetur quidem nesciunt nulla fugit voluptates in explicabo officiis.', 76779151, 1),
(645588, 'Josefina_Witting', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1182.jpg', 'Nathaniel2@gmail.com', '0000-00-00', 'Nemo facilis quasi a laudantium quidem qui.', 76226359, 0),
(651781, 'Laura.Mayert', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1173.jpg', 'Kody71@hotmail.com', '0000-00-00', 'Fugiat quidem consectetur.', 64351527, 0),
(661045, 'Maia.Schulist', 'https://avatars.githubusercontent.com/u/80209471', 'Wilbert.Krajcik@gmail.com', '0000-00-00', 'Saepe sequi cum.', 74239223, 1),
(665058, 'Nolan_Weissnat-Sawayn', 'https://avatars.githubusercontent.com/u/28371886', 'Leila.Schaefer@hotmail.com', '0000-00-00', 'Nam aspernatur dolore eius.', 65802739, 1),
(694531, 'Paolo87', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg', 'Kaelyn_Von-Johnson31@hotmail.com', '0000-00-00', 'Cumque perferendis rem perspiciatis maxime ratione.', 72726759, 1),
(732506, 'Teresa_Cruickshank-Haag', 'https://avatars.githubusercontent.com/u/62477192', 'Opal_Zieme@hotmail.com', '0000-00-00', 'Libero quaerat excepturi dolores soluta cumque nam adipisci sequi laudantium.', 78638644, 0),
(734256, 'Micah.Reilly76', 'https://avatars.githubusercontent.com/u/18650011', 'Kyla.Sauer@gmail.com', '0000-00-00', 'Eveniet necessitatibus odit eius voluptas culpa.', 76418561, 1),
(748494, 'Eddie62', 'https://avatars.githubusercontent.com/u/76645797', 'Queen79@hotmail.com', '0000-00-00', 'Earum iure quos debitis ullam nihil blanditiis dignissimos ullam temporibus.', 73473663, 0),
(761084, 'Judson10', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/887.jpg', 'Evert.Cruickshank@yahoo.com', '0000-00-00', 'Neque nobis esse ratione.', 60839649, 1),
(778993, 'Jessika_Daugherty77', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/147.jpg', 'Fidel7@hotmail.com', '0000-00-00', 'Mollitia eaque ut tempora deleniti deleniti exercitationem.', 66355818, 0),
(780522, 'Myron.Stiedemann39', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1061.jpg', 'Celestino28@gmail.com', '0000-00-00', 'Laboriosam animi sed ipsam atque deleniti.', 77073136, 1),
(831168, 'Darrion.Mohr74', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg', 'Robyn_Adams64@yahoo.com', '0000-00-00', 'Adipisci id corporis aliquid optio architecto.', 77466176, 1),
(836315, 'Erik42', 'https://avatars.githubusercontent.com/u/6329601', 'Ashton.Schiller@yahoo.com', '0000-00-00', 'Soluta harum animi.', 60890800, 1),
(854848, 'Ernest78', 'https://avatars.githubusercontent.com/u/65677960', 'Fay73@gmail.com', '0000-00-00', 'Pariatur dignissimos laudantium soluta repellat ullam beatae voluptate maxime.', 61931476, 1),
(894626, 'Tamia_Hoppe', 'https://avatars.githubusercontent.com/u/18067225', 'Donavon_Mayer@gmail.com', '0000-00-00', 'Eum corrupti laudantium voluptas voluptatem repellendus unde at.', 67274868, 1),
(912582, 'Tremayne_Cremin81', 'https://avatars.githubusercontent.com/u/98455273', 'Darrin.Bartell@gmail.com', '0000-00-00', 'Quos quaerat fugit delectus consequatur repudiandae.', 69741793, 0),
(946409, 'Charley_Turcotte', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/895.jpg', 'Michaela_Abbott@yahoo.com', '0000-00-00', 'Distinctio natus cupiditate minima.', 79886220, 0),
(953633, 'Gage80', 'https://avatars.githubusercontent.com/u/37594465', 'Tad_Brekke@hotmail.com', '0000-00-00', 'Vero ut iure maiores nesciunt provident architecto quidem laborum eligendi.', 76116876, 0),
(956566, 'Jillian.Bednar4', 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/857.jpg', 'Colton_Schaefer@hotmail.com', '0000-00-00', 'Nemo unde sunt accusamus mollitia illum.', 76515262, 1),
(966155, 'Melyna89', 'https://avatars.githubusercontent.com/u/92589587', 'Liam_Pfannerstill@yahoo.com', '0000-00-00', 'Numquam sequi accusantium nesciunt.', 73401953, 0),
(2147483647, 'Santino_Zboncak', 'https://avatars.githubusercontent.com/u/28596345', 'Earlene.Ankunding@hotmail.com', '0000-00-00', 'Adipisci illo commodi repellat.', 64145797, 0);

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
