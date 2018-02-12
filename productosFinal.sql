CREATE DATABASE  IF NOT EXISTS `proyecto_lunes` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyecto_lunes`;
-- MySQL dump 10.13  Distrib 5.6.13, for osx10.6 (i386)
--
-- Host: 18.217.173.77    Database: proyecto_lunes
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `idproductos` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `precio` varchar(50) DEFAULT NULL,
  `caracteristicas` varchar(500) DEFAULT NULL,
  `precioOferta` varchar(45) DEFAULT NULL,
  `fechaIngreso` varchar(45) DEFAULT NULL,
  `fechaInicioOferta` varchar(45) DEFAULT NULL,
  `fechaFinOferta` varchar(45) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idproductos`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'GIGABYTE Z370 AORUS Ultra Gaming','(Intel LGA1151/ Z370/ ATX/ 2xM.2/ Front USB 3.1/ RGB Fusion/ Fan Stop / SLI / Motherboard)','Z370',1,'96000','Supports 8th Generation Intel Core Processors;USB3.1 Gen2 with USB Type-C;Front USB 3.1 Type-C header;Intel Gigabit LAN;RGB FUSION with Multi-Zone LED Light Show Design',NULL,NULL,NULL,NULL,23,'Aorus_1.jpg','GIGABYTE'),(2,'MSI Gaming Intel B250 LGA 1151',' DDR4 HDMI VR Ready ATX Motherboard (B250 GAMING M3)','Gaming Intel B250',1,'67000','Supports DDR4-2400 Memory;Twin Turbo M.2 with Steel Armor;Audio Boost 4 with Nahimic 2;Multi GPU Support;Supports AMD Crossfire;Supports 7th/6th Gen Intel Core/Pentium/Celeron processors for LGA 1151 socket',NULL,NULL,NULL,NULL,87,'msi_1.png','MSI'),(3,'ASUS ROG STRIX B250H','DDR4 HDMI DVI M.2 ATX Motherboard with USB 3.1','ROG STRIX B250H',1,'71000','Maximize your connectivity and speed with Dual NVMe M.2, USB 3.1 and Intel Optane Memory compatibility;Gamer\'s Guardian hardware-level safeguards provide component longevity and reliability;Fan Xpert 3 allows for dynamic fan calibration and optimized system cooling while gaming;Industry-leading 8-channel HD audio with the ROG exclusive SupremeFX S1220A driven by Japanese capacitors',NULL,NULL,NULL,NULL,23,'Asus_1.jpg','ASUS'),(4,'MSI Arsenal Gaming','DDR4 HDMI USB 3 CrossFire ATX Motherboard (Z270 GAMING PLUS)','Arsenal Gaming',1,'85000','Supports 7th/6th Gen Intel Core/Pentium/Celeron processors for LGA 1151 socket;',NULL,NULL,NULL,NULL,12,'msi_2.jpg','MSI '),(5,'GIGABYTE GA-H110M-A LGA1151','Intel H110 Micro ATX DDR4','GA-H110M-A ',1,'78000','LGA1151, Supports 7th/ 6th Generation Intel Core Processors;',NULL,NULL,NULL,NULL,45,'gigabyte_2.png','GIGABYTE '),(6,'MSI GeForce GTX 1050 TI GAMING X 4G','MSI NVIDIA GeForce GTX 1050 TI GAMING X 4GB GDDR5 DVI/HDMI/DisplayPort PCI-Express Video Card','MSI Computer Video Graphic Cards GeForce GTX 1050 TI GAMING X 4G',2,'155673','Chipset: NVIDIA GeForce GTX 1050 It;Video Memory: 4GB GDDR5;Memory Interface: 128-bit;Max. Resolution: 2560 x 1600, Support 3x Display Monitors',NULL,NULL,NULL,NULL,10,'p1.png','MSI'),(7,'EVGA GeForce 8400',' Los procesadores gráficos GeForce 8400 GS son excelentes para acelerar la ejecución de Windows Vista, jugar con los últimos títulos DirectX 9 y DirectX 10 o ver películas en HD DVD y Blu-ray desde el PC.','EVGA GeForce 8400 GS 1024MB DDR3 PCI-E 2.0 Graphics Card DVI/HDMI/VGA 01G-P3-1302-LR',2,'22971','EVGA 8400 GS has awesome features at an incredible value - Essential for watching HD DVD and Blu-ray movies on a PC;EVGA\'s 24/7 Technical Support;Base Clock: 520 MHz;Memory Clock: 1200 MHz Effective',NULL,NULL,NULL,NULL,20,'p2.jpg','EVGA'),(8,'Radeon HD 5450','Radeon HD 5450 1 GB DDR3 HDMI / DVI-I / VGA PCI-Express Tarjeta gráfica 100292DDR3L','Radeon HD 5450 1 GB DDR3',2,'34460','Interfaz de bus PCI-Express 2.1 x16;Memoria DDR3;Compatibilidad con Microsoft DirectX 11;Soporte de Microsoft Windows 7',NULL,NULL,NULL,NULL,15,'p3.jpg','AMD'),(9,'Asus ATI Radeon HD6450','Asus ATI Radeon HD6450 Silence 1 GB DDR3 VGA/DVI/HDMI Low Profile PCI-Express Video Card (EAH6450 SILENT/DI/1GD3(LP))','Asus ATI Radeon HD6450 Silence 1 GB DDR3 ',2,'26395','Exclusive 0dB thermal design dissipates heat efficiently without any noise;ASUS low profile HTPC and multimedia-focused graphics cards are optimized for smooth 1920x1080 streaming and Blu-ray 3D;EMI Shield Reduces 66% of electromagnetic interference for a stable signal, clearer screen display and a safer, healthier computing environment.',NULL,NULL,NULL,NULL,5,'p4.jpg','ASUS'),(10,'PNY XLR8 GTS 250','PNY XLR8 GTS 250-1024 MB PCI-Express 2.0 Dual DVI Graphics Card VCGGTS2501LXPB','PNY XLR8 GTS 250-1024 MB ',2,'57415','Includes NVIDIA PhysX;Features Windows 7;Also includes 3-way SLI;Microsoft DirectX 10',NULL,NULL,NULL,NULL,12,'p5.jpg','NVIDIA'),(11,'AMD Ryzen 7 1700X','AMD Ryzen 7 1700X Processor (YD170XBCAEWOF)','Ryzen',3,'150000','Frequency: 3.8 GHz Precision Boost;8 Cores/16 Threads UNLOCKED;Cache: 4 MB/16 MB (L2/L3),PCI Express Version : PCIe 3.0;Socket Type: AM4;Extended Frequency Range (XFR);Requires a thermal solution sold separately',NULL,NULL,NULL,NULL,10,'ryzen1.png','AMD'),(12,'AMD Ryzen 7 1800X','AMD Ryzen 7 1800X Processor (YD180XBCAEWOF)','Ryzen',3,'175000','Requires a thermal solution sold separately',NULL,NULL,NULL,NULL,20,'ryzen2.jpg','AMD'),(13,'AMD Ryzen 5 1600X','AMD Ryzen 5 1600X Processor (YD160XBCAEWOF)','Ryzen',3,'110000','Frequency: 4.0 GHz Precision Boost;',NULL,NULL,NULL,NULL,30,'ryzen3.png','AMD'),(14,'Intel Core i3-7100','Intel Core i3-7100 7th Gen Core Desktop Processor 3M Cache,3.90 GHz (BX80677I37100)','I3',3,'55000','Socket LGA 1151;',NULL,NULL,NULL,NULL,40,'intel1.jpg','INTEL'),(15,'Intel Core i5-8600K','Intel BX80684I58600K 8th Gen Core i5-8600K Processor','I5',3,'130000','Compatible only with Motherboards based on Intel 300 Series Chipsets;',NULL,NULL,NULL,NULL,50,'intel2.jpg','INTEL'),(16,'Intel Boxed Core i7-6950X','Intel Boxed Core i7-6950X Processor Extreme Edition (25M Cache, up to 3.50 GHz) 3.0 10 BX80671I76950X','I7',3,'750000','10 Core/20 Thread;',NULL,NULL,NULL,NULL,3,'intel3.jpg','INTEL'),(17,'Corsair Vengeance LPX',' Módulo de memoria XMP 2.0 de alto rendimiento de 16 GB (2 x 8 GB, DDR4, 3000 MHz, C15), negro (CMK16GX4M2B3000C15)','Vengeance LPX',4,'99000','Cada módulo Vengeance LPX se fabrica con un disipador de aluminio puro para una disipación térmica más rápida;Disponible en varios colores para combinarlo con tu placa base, tus componentes o simplemente tu estilo;Vengeance LPX está optimizada y es compatible con las últimas placas de la serie X99, 100 y 200, y ofrece frecuencias más altas, mayor ancho de banda y menor consumo;La altura de los módulos Vengeance LPX está pensada incluso para espacios pequeños;Compatibilidad con XMP 2.0 para un Ov',NULL,NULL,NULL,NULL,10,'Corsair.jpg','Corsair'),(18,'HyperX FURY','Memoria RAM de 8 GB (2400 MHz, DDR4, CL15 DIMM)','Fury',4,'45000','8 GB 2400 MHz DDR4 CL15 DIMM HyperX FURY Black;Overclock automático hasta 2666 MHz;Ampliación de alto rendimiento asequible;Disipador de calor elegante y de perfil bajo, con el exclusivo diseño asimétrico FURY;',NULL,NULL,NULL,NULL,9,'HyperX.jpg','HyperX'),(19,'G.Skill 16 GB RipjawsX ','G.Skill 16 GB RipjawsX - Memoria RAM (Kit 2 x 8GB, DDR3-1600 MHz, PC3 12800, CL 10), Rojo',' RipjawsX',4,'82000','Compatible con plataformas INTEL y AMD;RipjawsX ofrece la más alta calidad, velocidad, el tiempo más bajo, y la estabilidad más firme;Equipado con perfiles XMP y capacitado de doble canal;Factor de forma 240 pines, 1.5V Clase 10, DDR3-1600 MHz;',NULL,NULL,NULL,NULL,8,'G.Skill.jpg','G.Skill '),(20,'Ballistix Tactical ','Ballistix Tactical 16GB Kit (8GBx2) DDR3 1600 MT/s (PC3-12800) UDIMM 240-Pin - BLT2CP8G3D1608DT1TX0CEU','Ballistix Tactical 16GB Kit',4,'99200','Kit de 2 x 8 GB DDR3;1600 MHz;Latencia CAS: 8;Tipo de memoria: PC3-12800',NULL,NULL,NULL,NULL,5,'Ballistix.png','Ballistix'),(21,'Avexir AVD3U18660904G-4CI ','Avexir AVD3U18660904G-4CI - Memoria RAM de 16 GB (clase 9)','AVD3U18660904G-4CI ',4,'113000','Capacidad:16 GB : 4 x 4 GB;Tipo de actualización:Genérico;',NULL,NULL,NULL,NULL,7,'Avexir.jpg','Avexir'),(22,'Corsair Dominator Platinum  ','Corsair Dominator Platinum - Módulo de memoria XMP 2.0 de 16 GB (2 x 8 GB, DDR4, 2666 MH, CL15) (CMD16GX4M2A2666C15',' Dominator Platinum ',4,'145000','Tamaño de memoria: 16 GB DDR4 (2 módulos de 8 GB);Velocidad de memoria del reloj de 2666 MHz;Factor de forma: 288-pin DIMM;Utiliza un voltaje de 1.2 ;Utiliza un voltaje de 1.2 ;',NULL,NULL,NULL,NULL,5,' CorsairDominator.jpg',' Corsair ');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-12 10:06:47
