/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Table structure for table `amanatugolisu`
--

CREATE TABLE `amanatugolisu` (
  `kramasankhye` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kebetiari` varchar(200) NOT NULL,
  `sthiti` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `aviset`
--

CREATE TABLE `aviset` (
  `id` int(11) NOT NULL,
  `nxt` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aviset`
--

INSERT INTO `aviset` (`id`, `nxt`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate`
--

CREATE TABLE `bajikattuttate` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate`
--

INSERT INTO `bajikattuttate` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 69418, '20250206100010868', '1', '1', '1', '4', 4, 'perte', 3.92, 0, 52820, '2025-02-06 15:03:04'),
(2, 69456, '20250206100010870', '2', '13', '1', '50', 50, 'gagner', 98, 5, 63685, '2025-02-06 15:05:03'),
(3, 69478, '20250206100010870', '2', '14', '1', '98', 98, 'perte', 96.04, 5, 63685, '2025-02-06 15:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_aidudi`
--

CREATE TABLE `bajikattuttate_aidudi` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` varchar(255) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_aidudi`
--

INSERT INTO `bajikattuttate_aidudi` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 54163, '20250205102010703', '1', '7', '1', '1', 1, 'perte', 0.98, 10, '17110', '2025-02-05 12:34:04'),
(2, 54546, '20250205102010710', '1', '0', '1', '1', 1, 'perte', 0.98, 26, '74906', '2025-02-05 12:41:07'),
(3, 54546, '20250205102010710', '1', '1', '1', '1', 1, 'perte', 0.98, 26, '74906', '2025-02-05 12:41:07'),
(4, 54546, '20250205102010710', '1', '2', '1', '1', 1, 'perte', 0.98, 26, '74906', '2025-02-05 12:41:07'),
(5, 54546, '20250205102010710', '1', '3', '1', '1', 1, 'perte', 0.98, 26, '74906', '2025-02-05 12:41:07');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_aidudi_drei`
--

CREATE TABLE `bajikattuttate_aidudi_drei` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` varchar(255) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_aidudi_drei`
--

INSERT INTO `bajikattuttate_aidudi_drei` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 44386, '20250205102020382', '1', 'H', '10', '5', 50, 'perte', 49, 16, '08152', '2025-02-05 21:21:03'),
(2, 44644, '20250205102020382', '1', 'L', '10', '5', 50, 'gagner', 99, 16, '08152', '2025-02-05 21:21:03'),
(3, 44671, '20250205102020384', '1', 'H', '10', '5', 50, 'perte', 49, 18, '03609', '2025-02-05 21:27:04'),
(4, 44711, '20250205102020384', '1', 'L', '10', '5', 50, 'gagner', 99, 18, '03609', '2025-02-05 21:27:04'),
(5, 44745, '20250205102020385', '1', 'H', '10', '5', 50, 'perte', 49, 10, '24031', '2025-02-05 21:30:08'),
(6, 44777, '20250205102020385', '1', 'L', '10', '5', 50, 'gagner', 99, 10, '24031', '2025-02-05 21:30:08'),
(7, 44838, '20250205102020386', '1', 'H', '10', '5', 50, 'perte', 49, 21, '03585', '2025-02-05 21:33:05'),
(8, 44875, '20250205102020386', '1', 'L', '10', '5', 50, 'gagner', 99, 21, '03585', '2025-02-05 21:33:05'),
(9, 44921, '20250205102020387', '1', 'H', '10', '5', 50, 'perte', 49, 27, '09783', '2025-02-05 21:36:04'),
(10, 44949, '20250205102020387', '1', 'L', '10', '5', 50, 'gagner', 99, 27, '09783', '2025-02-05 21:36:04'),
(11, 45000, '20250205102020388', '1', 'H', '10', '5', 50, 'perte', 49, 22, '26581', '2025-02-05 21:39:03'),
(12, 45019, '20250205102020388', '1', 'L', '10', '5', 50, 'gagner', 99, 22, '26581', '2025-02-05 21:39:03'),
(13, 45030, '20250205102020389', '1', 'H', '10', '5', 50, 'perte', 49, 25, '20986', '2025-02-05 21:42:04'),
(14, 45050, '20250205102020389', '1', 'L', '10', '5', 50, 'gagner', 99, 25, '20986', '2025-02-05 21:42:04'),
(15, 45344, '20250205102020390', '1', 'H', '10', '5', 50, 'perte', 49, 17, '21590', '2025-02-05 21:48:03'),
(16, 45381, '20250205102020390', '1', 'L', '10', '5', 50, 'gagner', 99, 17, '21590', '2025-02-05 21:48:03'),
(17, 61686, '20250206102020337', '6', 'E', '1', '5', 5, 'perte', 4.9, 15, '50064', '2025-02-06 18:09:03');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_aidudi_funf`
--

CREATE TABLE `bajikattuttate_aidudi_funf` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` varchar(255) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_aidudi_funf`
--

INSERT INTO `bajikattuttate_aidudi_funf` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 69475, '20250206102030171', '1', '0', '1', '50', 50, 'perte', 49, 24, '76803', '2025-02-06 15:55:07'),
(2, 69479, '20250206102030171', '1', '1', '1', '50', 50, 'perte', 49, 24, '76803', '2025-02-06 15:55:07'),
(3, 69505, '20250206102030171', '1', '2', '1', '50', 50, 'perte', 49, 24, '76803', '2025-02-06 15:55:07'),
(4, 69512, '20250206102030171', '1', '3', '1', '50', 50, 'perte', 49, 24, '76803', '2025-02-06 15:55:07'),
(5, 72353, '20250206102030213', '1', '0', '1', '49', 49, 'perte', 48.02, 34, '56968', '2025-02-06 20:20:08'),
(6, 72354, '20250206102030213', '1', '1', '1', '50', 50, 'perte', 49, 34, '56968', '2025-02-06 20:20:08'),
(7, 72359, '20250206102030213', '1', '2', '1', '50', 50, 'perte', 49, 34, '56968', '2025-02-06 20:20:08'),
(8, 72363, '20250206102030214', '1', '3', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(9, 72367, '20250206102030214', '1', '4', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(10, 72374, '20250206102030214', '1', '5', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(11, 72379, '20250206102030214', '1', '6', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(12, 72383, '20250206102030214', '1', '6', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(13, 72386, '20250206102030214', '1', '8', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(14, 72390, '20250206102030214', '1', '9', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(15, 72393, '20250206102030214', '1', '0', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(16, 72399, '20250206102030214', '1', '7', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09'),
(17, 72546, '20250206102030214', '1', '1', '1', '50', 50, 'perte', 49, 11, '24131', '2025-02-06 20:25:09');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_aidudi_zehn`
--

CREATE TABLE `bajikattuttate_aidudi_zehn` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` varchar(255) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_aidudi_zehn`
--

INSERT INTO `bajikattuttate_aidudi_zehn` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 63853, '20250206102040005', '1', '0', '1', '50', 50, 'perte', 49, 20, '34382', '2025-02-06 01:00:09'),
(2, 63864, '20250206102040005', '1', '1', '1', '50', 50, 'perte', 49, 20, '34382', '2025-02-06 01:00:09'),
(3, 63870, '20250206102040005', '1', '2', '1', '50', 50, 'perte', 49, 20, '34382', '2025-02-06 01:00:09'),
(4, 63908, '20250206102040005', '1', '7', '1', '50', 50, 'perte', 49, 20, '34382', '2025-02-06 01:00:09'),
(5, 69262, '20250206102040083', '1', '8', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(6, 69218, '20250206102040083', '1', '0', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(7, 69225, '20250206102040083', '1', '1', '1', '1', 1, 'perte', 0.98, 33, '98079', '2025-02-06 14:50:07'),
(8, 69225, '20250206102040083', '1', '1', '1', '49', 49, 'perte', 48.02, 33, '98079', '2025-02-06 14:50:07'),
(9, 69233, '20250206102040083', '1', '2', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(10, 69238, '20250206102040083', '1', '3', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(11, 69243, '20250206102040083', '1', '4', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(12, 69249, '20250206102040083', '1', '5', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(13, 69255, '20250206102040083', '1', '6', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(14, 69259, '20250206102040083', '1', '7', '1', '50', 50, 'perte', 49, 33, '98079', '2025-02-06 14:50:07'),
(15, 68992, '20250206102040083', '1', '9', '1', '50', 50, 'gagner', 450, 33, '98079', '2025-02-06 14:50:07'),
(16, 71835, '20250206102040099', '1', '0', '1', '50', 50, 'perte', 49, 25, '62944', '2025-02-06 19:30:12'),
(17, 71844, '20250206102040099', '1', '1', '1', '50', 50, 'perte', 49, 25, '62944', '2025-02-06 19:30:12'),
(18, 71846, '20250206102040099', '1', '2', '1', '50', 50, 'perte', 49, 25, '62944', '2025-02-06 19:30:12'),
(19, 71864, '20250206102040099', '1', '3', '1', '50', 50, 'perte', 49, 25, '62944', '2025-02-06 19:30:12'),
(20, 71871, '20250206102040099', '1', '4', '1', '50', 50, 'perte', 49, 25, '62944', '2025-02-06 19:30:12');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_drei`
--

CREATE TABLE `bajikattuttate_drei` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_drei`
--

INSERT INTO `bajikattuttate_drei` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 54502, '20250205100020233', '1', '0', '1', '5', 5, 'gagner', 44.1, 0, 29530, '2025-02-05 12:36:03'),
(2, 54502, '20250205100020233', '1', '1', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(3, 54502, '20250205100020233', '1', '2', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(4, 54502, '20250205100020233', '1', '3', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(5, 54502, '20250205100020233', '1', '4', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(6, 54502, '20250205100020233', '1', '5', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(7, 54502, '20250205100020233', '1', '6', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(8, 54502, '20250205100020233', '1', '7', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(9, 54502, '20250205100020233', '1', '8', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03'),
(10, 54502, '20250205100020233', '1', '9', '1', '5', 5, 'perte', 4.9, 0, 29530, '2025-02-05 12:36:03');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_funf`
--

CREATE TABLE `bajikattuttate_funf` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_funf`
--

INSERT INTO `bajikattuttate_funf` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 69728, '20250206100030162', '2', '14', '1', '50', 50, 'gagner', 98, 0, 36990, '2025-02-06 15:30:12'),
(2, 67768, '20250206100030162', '1', '0', '10', '5', 50, 'gagner', 441, 0, 36990, '2025-02-06 15:30:12'),
(3, 67774, '20250206100030162', '1', '1', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(4, 67269, '20250206100030162', '2', '13', '1', '50', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(5, 67779, '20250206100030162', '1', '2', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(6, 67790, '20250206100030162', '1', '3', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(7, 67797, '20250206100030162', '1', '4', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(8, 67806, '20250206100030162', '1', '5', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12'),
(9, 67813, '20250206100030162', '1', '6', '10', '5', 50, 'perte', 49, 0, 36990, '2025-02-06 15:30:12');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_kemuru`
--

CREATE TABLE `bajikattuttate_kemuru` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_kemuru`
--

INSERT INTO `bajikattuttate_kemuru` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 69446, '20250206101010866', '1', '3', '10', '5', 50, 'perte', 49, 4, 211, '2025-02-06 15:01:03'),
(2, 69457, '20250206101010869', '2', 'H', '5', '10', 50, 'perte', 49, 3, 111, '2025-02-06 15:04:03'),
(3, 69499, '20250206101010870', '1', '3', '10', '5', 50, 'perte', 49, 11, 155, '2025-02-06 15:05:03'),
(4, 427, '20250206101010870', '1', '3', '5', '1', 5, 'perte', 4.9, 11, 155, '2025-02-06 15:05:03'),
(5, 69490, '20250206101010870', '2', 'L', '10', '5', 50, 'perte', 49, 11, 155, '2025-02-06 15:05:03'),
(6, 427, '20250206101010871', '1', '13', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(7, 427, '20250206101010871', '1', '4', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(8, 427, '20250206101010871', '1', '14', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(9, 427, '20250206101010871', '1', '10', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(10, 427, '20250206101010871', '1', '5', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(11, 427, '20250206101010871', '1', '8', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(12, 427, '20250206101010871', '1', '11', '5', '1', 5, 'perte', 4.9, 6, 213, '2025-02-06 15:06:04'),
(13, 427, '20250206101010872', '1', '4', '5', '2', 10, 'perte', 9.8, 7, 151, '2025-02-06 15:07:03'),
(14, 69522, '20250206101010872', '1', '4', '10', '5', 50, 'perte', 49, 7, 151, '2025-02-06 15:07:03'),
(15, 427, '20250206101010872', '1', '5', '5', '1', 5, 'perte', 4.9, 7, 151, '2025-02-06 15:07:03'),
(16, 427, '20250206101010872', '1', '6', '5', '1', 5, 'perte', 4.9, 7, 151, '2025-02-06 15:07:03'),
(17, 427, '20250206101010872', '1', '16', '5', '1', 5, 'perte', 4.9, 7, 151, '2025-02-06 15:07:03'),
(18, 427, '20250206101010872', '1', '3', '5', '1', 5, 'perte', 4.9, 7, 151, '2025-02-06 15:07:03'),
(19, 69552, '20250206101010874', '1', '4', '10', '5', 50, 'perte', 49, 3, 111, '2025-02-06 15:09:03'),
(20, 69578, '20250206101010875', '1', '4', '10', '5', 50, 'perte', 49, 3, 111, '2025-02-06 15:10:07');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_kemuru_drei`
--

CREATE TABLE `bajikattuttate_kemuru_drei` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_kemuru_drei`
--

INSERT INTO `bajikattuttate_kemuru_drei` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 56247, '20250205101020262', '3', 'O', '5', '10', 50, 'perte', 49, 4, 112, '2025-02-05 14:42:04'),
(2, 56247, '20250205101020262', '3', 'O', '5', '1', 5, 'perte', 4.9, 4, 112, '2025-02-05 14:42:04'),
(3, 56605, '20250205101020269', '2', 'L', '10', '1', 10, 'perte', 9.8, 11, 524, '2025-02-05 15:03:05'),
(4, 57378, '20250205101020283', '2', 'H', '10', '3', 30, 'perte', 29.4, 3, 111, '2025-02-05 15:54:05'),
(5, 57774, '20250205101020290', '1', '14,15,16,17,18,3,4,5,6,7', '5', '1', 50, 'perte', 49, 9, 252, '2025-02-05 16:24:05'),
(6, 58019, '20250205101020302', '2', 'H', '10', '2', 20, 'perte', 19.6, 3, 111, '2025-02-05 17:06:05'),
(7, 7471, '20250205101020354', '2', 'L', '10', '1750', 17500, 'perte', 17150, 11, 551, '2025-02-05 20:12:04'),
(8, 7471, '20250205101020354', '2', 'L', '10', '9', 90, 'perte', 88.2, 11, 551, '2025-02-05 20:12:04'),
(9, 60718, '20250205101020360', '2', 'H', '5', '2', 10, 'perte', 9.8, 3, 111, '2025-02-05 20:36:05'),
(10, 61597, '20250205101020367', '1', '4', '10', '1', 10, 'perte', 9.8, 7, 124, '2025-02-05 20:57:03'),
(11, 61597, '20250205101020367', '1', '6', '10', '1', 10, 'perte', 9.8, 7, 124, '2025-02-05 20:57:03'),
(12, 61597, '20250205101020367', '1', '5', '10', '1', 10, 'perte', 9.8, 7, 124, '2025-02-05 20:57:03'),
(13, 61597, '20250205101020367', '1', '3', '10', '1', 10, 'perte', 9.8, 7, 124, '2025-02-05 20:57:03'),
(14, 61827, '20250205101020376', '3', 'O', '100', '1', 100, 'perte', 98, 4, 112, '2025-02-05 21:36:04'),
(15, 62525, '20250205101020396', '1', '3', '5', '1', 5, 'perte', 4.9, 4, 112, '2025-02-05 22:42:04'),
(16, 63111, '20250205101020413', '1', '3', '5', '5', 25, 'perte', 24.5, 4, 211, '2025-02-05 23:48:06'),
(17, 63111, '20250205101020413', '1', '7', '5', '1', 5, 'perte', 4.9, 4, 211, '2025-02-05 23:48:06'),
(18, 63111, '20250205101020413', '1', '15', '5', '5', 25, 'perte', 24.5, 4, 211, '2025-02-05 23:48:06'),
(19, 63111, '20250205101020413', '1', '11', '5', '1', 5, 'perte', 4.9, 4, 211, '2025-02-05 23:48:06'),
(20, 63111, '20250205101020413', '1', '16', '5', '1', 5, 'perte', 4.9, 4, 211, '2025-02-05 23:48:06');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_kemuru_funf`
--

CREATE TABLE `bajikattuttate_kemuru_funf` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_kemuru_funf`
--

INSERT INTO `bajikattuttate_kemuru_funf` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 42086, '20250205101030172', '2', 'H', '5', '5', 25, 'perte', 24.5, 3, 111, '2025-02-05 16:55:11'),
(2, 56256, '20250205101030180', '1', '10', '10', '5', 50, 'perte', 49, 3, 111, '2025-02-05 18:05:07'),
(3, 56351, '20250205101030181', '1', '3', '10', '2', 20, 'perte', 19.6, 4, 112, '2025-02-05 18:15:04'),
(4, 63195, '20250205101030231', '1', '3', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(5, 63195, '20250205101030231', '1', '7', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(6, 63195, '20250205101030231', '1', '11', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(7, 63195, '20250205101030231', '1', '15', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(8, 63195, '20250205101030231', '1', '16', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(9, 63195, '20250205101030231', '1', '12', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(10, 63195, '20250205101030231', '1', '8', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(11, 63195, '20250205101030231', '1', '4', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(12, 63195, '20250205101030231', '1', '5', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(13, 63195, '20250205101030231', '1', '9', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(14, 63195, '20250205101030231', '1', '13', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(15, 63195, '20250205101030231', '1', '17', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(16, 63195, '20250205101030231', '1', '18', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(17, 63195, '20250205101030231', '1', '14', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(18, 63195, '20250205101030231', '1', '10', '5', '1', 5, 'gagner', 37.63, 10, 352, '2025-02-06 00:00:08'),
(19, 63195, '20250205101030231', '1', '6', '5', '1', 5, 'perte', 4.9, 10, 352, '2025-02-06 00:00:08'),
(20, 63195, '20250205101030231', '2', 'H', '5', '3', 15, 'perte', 14.7, 10, 352, '2025-02-06 00:00:08');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_kemuru_zehn`
--

CREATE TABLE `bajikattuttate_kemuru_zehn` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_kemuru_zehn`
--

INSERT INTO `bajikattuttate_kemuru_zehn` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 55115, '20250205101040066', '1', '11', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(2, 55146, '20250205101040066', '1', '12', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(3, 55162, '20250205101040066', '1', '13', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(4, 55176, '20250205101040066', '1', '14', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(5, 55194, '20250205101040066', '1', '15', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(6, 55210, '20250205101040066', '1', '16', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(7, 55244, '20250205101040066', '1', '18', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(8, 55254, '20250205101040066', '1', '7', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(9, 55260, '20250205101040066', '1', '8', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(10, 55272, '20250205101040066', '1', '8', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(11, 55273, '20250205101040066', '1', '9', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(12, 55286, '20250205101040066', '1', '3', '5', '10', 50, 'perte', 49, 10, 613, '2025-02-05 13:30:09'),
(13, 55009, '20250205101040067', '1', '17,18,3,4', '10', '1', 40, 'perte', 39.2, 11, 542, '2025-02-05 13:40:09'),
(14, 55009, '20250205101040067', '1', '17,4', '5', '1', 10, 'perte', 9.8, 11, 542, '2025-02-05 13:40:09'),
(15, 55021, '20250205101040067', '1', '15,16,5,6', '10', '1', 40, 'perte', 39.2, 11, 542, '2025-02-05 13:40:09'),
(16, 55021, '20250205101040067', '1', '16,5', '5', '1', 10, 'perte', 9.8, 11, 542, '2025-02-05 13:40:09'),
(17, 55027, '20250205101040067', '1', '15,6', '10', '2', 40, 'perte', 39.2, 11, 542, '2025-02-05 13:40:09'),
(18, 55027, '20250205101040067', '1', '15,6', '5', '1', 10, 'perte', 9.8, 11, 542, '2025-02-05 13:40:09'),
(19, 55033, '20250205101040067', '1', '7', '10', '5', 50, 'perte', 49, 11, 542, '2025-02-05 13:40:09'),
(20, 55040, '20250205101040067', '1', '8', '10', '5', 50, 'perte', 49, 11, 542, '2025-02-05 13:40:09');

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_trx`
--

CREATE TABLE `bajikattuttate_trx` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_trx3`
--

CREATE TABLE `bajikattuttate_trx3` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_trx5`
--

CREATE TABLE `bajikattuttate_trx5` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_trx10`
--

CREATE TABLE `bajikattuttate_trx10` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bajikattuttate_zehn`
--

CREATE TABLE `bajikattuttate_zehn` (
  `parichaya` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `kalaparichaya` varchar(255) NOT NULL,
  `prakar` varchar(100) NOT NULL,
  `ojana` varchar(100) NOT NULL,
  `menge` varchar(100) DEFAULT NULL,
  `wettanzahl` varchar(100) DEFAULT NULL,
  `ketebida` float NOT NULL,
  `phalaphala` varchar(255) NOT NULL DEFAULT 'perte',
  `sesabida` float NOT NULL,
  `ergebnis` int(11) DEFAULT NULL,
  `zufallig` int(11) DEFAULT NULL,
  `tiarikala` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bajikattuttate_zehn`
--

INSERT INTO `bajikattuttate_zehn` (`parichaya`, `byabaharkarta`, `kalaparichaya`, `prakar`, `ojana`, `menge`, `wettanzahl`, `ketebida`, `phalaphala`, `sesabida`, `ergebnis`, `zufallig`, `tiarikala`) VALUES
(1, 69379, '20250206100051757', '1', '6', '1', '5', 5, 'perte', 4.9, 0, 53140, '2025-02-06 14:59:03'),
(2, 69379, '20250206100051757', '1', '8', '1', '5', 5, 'perte', 4.9, 0, 53140, '2025-02-06 14:59:03'),
(3, 69447, '20250206100051758', '0', '12', '1', '50', 50, 'perte', 49, 2, 98782, '2025-02-06 14:59:33'),
(4, 68325, '20250206100051758', '2', '13', '1', '4', 4, 'perte', 3.92, 2, 98782, '2025-02-06 14:59:33'),
(5, 69388, '20250206100051758', '2', '14', '1', '8', 8, 'gagner', 15.68, 2, 98782, '2025-02-06 14:59:33'),
(6, 69265, '20250206100051758', '2', '13', '10', '1', 10, 'perte', 9.8, 2, 98782, '2025-02-06 14:59:33'),
(7, 69448, '20250206100051758', '1', '5', '1', '10', 10, 'perte', 9.8, 2, 98782, '2025-02-06 14:59:33'),
(8, 69378, '20250206100051758', '2', '13', '1', '58', 58, 'perte', 56.84, 2, 98782, '2025-02-06 14:59:33'),
(9, 69379, '20250206100051758', '0', '11', '1', '100', 100, 'perte', 98, 2, 98782, '2025-02-06 14:59:33'),
(10, 69448, '20250206100051758', '1', '0', '1', '10', 10, 'perte', 9.8, 2, 98782, '2025-02-06 14:59:33'),
(11, 69352, '20250206100051759', '2', '13', '10', '5', 50, 'perte', 49, 2, 51662, '2025-02-06 15:00:38'),
(12, 69448, '20250206100051759', '1', '0', '1', '10', 10, 'perte', 9.8, 2, 51662, '2025-02-06 15:00:38'),
(13, 69379, '20250206100051759', '0', '11', '1', '50', 50, 'perte', 49, 2, 51662, '2025-02-06 15:00:38'),
(14, 69448, '20250206100051759', '1', '5', '1', '10', 10, 'perte', 9.8, 2, 51662, '2025-02-06 15:00:38'),
(15, 69449, '20250206100051759', '2', '14', '10', '5', 50, 'gagner', 98, 2, 51662, '2025-02-06 15:00:38'),
(16, 69388, '20250206100051759', '2', '13', '1', '12', 12, 'perte', 11.76, 2, 51662, '2025-02-06 15:00:38'),
(17, 69265, '20250206100051759', '1', '7', '1', '1', 1, 'perte', 0.98, 2, 51662, '2025-02-06 15:00:38'),
(18, 69448, '20250206100051759', '1', '6', '1', '10', 10, 'perte', 9.8, 2, 51662, '2025-02-06 15:00:38'),
(19, 69379, '20250206100051759', '0', '11', '1', '20', 20, 'perte', 19.6, 2, 51662, '2025-02-06 15:00:38'),
(20, 69389, '20250206100051759', '2', '13', '10', '3', 30, 'perte', 29.4, 2, 51662, '2025-02-06 15:00:38');

-- --------------------------------------------------------

--
-- Table structure for table `bankcard`
--

CREATE TABLE `bankcard` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `account` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `createdat` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bankcard`
--

INSERT INTO `bankcard` (`id`, `userid`, `account`, `name`, `type`, `createdat`) VALUES
(6, 19707, '03337682308', 'NAIMA ASHRAF', 40, '2025-02-03 14:39:25'),
(7, 15, '2662882992', 'TST', 40, '2025-02-03 14:39:30'),
(8, 19229, '03102456334', 'ZAMAN', 40, '2025-02-03 14:39:37'),
(9, 19827, '03079851818', 'NADEEM ALI', 40, '2025-02-03 14:41:19'),
(10, 14936, '03033328898', 'ALI AKBAR ', 40, '2025-02-03 14:41:46'),
(11, 2612, '03473940528', 'ASGHAR ALI SHAH ', 40, '2025-02-03 14:42:05'),
(12, 7329, '03180544664', 'AWAIS KHAN ', 40, '2025-02-03 14:42:56'),
(13, 19991, '03002642445', 'HASSEB UL REHMAN ', 40, '2025-02-03 14:43:10'),
(14, 19973, '03109447871', 'PHOOL BIBI ', 40, '2025-02-03 14:44:47'),
(15, 4502, '03486087253', 'KHADIJA baigum', 40, '2025-02-03 14:45:12'),
(16, 19241, '3184512860', 'RUKHSANA KAUSAR', 40, '2025-02-03 14:45:27'),
(17, 19738, '03012866552', 'KHALIL AHMED ANRH ', 40, '2025-02-03 14:45:46'),
(18, 16183, '03481343048', 'ANEETA ', 40, '2025-02-03 14:46:05'),
(19, 19725, '03215241388', 'BALAJYASIR', 40, '2025-02-03 14:47:09'),
(20, 17207, '03234212904', 'RUKHSANA SHAHID ', 40, '2025-02-03 14:47:21');

-- --------------------------------------------------------

--
-- Table structure for table `banned_users`
--

CREATE TABLE `banned_users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `reason` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `betrec`
--

CREATE TABLE `betrec` (
  `id` int(11) NOT NULL,
  `period` bigint(20) NOT NULL,
  `ans` varchar(11) NOT NULL,
  `num` varchar(20) NOT NULL,
  `clo` tinytext NOT NULL,
  `res1` varchar(211) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `betrec`
--

INSERT INTO `betrec` (`id`, `period`, `ans`, `num`, `clo`, `res1`, `time`) VALUES
(1, 0, '0', '31970', 'red', 'violet', '2024-03-16 11:09:18');

-- --------------------------------------------------------

--
-- Table structure for table `cihne`
--

CREATE TABLE `cihne` (
  `dearlord` int(11) NOT NULL,
  `identity` int(11) NOT NULL,
  `daysonearth` varchar(200) NOT NULL,
  `todayblessings` varchar(200) NOT NULL,
  `totalblessings` varchar(200) NOT NULL,
  `amen` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cihne`
--

INSERT INTO `cihne` (`dearlord`, `identity`, `daysonearth`, `todayblessings`, `totalblessings`, `amen`) VALUES
(1, 848, '1', '7', '7', '2025-01-18 10:21:01'),
(2, 987, '1', '7', '7', '2025-01-18 15:39:01'),
(3, 775, '1', '7', '7', '2025-01-18 16:15:01'),
(4, 1102, '1', '7', '7', '2025-01-18 17:45:01'),
(5, 1308, '1', '7', '7', '2025-01-18 18:09:01'),
(6, 1201, '1', '7', '7', '2025-01-18 18:36:01'),
(7, 1558, '1', '7', '7', '2025-01-18 20:19:01'),
(8, 1719, '1', '7', '7', '2025-01-18 21:52:01'),
(9, 232, '1', '7', '7', '2025-01-18 22:08:01'),
(10, 2757, '1', '7', '7', '2025-01-18 23:10:01'),
(11, 4480, '1', '7', '7', '2025-01-19 04:56:01'),
(12, 5373, '1', '7', '7', '2025-01-19 09:26:01'),
(13, 5545, '1', '7', '7', '2025-01-19 09:53:01'),
(14, 6498, '1', '7', '7', '2025-01-19 11:59:01'),
(15, 6614, '1', '7', '7', '2025-01-19 12:16:01'),
(16, 6628, '1', '7', '7', '2025-01-19 12:20:01'),
(17, 6845, '1', '7', '7', '2025-01-19 12:39:01'),
(18, 7001, '1', '7', '7', '2025-01-19 12:47:01'),
(19, 6949, '1', '7', '7', '2025-01-19 12:50:01'),
(20, 7302, '1', '7', '7', '2025-01-19 13:19:01');

-- --------------------------------------------------------

--
-- Table structure for table `commission`
--

CREATE TABLE `commission` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `children_LotteryAmount` decimal(10,2) DEFAULT 0.00,
  `rebateAmount_Last` decimal(10,2) DEFAULT 0.00,
  `created_at` varchar(255) NOT NULL,
  `created_timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crashbetrecord`
--

CREATE TABLE `crashbetrecord` (
  `id` int(11) NOT NULL,
  `username` varchar(211) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` varchar(211) NOT NULL DEFAULT 'pending',
  `winpoint` varchar(211) NOT NULL DEFAULT '0.00',
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crashgamerecord`
--

CREATE TABLE `crashgamerecord` (
  `id` int(11) NOT NULL,
  `username` varchar(211) NOT NULL,
  `crashpoint` varchar(211) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crashgamerecordtwo`
--

CREATE TABLE `crashgamerecordtwo` (
  `id` int(11) NOT NULL,
  `crashpoint` varchar(211) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crashgamerecordtwo`
--

INSERT INTO `crashgamerecordtwo` (`id`, `crashpoint`, `time`) VALUES
(1, '', '2024-04-08 11:44:03');

-- --------------------------------------------------------

--
-- Table structure for table `dailysalary`
--

CREATE TABLE `dailysalary` (
  `macau` int(11) NOT NULL,
  `userid` varchar(500) NOT NULL DEFAULT '0',
  `totalsucrech` varchar(500) NOT NULL DEFAULT '0',
  `totalfailrech` varchar(500) NOT NULL DEFAULT '0',
  `tsruser` varchar(500) NOT NULL DEFAULT '0',
  `tfruser` varchar(500) NOT NULL DEFAULT '0',
  `totalsucbet` varchar(500) NOT NULL DEFAULT '0',
  `tsbuser` varchar(500) NOT NULL DEFAULT '0',
  `totalfailbet` varchar(500) NOT NULL DEFAULT '0',
  `tfbuser` varchar(500) NOT NULL DEFAULT '0',
  `salary` varchar(500) NOT NULL DEFAULT '0',
  `status` varchar(255) NOT NULL DEFAULT '0',
  `remarks` varchar(255) DEFAULT NULL,
  `createdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `demo`
--

CREATE TABLE `demo` (
  `kramasankhye` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `motta` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `sthiti` int(11) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `demo`
--

INSERT INTO `demo` (`kramasankhye`, `balakedara`, `motta`, `dinankavannuracisi`, `sthiti`) VALUES
(101, 48421, '3276924762', '2025-02-05 00:58:43', 2),
(100, 47959, '1234567890', '2025-02-05 00:13:04', 2),
(99, 31648, '98765432', '2025-02-04 08:15:34', 2),
(98, 24, '0897654321', '2025-02-03 00:34:54', 2),
(97, 23, '0987654321', '2025-02-03 00:33:54', 2),
(96, 22, '9203414340740', '2025-02-03 00:07:06', 2),
(95, 14, '9203011234567', '2025-02-01 00:05:06', 2),
(94, 13, '923023558822', '2025-01-31 22:43:46', 2),
(93, 12, '03082034175', '2025-01-31 22:14:22', 2),
(110, 78964, '927262847284', '2025-02-17 06:31:11', 1),
(111, 78965, '928887947097', '2025-02-17 06:32:48', 1),
(112, 78967, '929631041644', '2025-02-17 12:39:26', 1),
(114, 739517, '927777888899', '2025-03-04 09:49:58', 1),
(115, 739525, '921234567890', '2025-03-04 14:47:40', 1),
(117, 739527, '92576889953379', '2025-03-04 14:51:35', 1),
(118, 739529, '929246476888654', '2025-03-04 15:05:13', 1),
(119, 739530, '92fggjjio', '2025-03-04 15:07:36', 1),
(120, 739531, '929046527557', '2025-03-04 15:08:01', 1),
(121, 739532, '9256889', '2025-03-04 15:08:33', 1);

-- --------------------------------------------------------
--
-- Table structure for table `deyya`
--

CREATE TABLE `deyya` (
  `shonu` int(11) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `deyya`
--

INSERT INTO `deyya` (`shonu`, `maulya`, `sthiti`) VALUES
(1, 'paytm.slay6s3@pty', 0),
(2, 'rm1883125-1@oksbi', 0),
(3, '9332894932@okbizaxis', 1);

-- --------------------------------------------------------

--
-- Table structure for table `deyyamrici`
--

CREATE TABLE `deyyamrici` (
  `shonu` int(11) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `deyyamrici`
--

INSERT INTO `deyyamrici` (`shonu`, `maulya`, `sthiti`) VALUES
(13, 'TP797gFnzpsTQNGH7QDo8c2bRsbQ4pKeaq', 1),
(14, 'TYxE4dDBNynbNXktuTd8XqJiCwbiVVfXxA', 1);

-- --------------------------------------------------------

--
-- Table structure for table `egrahcer_sonub`
--

CREATE TABLE `egrahcer_sonub` (
  `id` int(11) NOT NULL,
  `dr` varchar(300) NOT NULL,
  `sturgis` varchar(300) NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT 0,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `egrahcer_sonub`
--

INSERT INTO `egrahcer_sonub` (`id`, `dr`, `sturgis`, `status`, `time`) VALUES
(1, '4', '6', 1, '2025-01-17 21:35:44'),
(2, '5', '2', 1, '2025-01-17 21:35:53'),
(3, '23', '2', 1, '2025-01-17 22:26:14'),
(4, '13', '2', 1, '2025-01-17 22:37:00'),
(5, '52', '2', 1, '2025-01-17 22:37:19'),
(6, '128', '2', 1, '2025-01-17 22:37:39'),
(7, '283', '2', 1, '2025-01-17 22:53:34'),
(8, '243', '1', 1, '2025-01-17 22:59:51'),
(9, '434', '2', 1, '2025-01-17 23:47:39'),
(10, '399', '2', 1, '2025-01-18 00:01:09'),
(11, '604', '2', 1, '2025-01-18 07:38:21'),
(12, '232', '2', 1, '2025-01-18 07:52:07'),
(13, '681', '2', 1, '2025-01-18 08:23:11'),
(14, '705', '2', 1, '2025-01-18 08:26:05'),
(15, '721', '2', 1, '2025-01-18 08:33:25'),
(16, '632', '2', 1, '2025-01-18 08:52:12'),
(17, '757', '2', 1, '2025-01-18 08:54:33'),
(18, '213', '2', 1, '2025-01-18 09:18:57'),
(19, '848', '3', 1, '2025-01-18 10:00:56'),
(20, '263', '2', 1, '2025-01-18 10:15:33');

--
-- Table structure for table `gellaluhogiondu_aidudi_phalitansa`
--

CREATE TABLE `gellaluhogiondu_aidudi_phalitansa` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` varchar(255) NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_aidudi_phalitansa`
--

INSERT INTO `gellaluhogiondu_aidudi_phalitansa` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100010915', '91475', 26, 'shonu', '2025-01-17 20:45:01'),
(2, '20250117100010916', '48547', 28, 'shonu', '2025-01-17 20:46:01'),
(3, '20250117100010918', '17510', 14, 'shonu', '2025-01-17 20:48:01'),
(4, '20250117100010919', '47551', 22, 'shonu', '2025-01-17 20:49:01'),
(5, '20250117100010920', '60821', 17, 'shonu', '2025-01-17 20:50:02'),
(6, '20250117100010921', '89661', 30, 'shonu', '2025-01-17 20:51:02'),
(7, '20250117100010922', '18586', 28, 'shonu', '2025-01-17 20:52:01'),
(8, '20250117100010923', '54155', 20, 'shonu', '2025-01-17 20:53:01'),
(9, '20250117100010924', '09003', 12, 'shonu', '2025-01-17 20:54:01'),
(10, '20250117100010925', '45580', 22, 'shonu', '2025-01-17 20:55:01'),
(11, '20250117100010926', '44153', 17, 'shonu', '2025-01-17 20:56:01'),
(12, '20250117100010927', '76908', 30, 'shonu', '2025-01-17 20:57:02'),
(13, '20250117100010928', '14176', 19, 'shonu', '2025-01-17 20:58:02'),
(14, '20250117100010929', '47446', 25, 'shonu', '2025-01-17 20:59:02'),
(15, '20250117100010930', '44066', 20, 'shonu', '2025-01-17 21:00:02'),
(16, '20250117100010931', '18540', 18, 'shonu', '2025-01-17 21:01:01'),
(17, '20250117100010932', '16989', 33, 'shonu', '2025-01-17 21:02:01'),
(18, '20250117100010933', '36515', 20, 'shonu', '2025-01-17 21:03:01'),
(19, '20250117100010934', '19004', 14, 'shonu', '2025-01-17 21:04:01'),
(20, '20250117100010935', '29986', 34, 'shonu', '2025-01-17 21:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_aidudi_phalitansa_drei`
--

CREATE TABLE `gellaluhogiondu_aidudi_phalitansa_drei` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` varchar(255) NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_aidudi_phalitansa_drei`
--

INSERT INTO `gellaluhogiondu_aidudi_phalitansa_drei` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117060415', '44893', 28, 'shonu', '2025-01-17 20:45:01'),
(2, '20250117060417', '14294', 20, 'shonu', '2025-01-17 20:51:02'),
(3, '20250117060418', '93612', 21, 'shonu', '2025-01-17 20:54:01'),
(4, '20250117060419', '68824', 28, 'shonu', '2025-01-17 20:57:02'),
(5, '20250117060420', '46402', 16, 'shonu', '2025-01-17 21:00:01'),
(6, '20250117060421', '43247', 20, 'shonu', '2025-01-17 21:03:01'),
(7, '20250117060422', '12255', 15, 'shonu', '2025-01-17 21:06:01'),
(8, '20250117060423', '66876', 33, 'shonu', '2025-01-17 21:09:02'),
(9, '20250117060424', '83481', 24, 'shonu', '2025-01-17 21:12:01'),
(10, '20250117060425', '46593', 27, 'shonu', '2025-01-17 21:15:02'),
(11, '20250117060426', '85447', 28, 'shonu', '2025-01-17 21:18:01'),
(12, '20250117060427', '98611', 25, 'shonu', '2025-01-17 21:21:01'),
(13, '20250117060428', '99704', 29, 'shonu', '2025-01-17 21:24:02'),
(14, '20250117060429', '52530', 15, 'shonu', '2025-01-17 21:27:01'),
(15, '20250117060430', '31086', 18, 'shonu', '2025-01-17 21:30:04'),
(16, '20250117060431', '12303', 9, 'shonu', '2025-01-17 21:33:01'),
(17, '20250117060432', '63902', 20, 'shonu', '2025-01-17 21:36:02'),
(18, '20250117060433', '91050', 15, 'shonu', '2025-01-17 21:39:02'),
(19, '20250117060434', '99046', 28, 'shonu', '2025-01-17 21:42:02'),
(20, '20250117060435', '06766', 25, 'shonu', '2025-01-17 21:45:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_aidudi_phalitansa_funf`
--

CREATE TABLE `gellaluhogiondu_aidudi_phalitansa_funf` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` varchar(255) NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_aidudi_phalitansa_funf`
--

INSERT INTO `gellaluhogiondu_aidudi_phalitansa_funf` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117070249', '23476', 22, 'shonu', '2025-01-17 20:45:02'),
(2, '20250117070251', '38573', 26, 'shonu', '2025-01-17 20:55:01'),
(3, '20250117070252', '93156', 24, 'shonu', '2025-01-17 21:00:02'),
(4, '20250117070253', '69880', 31, 'shonu', '2025-01-17 21:05:02'),
(5, '20250117070254', '87801', 24, 'shonu', '2025-01-17 21:10:02'),
(6, '20250117070255', '49418', 26, 'shonu', '2025-01-17 21:15:01'),
(7, '20250117070256', '02141', 8, 'shonu', '2025-01-17 21:20:01'),
(8, '20250117070257', '88202', 20, 'shonu', '2025-01-17 21:25:02'),
(9, '20250117070258', '75492', 27, 'shonu', '2025-01-17 21:30:04'),
(10, '20250117070259', '09398', 29, 'shonu', '2025-01-17 21:35:02'),
(11, '20250117070260', '74535', 24, 'shonu', '2025-01-17 21:40:02'),
(12, '20250117070261', '42327', 18, 'shonu', '2025-01-17 21:45:01'),
(13, '20250117070262', '99741', 30, 'shonu', '2025-01-17 21:50:01'),
(14, '20250117070263', '03605', 14, 'shonu', '2025-01-17 21:55:01'),
(15, '20250117070264', '09507', 21, 'shonu', '2025-01-17 22:00:02'),
(16, '20250117070265', '50433', 15, 'shonu', '2025-01-17 22:05:01'),
(17, '20250117070266', '46285', 25, 'shonu', '2025-01-17 22:10:02'),
(18, '20250117070267', '77335', 25, 'shonu', '2025-01-17 22:15:01'),
(19, '20250117070268', '09071', 17, 'shonu', '2025-01-17 22:20:02'),
(20, '20250117070269', '85690', 28, 'shonu', '2025-01-17 22:25:02');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_aidudi_phalitansa_zehn`
--

CREATE TABLE `gellaluhogiondu_aidudi_phalitansa_zehn` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` varchar(255) NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_aidudi_phalitansa_zehn`
--

INSERT INTO `gellaluhogiondu_aidudi_phalitansa_zehn` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117080126', '03253', 13, 'shonu', '2025-01-17 21:00:02'),
(2, '20250117080127', '12968', 26, 'shonu', '2025-01-17 21:10:02'),
(3, '20250117080128', '42684', 24, 'shonu', '2025-01-17 21:20:01'),
(4, '20250117080129', '81386', 26, 'shonu', '2025-01-17 21:30:04'),
(5, '20250117080130', '30479', 23, 'shonu', '2025-01-17 21:40:02'),
(6, '20250117080131', '02889', 27, 'shonu', '2025-01-17 21:50:01'),
(7, '20250117080132', '91188', 27, 'shonu', '2025-01-17 22:00:02'),
(8, '20250117080133', '07151', 14, 'shonu', '2025-01-17 22:10:02'),
(9, '20250117080134', '69185', 29, 'shonu', '2025-01-17 22:20:02'),
(10, '20250117080135', '42150', 12, 'shonu', '2025-01-17 22:30:04'),
(11, '20250117080136', '50208', 15, 'shonu', '2025-01-17 22:40:02'),
(12, '20250117080137', '76491', 27, 'shonu', '2025-01-17 22:50:01'),
(13, '20250117080138', '99931', 31, 'shonu', '2025-01-17 23:00:02'),
(14, '20250117080139', '53004', 12, 'shonu', '2025-01-17 23:10:02'),
(15, '20250117080140', '18758', 29, 'shonu', '2025-01-17 23:20:02'),
(16, '20250117080141', '37619', 26, 'shonu', '2025-01-17 23:30:04'),
(17, '20250117080142', '52637', 23, 'shonu', '2025-01-17 23:40:01'),
(18, '20250117080143', '21673', 19, 'shonu', '2025-01-17 23:50:02'),
(19, '20250117080144', '06887', 29, 'shonu', '2025-01-18 00:00:03'),
(20, '20250118080001', '04975', 25, 'shonu', '2025-01-18 00:10:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_kemeru_phalitansa`
--

CREATE TABLE `gellaluhogiondu_kemeru_phalitansa` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_kemeru_phalitansa`
--

INSERT INTO `gellaluhogiondu_kemeru_phalitansa` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117091248', 331, 7, 'shonu', '2025-01-17 20:48:01'),
(2, '20250117091249', 652, 13, 'shonu', '2025-01-17 20:49:01'),
(3, '20250117091250', 564, 15, 'shonu', '2025-01-17 20:50:02'),
(4, '20250117091251', 616, 13, 'shonu', '2025-01-17 20:51:02'),
(5, '20250117091252', 333, 9, 'shonu', '2025-01-17 20:52:01'),
(6, '20250117091253', 666, 18, 'shonu', '2025-01-17 20:53:01'),
(7, '20250117091254', 662, 14, 'shonu', '2025-01-17 20:54:02'),
(8, '20250117091255', 633, 12, 'shonu', '2025-01-17 20:55:01'),
(9, '20250117091256', 223, 7, 'shonu', '2025-01-17 20:56:01'),
(10, '20250117091257', 421, 7, 'shonu', '2025-01-17 20:57:02'),
(11, '20250117091258', 234, 9, 'shonu', '2025-01-17 20:58:02'),
(12, '20250117091259', 243, 9, 'shonu', '2025-01-17 20:59:02'),
(13, '20250117091260', 341, 8, 'shonu', '2025-01-17 21:00:01'),
(14, '20250117091261', 635, 14, 'shonu', '2025-01-17 21:01:01'),
(15, '20250117091262', 663, 15, 'shonu', '2025-01-17 21:02:01'),
(16, '20250117091263', 414, 9, 'shonu', '2025-01-17 21:03:01'),
(17, '20250117091264', 156, 12, 'shonu', '2025-01-17 21:04:01'),
(18, '20250117091265', 511, 7, 'shonu', '2025-01-17 21:05:02'),
(19, '20250117091266', 465, 15, 'shonu', '2025-01-17 21:06:01'),
(20, '20250117091267', 533, 11, 'shonu', '2025-01-17 21:07:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_kemeru_phalitansa_drei`
--

CREATE TABLE `gellaluhogiondu_kemeru_phalitansa_drei` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_kemeru_phalitansa_drei`
--

INSERT INTO `gellaluhogiondu_kemeru_phalitansa_drei` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100417', 216, 9, 'shonu', '2025-01-17 20:51:02'),
(2, '20250117100418', 134, 8, 'shonu', '2025-01-17 20:54:01'),
(3, '20250117100419', 235, 10, 'shonu', '2025-01-17 20:57:02'),
(4, '20250117100420', 523, 10, 'shonu', '2025-01-17 21:00:02'),
(5, '20250117100421', 123, 6, 'shonu', '2025-01-17 21:03:01'),
(6, '20250117100422', 541, 10, 'shonu', '2025-01-17 21:06:01'),
(7, '20250117100423', 556, 16, 'shonu', '2025-01-17 21:09:02'),
(8, '20250117100424', 244, 10, 'shonu', '2025-01-17 21:12:01'),
(9, '20250117100425', 154, 10, 'shonu', '2025-01-17 21:15:02'),
(10, '20250117100426', 662, 14, 'shonu', '2025-01-17 21:18:01'),
(11, '20250117100427', 516, 12, 'shonu', '2025-01-17 21:21:01'),
(12, '20250117100428', 622, 10, 'shonu', '2025-01-17 21:24:02'),
(13, '20250117100429', 326, 11, 'shonu', '2025-01-17 21:27:01'),
(14, '20250117100430', 655, 16, 'shonu', '2025-01-17 21:30:04'),
(15, '20250117100431', 621, 9, 'shonu', '2025-01-17 21:33:01'),
(16, '20250117100432', 425, 11, 'shonu', '2025-01-17 21:36:02'),
(17, '20250117100433', 646, 16, 'shonu', '2025-01-17 21:39:02'),
(18, '20250117100434', 125, 8, 'shonu', '2025-01-17 21:42:02'),
(19, '20250117100435', 154, 10, 'shonu', '2025-01-17 21:45:01'),
(20, '20250117100436', 654, 15, 'shonu', '2025-01-17 21:48:02');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_kemeru_phalitansa_funf`
--

CREATE TABLE `gellaluhogiondu_kemeru_phalitansa_funf` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_kemeru_phalitansa_funf`
--

INSERT INTO `gellaluhogiondu_kemeru_phalitansa_funf` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117110251', 515, 11, 'shonu', '2025-01-17 20:55:01'),
(2, '20250117110252', 164, 11, 'shonu', '2025-01-17 21:00:02'),
(3, '20250117110253', 662, 14, 'shonu', '2025-01-17 21:05:02'),
(4, '20250117110254', 543, 12, 'shonu', '2025-01-17 21:10:02'),
(5, '20250117110255', 456, 15, 'shonu', '2025-01-17 21:15:02'),
(6, '20250117110256', 323, 8, 'shonu', '2025-01-17 21:20:01'),
(7, '20250117110257', 541, 10, 'shonu', '2025-01-17 21:25:02'),
(8, '20250117110258', 412, 7, 'shonu', '2025-01-17 21:30:04'),
(9, '20250117110259', 651, 12, 'shonu', '2025-01-17 21:35:02'),
(10, '20250117110260', 643, 13, 'shonu', '2025-01-17 21:40:02'),
(11, '20250117110261', 645, 15, 'shonu', '2025-01-17 21:45:01'),
(12, '20250117110262', 452, 11, 'shonu', '2025-01-17 21:50:01'),
(13, '20250117110263', 332, 8, 'shonu', '2025-01-17 21:55:01'),
(14, '20250117110264', 115, 7, 'shonu', '2025-01-17 22:00:02'),
(15, '20250117110265', 623, 11, 'shonu', '2025-01-17 22:05:01'),
(16, '20250117110266', 516, 12, 'shonu', '2025-01-17 22:10:02'),
(17, '20250117110267', 261, 9, 'shonu', '2025-01-17 22:15:02'),
(18, '20250117110268', 466, 16, 'shonu', '2025-01-17 22:20:02'),
(19, '20250117110269', 661, 13, 'shonu', '2025-01-17 22:25:02'),
(20, '20250117110270', 314, 8, 'shonu', '2025-01-17 22:30:05');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_kemeru_phalitansa_zehn`
--

CREATE TABLE `gellaluhogiondu_kemeru_phalitansa_zehn` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_kemeru_phalitansa_zehn`
--

INSERT INTO `gellaluhogiondu_kemeru_phalitansa_zehn` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117120126', 666, 18, 'shonu', '2025-01-17 21:00:01'),
(2, '20250117120127', 642, 12, 'shonu', '2025-01-17 21:10:02'),
(3, '20250117120128', 336, 12, 'shonu', '2025-01-17 21:20:01'),
(4, '20250117120129', 511, 7, 'shonu', '2025-01-17 21:30:03'),
(5, '20250117120130', 156, 12, 'shonu', '2025-01-17 21:40:02'),
(6, '20250117120131', 345, 12, 'shonu', '2025-01-17 21:50:01'),
(7, '20250117120132', 612, 9, 'shonu', '2025-01-17 22:00:02'),
(8, '20250117120133', 536, 14, 'shonu', '2025-01-17 22:10:02'),
(9, '20250117120134', 345, 12, 'shonu', '2025-01-17 22:20:02'),
(10, '20250117120135', 516, 12, 'shonu', '2025-01-17 22:30:05'),
(11, '20250117120136', 133, 7, 'shonu', '2025-01-17 22:40:02'),
(12, '20250117120137', 466, 16, 'shonu', '2025-01-17 22:50:01'),
(13, '20250117120138', 235, 10, 'shonu', '2025-01-17 23:00:02'),
(14, '20250117120139', 333, 9, 'shonu', '2025-01-17 23:10:02'),
(15, '20250117120140', 313, 7, 'shonu', '2025-01-17 23:20:02'),
(16, '20250117120141', 214, 7, 'shonu', '2025-01-17 23:30:05'),
(17, '20250117120142', 122, 5, 'shonu', '2025-01-17 23:40:01'),
(18, '20250117120143', 365, 14, 'shonu', '2025-01-17 23:50:02'),
(19, '20250117120144', 164, 11, 'shonu', '2025-01-18 00:00:02'),
(20, '20250118120001', 165, 12, 'shonu', '2025-01-18 00:10:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_phalitansa`
--

CREATE TABLE `gellaluhogiondu_phalitansa` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_phalitansa`
--

INSERT INTO `gellaluhogiondu_phalitansa` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100010918', 79272, 2, 'red', 'shonu', '2025-01-17 20:48:01'),
(2, '20250117100010919', 36767, 7, 'green', 'shonu', '2025-01-17 20:49:01'),
(3, '20250117100010920', 23277, 7, 'green', 'shonu', '2025-01-17 20:50:02'),
(4, '20250117100010921', 26690, 0, 'red,violet', 'shonu', '2025-01-17 20:51:02'),
(5, '20250117100010922', 44796, 6, 'red', 'shonu', '2025-01-17 20:52:01'),
(6, '20250117100010923', 25846, 6, 'red', 'shonu', '2025-01-17 20:53:01'),
(7, '20250117100010924', 45517, 7, 'green', 'shonu', '2025-01-17 20:54:01'),
(8, '20250117100010925', 93582, 2, 'red', 'shonu', '2025-01-17 20:55:01'),
(9, '20250117100010926', 18216, 6, 'red', 'shonu', '2025-01-17 20:56:01'),
(10, '20250117100010927', 42676, 6, 'red', 'shonu', '2025-01-17 20:57:02'),
(11, '20250117100010928', 45593, 3, 'green', 'shonu', '2025-01-17 20:58:02'),
(12, '20250117100010929', 31413, 3, 'green', 'shonu', '2025-01-17 20:59:02'),
(13, '20250117100010930', 95882, 2, 'red', 'shonu', '2025-01-17 21:00:01'),
(14, '20250117100010931', 44848, 8, 'red', 'shonu', '2025-01-17 21:01:01'),
(15, '20250117100010932', 56633, 3, 'green', 'shonu', '2025-01-17 21:02:01'),
(16, '20250117100010933', 26452, 2, 'red', 'shonu', '2025-01-17 21:03:01'),
(17, '20250117100010934', 26556, 6, 'red', 'shonu', '2025-01-17 21:04:02'),
(18, '20250117100010935', 76688, 8, 'red', 'shonu', '2025-01-17 21:05:02'),
(19, '20250117100010936', 99384, 4, 'red', 'shonu', '2025-01-17 21:06:01'),
(20, '20250117100010937', 83850, 0, 'red,violet', 'shonu', '2025-01-17 21:07:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_phalitansa_drei`
--

CREATE TABLE `gellaluhogiondu_phalitansa_drei` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_phalitansa_drei`
--

INSERT INTO `gellaluhogiondu_phalitansa_drei` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100020307', 45224, 4, 'red', 'shonu', '2025-01-17 20:51:02'),
(2, '20250117100020308', 72588, 8, 'red', 'shonu', '2025-01-17 20:54:01'),
(3, '20250117100020309', 15818, 8, 'red', 'shonu', '2025-01-17 20:57:02'),
(4, '20250117100020310', 57764, 4, 'red', 'shonu', '2025-01-17 21:00:02'),
(5, '20250117100020311', 86529, 9, 'green', 'shonu', '2025-01-17 21:03:01'),
(6, '20250117100020312', 93155, 5, 'green,violet', 'shonu', '2025-01-17 21:06:01'),
(7, '20250117100020313', 95868, 8, 'red', 'shonu', '2025-01-17 21:09:02'),
(8, '20250117100020314', 85459, 9, 'green', 'shonu', '2025-01-17 21:12:01'),
(9, '20250117100020315', 44828, 8, 'red', 'shonu', '2025-01-17 21:15:02'),
(10, '20250117100020316', 94774, 4, 'red', 'shonu', '2025-01-17 21:18:01'),
(11, '20250117100020317', 74246, 6, 'red', 'shonu', '2025-01-17 21:21:01'),
(12, '20250117100020318', 61125, 5, 'green,violet', 'shonu', '2025-01-17 21:24:02'),
(13, '20250117100020319', 29597, 7, 'green', 'shonu', '2025-01-17 21:27:01'),
(14, '20250117100020320', 54764, 4, 'red', 'shonu', '2025-01-17 21:30:02'),
(15, '20250117100020321', 87729, 9, 'green', 'shonu', '2025-01-17 21:33:01'),
(16, '20250117100020322', 12871, 1, 'green', 'shonu', '2025-01-17 21:36:02'),
(17, '20250117100020323', 42723, 3, 'green', 'shonu', '2025-01-17 21:39:02'),
(18, '20250117100020324', 19447, 7, 'green', 'shonu', '2025-01-17 21:42:02'),
(19, '20250117100020325', 53898, 8, 'red', 'shonu', '2025-01-17 21:45:01'),
(20, '20250117100020326', 38228, 8, 'red', 'shonu', '2025-01-17 21:48:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_phalitansa_funf`
--

CREATE TABLE `gellaluhogiondu_phalitansa_funf` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_phalitansa_funf`
--

INSERT INTO `gellaluhogiondu_phalitansa_funf` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100030185', 24372, 2, 'red', 'shonu', '2025-01-17 20:55:01'),
(2, '20250117100030186', 15339, 9, 'green', 'shonu', '2025-01-17 21:00:02'),
(3, '20250117100030187', 82915, 5, 'green,violet', 'shonu', '2025-01-17 21:05:02'),
(4, '20250117100030188', 93662, 2, 'red', 'shonu', '2025-01-17 21:10:02'),
(5, '20250117100030189', 78236, 6, 'red', 'shonu', '2025-01-17 21:15:02'),
(6, '20250117100030190', 38828, 8, 'red', 'shonu', '2025-01-17 21:20:02'),
(7, '20250117100030191', 71294, 4, 'red', 'shonu', '2025-01-17 21:25:02'),
(8, '20250117100030192', 81319, 9, 'green', 'shonu', '2025-01-17 21:30:03'),
(9, '20250117100030193', 65635, 5, 'green,violet', 'shonu', '2025-01-17 21:35:02'),
(10, '20250117100030194', 28656, 6, 'red', 'shonu', '2025-01-17 21:40:02'),
(11, '20250117100030195', 51291, 1, 'green', 'shonu', '2025-01-17 21:45:01'),
(12, '20250117100030196', 41253, 3, 'green', 'shonu', '2025-01-17 21:50:01'),
(13, '20250117100030197', 83117, 7, 'green', 'shonu', '2025-01-17 21:55:01'),
(14, '20250117100030198', 54535, 5, 'green,violet', 'shonu', '2025-01-17 22:00:02'),
(15, '20250117100030199', 49863, 3, 'green', 'shonu', '2025-01-17 22:05:01'),
(16, '20250117100030200', 64344, 4, 'red', 'shonu', '2025-01-17 22:10:02'),
(17, '20250117100030201', 94229, 9, 'green', 'shonu', '2025-01-17 22:15:01'),
(18, '20250117100030202', 59947, 7, 'green', 'shonu', '2025-01-17 22:20:02'),
(19, '20250117100030203', 81851, 1, 'green', 'shonu', '2025-01-17 22:25:02'),
(20, '20250117100030204', 68553, 3, 'green', 'shonu', '2025-01-17 22:30:05');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_phalitansa_zehn`
--

CREATE TABLE `gellaluhogiondu_phalitansa_zehn` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_phalitansa_zehn`
--

INSERT INTO `gellaluhogiondu_phalitansa_zehn` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '20250117100051834', 27719, 9, 'green', 'shonu', '2025-01-17 20:47:01'),
(2, '20250117100051835', 11956, 6, 'red', 'shonu', '2025-01-17 20:47:01'),
(3, '20250117100051836', 55532, 2, 'red', 'shonu', '2025-01-17 20:47:31'),
(4, '20250117100051837', 33896, 6, 'red', 'shonu', '2025-01-17 20:48:01'),
(5, '20250117100051838', 92928, 8, 'red', 'shonu', '2025-01-17 20:48:01'),
(6, '20250117100051839', 53785, 5, 'green,violet', 'shonu', '2025-01-17 20:48:31'),
(7, '20250117100051840', 78893, 3, 'green', 'shonu', '2025-01-17 20:49:01'),
(8, '20250117100051841', 46265, 5, 'green,violet', 'shonu', '2025-01-17 20:49:01'),
(9, '20250117100051842', 15579, 9, 'green', 'shonu', '2025-01-17 20:49:31'),
(10, '20250117100051843', 92295, 5, 'green,violet', 'shonu', '2025-01-17 20:50:02'),
(11, '20250117100051844', 78146, 6, 'red', 'shonu', '2025-01-17 20:50:02'),
(12, '20250117100051845', 84152, 2, 'red', 'shonu', '2025-01-17 20:50:31'),
(13, '20250117100051846', 96149, 9, 'green', 'shonu', '2025-01-17 20:51:02'),
(14, '20250117100051847', 53971, 1, 'green', 'shonu', '2025-01-17 20:51:02'),
(15, '20250117100051848', 47961, 1, 'green', 'shonu', '2025-01-17 20:51:32'),
(16, '20250117100051849', 87131, 1, 'green', 'shonu', '2025-01-17 20:52:01'),
(17, '20250117100051850', 43790, 0, 'red,violet', 'shonu', '2025-01-17 20:52:01'),
(18, '20250117100051851', 29221, 1, 'green', 'shonu', '2025-01-17 20:52:31'),
(19, '20250117100051852', 34121, 1, 'green', 'shonu', '2025-01-17 20:53:01'),
(20, '20250117100051853', 58266, 6, 'red', 'shonu', '2025-01-17 20:53:01');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_trx`
--

CREATE TABLE `gellaluhogiondu_trx` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `bh` varchar(255) NOT NULL DEFAULT 'wait',
  `hash` varchar(255) NOT NULL DEFAULT 'wait',
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_trx`
--

INSERT INTO `gellaluhogiondu_trx` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `bh`, `hash`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '', 8, 8, 'fallback', '', '00000000040b48037d8568c1f33e638984d51498df25c5445fb9e849e95e698f', 'uncensored', '2025-01-17 20:47:02'),
(2, '20250117103010918', 9, 9, 'fallback', '68825221', '00000000041a308555f96dff06c9bbec3794a5474db391c24820eaca8ece82c9', 'uncensored', '2025-01-17 20:47:54'),
(3, '20250117103010919', 4, 4, 'fallback', '68825241', '00000000041a3099f17e8145a1c318d6b983d79b7f5ab998ca0b18e618c54ee4', 'uncensored', '2025-01-17 20:48:54'),
(4, '20250117103010920', 9, 9, 'fallback', '68825261', '00000000041a30ad929bc232af2be590e48bf77a4228b2933ac67c6d4cb62459', 'uncensored', '2025-01-17 20:49:54'),
(5, '20250117103010921', 1, 1, 'fallback', '68825281', '00000000041a30c12c3f3c818dca5f036e2daf8bfb64731088d554df2366d581', 'uncensored', '2025-01-17 20:50:54'),
(6, '20250117103010922', 9, 9, 'fallback', '68825301', '00000000041a30d5ab99bcedd9998cd44bc8a65dead749e6e27cee3665fefd9d', 'uncensored', '2025-01-17 20:51:54'),
(7, '20250117103010923', 8, 8, 'fallback', '68825321', '00000000041a30e9c1ea81d004c6bf82d495553bf611d6eea98cf53fefd7e18a', 'uncensored', '2025-01-17 20:52:54'),
(8, '20250117103010924', 0, 0, 'fallback', '68825341', '00000000041a30fd8f994d4c02e406adf682cb814df394d5630090661550ad70', 'uncensored', '2025-01-17 20:53:54'),
(9, '20250117103010925', 0, 0, 'fallback', '68825361', '00000000041a311107b85ce90fb81d2fc126e708d42072053f2e347958060dbf', 'uncensored', '2025-01-17 20:54:54'),
(10, '20250117103010926', 2, 2, 'fallback', '68825381', '00000000041a3125a634a13b427ea4fb5191d941ac4c44744d898b65a8555132', 'uncensored', '2025-01-17 20:55:54'),
(11, '20250117103010927', 9, 9, 'fallback', '68825401', '00000000041a31392a10c0e4cd0a160805c91a1dd98c2095a27be4b7391acc9b', 'uncensored', '2025-01-17 20:56:54'),
(12, '20250117103010928', 4, 4, 'fallback', '68825421', '00000000041a314d874b69b252e51e3dee8e183c1d1c9fac1fa9f183e026eee4', 'uncensored', '2025-01-17 20:57:54'),
(13, '20250117103010929', 1, 1, 'fallback', '68825441', '00000000041a316180dd68bfe7120a5300e95a2dc2347c39289ba0ee70c04c51', 'uncensored', '2025-01-17 20:58:54'),
(14, '20250117103010930', 2, 2, 'fallback', '68825461', '00000000041a31756332331a9eecf0c929e68703689980f4465f0b651a9f382e', 'uncensored', '2025-01-17 20:59:54'),
(15, '20250117103010931', 2, 2, 'fallback', '68825481', '00000000041a31897b797d9c6dac538c9b644bb7742a1c3b90a22d4e9d1f1302', 'uncensored', '2025-01-17 21:00:54'),
(16, '20250117103010932', 6, 6, 'fallback', '68825501', '00000000041a319d59df333c016f62ea9bff7f2d0dbc6719d80f8b969f53176e', 'uncensored', '2025-01-17 21:01:54'),
(17, '20250117103010933', 8, 8, 'fallback', '68825521', '00000000041a31b1a59d81a2c581dc1fdf39e07727f8aa3c6b514b463518398b', 'uncensored', '2025-01-17 21:02:54'),
(18, '20250117103010934', 8, 8, 'fallback', '68825541', '00000000041a31c53fb6d9f4fa6981e6146ca97c14c846c5ce5fdb421f9778cd', 'uncensored', '2025-01-17 21:03:54'),
(19, '20250117103010935', 2, 2, 'fallback', '68825561', '00000000041a31d991b7337a24766db812e6bde9c0126b3f019b099e074c81b2', 'uncensored', '2025-01-17 21:04:54'),
(20, '20250117103010936', 8, 8, 'fallback', '68825581', '00000000041a31ed8ab6ffcba0acf0931d3e3694df4cbf847c24d9adafae708f', 'uncensored', '2025-01-17 21:05:54');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_trx3`
--

CREATE TABLE `gellaluhogiondu_trx3` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `bh` varchar(255) NOT NULL DEFAULT 'wait',
  `hash` varchar(255) NOT NULL DEFAULT 'wait',
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_trx3`
--

INSERT INTO `gellaluhogiondu_trx3` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `bh`, `hash`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '', 6, 6, 'fallback', '', '00000000040b480380a39c95ec9aa8bbf5bc82b3ea46f8889933dad6bf756ceb', 'uncensored', '2025-01-17 20:48:02'),
(2, '20250117103020307', 1, 1, 'fallback', '68825281', '00000000041a30c12c3f3c818dca5f036e2daf8bfb64731088d554df2366d581', 'uncensored', '2025-01-17 20:50:54'),
(3, '20250117103020308', 0, 0, 'fallback', '68825341', '00000000041a30fd8f994d4c02e406adf682cb814df394d5630090661550ad70', 'uncensored', '2025-01-17 20:53:54'),
(4, '20250117103020309', 9, 9, 'fallback', '68825401', '00000000041a31392a10c0e4cd0a160805c91a1dd98c2095a27be4b7391acc9b', 'uncensored', '2025-01-17 20:56:54'),
(5, '20250117103020310', 2, 2, 'fallback', '68825461', '00000000041a31756332331a9eecf0c929e68703689980f4465f0b651a9f382e', 'uncensored', '2025-01-17 20:59:54'),
(6, '20250117103020311', 8, 8, 'fallback', '68825521', '00000000041a31b1a59d81a2c581dc1fdf39e07727f8aa3c6b514b463518398b', 'uncensored', '2025-01-17 21:02:54'),
(7, '20250117103020312', 8, 8, 'fallback', '68825581', '00000000041a31ed8ab6ffcba0acf0931d3e3694df4cbf847c24d9adafae708f', 'uncensored', '2025-01-17 21:05:54'),
(8, '20250117103020313', 2, 2, 'fallback', '68825641', '00000000041a3229c729f99968df1b69edea8931b34a2c3524c75ba399fb42f2', 'uncensored', '2025-01-17 21:08:54'),
(9, '20250117103020314', 7, 7, 'fallback', '68825701', '00000000041a3265d9bc2af4ee52a2ebba2b5cd147eb3e82fd4f9c2dd336757f', 'uncensored', '2025-01-17 21:11:54'),
(10, '20250117103020315', 0, 0, 'fallback', '68825761', '00000000041a32a1adff37fc78d805f35ac4ed9f6972f053db6104af6a72cb0c', 'uncensored', '2025-01-17 21:14:54'),
(11, '20250117103020316', 6, 6, 'fallback', '68825821', '00000000041a32dd80c50a589ed4056544bac6291d8b328481d9b7a6d5bb936d', 'uncensored', '2025-01-17 21:17:54'),
(12, '20250117103020317', 5, 5, 'fallback', '68825881', '00000000041a3319eeec5c7c81c814508c9df5e92006bdfd25069d326bc434e5', 'uncensored', '2025-01-17 21:20:54'),
(13, '20250117103020318', 3, 3, 'fallback', '68825941', '00000000041a3355f631e554a22ddd3894b2f3426818477aad3e5f0e076bb9e3', 'uncensored', '2025-01-17 21:23:54'),
(14, '20250117103020319', 7, 7, 'fallback', '68826001', '00000000041a3391730580d751368c33ab43780a7cef4b058959523e03f7efaf', 'uncensored', '2025-01-17 21:26:54'),
(15, '20250117103020320', 6, 6, 'fallback', '68826061', '00000000041a33cd14107d01261fb79092b66d80cab73b5688d30b78d82956bc', 'uncensored', '2025-01-17 21:29:54'),
(16, '20250117103020321', 4, 4, 'fallback', '68826122', '00000000041a340a2010e0b34d30fbf7fe887a7cd4c5184ef41df9fac386fdb4', 'uncensored', '2025-01-17 21:32:57'),
(17, '20250117103020322', 2, 2, 'fallback', '68826181', '00000000041a344552f1d9c9cda5d631a88423d67a77aab72070e145821ce782', 'uncensored', '2025-01-17 21:35:54'),
(18, '20250117103020323', 2, 2, 'fallback', '68826241', '00000000041a348111e566306437a7c390561fd2c5a89a3f13574e7e9651d2dd', 'uncensored', '2025-01-17 21:38:54'),
(19, '20250117103020324', 2, 2, 'fallback', '68826301', '00000000041a34bda5c1159c1316d6014984117da9bf4130fd42b49d0b090ab2', 'uncensored', '2025-01-17 21:41:54'),
(20, '20250117103020325', 9, 9, 'fallback', '68826361', '00000000041a34f978d02b32c86214542538feea810c5fe576df98c849e73459', 'uncensored', '2025-01-17 21:44:54');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_trx5`
--

CREATE TABLE `gellaluhogiondu_trx5` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `bh` varchar(255) NOT NULL DEFAULT 'wait',
  `hash` varchar(255) NOT NULL DEFAULT 'wait',
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_trx5`
--

INSERT INTO `gellaluhogiondu_trx5` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `bh`, `hash`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '', 8, 8, 'fallback', '', '00000000040b480342c59eb7f749a008f3cb7e618151d9284cbe3143f13ac088', 'uncensored', '2025-01-17 20:50:02'),
(2, '20250117103030185', 0, 0, 'fallback', '68825361', '00000000041a311107b85ce90fb81d2fc126e708d42072053f2e347958060dbf', 'uncensored', '2025-01-17 20:54:54'),
(3, '20250117103030186', 2, 2, 'fallback', '68825461', '00000000041a31756332331a9eecf0c929e68703689980f4465f0b651a9f382e', 'uncensored', '2025-01-17 20:59:54'),
(4, '20250117103030187', 2, 2, 'fallback', '68825561', '00000000041a31d991b7337a24766db812e6bde9c0126b3f019b099e074c81b2', 'uncensored', '2025-01-17 21:04:54'),
(5, '20250117103030188', 2, 2, 'fallback', '68825661', '00000000041a323d60d8a231cc1df4bd46ae6ac0ad9bb25d3f5b7aafac75ed62', 'uncensored', '2025-01-17 21:09:54'),
(6, '20250117103030189', 0, 0, 'fallback', '68825761', '00000000041a32a1adff37fc78d805f35ac4ed9f6972f053db6104af6a72cb0c', 'uncensored', '2025-01-17 21:14:54'),
(7, '20250117103030190', 4, 4, 'fallback', '68825861', '00000000041a3305a0f4593b4eda21ce194724631149d001dfd12d5461b5f654', 'uncensored', '2025-01-17 21:19:54'),
(8, '20250117103030191', 5, 5, 'fallback', '68825961', '00000000041a3369b4c442bc1dad639ac48d1be4b35436a3360b57232cae35dc', 'uncensored', '2025-01-17 21:24:54'),
(9, '20250117103030192', 6, 6, 'fallback', '68826061', '00000000041a33cd14107d01261fb79092b66d80cab73b5688d30b78d82956bc', 'uncensored', '2025-01-17 21:29:54'),
(10, '20250117103030193', 1, 1, 'fallback', '68826162', '00000000041a3432a2bba9e8cb98829b9900ab3a7c8e56b87b2d8d6b48fac4b1', 'uncensored', '2025-01-17 21:34:57'),
(11, '20250117103030194', 6, 6, 'fallback', '68826261', '00000000041a3495db995563d9cfefe10bf3b7ec8654642b87142577cc5f6ccb', 'uncensored', '2025-01-17 21:39:54'),
(12, '20250117103030195', 9, 9, 'fallback', '68826361', '00000000041a34f978d02b32c86214542538feea810c5fe576df98c849e73459', 'uncensored', '2025-01-17 21:44:54'),
(13, '20250117103030196', 3, 3, 'fallback', '68826461', '00000000041a355d38e1df55d1d776a95e2468182a2a61d09be8992547c143dc', 'uncensored', '2025-01-17 21:49:54'),
(14, '20250117103030197', 1, 1, 'fallback', '68826561', '00000000041a35c152ce63fb069d8a1234794004a67866119f0bb7899380e381', 'uncensored', '2025-01-17 21:54:54'),
(15, '20250117103030198', 9, 9, 'fallback', '68826661', '00000000041a3625d5e47ffdf9039f1d4dbba35ef85bef3e77827939fcc59829', 'uncensored', '2025-01-17 21:59:54'),
(16, '20250117103030199', 4, 4, 'fallback', '68826761', '00000000041a36898344bcc7fd352c5139cd5e00e7b6d81b026c00f3d231484d', 'uncensored', '2025-01-17 22:04:54'),
(17, '20250117103030200', 1, 1, 'fallback', '68826861', '00000000041a36ed0c5ac22bd6538886e5118287b9f174f3020c19e37d3791eb', 'uncensored', '2025-01-17 22:09:54'),
(18, '20250117103030201', 2, 2, 'fallback', '68826961', '00000000041a375184074bd56a759a4dbdd48cbb2eea38ee90503ca2bf2e17b2', 'uncensored', '2025-01-17 22:14:54'),
(19, '20250117103030202', 8, 8, 'fallback', '68827061', '00000000041a37b5da8925dfcc50bf5378f0a2e8c2c1c1ca831b63ff2f9f8bca', 'uncensored', '2025-01-17 22:19:54'),
(20, '20250117103030203', 0, 0, 'fallback', '68827161', '00000000041a3819e31c7e1cd2e6df8b5cacd4e43dc6571b93281f34eb355880', 'uncensored', '2025-01-17 22:24:54');

-- --------------------------------------------------------

--
-- Table structure for table `gellaluhogiondu_trx10`
--

CREATE TABLE `gellaluhogiondu_trx10` (
  `shonu` int(11) NOT NULL,
  `kalaparichaya` varchar(300) NOT NULL,
  `bele` float NOT NULL,
  `phalitansa` int(11) NOT NULL,
  `banna` varchar(100) NOT NULL,
  `bh` varchar(255) NOT NULL DEFAULT 'wait',
  `hash` varchar(255) NOT NULL DEFAULT 'wait',
  `phalitansadaprakara` varchar(50) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gellaluhogiondu_trx10`
--

INSERT INTO `gellaluhogiondu_trx10` (`shonu`, `kalaparichaya`, `bele`, `phalitansa`, `banna`, `bh`, `hash`, `phalitansadaprakara`, `dinankavannuracisi`) VALUES
(1, '', 8, 8, 'fallback', '', '00000000040b48033d03b7b882c734c366d37669a721a4e02a592ea4081ff18d', 'uncensored', '2025-01-17 20:50:02'),
(2, '20250117103040093', 2, 2, 'fallback', '68825461', '00000000041a31756332331a9eecf0c929e68703689980f4465f0b651a9f382e', 'uncensored', '2025-01-17 20:59:54'),
(3, '20250117103040094', 2, 2, 'fallback', '68825661', '00000000041a323d60d8a231cc1df4bd46ae6ac0ad9bb25d3f5b7aafac75ed62', 'uncensored', '2025-01-17 21:09:54'),
(4, '20250117103040095', 4, 4, 'fallback', '68825861', '00000000041a3305a0f4593b4eda21ce194724631149d001dfd12d5461b5f654', 'uncensored', '2025-01-17 21:19:54'),
(5, '20250117103040096', 6, 6, 'fallback', '68826061', '00000000041a33cd14107d01261fb79092b66d80cab73b5688d30b78d82956bc', 'uncensored', '2025-01-17 21:29:54'),
(6, '20250117103040097', 6, 6, 'fallback', '68826261', '00000000041a3495db995563d9cfefe10bf3b7ec8654642b87142577cc5f6ccb', 'uncensored', '2025-01-17 21:39:54'),
(7, '20250117103040098', 3, 3, 'fallback', '68826461', '00000000041a355d38e1df55d1d776a95e2468182a2a61d09be8992547c143dc', 'uncensored', '2025-01-17 21:49:54'),
(8, '20250117103040099', 9, 9, 'fallback', '68826661', '00000000041a3625d5e47ffdf9039f1d4dbba35ef85bef3e77827939fcc59829', 'uncensored', '2025-01-17 21:59:54'),
(9, '20250117103040100', 1, 1, 'fallback', '68826861', '00000000041a36ed0c5ac22bd6538886e5118287b9f174f3020c19e37d3791eb', 'uncensored', '2025-01-17 22:09:54'),
(10, '20250117103040101', 8, 8, 'fallback', '68827061', '00000000041a37b5da8925dfcc50bf5378f0a2e8c2c1c1ca831b63ff2f9f8bca', 'uncensored', '2025-01-17 22:19:54'),
(11, '20250117103040102', 7, 7, 'fallback', '68827261', '00000000041a387d48a2e13065bdbf1f106cd8b41ecf0b9e4067c669ed5c067d', 'uncensored', '2025-01-17 22:29:54'),
(12, '20250117103040103', 7, 7, 'fallback', '68827462', '00000000041a39469d65e1e622bc14cdf42590d00140cb548fe1774de9f0fb7f', 'uncensored', '2025-01-17 22:39:57'),
(13, '20250117103040104', 8, 8, 'fallback', '68827661', '00000000041a3a0d36d015c0c5bf7b7f7b6220594aaa8f4dfc13d74e825c88ba', 'uncensored', '2025-01-17 22:49:54'),
(14, '20250117103040105', 6, 6, 'fallback', '68827861', '00000000041a3ad5ba13db10f0a9df5a69688dda8748dbc404da4dad5d16d9b6', 'uncensored', '2025-01-17 22:59:54'),
(15, '20250117103040106', 1, 1, 'fallback', '68828061', '00000000041a3b9db020d4d5da76d3c48b63acb279f04140a63cf47ada7c2491', 'uncensored', '2025-01-17 23:09:54'),
(16, '20250117103040107', 3, 3, 'fallback', '68828261', '00000000041a3c65efab96546ec496a526129f4ef16d817f2e5128c825e92623', 'uncensored', '2025-01-17 23:19:54'),
(17, '20250117103040108', 2, 2, 'fallback', '68828461', '00000000041a3d2d3587ef5f16f919cc166932c12cf5d4bac36b5b6765d68792', 'uncensored', '2025-01-17 23:29:54'),
(18, '20250117103040109', 4, 4, 'fallback', '68828660', '00000000041a3df4dc765b1fd496046237ea66dad57eccf700103bf9ea0d1e4a', 'uncensored', '2025-01-17 23:39:57'),
(19, '20250117103040110', 3, 3, 'fallback', '68828859', '00000000041a3ebb0ef7e2c06eb8fad947a9b3f90e1b4f0e5191fa4b6beef1a3', 'uncensored', '2025-01-17 23:49:54'),
(20, '20250117103040111', 6, 6, 'fallback', '68829059', '00000000041a3f83f74c805fef2be136842cebc6ed901e427960ac21b49ece16', 'uncensored', '2025-01-17 23:59:54');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu`
--

CREATE TABLE `gelluonduhogu` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu`
--

INSERT INTO `gelluonduhogu` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306100010001', '2025-03-05 18:30:04'),
(2, '20250306100010002', '2025-03-05 18:31:02'),
(3, '20250306100010003', '2025-03-05 18:32:02'),
(4, '20250306100010004', '2025-03-05 18:33:02'),
(5, '20250306100010005', '2025-03-05 18:34:02'),
(6, '20250306100010006', '2025-03-05 18:35:03'),
(7, '20250306100010007', '2025-03-05 18:36:02'),
(8, '20250306100010008', '2025-03-05 18:37:02'),
(9, '20250306100010009', '2025-03-05 18:38:02'),
(10, '20250306100010010', '2025-03-05 18:39:02'),
(11, '20250306100010011', '2025-03-05 18:40:04'),
(12, '20250306100010012', '2025-03-05 18:41:02'),
(13, '20250306100010013', '2025-03-05 18:42:03'),
(14, '20250306100010014', '2025-03-05 18:43:02'),
(15, '20250306100010015', '2025-03-05 18:44:03'),
(16, '20250306100010016', '2025-03-05 18:45:03'),
(17, '20250306100010017', '2025-03-05 18:46:02'),
(18, '20250306100010018', '2025-03-05 18:47:02'),
(19, '20250306100010019', '2025-03-05 18:48:02'),
(20, '20250306100010020', '2025-03-05 18:49:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_aidudi`
--

CREATE TABLE `gelluonduhogu_aidudi` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_aidudi`
--

INSERT INTO `gelluonduhogu_aidudi` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250309102010001', '2025-03-09 04:50:08');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_aidudi_drei`
--

CREATE TABLE `gelluonduhogu_aidudi_drei` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_aidudi_drei`
--

INSERT INTO `gelluonduhogu_aidudi_drei` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306102020001', '2025-03-05 18:30:04'),
(2, '20250306102020002', '2025-03-05 18:33:02'),
(3, '20250306102020003', '2025-03-05 18:36:02'),
(4, '20250306102020004', '2025-03-05 18:39:02'),
(5, '20250306102020005', '2025-03-05 18:42:03'),
(6, '20250306102020006', '2025-03-05 18:45:03'),
(7, '20250306102020007', '2025-03-05 18:48:03'),
(8, '20250306102020008', '2025-03-05 18:51:03'),
(9, '20250306102020009', '2025-03-05 18:54:03'),
(10, '20250306102020010', '2025-03-05 18:57:02'),
(11, '20250306102020011', '2025-03-05 19:00:04'),
(12, '20250306102020012', '2025-03-05 19:03:03'),
(13, '20250306102020013', '2025-03-05 19:06:02'),
(14, '20250306102020014', '2025-03-05 19:09:02'),
(15, '20250306102020015', '2025-03-05 19:12:02'),
(16, '20250306102020016', '2025-03-05 19:15:03'),
(17, '20250306102020017', '2025-03-05 19:18:03'),
(18, '20250306102020018', '2025-03-05 19:21:02'),
(19, '20250306102020019', '2025-03-05 19:24:02'),
(20, '20250306102020020', '2025-03-05 19:27:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_aidudi_funf`
--

CREATE TABLE `gelluonduhogu_aidudi_funf` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_aidudi_funf`
--

INSERT INTO `gelluonduhogu_aidudi_funf` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306102030001', '2025-03-05 18:30:03'),
(2, '20250306102030002', '2025-03-05 18:35:03'),
(3, '20250306102030003', '2025-03-05 18:40:04'),
(4, '20250306102030004', '2025-03-05 18:45:03'),
(5, '20250306102030005', '2025-03-05 18:50:04'),
(6, '20250306102030006', '2025-03-05 18:55:03'),
(7, '20250306102030007', '2025-03-05 19:00:04'),
(8, '20250306102030008', '2025-03-05 19:05:03'),
(9, '20250306102030009', '2025-03-05 19:10:04'),
(10, '20250306102030010', '2025-03-05 19:15:03'),
(11, '20250306102030011', '2025-03-05 19:20:04'),
(12, '20250306102030012', '2025-03-05 19:25:03'),
(13, '20250306102030013', '2025-03-05 19:30:04'),
(14, '20250306102030014', '2025-03-05 19:35:03'),
(15, '20250306102030015', '2025-03-05 19:40:04'),
(16, '20250306102030016', '2025-03-05 19:45:03'),
(17, '20250306102030017', '2025-03-05 19:50:03'),
(18, '20250306102030018', '2025-03-05 19:55:02'),
(19, '20250306102030019', '2025-03-05 20:00:03'),
(20, '20250306102030020', '2025-03-05 20:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_aidudi_zehn`
--

CREATE TABLE `gelluonduhogu_aidudi_zehn` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_aidudi_zehn`
--

INSERT INTO `gelluonduhogu_aidudi_zehn` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306102040001', '2025-03-05 18:30:04'),
(2, '20250306102040002', '2025-03-05 18:40:04'),
(3, '20250306102040003', '2025-03-05 18:50:04'),
(4, '20250306102040004', '2025-03-05 19:00:04'),
(5, '20250306102040005', '2025-03-05 19:10:04'),
(6, '20250306102040006', '2025-03-05 19:20:04'),
(7, '20250306102040007', '2025-03-05 19:30:04'),
(8, '20250306102040008', '2025-03-05 19:40:04'),
(9, '20250306102040009', '2025-03-05 19:50:03'),
(10, '20250306102040010', '2025-03-05 20:00:03'),
(11, '20250306102040011', '2025-03-05 20:10:04'),
(12, '20250306102040012', '2025-03-05 20:20:04'),
(13, '20250306102040013', '2025-03-05 20:30:04'),
(14, '20250306102040014', '2025-03-05 20:40:03'),
(15, '20250306102040015', '2025-03-05 20:50:03'),
(16, '20250306102040016', '2025-03-05 21:00:03'),
(17, '20250306102040017', '2025-03-05 21:10:48'),
(18, '20250306102040018', '2025-03-05 21:20:03'),
(19, '20250306102040019', '2025-03-05 21:30:03'),
(20, '20250306102040020', '2025-03-05 21:40:03');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_drei`
--

CREATE TABLE `gelluonduhogu_drei` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_drei`
--

INSERT INTO `gelluonduhogu_drei` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306100020001', '2025-03-05 18:30:04'),
(2, '20250306100020002', '2025-03-05 18:33:02'),
(3, '20250306100020003', '2025-03-05 18:36:02'),
(4, '20250306100020004', '2025-03-05 18:39:02'),
(5, '20250306100020005', '2025-03-05 18:42:03'),
(6, '20250306100020006', '2025-03-05 18:45:03'),
(7, '20250306100020007', '2025-03-05 18:48:03'),
(8, '20250306100020008', '2025-03-05 18:51:03'),
(9, '20250306100020009', '2025-03-05 18:54:03'),
(10, '20250306100020010', '2025-03-05 18:57:02'),
(11, '20250306100020011', '2025-03-05 19:00:04'),
(12, '20250306100020012', '2025-03-05 19:03:03'),
(13, '20250306100020013', '2025-03-05 19:06:02'),
(14, '20250306100020014', '2025-03-05 19:09:02'),
(15, '20250306100020015', '2025-03-05 19:12:02'),
(16, '20250306100020016', '2025-03-05 19:15:03'),
(17, '20250306100020017', '2025-03-05 19:18:03'),
(18, '20250306100020018', '2025-03-05 19:21:02'),
(19, '20250306100020019', '2025-03-05 19:24:02'),
(20, '20250306100020020', '2025-03-05 19:27:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_funf`
--

CREATE TABLE `gelluonduhogu_funf` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_funf`
--

INSERT INTO `gelluonduhogu_funf` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306100030001', '2025-03-05 18:30:04'),
(2, '20250306100030002', '2025-03-05 18:35:03'),
(3, '20250306100030003', '2025-03-05 18:40:04'),
(4, '20250306100030004', '2025-03-05 18:45:03'),
(5, '20250306100030005', '2025-03-05 18:50:04'),
(6, '20250306100030006', '2025-03-05 18:55:03'),
(7, '20250306100030007', '2025-03-05 19:00:04'),
(8, '20250306100030008', '2025-03-05 19:05:03'),
(9, '20250306100030009', '2025-03-05 19:10:04'),
(10, '20250306100030010', '2025-03-05 19:15:03'),
(11, '20250306100030011', '2025-03-05 19:20:04'),
(12, '20250306100030012', '2025-03-05 19:25:03'),
(13, '20250306100030013', '2025-03-05 19:30:04'),
(14, '20250306100030014', '2025-03-05 19:35:03'),
(15, '20250306100030015', '2025-03-05 19:40:04'),
(16, '20250306100030016', '2025-03-05 19:45:03'),
(17, '20250306100030017', '2025-03-05 19:50:03'),
(18, '20250306100030018', '2025-03-05 19:55:02'),
(19, '20250306100030019', '2025-03-05 20:00:04'),
(20, '20250306100030020', '2025-03-05 20:05:03');


-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_kemuru`
--

CREATE TABLE `gelluonduhogu_kemuru` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_kemuru`
--

INSERT INTO `gelluonduhogu_kemuru` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306101010001', '2025-03-05 18:30:04'),
(2, '20250306101010002', '2025-03-05 18:31:02'),
(3, '20250306101010003', '2025-03-05 18:32:02'),
(4, '20250306101010004', '2025-03-05 18:33:02'),
(5, '20250306101010005', '2025-03-05 18:34:02'),
(6, '20250306101010006', '2025-03-05 18:35:03'),
(7, '20250306101010007', '2025-03-05 18:36:02'),
(8, '20250306101010008', '2025-03-05 18:37:02'),
(9, '20250306101010009', '2025-03-05 18:38:02'),
(10, '20250306101010010', '2025-03-05 18:39:02'),
(11, '20250306101010011', '2025-03-05 18:40:04'),
(12, '20250306101010012', '2025-03-05 18:41:02'),
(13, '20250306101010013', '2025-03-05 18:42:03'),
(14, '20250306101010014', '2025-03-05 18:43:02'),
(15, '20250306101010015', '2025-03-05 18:44:03'),
(16, '20250306101010016', '2025-03-05 18:45:03'),
(17, '20250306101010017', '2025-03-05 18:46:02'),
(18, '20250306101010018', '2025-03-05 18:47:02'),
(19, '20250306101010019', '2025-03-05 18:48:03'),
(20, '20250306101010020', '2025-03-05 18:49:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_kemuru_drei`
--

CREATE TABLE `gelluonduhogu_kemuru_drei` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_kemuru_drei`
--

INSERT INTO `gelluonduhogu_kemuru_drei` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306101020001', '2025-03-05 18:30:04'),
(2, '20250306101020002', '2025-03-05 18:33:02'),
(3, '20250306101020003', '2025-03-05 18:36:02'),
(4, '20250306101020004', '2025-03-05 18:39:02'),
(5, '20250306101020005', '2025-03-05 18:42:03'),
(6, '20250306101020006', '2025-03-05 18:45:03'),
(7, '20250306101020007', '2025-03-05 18:48:03'),
(8, '20250306101020008', '2025-03-05 18:51:03'),
(9, '20250306101020009', '2025-03-05 18:54:03'),
(10, '20250306101020010', '2025-03-05 18:57:02'),
(11, '20250306101020011', '2025-03-05 19:00:04'),
(12, '20250306101020012', '2025-03-05 19:03:03'),
(13, '20250306101020013', '2025-03-05 19:06:02'),
(14, '20250306101020014', '2025-03-05 19:09:02'),
(15, '20250306101020015', '2025-03-05 19:12:02'),
(16, '20250306101020016', '2025-03-05 19:15:03'),
(17, '20250306101020017', '2025-03-05 19:18:03'),
(18, '20250306101020018', '2025-03-05 19:21:02'),
(19, '20250306101020019', '2025-03-05 19:24:02'),
(20, '20250306101020020', '2025-03-05 19:27:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_kemuru_funf`
--

CREATE TABLE `gelluonduhogu_kemuru_funf` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_kemuru_funf`
--

INSERT INTO `gelluonduhogu_kemuru_funf` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306101030001', '2025-03-05 18:30:04'),
(2, '20250306101030002', '2025-03-05 18:35:03'),
(3, '20250306101030003', '2025-03-05 18:40:03'),
(4, '20250306101030004', '2025-03-05 18:45:02'),
(5, '20250306101030005', '2025-03-05 18:50:04'),
(6, '20250306101030006', '2025-03-05 18:55:03'),
(7, '20250306101030007', '2025-03-05 19:00:03'),
(8, '20250306101030008', '2025-03-05 19:05:03'),
(9, '20250306101030009', '2025-03-05 19:10:04'),
(10, '20250306101030010', '2025-03-05 19:15:03'),
(11, '20250306101030011', '2025-03-05 19:20:03'),
(12, '20250306101030012', '2025-03-05 19:25:03'),
(13, '20250306101030013', '2025-03-05 19:30:04'),
(14, '20250306101030014', '2025-03-05 19:35:03'),
(15, '20250306101030015', '2025-03-05 19:40:04'),
(16, '20250306101030016', '2025-03-05 19:45:03'),
(17, '20250306101030017', '2025-03-05 19:50:03'),
(18, '20250306101030018', '2025-03-05 19:55:02'),
(19, '20250306101030019', '2025-03-05 20:00:03'),
(20, '20250306101030020', '2025-03-05 20:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_kemuru_zehn`
--

CREATE TABLE `gelluonduhogu_kemuru_zehn` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_kemuru_zehn`
--

INSERT INTO `gelluonduhogu_kemuru_zehn` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306101040001', '2025-03-05 18:30:04'),
(2, '20250306101040002', '2025-03-05 18:40:04'),
(3, '20250306101040003', '2025-03-05 18:50:04'),
(4, '20250306101040004', '2025-03-05 19:00:04'),
(5, '20250306101040005', '2025-03-05 19:10:04'),
(6, '20250306101040006', '2025-03-05 19:20:04'),
(7, '20250306101040007', '2025-03-05 19:30:04'),
(8, '20250306101040008', '2025-03-05 19:40:04'),
(9, '20250306101040009', '2025-03-05 19:50:03'),
(10, '20250306101040010', '2025-03-05 20:00:04'),
(11, '20250306101040011', '2025-03-05 20:10:04'),
(12, '20250306101040012', '2025-03-05 20:20:04'),
(13, '20250306101040013', '2025-03-05 20:30:04'),
(14, '20250306101040014', '2025-03-05 20:40:03'),
(15, '20250306101040015', '2025-03-05 20:50:03'),
(16, '20250306101040016', '2025-03-05 21:00:03'),
(17, '20250306101040017', '2025-03-05 21:10:48'),
(18, '20250306101040018', '2025-03-05 21:20:03'),
(19, '20250306101040019', '2025-03-05 21:30:03'),
(20, '20250306101040020', '2025-03-05 21:40:03');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_trx`
--

CREATE TABLE `gelluonduhogu_trx` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_trx`
--

INSERT INTO `gelluonduhogu_trx` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250117103010918', '2025-01-17 20:47:02'),
(2, '20250117103010919', '2025-01-17 20:48:02'),
(3, '20250117103010920', '2025-01-17 20:49:02'),
(4, '20250117103010921', '2025-01-17 20:50:02'),
(5, '20250117103010922', '2025-01-17 20:51:02'),
(6, '20250117103010923', '2025-01-17 20:52:01'),
(7, '20250117103010924', '2025-01-17 20:53:01'),
(8, '20250117103010925', '2025-01-17 20:54:02'),
(9, '20250117103010926', '2025-01-17 20:55:02'),
(10, '20250117103010927', '2025-01-17 20:56:02'),
(11, '20250117103010928', '2025-01-17 20:57:02'),
(12, '20250117103010929', '2025-01-17 20:58:02'),
(13, '20250117103010930', '2025-01-17 20:59:02'),
(14, '20250117103010931', '2025-01-17 21:00:02'),
(15, '20250117103010932', '2025-01-17 21:01:01'),
(16, '20250117103010933', '2025-01-17 21:02:02'),
(17, '20250117103010934', '2025-01-17 21:03:02'),
(18, '20250117103010935', '2025-01-17 21:04:02'),
(19, '20250117103010936', '2025-01-17 21:05:02'),
(20, '20250117103010937', '2025-01-17 21:06:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_trx3`
--

CREATE TABLE `gelluonduhogu_trx3` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_trx3`
--

INSERT INTO `gelluonduhogu_trx3` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250117103020307', '2025-01-17 20:48:02'),
(2, '20250117103020308', '2025-01-17 20:51:02'),
(3, '20250117103020309', '2025-01-17 20:54:02'),
(4, '20250117103020310', '2025-01-17 20:57:02'),
(5, '20250117103020311', '2025-01-17 21:00:02'),
(6, '20250117103020312', '2025-01-17 21:03:02'),
(7, '20250117103020313', '2025-01-17 21:06:02'),
(8, '20250117103020314', '2025-01-17 21:09:02'),
(9, '20250117103020315', '2025-01-17 21:12:02'),
(10, '20250117103020316', '2025-01-17 21:15:02'),
(11, '20250117103020317', '2025-01-17 21:18:01'),
(12, '20250117103020318', '2025-01-17 21:21:02'),
(13, '20250117103020319', '2025-01-17 21:24:02'),
(14, '20250117103020320', '2025-01-17 21:27:02'),
(15, '20250117103020321', '2025-01-17 21:30:04'),
(16, '20250117103020322', '2025-01-17 21:33:02'),
(17, '20250117103020323', '2025-01-17 21:36:02'),
(18, '20250117103020324', '2025-01-17 21:39:03'),
(19, '20250117103020325', '2025-01-17 21:42:03'),
(20, '20250117103020326', '2025-01-17 21:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_trx5`
--

CREATE TABLE `gelluonduhogu_trx5` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_trx5`
--

INSERT INTO `gelluonduhogu_trx5` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250117103030185', '2025-01-17 20:50:02'),
(2, '20250117103030186', '2025-01-17 20:55:02'),
(3, '20250117103030187', '2025-01-17 21:00:02'),
(4, '20250117103030188', '2025-01-17 21:05:02'),
(5, '20250117103030189', '2025-01-17 21:10:02'),
(6, '20250117103030190', '2025-01-17 21:15:02'),
(7, '20250117103030191', '2025-01-17 21:20:02'),
(8, '20250117103030192', '2025-01-17 21:25:02'),
(9, '20250117103030193', '2025-01-17 21:30:04'),
(10, '20250117103030194', '2025-01-17 21:35:02'),
(11, '20250117103030195', '2025-01-17 21:40:02'),
(12, '20250117103030196', '2025-01-17 21:45:02'),
(13, '20250117103030197', '2025-01-17 21:50:01'),
(14, '20250117103030198', '2025-01-17 21:55:02'),
(15, '20250117103030199', '2025-01-17 22:00:03'),
(16, '20250117103030200', '2025-01-17 22:05:02'),
(17, '20250117103030201', '2025-01-17 22:10:02'),
(18, '20250117103030202', '2025-01-17 22:15:02'),
(19, '20250117103030203', '2025-01-17 22:20:03'),
(20, '20250117103030204', '2025-01-17 22:25:02');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_trx10`
--

CREATE TABLE `gelluonduhogu_trx10` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_trx10`
--
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

INSERT INTO `gelluonduhogu_trx10` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250117103040093', '2025-01-17 20:50:02'),
(2, '20250117103040094', '2025-01-17 21:00:02'),
(3, '20250117103040095', '2025-01-17 21:10:03'),
(4, '20250117103040096', '2025-01-17 21:20:02'),
(5, '20250117103040097', '2025-01-17 21:30:03'),
(6, '20250117103040098', '2025-01-17 21:40:02'),
(7, '20250117103040099', '2025-01-17 21:50:02'),
(8, '20250117103040100', '2025-01-17 22:00:03'),
(9, '20250117103040101', '2025-01-17 22:10:02'),
(10, '20250117103040102', '2025-01-17 22:20:03'),
(11, '20250117103040103', '2025-01-17 22:30:04'),
(12, '20250117103040104', '2025-01-17 22:40:02'),
(13, '20250117103040105', '2025-01-17 22:50:02'),
(14, '20250117103040106', '2025-01-17 23:00:02'),
(15, '20250117103040107', '2025-01-17 23:10:03'),
(16, '20250117103040108', '2025-01-17 23:20:03'),
(17, '20250117103040109', '2025-01-17 23:30:05'),
(18, '20250117103040110', '2025-01-17 23:40:02'),
(19, '20250117103040111', '2025-01-17 23:50:02'),
(20, '20250118103040112', '2025-01-18 00:00:03');

-- --------------------------------------------------------

--
-- Table structure for table `gelluonduhogu_zehn`
--

CREATE TABLE `gelluonduhogu_zehn` (
  `kramasankhye` int(11) NOT NULL,
  `atadaaidi` varchar(500) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gelluonduhogu_zehn`
--

INSERT INTO `gelluonduhogu_zehn` (`kramasankhye`, `atadaaidi`, `dinankavannuracisi`) VALUES
(1, '20250306100050001', '2025-03-05 18:30:03'),
(2, '20250306100050002', '2025-03-05 18:30:03'),
(3, '20250306100050003', '2025-03-05 18:30:34'),
(4, '20250306100050004', '2025-03-05 18:31:02'),
(5, '20250306100050005', '2025-03-05 18:31:32'),
(6, '20250306100050006', '2025-03-05 18:32:02'),
(7, '20250306100050007', '2025-03-05 18:32:32'),
(8, '20250306100050008', '2025-03-05 18:33:02'),
(9, '20250306100050009', '2025-03-05 18:33:32'),
(10, '20250306100050010', '2025-03-05 18:34:02'),
(11, '20250306100050011', '2025-03-05 18:34:32'),
(12, '20250306100050012', '2025-03-05 18:35:04'),
(13, '20250306100050013', '2025-03-05 18:35:33'),
(14, '20250306100050014', '2025-03-05 18:36:02'),
(15, '20250306100050015', '2025-03-05 18:36:32'),
(16, '20250306100050016', '2025-03-05 18:37:03'),
(17, '20250306100050017', '2025-03-05 18:37:32'),
(18, '20250306100050018', '2025-03-05 18:38:02'),
(19, '20250306100050019', '2025-03-05 18:38:32'),
(20, '20250306100050020', '2025-03-05 18:39:03');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa`
--

CREATE TABLE `hastacalita_phalitansa` (
  `shonu` int(11) NOT NULL,
  `banna` varchar(300) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sankhye` int(11) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa`
--

INSERT INTO `hastacalita_phalitansa` (`shonu`, `banna`, `maulya`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '<span style=\"color:#f00;\">Red</span> + <span style=\"color:#C71585;\">Violet</span>', 'red+violet', 0, 0, '2024-02-01 00:00:00'),
(2, '<span style=\"color:#090;\">Green</span>', 'green', 1, 0, '2024-02-01 00:00:00'),
(3, '<span style=\"color:#f00;\">Red</span>', 'red', 2, 0, '2024-02-01 00:00:00'),
(4, '<span style=\"color:#090;\">Green</span>', 'green', 3, 0, '2024-02-01 00:00:00'),
(5, '<span style=\"color:#f00;\">Red</span>', 'red', 4, 0, '2024-02-01 00:00:00'),
(6, '<span style=\"color:#090;\">Green</span> + <span style=\"color:#C71585;\">Violet</span>', 'green+violet', 5, 0, '2024-02-01 00:00:00'),
(7, '<span style=\"color:#f00;\">Red</span>', 'red', 6, 0, '2024-02-01 00:00:00'),
(8, '<span style=\"color:#090;\">Green</span>', 'green', 7, 0, '2024-02-01 00:00:00'),
(9, '<span style=\"color:#f00;\">Red</span>', 'red', 8, 0, '2024-02-01 00:00:00'),
(10, '<span style=\"color:#090;\">Green</span>', 'green', 9, 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_aidudi`
--

CREATE TABLE `hastacalita_phalitansa_aidudi` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_aidudi`
--

INSERT INTO `hastacalita_phalitansa_aidudi` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '77777', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_aidudi_drei`
--

CREATE TABLE `hastacalita_phalitansa_aidudi_drei` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_aidudi_drei`
--

INSERT INTO `hastacalita_phalitansa_aidudi_drei` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '11111', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_aidudi_funf`
--

CREATE TABLE `hastacalita_phalitansa_aidudi_funf` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_aidudi_funf`
--

INSERT INTO `hastacalita_phalitansa_aidudi_funf` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '54301', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_aidudi_zehn`
--

CREATE TABLE `hastacalita_phalitansa_aidudi_zehn` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_aidudi_zehn`
--

INSERT INTO `hastacalita_phalitansa_aidudi_zehn` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '01237', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_drei`
--

CREATE TABLE `hastacalita_phalitansa_drei` (
  `shonu` int(11) NOT NULL,
  `banna` varchar(300) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sankhye` int(11) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_drei`
--

INSERT INTO `hastacalita_phalitansa_drei` (`shonu`, `banna`, `maulya`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '<span style=\"color:#f00;\">Red</span> + <span style=\"color:#C71585;\">Violet</span>', 'red+violet', 0, 0, '2024-02-01 00:00:00'),
(2, '<span style=\"color:#090;\">Green</span>', 'green', 1, 0, '2024-02-01 00:00:00'),
(3, '<span style=\"color:#f00;\">Red</span>', 'red', 2, 0, '2024-02-01 00:00:00'),
(4, '<span style=\"color:#090;\">Green</span>', 'green', 3, 0, '2024-02-01 00:00:00'),
(5, '<span style=\"color:#f00;\">Red</span>', 'red', 4, 0, '2024-02-01 00:00:00'),
(6, '<span style=\"color:#090;\">Green</span> + <span style=\"color:#C71585;\">Violet</span>', 'green+violet', 5, 0, '2024-02-01 00:00:00'),
(7, '<span style=\"color:#f00;\">Red</span>', 'red', 6, 0, '2024-02-01 00:00:00'),
(8, '<span style=\"color:#090;\">Green</span>', 'green', 7, 0, '2024-02-01 00:00:00'),
(9, '<span style=\"color:#f00;\">Red</span>', 'red', 8, 0, '2024-02-01 00:00:00'),
(10, '<span style=\"color:#090;\">Green</span>', 'green', 9, 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_funf`
--

CREATE TABLE `hastacalita_phalitansa_funf` (
  `shonu` int(11) NOT NULL,
  `banna` varchar(300) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sankhye` int(11) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_funf`
--

INSERT INTO `hastacalita_phalitansa_funf` (`shonu`, `banna`, `maulya`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '<span style=\"color:#f00;\">Red</span> + <span style=\"color:#C71585;\">Violet</span>', 'red+violet', 0, 0, '2024-02-01 00:00:00'),
(2, '<span style=\"color:#090;\">Green</span>', 'green', 1, 0, '2024-02-01 00:00:00'),
(3, '<span style=\"color:#f00;\">Red</span>', 'red', 2, 0, '2024-02-01 00:00:00'),
(4, '<span style=\"color:#090;\">Green</span>', 'green', 3, 0, '2024-02-01 00:00:00'),
(5, '<span style=\"color:#f00;\">Red</span>', 'red', 4, 0, '2024-02-01 00:00:00'),
(6, '<span style=\"color:#090;\">Green</span> + <span style=\"color:#C71585;\">Violet</span>', 'green+violet', 5, 0, '2024-02-01 00:00:00'),
(7, '<span style=\"color:#f00;\">Red</span>', 'red', 6, 0, '2024-02-01 00:00:00'),
(8, '<span style=\"color:#090;\">Green</span>', 'green', 7, 0, '2024-02-01 00:00:00'),
(9, '<span style=\"color:#f00;\">Red</span>', 'red', 8, 0, '2024-02-01 00:00:00'),
(10, '<span style=\"color:#090;\">Green</span>', 'green', 9, 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_kemeru`
--

CREATE TABLE `hastacalita_phalitansa_kemeru` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_kemeru`
--

INSERT INTO `hastacalita_phalitansa_kemeru` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '111', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_kemeru_drei`
--

CREATE TABLE `hastacalita_phalitansa_kemeru_drei` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_kemeru_drei`
--

INSERT INTO `hastacalita_phalitansa_kemeru_drei` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '111', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_kemeru_funf`
--

CREATE TABLE `hastacalita_phalitansa_kemeru_funf` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_kemeru_funf`
--

INSERT INTO `hastacalita_phalitansa_kemeru_funf` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '424', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_kemeru_zehn`
--

CREATE TABLE `hastacalita_phalitansa_kemeru_zehn` (
  `shonu` int(11) NOT NULL,
  `sankhye` varchar(300) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_kemeru_zehn`
--

INSERT INTO `hastacalita_phalitansa_kemeru_zehn` (`shonu`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '111', 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hastacalita_phalitansa_zehn`
--

CREATE TABLE `hastacalita_phalitansa_zehn` (
  `shonu` int(11) NOT NULL,
  `banna` varchar(300) NOT NULL,
  `maulya` varchar(300) NOT NULL,
  `sankhye` int(11) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `dinankavannuracisi` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hastacalita_phalitansa_zehn`
--

INSERT INTO `hastacalita_phalitansa_zehn` (`shonu`, `banna`, `maulya`, `sankhye`, `sthiti`, `dinankavannuracisi`) VALUES
(1, '<span style=\"color:#f00;\">Red</span> + <span style=\"color:#C71585;\">Violet</span>', 'red+violet', 0, 0, '2024-02-01 00:00:00'),
(2, '<span style=\"color:#090;\">Green</span>', 'green', 1, 0, '2024-02-01 00:00:00'),
(3, '<span style=\"color:#f00;\">Red</span>', 'red', 2, 0, '2024-02-01 00:00:00'),
(4, '<span style=\"color:#090;\">Green</span>', 'green', 3, 0, '2024-02-01 00:00:00'),
(5, '<span style=\"color:#f00;\">Red</span>', 'red', 4, 0, '2024-02-01 00:00:00'),
(6, '<span style=\"color:#090;\">Green</span> + <span style=\"color:#C71585;\">Violet</span>', 'green+violet', 5, 0, '2024-02-01 00:00:00'),
(7, '<span style=\"color:#f00;\">Red</span>', 'red', 6, 0, '2024-02-01 00:00:00'),
(8, '<span style=\"color:#090;\">Green</span>', 'green', 7, 0, '2024-02-01 00:00:00'),
(9, '<span style=\"color:#f00;\">Red</span>', 'red', 8, 0, '2024-02-01 00:00:00'),
(10, '<span style=\"color:#090;\">Green</span>', 'green', 9, 0, '2024-02-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `hintegedukolli`
--

CREATE TABLE `hintegedukolli` (
  `shonu` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `motta` varchar(200) NOT NULL,
  `dharavahi` varchar(200) NOT NULL,
  `khateshonu` varchar(200) NOT NULL,
  `dinankavannuracisi` varchar(200) NOT NULL,
  `madari` int(11) NOT NULL,
  `tike` varchar(200) NOT NULL,
  `sthiti` int(11) NOT NULL,
  `remarks` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hintegedukolli`
--

INSERT INTO `hintegedukolli` (`shonu`, `balakedara`, `motta`, `dharavahi`, `khateshonu`, `dinankavannuracisi`, `madari`, `tike`, `sthiti`, `remarks`) VALUES
(1, 5157, '677', 'W2025020317385680832930', '11', '2025-02-03 13:54:10', 3, 'Rejected', 2, 'please bet more'),
(2, 7, '6000', 'W2025020317385681168576', '5', '2025-02-03 13:50:12', 3, 'Rejected', 2, 'Ok'),
(3, 137, '233', 'W2025020317385709601180', '17', '2025-02-03 13:54:03', 3, 'Rejected', 2, 'we are updating system'),
(4, 137, '233', 'W2025020317385710642349', '17', '2025-02-03 14:10:34', 3, 'Rejected', 2, 'we are updating system'),
(5, 5157, '500', 'W2025020317385717285110', '11', '2025-02-03 14:10:18', 3, 'Rejected', 2, 'we are updating system'),
(6, 137, '110', 'W2025020317385723755907', '17', '2025-02-03 14:21:51', 3, 'Rejected', 2, 'we are updating system'),
(7, 137, '110', 'W2025020317385723863983', '17', '2025-02-03 14:21:42', 3, 'Rejected', 2, 'we are updating system'),
(8, 13933, '127', 'W2025020317385821017252', '31', '2025-02-03 20:53:52', 3, 'Rejected', 2, 'we are updating system'),
(9, 5429, '500', 'W2025020317385915154624', '40', '2025-02-03 20:54:06', 3, 'Rejected', 2, 'we are updating system'),
(10, 18657, '1811', 'W2025020317385955585719', '84', '2025-02-03 21:31:19', 23, 'Rejected', 2, 'we are updating system'),
(11, 15, '500', 'W2025020317385957713848', '57', '2025-02-03 21:30:26', 24, 'Rejected', 2, 'we are updating system'),
(12, 15, '500', 'W2025020317385958981492', '99', '2025-02-03 21:21:52', 23, 'Rejected', 2, ''),
(13, 20576, '320', 'W2025020317385974343164', '129', '2025-02-03 21:30:08', 24, 'Rejected', 2, 'we are updating system'),
(14, 5623, '110', 'W2025020317385974531167', '140', '2025-02-03 21:29:52', 23, 'Rejected', 2, 'we are updating system'),
(15, 14914, '525', 'W2025020317385977381206', '153', '2025-02-03 21:29:41', 24, 'Rejected', 2, 'we are updating system'),
(16, 7, '6000', 'W2025020317385986304888', '176', '2025-02-03 21:35:35', 23, 'Rejected', 2, 'promotional ballence is not withdrawable '),
(17, 21629, '501', 'W2025020317385990545572', '151', '2025-02-03 22:06:53', 23, 'Completed', 1, 'approved'),
(18, 21491, '1000', 'W2025020317385996128394', '195', '2025-02-03 22:06:09', 23, 'Completed', 1, ''),
(19, 18, '5000', 'W2025020317386007679140', '216', '2025-02-03 22:16:09', 24, 'Rejected', 2, 'promotional ballence is not withdraable '),
(20, 18, '5000', 'W2025020317386016653286', '216', '2025-02-03 22:28:49', 24, 'Completed', 1, 'Thank You so much for Supporting Us');

-- --------------------------------------------------------

--
-- Table structure for table `hodike_balakedara`
--

CREATE TABLE `hodike_balakedara` (
  `kani` int(11) NOT NULL,
  `userkani` int(11) NOT NULL,
  `serial` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `shonu` varchar(200) NOT NULL,
  `remark` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hodike_balakedara`
--

INSERT INTO `hodike_balakedara` (`kani`, `userkani`, `serial`, `price`, `shonu`, `remark`) VALUES
(1, 18, 'HHMC5YVIR1JG9FSSXTLWWACZ7MXMLKU5', '100', '2025-02-03 14:35:02', 'gift code '),
(2, 160, 'Imitator', '5000', '2025-02-03 15:32:22', 'good work'),
(3, 7, 'Imitator', '2', '2025-02-03 15:35:33', ''),
(4, 44, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:46:02', 'gift code '),
(5, 464, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:47:02', 'gift code '),
(6, 608, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:47:02', 'gift code '),
(7, 10676, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:47:02', 'gift code '),
(8, 464, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:47:02', 'gift code '),
(9, 95, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:47:02', 'gift code '),
(10, 608, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5   ', '20', '2025-02-03 15:47:02', 'gift code '),
(11, 11738, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:47:02', 'gift code '),
(12, 766, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:48:02', 'gift code '),
(13, 6845, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:48:02', 'gift code '),
(14, 2638, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:48:02', 'gift code '),
(15, 766, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:48:02', 'gift code '),
(16, 6903, 'P4WY0Z6EJF496S6A2C62FFHTPQOG7XXN', '20', '2025-02-03 15:48:02', 'gift code '),
(17, 11738, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:48:02', 'gift code '),
(18, 6845, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:48:02', 'gift code '),
(19, 2638, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5 ', '20', '2025-02-03 15:48:02', 'gift code '),
(20, 6903, '0BW2MN57RUXK3N0AT4WWB1C2GEEUJZI5', '20', '2025-02-03 15:48:02', 'gift code ');

-- --------------------------------------------------------

--
-- Table structure for table `hodike_nirvahaka`
--

CREATE TABLE `hodike_nirvahaka` (
  `identite` int(11) NOT NULL,
  `enserie` varchar(200) NOT NULL,
  `utilisateurmax` varchar(200) NOT NULL,
  `prix` varchar(200) NOT NULL,
  `nombredutilisateurs` varchar(200) NOT NULL,
  `creerunrendezvous` varchar(200) NOT NULL,
  `shonu` varchar(200) NOT NULL,
  `remark` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hodike_nirvahaka`
--

INSERT INTO `hodike_nirvahaka` (`identite`, `enserie`, `utilisateurmax`, `prix`, `nombredutilisateurs`, `creerunrendezvous`, `shonu`, `remark`) VALUES
(39, 'EKUBEPXVBB7U5C9AUNT16JB1UHHEG85D', '1', '15000', '1', '2025-02-04 01:51', '1', 'IMRAN THANK YOU SO MUCH'),
(40, 'JXQHF92BWYJMQ9QP92AYMQVXNL6I0GHW', '1', '200000', '1', '2025-02-04 20:47', '1', 'uid 95  promotion bonus 200k'),
(42, '4TSS43NWCFS8YU5NOUGJAOTZZR7DY8VB', '10000', '30', '327', '2025-02-06 21:05', '1', 'THANK YOU SO MUCH FOR TRUSTING US'),
(43, 'GTJMGN536468JYXBC1E7ZJWK65P9RS50', '1', '660', '1', '2025-02-07 13:49', '1', 'UID 46 salary '),
(44, '7E3BT9BCCXQ3CYAWK71XYDCMD2ZZQXSA', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(45, '60TBXJZRF9CMA92QWJ7WX4BQO3F1703Y', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(46, 'J9HUCI9ASF235ZYC3LONOFU0SRPKPNOK', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(47, 'T5J18T7R08IJFB5714HJ7ZQDVR5TW64A', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(48, 'W4VQ1GIOH46F572LJ4065GAF5P6SRNCU', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(49, 'A2YEOY9HQ795FTYDV92JL8Q5504ELHJJ', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(50, 'Z9FDFL70PKP7Q2872B2HOOCV04EJ5ERJ', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(51, 'UZLSIQSVS8KK0G6CJFWU5QAV76KAGSMH', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(52, 'O6K8W991YITLUX0SCX9J72EDUNGDNB3O', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(53, 'D8BNV2952TOGN3MRGLUQVJ24ZWPCRE0E', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(54, '1LTQFE8EJ8U4M9UI50HEER50FP6K7GBZ', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(55, 'MK34EEUV84BHR5E4Q7X9PG979DXSNQLU', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(56, 'HUMWEERXR5IQD2HF9VROJUQ5OABAE1ND', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(57, 'NK3X00E0SDPRKG3Z4QSQQG8I2Z7MNHFM', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(58, 'NWDADZFUEYKYTUPAKPDZQYWNPOL0M3CA', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(59, '581B6K5K3UG8UEBO72EAW8RWMOKZ61WW', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code '),
(60, '1UOUR4EGR3VGLVTV74X9FLJXJCDPIB7V', '50', '120', '0', '2025-03-04 19:11', '1', 'GIFT code ');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `filename` varchar(300) NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT 0,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `filename`, `status`, `time`) VALUES
(17, 'IMG-20250214-WA0002~2.jpg', 0, '0000-00-00 00:00:00'),
(18, 'Screenshot_2025_0304_153314.jpg', 0, '0000-00-00 00:00:00'),
(19, 'Screenshot_2025_0304_185256.jpg', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `images_usdt`
--

CREATE TABLE `images_usdt` (
  `id` int(11) NOT NULL,
  `filename` varchar(300) NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT 0,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `images_usdt`
--

INSERT INTO `images_usdt` (`id`, `filename`, `status`, `time`) VALUES
(23, 'IMG-20241004-WA0005.jpg', 1, '2024-10-04 16:49:31'),
(24, 'usdtbg.jpg', 1, '2024-10-04 17:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `issue_type` varchar(255) NOT NULL,
  `account` varchar(50) NOT NULL,
  `amount_deposit` decimal(10,2) DEFAULT NULL,
  `utr_number` varchar(100) DEFAULT NULL,
  `withdrawal_order_number` varchar(100) DEFAULT NULL,
  `withdrawal_amount` decimal(10,2) DEFAULT NULL,
  `deposit_proof_path` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'Pending',
  `reply` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `upiid` int(11) NOT NULL,
  `screenshot_path` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `issues`
--

INSERT INTO `issues` (`id`, `issue_type`, `account`, `amount_deposit`, `utr_number`, `withdrawal_order_number`, `withdrawal_amount`, `deposit_proof_path`, `status`, `reply`, `created_at`, `upiid`, `screenshot_path`) VALUES
(1, 'depositNotReceived', '123', 123456.00, '123', '', 0.00, 'Array', 'Pending', NULL, '2025-01-28 05:14:17', 0, ''),
(53, 'depositNotReceived', '1335677', 456778.00, '567788', NULL, 0.00, '', 'Pending', NULL, '2025-02-17 02:19:59', 567789, ''),
(54, 'wingo1MinWinStreakBonus', '78966', 0.00, '', NULL, 0.00, '', 'Pending', 'Solved beta', '2025-02-17 02:38:05', 0, ''),
(55, 'wingo1MinWinStreakBonus', '82928272626', 0.00, '', NULL, 0.00, '', 'Approved', NULL, '2025-02-17 03:25:21', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `khate`
--

CREATE TABLE `khate` (
  `shonu` int(11) NOT NULL,
  `byabaharkarta` int(11) NOT NULL,
  `khatesankhye` varchar(200) NOT NULL,
  `khatakrama` int(11) NOT NULL,
  `phalanubhavi` varchar(200) NOT NULL,
  `kodprakara` int(11) NOT NULL,
  `daka` varchar(200) NOT NULL,
  `kod` varchar(200) NOT NULL,
  `khatehesaru` varchar(200) NOT NULL,
  `duravani` varchar(200) NOT NULL,
  `sthiti` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `khate`
--

INSERT INTO `khate` (`shonu`, `byabaharkarta`, `khatesankhye`, `khatakrama`, `phalanubhavi`, `kodprakara`, `daka`, `kod`, `khatehesaru`, `duravani`, `sthiti`) VALUES
(1, 22440, 'TXzqNm8emMcZkHKfhZz7R9NRV4QkLnCPDX', 55, '122333', 7, ' ', ' ', 'TRC', ' ', 1),
(2, 7, 'TXzqNm8emMcZkHKfhZz7R9NRV4QkLnCPDX', 55, '324545', 7, ' ', ' ', 'TRC', ' ', 1),
(3, 4092, 'TXy26z3mMtibU3imi3Sbm26AGm2DfJfXvC', 55, 'TXy26z3mMtibU3imi3Sb', 7, ' ', ' ', 'TRC', ' ', 1),
(4, 127, 'TFHXdcyv2bA5DYSTEULW5FKrdshMwgVmyR', 55, 'Binance ', 7, ' ', ' ', 'TRC', ' ', 1),
(5, 7, 'TXzqNm8emMcZkHKfhZz7R9NRV4QkLnCPDX', 55, 'eergg', 7, ' ', ' ', 'TRC', ' ', 1),
(6, 4614, 'TW6iGMj2Sh33dnpb4ZhVz1ZBXAXRySau1U', 55, 'Binance', 7, ' ', ' ', 'TRC', ' ', 1),
(7, 4307, 'TGPYtYdeVNCveRyRto8RytgjvgkCoa2JB7', 55, 'Binance', 7, ' ', ' ', 'TRC', ' ', 1),
(8, 4959, 'TEuiN7pkdMWoXMfjJHt1RhFQcsE827ZNfe', 55, 'Hz', 7, ' ', ' ', 'TRC', ' ', 1),
(9, 803, 'TDsHgXLvv61hY8Nu5xe8ZCFrWJWZt5WpKD', 55, 'TDsHgXLvv61hY8Nu5xe8', 7, ' ', ' ', 'TRC', ' ', 1),
(10, 4373, 'TYfhnchUStEh2avj4VBnA8DM6mcNLCRFGb', 55, 'Ayub', 7, ' ', ' ', 'TRC', ' ', 1),
(11, 5157, 'TPeiCWiKgnam3TV4vJHnESGzaPaVqLJpJS', 55, 'Usdt ( Trc20 )', 7, ' ', ' ', 'TRC', ' ', 1),
(12, 38, 'TFaYQUm3prSQN1FktXuBVYDMGeHzBRv47R', 55, 'TFaYQUm3prSQN1FktXuB', 7, ' ', ' ', 'TRC', ' ', 1),
(13, 55, 'TFnYtDn1sEiVNiT5ngGUJaWgtmdFDyv5w9', 55, 'TFnYtDn1sEiVNiT5ngGU', 7, ' ', ' ', 'TRC', ' ', 1),
(14, 1804, 'TXhMdhpgZFBqfpQ4ootFKoJatkoiXpgB1B', 55, 'TXhMdhpgZFBqfpQ4ootF', 7, ' ', ' ', 'TRC', ' ', 1),
(15, 42, 'TEDMnwD6cL6FXN1nCVC8t5xNn8HJrtbbsr', 55, 'Tron(TRC20)', 7, ' ', ' ', 'TRC', ' ', 1),
(16, 3036, 'TD3LpyNA3mEx4BwyRx3HdGMfeYNNcssmiq', 55, 'TD3LpyNA3mEx4BwyRx3H', 7, ' ', ' ', 'TRC', ' ', 1),
(17, 137, 'TJXN6ExidRV4gE4mBK9aU2BuPxXMfpKhZ6', 55, 'Binance ', 7, ' ', ' ', 'TRC', ' ', 1),
(18, 5952, 'TNccX5wm8Nsb72r5oE1CgBufB3cYWrJRfW', 55, 'SADIII', 7, ' ', ' ', 'TRC', ' ', 1),
(19, 6753, 'TBjdPDLePii1LTcpeqxJwPm7P8yMxZcatD', 55, 'Binance', 7, ' ', ' ', 'TRC', ' ', 1),
(20, 7421, 'TXuUGChFNuuhv7DYzKs8AmgudHV64W7uXp', 55, 'TRC20', 7, ' ', ' ', 'TRC', ' ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `maintenance`
--

CREATE TABLE `maintenance` (
  `id` int(11) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'inactive',
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `maintenance`
--

INSERT INTO `maintenance` (`id`, `status`, `message`) VALUES
(1, 'inactive', 'hi  hi');

-- --------------------------------------------------------

--
-- Table structure for table `nirvahaka_shonu`
--

CREATE TABLE `nirvahaka_shonu` (
  `unohs` int(11) NOT NULL,
  `hesaru` varchar(255) NOT NULL,
  `nirvahaka_hesaru` varchar(255) NOT NULL,
  `guptapada` varchar(255) NOT NULL,
  `sthiti` smallint(6) NOT NULL,
  `secret_key` varchar(100) DEFAULT NULL,
  `dashboard` smallint(6) NOT NULL DEFAULT 1,
  `wingomanager` smallint(6) NOT NULL DEFAULT 1,
  `k3manager` smallint(6) NOT NULL DEFAULT 1,
  `5dmanager` smallint(6) NOT NULL DEFAULT 1,
  `finance` smallint(6) NOT NULL DEFAULT 1,
  `support` int(11) NOT NULL DEFAULT 0,
  `managegame` smallint(6) NOT NULL DEFAULT 1,
  `manageagent` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `nirvahaka_shonu`
--

INSERT INTO `nirvahaka_shonu` (`unohs`, `hesaru`, `nirvahaka_hesaru`, `guptapada`, `sthiti`, `secret_key`, `dashboard`, `wingomanager`, `k3manager`, `5dmanager`, `finance`, `support`, `managegame`, `manageagent`) VALUES
(1, '1111111111', '1111111111', '93279e3308bdbbeed946fc965017f67a', 1, 'KT674OW6YUNQ7DHH', 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `noitativni_sonub`
--

CREATE TABLE `noitativni_sonub` (
  `id` int(11) NOT NULL,
  `motta` varchar(255) NOT NULL DEFAULT '0',
  `arthur` varchar(300) NOT NULL,
  `fleck` varchar(300) NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT 0,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `noitativni_sonub`
--

INSERT INTO `noitativni_sonub` (`id`, `motta`, `arthur`, `fleck`, `status`, `time`) VALUES
(1, '55', '143', '1', 1, '2025-01-18 10:53:45'),
(2, '55', '655', '1', 1, '2025-01-18 15:49:02'),
(3, '55', '151', '1', 1, '2025-01-18 18:41:43'),
(4, '55', '1448', '1', 1, '2025-01-18 19:33:46'),
(5, '55', '1504', '1', 1, '2025-01-18 20:14:38'),
(6, '55', '15', '1', 1, '2025-01-18 20:43:30'),
(7, '55', '15', '1', 1, '2025-01-18 20:43:31'),
(8, '55', '15', '1', 1, '2025-01-18 20:43:31'),
(9, '55', '15', '1', 1, '2025-01-18 20:43:31'),
(10, '55', '15', '1', 1, '2025-01-18 20:43:32'),
(11, '55', '15', '1', 1, '2025-01-18 20:43:32'),
(12, '55', '15', '1', 1, '2025-01-18 20:43:32'),
(13, '55', '15', '1', 1, '2025-01-18 20:43:32'),
(14, '55', '15', '1', 1, '2025-01-18 20:43:33'),
(15, '55', '428', '1', 1, '2025-01-18 22:01:24'),
(16, '55', '228', '1', 1, '2025-01-18 22:04:11'),
(17, '55', '1869', '1', 1, '2025-01-19 00:04:32'),
(18, '55', '974', '1', 1, '2025-01-19 09:22:00'),
(19, '55', '708', '1', 1, '2025-01-19 09:29:28'),
(20, '55', '5527', '1', 1, '2025-01-19 09:56:33');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `state` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `user_id`, `title`, `state`, `created_at`) VALUES
(1, 739513, 'Login Notification', 0, '2025-03-03 22:38:12'),
(2, 739514, 'Login Notification', 0, '2025-03-04 07:44:18'),
(3, 739513, 'Login Notification', 0, '2025-03-04 08:31:16'),
(4, 739513, 'Login Notification', 0, '2025-03-04 08:35:28'),
(5, 739513, 'Login Notification', 0, '2025-03-04 08:35:49'),
(6, 739515, 'Login Notification', 0, '2025-03-04 09:39:49'),
(7, 739513, 'Login Notification', 0, '2025-03-04 13:28:22'),
(8, 739513, 'Login Notification', 0, '2025-03-04 13:49:06'),
(9, 739513, 'Login Notification', 0, '2025-03-04 13:51:10'),
(10, 739517, 'Login Notification', 0, '2025-03-04 15:20:15'),
(11, 739513, 'Login Notification', 0, '2025-03-04 15:58:40'),
(12, 739515, 'Login Notification', 0, '2025-03-04 19:21:33'),
(13, 739520, 'Login Notification', 0, '2025-03-04 19:24:07'),
(14, 739520, 'Login Notification', 0, '2025-03-04 19:25:34'),
(15, 739531, 'Login Notification', 0, '2025-03-04 20:39:18'),
(16, 739533, 'Login Notification', 0, '2025-03-04 20:39:51'),
(17, 739520, 'Login Notification', 0, '2025-03-04 20:56:17'),
(18, 739531, 'Login Notification', 0, '2025-03-04 22:45:44'),
(19, 739520, 'Login Notification', 0, '2025-03-04 22:48:49'),
(20, 739520, 'Login Notification', 0, '2025-03-04 22:56:53');

-- --------------------------------------------------------

--
-- Table structure for table `otp_record`
--

CREATE TABLE `otp_record` (
  `id` int(11) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `otp` varchar(10) NOT NULL,
  `type` varchar(50) NOT NULL,
  `createdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parametredepaiement`
--

CREATE TABLE `parametredepaiement` (
  `suckit` int(11) NOT NULL,
  `rechargeamount` varchar(500) NOT NULL,
  `withdrawalamount` varchar(500) NOT NULL,
  `bonusamount` varchar(500) NOT NULL,
  `rechargebonus` varchar(500) NOT NULL COMMENT 'in%age',
  `level1` varchar(300) NOT NULL COMMENT 'In%age',
  `level2` varchar(300) NOT NULL COMMENT 'In%age',
  `level3` varchar(200) NOT NULL COMMENT 'In%age'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `parametredepaiement`
--

INSERT INTO `parametredepaiement` (`suckit`, `rechargeamount`, `withdrawalamount`, `bonusamount`, `rechargebonus`, `level1`, `level2`, `level3`) VALUES
(1, '300', '330', '20', '2', '1.20', '0.60', '0.40');

-- --------------------------------------------------------

--
-- Table structure for table `rebetrec`
--

CREATE TABLE `rebetrec` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `motta` varchar(255) NOT NULL DEFAULT '0',
  `rebet` int(11) NOT NULL DEFAULT 0,
  `rate` varchar(255) NOT NULL DEFAULT '0',
  `lvl` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rebetrec`
--

INSERT INTO `rebetrec` (`id`, `user_id`, `motta`, `rebet`, `rate`, `lvl`, `created_at`) VALUES
(1, 739548, '1.2005', 2401, '0.05', 'LVLCOMM0', '2025-03-05 18:02:35');

-- --------------------------------------------------------

--
-- Table structure for table `sang_ka`
--

CREATE TABLE `sang_ka` (
  `id` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `account` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sang_tuke`
--

CREATE TABLE `sang_tuke` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `account` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shonu_kaichila`
--

CREATE TABLE `shonu_kaichila` (
  `kramasankhye` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `motta` varchar(500) NOT NULL,
  `rebet` varchar(255) NOT NULL DEFAULT '0',
  `spin` int(11) NOT NULL DEFAULT 0,
  `bonus` varchar(255) NOT NULL DEFAULT '21',
  `dinankavannuracisi` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `shonu_kaichila`
--

INSERT INTO `shonu_kaichila` (`kramasankhye`, `balakedara`, `motta`, `rebet`, `spin`, `bonus`, `dinankavannuracisi`) VALUES
(1, 739513, '3921.92', '200', 0, '33', '2025-03-06 08:41:46'),
(2, 739514, '500', '0', 0, '33', '2025-03-04 09:47:17'),
(3, 739515, '415.22', '85', 0, '33', '2025-03-06 08:41:46'),
(4, 739516, '33', '0', 0, '33', '2025-03-04 04:39:47'),
(5, 739517, '5000', '0', 0, '21', '2025-03-04 09:49:58'),
(6, 739518, '33', '0', 0, '33', '2025-03-04 10:28:21'),
(7, 739519, '33', '0', 0, '33', '2025-03-04 10:32:23'),
(8, 739520, '153', '0', 0, '33', '2025-03-04 15:02:54'),
(9, 739521, '1933.02', '61511', 0, '33', '2025-03-06 08:42:02'),
(59, 739571, '333', '0', 0, '33', '2025-03-05 10:22:22'),
(10, 739522, '10.7', '6916', 0, '33', '2025-03-05 16:49:27'),
(11, 739523, '33', '0', 0, '33', '2025-03-04 14:26:54'),
(12, 739524, '33', '0', 0, '33', '2025-03-04 14:27:22'),
(13, 739525, '5000', '0', 0, '21', '2025-03-04 14:47:40'),
(14, 739526, '5000', '0', 0, '21', '2025-03-04 14:50:50'),
(15, 739527, '5000', '0', 0, '21', '2025-03-04 14:51:35'),
(16, 739528, '33', '0', 0, '33', '2025-03-04 14:53:12'),
(17, 739529, '500', '0', 0, '21', '2025-03-06 04:59:12'),
(18, 739530, '5000', '0', 0, '21', '2025-03-04 15:07:36'),
(19, 739531, '0.88', '17492', 0, '21', '2025-03-05 11:00:40'),
(20, 739532, '500', '0', 0, '21', '2025-03-06 04:58:32');

-- --------------------------------------------------------

--
-- Table structure for table `shonu_subjects`
--

CREATE TABLE `shonu_subjects` (
  `id` int(11) NOT NULL,
  `mobile` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(300) NOT NULL,
  `code` varchar(255) NOT NULL,
  `code1` varchar(255) DEFAULT NULL,
  `code2` varchar(255) DEFAULT NULL,
  `code3` varchar(255) DEFAULT NULL,
  `code4` varchar(255) DEFAULT NULL,
  `code5` varchar(255) DEFAULT NULL,
  `owncode` varchar(255) NOT NULL,
  `privacy` varchar(50) NOT NULL,
  `status` smallint(6) NOT NULL,
  `createdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `ip` varchar(255) DEFAULT NULL,
  `ishonup` varchar(255) DEFAULT NULL,
  `pwd` varchar(300) DEFAULT NULL,
  `shonullgnt` varchar(255) DEFAULT NULL,
  `shonupwderr` int(11) NOT NULL DEFAULT 0,
  `akshinak` varchar(25500) DEFAULT NULL,
  `tnegaresunohs` varchar(255) DEFAULT NULL,
  `codechorkamukala` varchar(255) DEFAULT NULL,
  `kramasankhye` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `motta` int(11) NOT NULL,
  `dinankavannuracisi` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `shonu_subjects`
--

INSERT INTO `shonu_subjects` (`id`, `mobile`, `email`, `password`, `code`, `code1`, `code2`, `code3`, `code4`, `code5`, `owncode`, `privacy`, `status`, `createdate`, `ip`, `ishonup`, `pwd`, `shonullgnt`, `shonupwderr`, `akshinak`, `tnegaresunohs`, `codechorkamukala`, `kramasankhye`, `balakedara`, `motta`, `dinankavannuracisi`) VALUES
(739513, '1111111111', '', 'e10adc3949ba59abbe56e057f20f883e', '305243021284', '384883966123', '', '', '', '', '820725739513', 'on', 1, '2025-02-17 16:25:52', '47.29.167.204', '152.59.84.20', 'Demo123456', '2025-03-09 10:06:11', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUxMyIsIm1vYmlsZSI6IjExMTExMTExMTEiLCJzdGF0dXMiOiIxIiwiZXhwaXJlIjoxNzQxNTgxMzcxLCJpc2hvbnVwIjoiMTUyLjU5Ljg1LjI0IiwiY29kZWNob3JrYW11a2FsYSI6Ik1lbWJlclk0TDdLVkFGIn0.HrMnImraDUK5sKOUzJbpLkoV40-e708XUWkZfOOC8Js', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'MemberY4L7KVAF', 0, 0, 0, '0000-00-00 00:00:00'),
(739515, '9046927558', '', '703a59b97b963c2ccd4e7b1fc9d48620', '820725739513', '305243021284', '', '', '', '', '898566739515', 'on', 1, '2025-03-04 03:13:02', '223.239.51.82', '103.182.83.47', '721422ab', '2025-03-04 19:21:33', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUxNSIsIm1vYmlsZSI6IjkwNDY5Mjc1NTgiLCJzdGF0dXMiOiIxIiwiZXhwaXJlIjoxNzQxMTgyNjkzLCJpc2hvbnVwIjoiMTAzLjE4Mi44My4xMzQiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyNkhaTDBWTUYifQ.IzMq_D_Of2hHWNtHJTIQ-HcDwQ3S9DCCznqfVpmqby8', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'Member6HZL0VMF', 0, 0, 0, '0000-00-00 00:00:00'),
(739514, '9547579033', '', '2c93e2da0359e98f245a8c434b75aa42', '820725739513', '305243021284', '', '', '', '', '206727739514', 'on', 1, '2025-03-04 02:13:18', '106.219.253.4', '106.219.253.4', '721422aa', '2025-03-04 07:44:18', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUxNCIsIm1vYmlsZSI6Ijk1NDc1NzkwMzMiLCJzdGF0dXMiOiIxIiwiZXhwaXJlIjoxNzQxMTQwODU4LCJpc2hvbnVwIjoiMTA2LjIxOS4yNTMuNCIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXJZUDhLUTVERyJ9.9z8z1m8MsI1QTMCopqKI5adVxyLldQM_YU_vic4QjO8', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'MemberYP8KQ5DG', 0, 0, 0, '0000-00-00 00:00:00'),
(739516, '9199258097', '', '4632adb56055128a3dd6cc4c1cc3c505', '820725739513', '305243021284', '', '', '', '', '608649739516', 'on', 1, '2025-03-04 04:39:47', '223.190.186.146', '223.190.186.146', 'RAJ12345', '2025-03-04 10:09:47', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTE2LCJtb2JpbGUiOiI5MTk5MjU4MDk3Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExNDk1ODcsImlzaG9udXAiOiIyMjMuMTkwLjE4Ni4xNDYiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyNTBGUUhSWUMifQ.Am1Xd7z8QPX7xSLJtgv33Q0Pjj5Z4M7TxYy_si5LY1w', 'Mozilla/5.0 (Linux; Android 9; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.121 Mobile Safari/537.36', 'Member50FQHRYC', 0, 0, 0, '0000-00-00 00:00:00'),
(739517, '927777888899', '', 'e10adc3949ba59abbe56e057f20f883e', '255860337165', NULL, NULL, NULL, NULL, NULL, '620605312173', 'on', 1, '2025-03-04 09:49:58', '127.0.0.1', '152.56.147.99', '123456', '2025-03-04 15:20:15', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUxNyIsIm1vYmlsZSI6IjkyNzc3Nzg4ODg5OSIsInN0YXR1cyI6IjEiLCJleHBpcmUiOjE3NDExNjgyMTUsImlzaG9udXAiOiIxMjcuMC4wLjEiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyU0hLWVE3NkcifQ.yWh8A4h6VDtk2sc1bWreX4d8Z_2rl8eQ7NFkaR-zoss', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', 'MemberSHKYQ76G', 0, 0, 0, '0000-00-00 00:00:00'),
(739518, '1111222233', '', 'fcea920f7412b5da7be0cf42b8c93759', '608649739516', '820725739513', '305243021284', '', '', '', '292035739518', 'on', 1, '2025-03-04 10:28:21', '152.56.147.99', '152.56.147.99', '1234567', '2025-03-04 15:58:21', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTE4LCJtb2JpbGUiOiIxMTExMjIyMjMzIiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExNzA1MDEsImlzaG9udXAiOiIxNTIuNTYuMTQ3Ljk5IiwiY29kZWNob3JrYW11a2FsYSI6Ik1lbWJlcjRVS0FXRDNOIn0.kPBRzwlpDpYTXzwn35mEFe4MKo9WG6-2jVdLQ6RefoI', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36', 'Member4UKAWD3N', 0, 0, 0, '0000-00-00 00:00:00'),
(739519, '9285698545', '', '568bc0d267e87454b1873d1c01eaf3b5', '820725739513', '305243021284', '', '', '', '', '555225739519', 'on', 1, '2025-03-04 10:32:23', '223.190.186.146', '223.190.186.146', 'MANA1234', '2025-03-04 16:02:23', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTE5LCJtb2JpbGUiOiI5Mjg1Njk4NTQ1Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExNzA3NDMsImlzaG9udXAiOiIyMjMuMTkwLjE4Ni4xNDYiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyMDJYT01aV1AifQ.7yxijsmQUWA62IT2TMJ4zRKnW4OwqQS5HCaNF9_cVn4', 'Mozilla/5.0 (Linux; Android 9; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.121 Mobile Safari/537.36', 'Member02XOMZWP', 0, 0, 0, '0000-00-00 00:00:00'),
(739520, '9046927556', '', '703a59b97b963c2ccd4e7b1fc9d48620', '898566739515', '820725739513', '305243021284', '', '', '', '436952739520', 'on', 1, '2025-03-04 13:20:47', '103.182.83.68', '103.182.83.202', '721422ab', '2025-03-05 15:44:40', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUyMCIsIm1vYmlsZSI6IjkwNDY5Mjc1NTYiLCJzdGF0dXMiOiIxIiwiZXhwaXJlIjoxNzQxMjU2MDgwLCJpc2hvbnVwIjoiMTAzLjE4Mi44My4yMyIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXJVNFdCQUw4USJ9.yazpv0skCZELTg6s_Fi24h25qVGEftHEgFu1jMp5HVk', 'Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.6998.39 Mobile Safari/537.36', 'MemberU4WBAL8Q', 0, 0, 0, '0000-00-00 00:00:00'),
(739521, '6296762215', '', '703a59b97b963c2ccd4e7b1fc9d48620', '898566739515', '820725739513', '305243021284', '', '', '', '175968739521', 'on', 1, '2025-03-04 13:31:53', '103.182.83.100', '103.182.83.14', '721422ab', '2025-03-06 14:01:48', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUyMSIsIm1vYmlsZSI6IjYyOTY3NjIyMTUiLCJzdGF0dXMiOiIxIiwiZXhwaXJlIjoxNzQxMzM2MzA4LCJpc2hvbnVwIjoiMTAzLjE4Mi44My4xOTMiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyRDRBMUVaTkcifQ.K6NKf11JkSCnKx35bUBXTcJNjO_JjzBQxuaKMwYK_q0', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'MemberD4A1EZNG', 0, 0, 0, '0000-00-00 00:00:00'),
(739522, '8918542902', '', '703a59b97b963c2ccd4e7b1fc9d48620', '898566739515', '820725739513', '305243021284', '', '', '', '470837739522', 'on', 1, '2025-03-04 13:50:31', '152.59.163.158', '152.59.163.158', '721422ab', '2025-03-04 19:20:31', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTIyLCJtb2JpbGUiOiI4OTE4NTQyOTAyIiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExODI2MzEsImlzaG9udXAiOiIxNTIuNTkuMTYzLjE1OCIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXJTRkJXNks3TyJ9.P7l8IbrNq16M2rhm638Z13DmxwLhA15MRGcmOCX5g08', 'Mozilla/5.0 (Linux; U; Android 13; en-gb; RMX3381 Build/TP1A.220905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36 HeyTapBrowser/45.12.0.1', 'MemberSFBW6K7O', 0, 0, 0, '0000-00-00 00:00:00'),
(739523, '4948494848', '', '9a84ee41aa72de59c63006aad670bcce', '175968739521', '898566739515', '820725739513', '305243021284', '', '', '691148739523', 'on', 1, '2025-03-04 14:26:54', '152.58.86.213', '152.58.86.213', 'aaaa1111', '2025-03-04 19:56:54', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTIzLCJtb2JpbGUiOiI0OTQ4NDk0ODQ4Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExODQ4MTQsImlzaG9udXAiOiIxNTIuNTguODYuMjEzIiwiY29kZWNob3JrYW11a2FsYSI6Ik1lbWJlcjNWVUk5UFlYIn0.qDxzNDmYdz6OtYHzv9iQSqvdrkUEuv0pUKYl06e9Gr0', 'Mozilla/5.0 (Linux; Android 13; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.137 Mobile Safari/537.36', 'Member3VUI9PYX', 0, 0, 0, '0000-00-00 00:00:00'),
(739524, '8920344041', '', '50054cdc460f709f602f2787331f8872', '175968739521', '898566739515', '820725739513', '305243021284', '', '', '950528739524', 'on', 1, '2025-03-04 14:27:22', '152.58.93.40', '152.58.93.40', '77019510sS', '2025-03-04 19:57:22', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTI0LCJtb2JpbGUiOiI4OTIwMzQ0MDQxIiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExODQ4NDIsImlzaG9udXAiOiIxNTIuNTguOTMuNDAiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyTlVTMUgzWlQifQ.lQsMZxTl-gRt4ss2TJc_KS4ntSh-Kzhok_dB9pCekgo', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'MemberNUS1H3ZT', 0, 0, 0, '0000-00-00 00:00:00'),
(739525, '921234567890', '', '9a84ee41aa72de59c63006aad670bcce', '255860337165', NULL, NULL, NULL, NULL, NULL, '822324790344', 'on', 1, '2025-03-04 14:47:40', '127.0.0.1', '127.0.0.1', 'aaaa1111', NULL, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTI1LCJtb2JpbGUiOiI5MjEyMzQ1Njc4OTAiLCJzdGF0dXMiOjEsImV4cGlyZSI6MTc0MTE4NjA2MCwiaXNob251cCI6IjEyNy4wLjAuMSIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXJHNDFCWFlWQyJ9.ByUV6ZlRZZInY9oW4nCMVOnrRyNo5JwIMaqAq6s6nkE', NULL, 'MemberG41BXYVC', 0, 0, 0, '0000-00-00 00:00:00'),
(739527, '92576889953379', '', '44f370f0e1637cc5feb603e9bec94d3e', '255860337165', NULL, NULL, NULL, NULL, NULL, '861599728571', 'on', 1, '2025-03-04 14:51:35', '127.0.0.1', '127.0.0.1', '346975', NULL, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTI3LCJtb2JpbGUiOiI5MjU3Njg4OTk1MzM3OSIsInN0YXR1cyI6MSwiZXhwaXJlIjoxNzQxMTg2Mjk1LCJpc2hvbnVwIjoiMTI3LjAuMC4xIiwiY29kZWNob3JrYW11a2FsYSI6Ik1lbWJlclY2S0hNUDdXIn0.t9gml059lfMxc9FQLSv3UWQb-rNt9tjRNWy_Hb1e6Uw', NULL, 'MemberV6KHMP7W', 0, 0, 0, '0000-00-00 00:00:00'),
(739528, '7478435767', '', '9a84ee41aa72de59c63006aad670bcce', '175968739521', '898566739515', '820725739513', '305243021284', '', '', '993810739528', 'on', 1, '2025-03-04 14:53:12', '152.58.65.22', '152.58.65.22', 'aaaa1111', '2025-03-04 20:23:12', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTI4LCJtb2JpbGUiOiI3NDc4NDM1NzY3Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExODYzOTIsImlzaG9udXAiOiIxNTIuNTguNjUuMjIiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyUUs0N1lGQ1YifQ.JNXX4-EOPcHqGsBnKBzaAKSBhjsdkm6fio-InT286Mo', 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2.1 Mobile/22C161 Safari/604.1', 'MemberQK47YFCV', 0, 0, 0, '0000-00-00 00:00:00'),
(739591, '7907045338', '', '0c3bce93f58ee78516272aa371ca2df9', '236273739542', '820725739513', '305243021284', '', '', '', '635154739591', 'on', 1, '2025-03-05 19:13:08', '117.216.153.176', '117.216.153.176', 'UBm5eq9EN', '2025-03-06 00:43:08', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTkxLCJtb2JpbGUiOiI3OTA3MDQ1MzM4Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDEyODgzODgsImlzaG9udXAiOiIxMTcuMjE2LjE1My4xNzYiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyOTNGWUpTWkkifQ.aOwP3Ti2Gbc4YgMU75SdRsKMZrRzIejW9DOWg1_Zx-Y', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.122 Mobile Safari/537.36', 'Member93FYJSZI', 0, 0, 0, '0000-00-00 00:00:00'),
(739529, '929246476888654', '', '608e85739e9ef89f80336f1777ea59c8', '255860337165', NULL, NULL, NULL, NULL, NULL, '180809145173', 'on', 1, '2025-03-04 15:05:13', '127.0.0.1', '127.0.0.1', '735686', NULL, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTI5LCJtb2JpbGUiOiI5MjkyNDY0NzY4ODg2NTQiLCJzdGF0dXMiOjEsImV4cGlyZSI6MTc0MTE4NzExMywiaXNob251cCI6IjEyNy4wLjAuMSIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXJGWDhWQVFONSJ9.VDpMuvva9lsBxwLdTa_F5bTmfCfSpN3QMDeniAzjjwk', NULL, 'MemberFX8VAQN5', 0, 0, 0, '0000-00-00 00:00:00'),
(739530, '92fggjjio', '', '608e85739e9ef89f80336f1777ea59c8', '255860337165', NULL, NULL, NULL, NULL, NULL, '795966207407', 'on', 1, '2025-03-04 15:07:36', '127.0.0.1', '127.0.0.1', '735686', NULL, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTMwLCJtb2JpbGUiOiI5MmZnZ2pqaW8iLCJzdGF0dXMiOjEsImV4cGlyZSI6MTc0MTE4NzI1NiwiaXNob251cCI6IjEyNy4wLjAuMSIsImNvZGVjaG9ya2FtdWthbGEiOiJNZW1iZXIyNkpTSUtCRCJ9.3q2qBVn8e4-8IUf9e19WEhLuJNyGHJVlCaCJeNJ8Hrs', NULL, 'Member26JSIKBD', 0, 0, 0, '0000-00-00 00:00:00'),
(739531, '929046527557', '', 'e10adc3949ba59abbe56e057f20f883e', '255860337165', NULL, NULL, NULL, NULL, NULL, '992534500936', 'on', 1, '2025-03-04 15:08:01', '127.0.0.1', '117.96.149.87', '123456', '2025-03-05 18:37:45', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczOTUzMSIsIm1vYmlsZSI6IjkyOTA0NjUyNzU1NyIsInN0YXR1cyI6IjEiLCJleHBpcmUiOjE3NDEyNjY0NjUsImlzaG9udXAiOiIyMjMuMTc2LjU4LjYzIiwiY29kZWNob3JrYW11a2FsYSI6Ik1lbWJlckFFVU1QTzA4In0.CBBQ5YFMwVhD6QCZfwwYBZHxc0Rr1KAUSHusU1t8FH0', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36', 'MemberAEUMPO08', 0, 0, 0, '0000-00-00 00:00:00'),
(739532, '9256889', '', '27093d5113f87e06a397683429a64363', '255860337165', NULL, NULL, NULL, NULL, NULL, '528731969598', 'on', 1, '2025-03-04 15:08:33', '127.0.0.1', '127.0.0.1', '46867', NULL, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTMyLCJtb2JpbGUiOiI5MjU2ODg5Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDExODczMTMsImlzaG9udXAiOiIxMjcuMC4wLjEiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyOE9DQTFQRUcifQ.GOd7BDBC5c34ozHXl90-rznkZxxFLTYbN_aHO2dVuA0', NULL, 'Member8OCA1PEG', 0, 0, 0, '0000-00-00 00:00:00'),
(739592, '7618449755', '', 'b94f1a74ffcc8a56a6e10b274f71f6cd', '236273739542', '820725739513', '305243021284', '', '', '', '840495739592', 'on', 1, '2025-03-05 23:06:56', '152.58.94.14', '152.58.94.14', 'Dikshit761844', '2025-03-06 04:36:56', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzM5NTkyLCJtb2JpbGUiOiI3NjE4NDQ5NzU1Iiwic3RhdHVzIjoxLCJleHBpcmUiOjE3NDEzMDI0MTYsImlzaG9udXAiOiIxNTIuNTguOTQuMTQiLCJjb2RlY2hvcmthbXVrYWxhIjoiTWVtYmVyV1JJSkM0N0IifQ.3dadtgWYmQiU1wbz8qb3g2tdv7DVUwO11BO9s4lpHZs', 'Mozilla/5.0 (Linux; Android 14; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.122 Mobile Safari/537.36', 'MemberWRIJC47B', 0, 0, 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `spinrec`
--

CREATE TABLE `spinrec` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `prize` varchar(50) DEFAULT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `spinrec`
--

INSERT INTO `spinrec` (`id`, `user_id`, `type`, `prize`, `time`) VALUES
(1, 803, '1', '11', '2025-02-03 16:03:37'),
(2, 803, '1', '11', '2025-02-03 16:03:38'),
(3, 5429, '1', '11', '2025-02-03 19:35:49'),
(4, 5429, '1', '11', '2025-02-03 19:36:29'),
(5, 137, '1', '11', '2025-02-04 13:06:45'),
(6, 44, '1', '11', '2025-02-04 18:36:49'),
(7, 31393, '1', '11', '2025-02-05 13:08:47');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pg`
--

CREATE TABLE `tbl_pg` (
  `id` int(11) NOT NULL,
  `value` varchar(300) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `status` smallint(6) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tbl_pg`
--

INSERT INTO `tbl_pg` (`id`, `value`, `rate`, `status`) VALUES
(1, 'manual', '0', 1),
(2, 'indianpay', '0', 0),
(3, 'usdt', '292', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_agent`
--

CREATE TABLE `tb_agent` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `mobile` varchar(200) NOT NULL,
  `salary` int(11) NOT NULL DEFAULT 0,
  `createdate` varchar(200) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tb_agent`
--

INSERT INTO `tb_agent` (`id`, `userid`, `type`, `mobile`, `salary`, `createdate`, `status`) VALUES
(1, 739537, 'day', '739537', 3000, '2025-03-04 22:26:52', 1),
(2, 739542, 'day', '739542', 7000, '2025-03-05 10:42:35', 2),
(3, 739521, 'day', '739521', 5000, '2025-03-05 10:50:47', 1);

-- --------------------------------------------------------

--
-- Table structure for table `telegramme`
--

CREATE TABLE `telegramme` (
  `id` int(11) NOT NULL,
  `value` varchar(200) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `telegramme`
--

INSERT INTO `telegramme` (`id`, `value`, `status`) VALUES
(1, 'https://t.me/SAGAR_RAJPUT', 1);

-- --------------------------------------------------------

--
-- Table structure for table `thevani`
--

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

CREATE TABLE `thevani` (
  `shonu` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `motta` varchar(200) NOT NULL,
  `dharavahi` varchar(200) NOT NULL,
  `mula` varchar(200) NOT NULL,
  `payid` int(11) NOT NULL DEFAULT 0,
  `ullekha` varchar(200) NOT NULL,
  `duravani` varchar(200) NOT NULL,
  `ekikrtapavati` varchar(200) NOT NULL,
  `dinankavannuracisi` varchar(200) NOT NULL,
  `madari` int(11) NOT NULL,
  `pavatiaidi` int(11) NOT NULL,
  `sthiti` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `thevani`
--

INSERT INTO `thevani` (`shonu`, `balakedara`, `motta`, `dharavahi`, `mula`, `payid`, `ullekha`, `duravani`, `ekikrtapavati`, `dinankavannuracisi`, `madari`, `pavatiaidi`, `sthiti`) VALUES
(1, 739513, '100', 'P2025021717398122483775', 'wepay', 0, '172737373727', '1111111111', 'paytm.slay6s3@pty', '2025-02-17 22:41:04', 1004, 2, 1),
(2, 739515, '100', 'P2025030417410582384212', 'wepay', 0, '204548048404', '9046927558', 'paytm.slay6s3@pty', '2025-03-04 08:47:33', 1004, 2, 2),
(3, 739517, '500', 'P2025030417410818631178', 'wepay', 0, '424242423423', '927777888899', 'paytm.slay6s3@pty', '2025-03-04 15:21:08', 1004, 2, 2),
(4, 739520, '100', 'P2025030417410944863600', 'wepay', 0, '54804=7=7070', '9046927556', 'rm1883125-1@oksbi', '2025-03-04 18:52:04', 1004, 2, 1),
(5, 739521, '100', 'P2025030417410951608310', 'wepay', 0, '5184375786hs', '6296762215', 'rm1883125-1@oksbi', '2025-03-04 19:03:30', 1004, 2, 1),
(6, 739531, '30000', 'P2025030417411009777143', 'wepay', 0, '504040404584', '929046527557', '9332894932@okbizaxis', '2025-03-04 20:39:48', 1004, 2, 2),
(7, 739533, '50000', 'P2025030417411010081591', 'wepay', 0, '423565776768', '92686758', '9332894932@okbizaxis', '2025-03-04 20:40:19', 1004, 2, 1),
(8, 739536, '100', 'P2025030417411066367368', 'wepay', 0, '500658797654', '8400536892', '9332894932@okbizaxis', '2025-03-04 22:14:19', 1004, 2, 2),
(9, 739551, '100', 'P2025030517411638264051', 'wepay', 0, '691743252138', '9279988550', '9332894932@okbizaxis', '2025-03-05 14:07:33', 1004, 2, 2),
(10, 739551, '500', 'P2025030517411640387805', 'wepay', 0, '671328700216', '9279988550', '9332894932@okbizaxis', '2025-03-05 14:12:10', 1004, 2, 2),
(11, 739567, '100', 'P2025030517411694932663', 'wepay', 0, '543049389493', '9334673782', '9332894932@okbizaxis', '2025-03-05 15:42:18', 1004, 2, 1),
(12, 739548, '100', 'P2025030517411703907860', 'wepay', 0, '543050255369', '9518021113', '9332894932@okbizaxis', '2025-03-05 15:57:12', 1004, 2, 1),
(13, 739576, '100', 'P2025030517411713434421', 'wepay', 0, '553773747474', '6280072025', '9332894932@okbizaxis', '2025-03-05 16:12:32', 1004, 2, 1),
(14, 739551, '100', 'P2025030517411732281733', 'wepay', 0, '829276391699', '9279988550', '9332894932@okbizaxis', '2025-03-05 16:44:58', 1004, 2, 1),
(15, 739542, '100', 'P2025030517411734398033', 'wepay', 0, '543056915087', '6207598694', '9332894932@okbizaxis', '2025-03-05 16:49:56', 1004, 2, 1),
(16, 739522, '100', 'P2025030517411793534537', 'wepay', 0, '721422721722', '8918542902', '9332894932@okbizaxis', '2025-03-05 18:26:03', 1004, 2, 1),
(17, 739581, '100', 'P2025030517411816746224', 'wepay', 0, '650689716201', '6381652356', '9332894932@okbizaxis', '2025-03-05 19:05:17', 1004, 2, 1),
(18, 739580, '100', 'P2025030517411847568904', 'wepay', 0, '493352727235', '9462744462', '9332894932@okbizaxis', '2025-03-05 19:56:52', 1004, 2, 1),
(19, 739561, '100', 'P2025030517411854192172', 'wepay', 0, '208860181482', '8696645528', '9332894932@okbizaxis', '2025-03-05 20:07:52', 1004, 2, 1),
(20, 739540, '100', 'P2025030617412347879215', 'wepay', 0, '506513346761', '8948523084', '9332894932@okbizaxis', '2025-03-06 09:50:26', 1004, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_extra_funds`
--

CREATE TABLE `user_extra_funds` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transaction_type` enum('credit','debit') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vip`
--

CREATE TABLE `vip` (
  `macau` int(11) NOT NULL,
  `userid` varchar(500) NOT NULL,
  `expe` varchar(500) NOT NULL,
  `lvl` varchar(500) NOT NULL,
  `createdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vip`
--

INSERT INTO `vip` (`macau`, `userid`, `expe`, `lvl`, `createdate`) VALUES
(1, '739513', '200', '0', '2025-03-04 08:20:42'),
(2, '739515', '85', '0', '2025-03-04 08:47:43'),
(3, '739521', '61511', '2', '2025-03-06 08:41:46'),
(4, '739533', '332730', '2', '2025-03-05 06:21:24'),
(5, '739531', '17492', '1', '2025-03-05 11:00:40'),
(6, '739567', '213', '0', '2025-03-05 10:25:46'),
(7, '739548', '13338', '1', '2025-03-05 15:37:29'),
(8, '739542', '136689', '2', '2025-03-06 08:32:31'),
(9, '739522', '6916', '1', '2025-03-05 16:49:27'),
(10, '739581', '30', '0', '2025-03-05 13:46:27'),
(11, '739561', '192', '0', '2025-03-05 15:04:12'),
(12, '739580', '93', '0', '2025-03-06 08:41:31'),
(13, '739551', '172', '0', '2025-03-06 05:16:38'),
(14, '739540', '409', '0', '2025-03-06 04:42:41'),
(15, '739603', '2150', '0', '2025-03-06 08:40:07');

-- --------------------------------------------------------

--
-- Table structure for table `viprec`
--

CREATE TABLE `viprec` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` tinyint(4) NOT NULL,
  `motta` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `lvl` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `viprec`
--

INSERT INTO `viprec` (`id`, `user_id`, `type`, `motta`, `created_at`, `lvl`, `status`) VALUES
(1, 739521, 2, 30.00, '2025-03-04 21:10:05', 1, 2),
(2, 739521, 1, 60.00, '2025-03-04 21:10:06', 1, 2),
(3, 739542, 1, 180.00, '2025-03-05 18:43:30', 2, 2),
(4, 739542, 2, 90.00, '2025-03-05 18:43:32', 2, 2),
(5, 739542, 1, 60.00, '2025-03-05 18:43:53', 1, 2),
(6, 739542, 2, 30.00, '2025-03-05 18:43:56', 1, 2),
(7, 739522, 2, 30.00, '2025-03-05 22:16:59', 1, 2),
(8, 739522, 1, 60.00, '2025-03-05 22:17:03', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `vyavahara`
--

CREATE TABLE `vyavahara` (
  `shonu` int(11) NOT NULL,
  `balakedara` int(11) NOT NULL,
  `ketebida` varchar(200) NOT NULL,
  `prakara` varchar(200) NOT NULL,
  `purba` varchar(200) NOT NULL,
  `bartaman` varchar(200) NOT NULL,
  `ayoga` varchar(255) DEFAULT NULL,
  `koduvavanu` varchar(200) DEFAULT NULL,
  `tiarikala` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vyavahara`
--

INSERT INTO `vyavahara` (`shonu`, `balakedara`, `ketebida`, `prakara`, `purba`, `bartaman`, `ayoga`, `koduvavanu`, `tiarikala`) VALUES
(1, 739513, '10', 'LVLCOMM1', '29953', '29953.06', '0.06', '739515', '2025-03-04 14:13:45'),
(2, 739513, '10', 'LVLCOMM1', '29953.06', '29953.12', '0.06', '739515', '2025-03-04 14:13:55'),
(3, 739513, '5', 'LVLCOMM1', '29953.12', '29953.15', '0.03', '739515', '2025-03-04 14:14:19'),
(4, 739513, '5', 'LVLCOMM1', '29953.15', '29953.18', '0.03', '739515', '2025-03-04 14:14:22'),
(5, 739513, '20', 'LVLCOMM1', '29953.18', '29953.3', '0.12', '739515', '2025-03-04 14:17:11'),
(6, 739513, '12', 'LVLCOMM1', '29953.3', '29953.37', '0.072', '739515', '2025-03-04 14:17:17'),
(7, 739513, '23', 'LVLCOMM1', '29953.37', '29953.51', '0.138', '739515', '2025-03-04 14:17:43'),
(8, 739515, '5', 'LVLCOMM1', '0', '0.03', '0.03', '739521', '2025-03-04 19:06:19'),
(9, 739513, '5', 'LVLCOMM2', '29953.51', '29953.52', '0.009', '739521', '2025-03-04 19:06:19'),
(10, 739515, '10', 'LVLCOMM1', '0.03', '0.09', '0.06', '739521', '2025-03-04 19:06:46'),
(11, 739513, '10', 'LVLCOMM2', '29953.52', '29953.54', '0.018', '739521', '2025-03-04 19:06:46'),
(12, 739515, '20', 'LVLCOMM1', '0.09', '0.21', '0.12', '739521', '2025-03-04 19:07:44'),
(13, 739513, '20', 'LVLCOMM2', '29953.54', '29953.58', '0.036', '739521', '2025-03-04 19:07:44'),
(14, 739515, '50', 'LVLCOMM1', '0.21', '0.51', '0.3', '739521', '2025-03-04 19:07:52'),
(15, 739513, '50', 'LVLCOMM2', '29953.58', '29953.67', '0.09', '739521', '2025-03-04 19:07:52'),
(16, 739515, '20', 'LVLCOMM1', '0.51', '0.63', '0.12', '739521', '2025-03-04 19:07:56'),
(17, 739513, '20', 'LVLCOMM2', '29953.67', '29953.71', '0.036', '739521', '2025-03-04 19:07:56'),
(18, 739515, '50', 'LVLCOMM1', '0.63', '0.93', '0.3', '739521', '2025-03-04 19:08:57'),
(19, 739513, '50', 'LVLCOMM2', '29953.71', '29953.8', '0.09', '739521', '2025-03-04 19:08:57'),
(20, 739515, '50', 'LVLCOMM1', '0.93', '1.23', '0.3', '739521', '2025-03-04 19:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `wingo_periods`
--

CREATE TABLE `wingo_periods` (
  `id` int(11) NOT NULL,
  `interval` varchar(10) DEFAULT NULL,
  `period_number` varchar(20) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `your_table`
--

CREATE TABLE `your_table` (
  `id` int(11) NOT NULL,
  `oid` varchar(255) DEFAULT NULL,
  `userid` varchar(255) NOT NULL,
  `form_id` int(11) DEFAULT NULL,
  `prob` text DEFAULT NULL,
  `deposit_order_no` varchar(255) DEFAULT NULL,
  `order_amount` varchar(255) DEFAULT NULL,
  `text_content` varchar(255) DEFAULT NULL,
  `utr` varchar(255) DEFAULT NULL,
  `file_upload` varchar(255) DEFAULT NULL,
  `image_upload` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `bank_account_number` text DEFAULT NULL,
  `ifsc` text DEFAULT NULL,
  `CardName` text DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '2',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amanatugolisu`
--
ALTER TABLE `amanatugolisu`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `byabaharkarta` (`byabaharkarta`);

--
-- Indexes for table `aviset`
--
ALTER TABLE `aviset`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bajikattuttate`
--
ALTER TABLE `bajikattuttate`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_aidudi`
--
ALTER TABLE `bajikattuttate_aidudi`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_aidudi_drei`
--
ALTER TABLE `bajikattuttate_aidudi_drei`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_aidudi_funf`
--
ALTER TABLE `bajikattuttate_aidudi_funf`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_aidudi_zehn`
--
ALTER TABLE `bajikattuttate_aidudi_zehn`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_drei`
--
ALTER TABLE `bajikattuttate_drei`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_funf`
--
ALTER TABLE `bajikattuttate_funf`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_kemuru`
--
ALTER TABLE `bajikattuttate_kemuru`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_kemuru_drei`
--
ALTER TABLE `bajikattuttate_kemuru_drei`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_kemuru_funf`
--
ALTER TABLE `bajikattuttate_kemuru_funf`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_kemuru_zehn`
--
ALTER TABLE `bajikattuttate_kemuru_zehn`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_trx`
--
ALTER TABLE `bajikattuttate_trx`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_trx3`
--
ALTER TABLE `bajikattuttate_trx3`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_trx5`
--
ALTER TABLE `bajikattuttate_trx5`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_trx10`
--
ALTER TABLE `bajikattuttate_trx10`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bajikattuttate_zehn`
--
ALTER TABLE `bajikattuttate_zehn`
  ADD PRIMARY KEY (`parichaya`),
  ADD KEY `idx_parichaya` (`parichaya`),
  ADD KEY `idx_byabaharkarta` (`byabaharkarta`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`),
  ADD KEY `idx_prakar` (`prakar`),
  ADD KEY `idx_ojana` (`ojana`),
  ADD KEY `idx_ketebida` (`ketebida`);

--
-- Indexes for table `bankcard`
--
ALTER TABLE `bankcard`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userid` (`userid`,`account`,`type`);

--
-- Indexes for table `banned_users`
--
ALTER TABLE `banned_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `betrec`
--
ALTER TABLE `betrec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cihne`
--
ALTER TABLE `cihne`
  ADD PRIMARY KEY (`dearlord`);

--
-- Indexes for table `commission`
--
ALTER TABLE `commission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_date` (`user_id`,`created_at`);

--
-- Indexes for table `crashbetrecord`
--
ALTER TABLE `crashbetrecord`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crashgamerecord`
--
ALTER TABLE `crashgamerecord`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `crashgamerecordtwo`
--
ALTER TABLE `crashgamerecordtwo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dailysalary`
--
ALTER TABLE `dailysalary`
  ADD PRIMARY KEY (`macau`);

--
-- Indexes for table `demo`
--
ALTER TABLE `demo`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `idx_demo` (`balakedara`,`motta`);

--
-- Indexes for table `deyya`
--
ALTER TABLE `deyya`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `deyyamrici`
--
ALTER TABLE `deyyamrici`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `egrahcer_sonub`
--
ALTER TABLE `egrahcer_sonub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gellaluhogiondu_aidudi_phalitansa`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_aidudi_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_drei`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_aidudi_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_funf`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_aidudi_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_zehn`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_kemeru_phalitansa`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_kemeru_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_drei`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_kemeru_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_funf`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_kemeru_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_zehn`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_phalitansa`
--
ALTER TABLE `gellaluhogiondu_phalitansa`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_phalitansa_drei`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_phalitansa_funf`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_phalitansa_zehn`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_trx`
--
ALTER TABLE `gellaluhogiondu_trx`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_trx3`
--
ALTER TABLE `gellaluhogiondu_trx3`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_trx5`
--
ALTER TABLE `gellaluhogiondu_trx5`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gellaluhogiondu_trx10`
--
ALTER TABLE `gellaluhogiondu_trx10`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_shonu` (`shonu`),
  ADD KEY `idx_kalaparichaya` (`kalaparichaya`);

--
-- Indexes for table `gelluonduhogu`
--
ALTER TABLE `gelluonduhogu`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_aidudi`
--
ALTER TABLE `gelluonduhogu_aidudi`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_aidudi_drei`
--
ALTER TABLE `gelluonduhogu_aidudi_drei`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_aidudi_funf`
--
ALTER TABLE `gelluonduhogu_aidudi_funf`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_aidudi_zehn`
--
ALTER TABLE `gelluonduhogu_aidudi_zehn`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_drei`
--
ALTER TABLE `gelluonduhogu_drei`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_funf`
--
ALTER TABLE `gelluonduhogu_funf`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_kemuru`
--
ALTER TABLE `gelluonduhogu_kemuru`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_kemuru_drei`
--
ALTER TABLE `gelluonduhogu_kemuru_drei`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_kemuru_funf`
--
ALTER TABLE `gelluonduhogu_kemuru_funf`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_kemuru_zehn`
--
ALTER TABLE `gelluonduhogu_kemuru_zehn`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_trx`
--
ALTER TABLE `gelluonduhogu_trx`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_trx3`
--
ALTER TABLE `gelluonduhogu_trx3`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_trx5`
--
ALTER TABLE `gelluonduhogu_trx5`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_trx10`
--
ALTER TABLE `gelluonduhogu_trx10`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `gelluonduhogu_zehn`
--
ALTER TABLE `gelluonduhogu_zehn`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `kramasankhye_atadaaidi` (`atadaaidi`);

--
-- Indexes for table `hastacalita_phalitansa`
--
ALTER TABLE `hastacalita_phalitansa`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_aidudi`
--
ALTER TABLE `hastacalita_phalitansa_aidudi`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_aidudi_drei`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_drei`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_aidudi_funf`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_funf`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_aidudi_zehn`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_zehn`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_drei`
--
ALTER TABLE `hastacalita_phalitansa_drei`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_funf`
--
ALTER TABLE `hastacalita_phalitansa_funf`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_kemeru`
--
ALTER TABLE `hastacalita_phalitansa_kemeru`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_kemeru_drei`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_drei`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_kemeru_funf`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_funf`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_kemeru_zehn`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_zehn`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hastacalita_phalitansa_zehn`
--
ALTER TABLE `hastacalita_phalitansa_zehn`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hintegedukolli`
--
ALTER TABLE `hintegedukolli`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `hodike_balakedara`
--
ALTER TABLE `hodike_balakedara`
  ADD PRIMARY KEY (`kani`);

--
-- Indexes for table `hodike_nirvahaka`
--
ALTER TABLE `hodike_nirvahaka`
  ADD PRIMARY KEY (`identite`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images_usdt`
--
ALTER TABLE `images_usdt`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `khate`
--
ALTER TABLE `khate`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `maintenance`
--
ALTER TABLE `maintenance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nirvahaka_shonu`
--
ALTER TABLE `nirvahaka_shonu`
  ADD PRIMARY KEY (`unohs`);

--
-- Indexes for table `noitativni_sonub`
--
ALTER TABLE `noitativni_sonub`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp_record`
--
ALTER TABLE `otp_record`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parametredepaiement`
--
ALTER TABLE `parametredepaiement`
  ADD PRIMARY KEY (`suckit`);

--
-- Indexes for table `rebetrec`
--
ALTER TABLE `rebetrec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sang_ka`
--
ALTER TABLE `sang_ka`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_type` (`mobile`,`type`);

--
-- Indexes for table `sang_tuke`
--
ALTER TABLE `sang_tuke`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shonu_kaichila`
--
ALTER TABLE `shonu_kaichila`
  ADD PRIMARY KEY (`kramasankhye`),
  ADD KEY `idx_shonu_kaichila` (`balakedara`,`motta`);

--
-- Indexes for table `shonu_subjects`
--
ALTER TABLE `shonu_subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_prta` (`id`,`mobile`,`owncode`,`createdate`),
  ADD KEY `idx_prtb` (`code`,`status`);

--
-- Indexes for table `spinrec`
--
ALTER TABLE `spinrec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_pg`
--
ALTER TABLE `tbl_pg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_agent`
--
ALTER TABLE `tb_agent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `telegramme`
--
ALTER TABLE `telegramme`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_status` (`status`);

--
-- Indexes for table `thevani`
--
ALTER TABLE `thevani`
  ADD PRIMARY KEY (`shonu`);

--
-- Indexes for table `user_extra_funds`
--
ALTER TABLE `user_extra_funds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vip`
--
ALTER TABLE `vip`
  ADD PRIMARY KEY (`macau`);

--
-- Indexes for table `viprec`
--
ALTER TABLE `viprec`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vyavahara`
--
ALTER TABLE `vyavahara`
  ADD PRIMARY KEY (`shonu`),
  ADD KEY `idx_balakedara` (`balakedara`),
  ADD KEY `idx_ketebida` (`ketebida`),
  ADD KEY `idx_prakara` (`prakara`),
  ADD KEY `idx_tiarikala` (`tiarikala`);

--
-- Indexes for table `wingo_periods`
--
ALTER TABLE `wingo_periods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `your_table`
--
ALTER TABLE `your_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amanatugolisu`
--
ALTER TABLE `amanatugolisu`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bajikattuttate`
--
ALTER TABLE `bajikattuttate`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3914;

--
-- AUTO_INCREMENT for table `bajikattuttate_aidudi`
--
ALTER TABLE `bajikattuttate_aidudi`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=473;

--
-- AUTO_INCREMENT for table `bajikattuttate_aidudi_drei`
--
ALTER TABLE `bajikattuttate_aidudi_drei`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `bajikattuttate_aidudi_funf`
--
ALTER TABLE `bajikattuttate_aidudi_funf`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `bajikattuttate_aidudi_zehn`
--
ALTER TABLE `bajikattuttate_aidudi_zehn`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `bajikattuttate_drei`
--
ALTER TABLE `bajikattuttate_drei`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1490;

--
-- AUTO_INCREMENT for table `bajikattuttate_funf`
--
ALTER TABLE `bajikattuttate_funf`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=907;

--
-- AUTO_INCREMENT for table `bajikattuttate_kemuru`
--
ALTER TABLE `bajikattuttate_kemuru`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1219;

--
-- AUTO_INCREMENT for table `bajikattuttate_kemuru_drei`
--
ALTER TABLE `bajikattuttate_kemuru_drei`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `bajikattuttate_kemuru_funf`
--
ALTER TABLE `bajikattuttate_kemuru_funf`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `bajikattuttate_kemuru_zehn`
--
ALTER TABLE `bajikattuttate_kemuru_zehn`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `bajikattuttate_trx`
--
ALTER TABLE `bajikattuttate_trx`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bajikattuttate_trx3`
--
ALTER TABLE `bajikattuttate_trx3`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bajikattuttate_trx5`
--
ALTER TABLE `bajikattuttate_trx5`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bajikattuttate_trx10`
--
ALTER TABLE `bajikattuttate_trx10`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bajikattuttate_zehn`
--
ALTER TABLE `bajikattuttate_zehn`
  MODIFY `parichaya` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22071;

--
-- AUTO_INCREMENT for table `bankcard`
--
ALTER TABLE `bankcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1409;

--
-- AUTO_INCREMENT for table `banned_users`
--
ALTER TABLE `banned_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `betrec`
--
ALTER TABLE `betrec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53837;

--
-- AUTO_INCREMENT for table `cihne`
--
ALTER TABLE `cihne`
  MODIFY `dearlord` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT for table `commission`
--
ALTER TABLE `commission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crashbetrecord`
--
ALTER TABLE `crashbetrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crashgamerecord`
--
ALTER TABLE `crashgamerecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crashgamerecordtwo`
--
ALTER TABLE `crashgamerecordtwo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dailysalary`
--
ALTER TABLE `dailysalary`
  MODIFY `macau` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `demo`
--
ALTER TABLE `demo`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `deyya`
--
ALTER TABLE `deyya`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `deyyamrici`
--
ALTER TABLE `deyyamrici`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `egrahcer_sonub`
--
ALTER TABLE `egrahcer_sonub`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=549;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_aidudi_phalitansa`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19954;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_aidudi_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6625;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_aidudi_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3902;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_aidudi_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_aidudi_phalitansa_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1937;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_kemeru_phalitansa`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19955;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_kemeru_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8283;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_kemeru_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3887;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_kemeru_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_kemeru_phalitansa_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1935;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_phalitansa`
--
ALTER TABLE `gellaluhogiondu_phalitansa`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21209;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_phalitansa_drei`
--
ALTER TABLE `gellaluhogiondu_phalitansa_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7033;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_phalitansa_funf`
--
ALTER TABLE `gellaluhogiondu_phalitansa_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4150;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_phalitansa_zehn`
--
ALTER TABLE `gellaluhogiondu_phalitansa_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44115;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_trx`
--
ALTER TABLE `gellaluhogiondu_trx`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7768;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_trx3`
--
ALTER TABLE `gellaluhogiondu_trx3`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2589;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_trx5`
--
ALTER TABLE `gellaluhogiondu_trx5`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1555;

--
-- AUTO_INCREMENT for table `gellaluhogiondu_trx10`
--
ALTER TABLE `gellaluhogiondu_trx10`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=777;

--
-- AUTO_INCREMENT for table `gelluonduhogu`
--
ALTER TABLE `gelluonduhogu`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=909;

--
-- AUTO_INCREMENT for table `gelluonduhogu_aidudi`
--
ALTER TABLE `gelluonduhogu_aidudi`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gelluonduhogu_aidudi_drei`
--
ALTER TABLE `gelluonduhogu_aidudi_drei`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT for table `gelluonduhogu_aidudi_funf`
--
ALTER TABLE `gelluonduhogu_aidudi_funf`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `gelluonduhogu_aidudi_zehn`
--
ALTER TABLE `gelluonduhogu_aidudi_zehn`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `gelluonduhogu_drei`
--
ALTER TABLE `gelluonduhogu_drei`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT for table `gelluonduhogu_funf`
--
ALTER TABLE `gelluonduhogu_funf`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `gelluonduhogu_kemuru`
--
ALTER TABLE `gelluonduhogu_kemuru`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=908;

--
-- AUTO_INCREMENT for table `gelluonduhogu_kemuru_drei`
--
ALTER TABLE `gelluonduhogu_kemuru_drei`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=302;

--
-- AUTO_INCREMENT for table `gelluonduhogu_kemuru_funf`
--
ALTER TABLE `gelluonduhogu_kemuru_funf`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `gelluonduhogu_kemuru_zehn`
--
ALTER TABLE `gelluonduhogu_kemuru_zehn`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `gelluonduhogu_trx`
--
ALTER TABLE `gelluonduhogu_trx`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5260;

--
-- AUTO_INCREMENT for table `gelluonduhogu_trx3`
--
ALTER TABLE `gelluonduhogu_trx3`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1754;

--
-- AUTO_INCREMENT for table `gelluonduhogu_trx5`
--
ALTER TABLE `gelluonduhogu_trx5`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1053;

--
-- AUTO_INCREMENT for table `gelluonduhogu_trx10`
--
ALTER TABLE `gelluonduhogu_trx10`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=527;

--
-- AUTO_INCREMENT for table `gelluonduhogu_zehn`
--
ALTER TABLE `gelluonduhogu_zehn`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1906;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa`
--
ALTER TABLE `hastacalita_phalitansa`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_aidudi`
--
ALTER TABLE `hastacalita_phalitansa_aidudi`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_aidudi_drei`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_aidudi_funf`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_aidudi_zehn`
--
ALTER TABLE `hastacalita_phalitansa_aidudi_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_drei`
--
ALTER TABLE `hastacalita_phalitansa_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_funf`
--
ALTER TABLE `hastacalita_phalitansa_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_kemeru`
--
ALTER TABLE `hastacalita_phalitansa_kemeru`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_kemeru_drei`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_drei`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_kemeru_funf`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_funf`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_kemeru_zehn`
--
ALTER TABLE `hastacalita_phalitansa_kemeru_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hastacalita_phalitansa_zehn`
--
ALTER TABLE `hastacalita_phalitansa_zehn`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hintegedukolli`
--
ALTER TABLE `hintegedukolli`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=305;

--
-- AUTO_INCREMENT for table `hodike_balakedara`
--
ALTER TABLE `hodike_balakedara`
  MODIFY `kani` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=424;

--
-- AUTO_INCREMENT for table `hodike_nirvahaka`
--
ALTER TABLE `hodike_nirvahaka`
  MODIFY `identite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `images_usdt`
--
ALTER TABLE `images_usdt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `khate`
--
ALTER TABLE `khate`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `maintenance`
--
ALTER TABLE `maintenance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nirvahaka_shonu`
--
ALTER TABLE `nirvahaka_shonu`
  MODIFY `unohs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `noitativni_sonub`
--
ALTER TABLE `noitativni_sonub`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `otp_record`
--
ALTER TABLE `otp_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parametredepaiement`
--
ALTER TABLE `parametredepaiement`
  MODIFY `suckit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rebetrec`
--
ALTER TABLE `rebetrec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sang_ka`
--
ALTER TABLE `sang_ka`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sang_tuke`
--
ALTER TABLE `sang_tuke`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shonu_kaichila`
--
ALTER TABLE `shonu_kaichila`
  MODIFY `kramasankhye` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `shonu_subjects`
--
ALTER TABLE `shonu_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=739610;

--
-- AUTO_INCREMENT for table `spinrec`
--
ALTER TABLE `spinrec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_pg`
--
ALTER TABLE `tbl_pg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tb_agent`
--
ALTER TABLE `tb_agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `telegramme`
--
ALTER TABLE `telegramme`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `thevani`
--
ALTER TABLE `thevani`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user_extra_funds`
--
ALTER TABLE `user_extra_funds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vip`
--
ALTER TABLE `vip`
  MODIFY `macau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `viprec`
--
ALTER TABLE `viprec`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `vyavahara`
--
ALTER TABLE `vyavahara`
  MODIFY `shonu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=955;

--
-- AUTO_INCREMENT for table `wingo_periods`
--
ALTER TABLE `wingo_periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `your_table`
--
ALTER TABLE `your_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
