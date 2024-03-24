-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 24, 2024 at 04:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trendify`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_products`
--

CREATE TABLE `cart_products` (
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `count` int(11) NOT NULL DEFAULT 1,
  `total_product_price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `created_at`, `updated_at`) VALUES
(1, 'Mobile phones', '2024-03-15 17:06:39', '2024-03-15 17:06:39'),
(2, 'Laptops', '2024-03-15 17:07:05', '2024-03-15 17:07:05'),
(3, 'Fragrances', '2024-03-15 17:07:28', '2024-03-15 17:07:28'),
(4, 'Skincare', '2024-03-15 17:08:12', '2024-03-15 17:08:12'),
(5, 'Groceries', '2024-03-15 17:09:34', '2024-03-15 17:09:37'),
(6, 'Home-decoration', '2024-03-15 17:09:22', '2024-03-15 17:09:22'),
(7, 'Furniture', '2024-03-15 17:10:17', '2024-03-15 17:10:17'),
(8, 'Tops', '2024-03-15 17:10:45', '2024-03-15 17:10:45'),
(9, 'Womens-dresses', '2024-03-15 17:11:01', '2024-03-15 17:11:01'),
(10, 'Womens-shoes', '2024-03-15 17:11:33', '2024-03-15 17:11:33'),
(11, 'Mens-shirts', '2024-03-15 17:11:45', '2024-03-15 17:11:45'),
(12, 'Mens-shoes', '2024-03-15 17:12:18', '2024-03-15 17:12:18'),
(13, 'Womens-watches', '2024-03-15 17:13:11', '2024-03-15 17:13:11'),
(14, 'Womens-bags', '2024-03-15 17:13:29', '2024-03-15 17:13:29'),
(15, 'Womens-jewellery', '2024-03-15 17:13:53', '2024-03-15 17:13:53'),
(16, 'Sunglasses', '2024-03-15 17:14:08', '2024-03-15 17:14:08'),
(17, 'Automotive', '2024-03-15 17:14:33', '2024-03-15 17:14:33'),
(18, 'Motorcycle', '2024-03-15 17:14:50', '2024-03-15 17:14:50'),
(19, 'Lighting', '2024-03-15 17:15:15', '2024-03-15 17:15:15');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `egypt_cities`
--

CREATE TABLE `egypt_cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `egypt_cities`
--

INSERT INTO `egypt_cities` (`id`, `city_name`, `created_at`, `updated_at`) VALUES
(1, 'Alexandria', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(2, 'Aswan', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(3, 'Asyut', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(4, 'Beheira', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(5, 'Beni Suef', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(6, 'Cairo', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(7, 'Dakahlia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(8, 'Damietta', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(9, 'Fayoum', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(10, 'Gharbia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(11, 'Giza', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(12, 'Ismailia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(13, 'Kafr al-Sheikh', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(14, 'Luxor', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(15, 'Matruh', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(16, 'Minya', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(17, 'Monufia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(18, 'New Valley', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(19, 'Port Said', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(20, 'Qalyubia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(21, 'Qena', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(22, 'Red Sea', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(23, 'Sharqia', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(24, 'Sohag', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(25, 'South Sinai', '2024-03-18 21:25:35', '2024-03-18 21:25:35'),
(26, 'Suez', '2024-03-18 21:25:35', '2024-03-18 21:25:35');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favourite_products`
--

CREATE TABLE `favourite_products` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2014_10_12_000000_create_users_table', 2),
(3, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(4, '2019_08_19_000000_create_failed_jobs_table', 2),
(5, '2024_03_12_124211_create_categories_table', 2),
(6, '2024_03_12_124547_create_products_table', 2),
(7, '2024_03_12_124642_create_product_images_table', 2),
(8, '2024_03_12_124755_create_favourite_products_table', 2),
(9, '2024_03_13_131720_create_carts_table', 2),
(10, '2024_03_13_133325_create_shipping_details_table', 2),
(11, '2024_03_14_191017_create_favourite_products_table', 3),
(13, '2024_03_15_164802_add_stock_and_rate_columns_to_products_table', 4),
(14, '2024_03_15_174430_create_products_table', 5),
(16, '2024_03_15_175349_create_products_table', 6),
(17, '2024_03_15_183932_create_product_images_table', 7),
(18, '2024_03_15_130747_create_carts_table', 8),
(19, '2024_03_15_130956_create_cart_products_table', 8),
(20, '2024_03_13_133450_create_egypt_cities_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` longtext NOT NULL,
  `price` varchar(255) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `rate` double(8,2) UNSIGNED DEFAULT NULL,
  `location_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `stock`, `rate`, `location_id`, `user_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'SAMSUNG Galaxy S24 Ultra - Gray', 'The SAMSUNG Galaxy S24 Ultra is a pinnacle of smartphone technology, boasting an AI-driven Android experience for seamless performance. With its expansive 256GB storage and 12GB RAM, multitasking is effortless, providing ample space for apps and media. Its revolutionary 200MP camera ensures every moment is captured with astonishing detail, complemented by the precision of the S Pen stylus. All these features are supported by a long-lasting battery, ensuring uninterrupted usage throughout your day.', '66350', 5, 4.50, NULL, 1, 1, '2024-03-15 18:09:34', '2024-03-15 18:09:34'),
(2, 'Samsung Galaxy A54 - Awesome Lime', 'The Samsung Galaxy A54 offers a sleek design and reliable performance, making it a standout choice in the mid-range smartphone market. With its vibrant display and powerful processor, it provides an immersive experience for browsing, gaming, and multimedia consumption. Its versatile camera setup captures crisp photos and videos, while the long-lasting battery ensures you stay connected throughout your day, making the Galaxy A54 a dependable companion for everyday use.', '16999', 10, 4.00, NULL, 1, 1, '2024-03-15 16:25:47', '2024-03-15 16:25:47'),
(3, 'Samsung Galaxy S23 FE - Mint', 'The Samsung Galaxy S23 FE in Mint color exudes style and sophistication, offering a refreshing twist to your smartphone experience. With its powerful features and sleek design, it stands out as a premium choice in the Galaxy lineup. Equipped with advanced camera capabilities and a vibrant display, it captures every moment with stunning clarity and detail. Its long-lasting battery and smooth performance ensure that you can stay connected and productive all day long, making the Galaxy S23 FE in Mint a perfect blend of elegance and functionality.', '39089', 7, 4.30, NULL, 1, 1, '2024-03-15 18:46:19', '2024-03-15 18:46:19'),
(4, 'realme C53 - Mighty Black', 'The realme C53 in Mighty Black combines sleek design with impressive performance, making it an ideal choice for budget-conscious consumers. With its powerful processor and ample RAM, it delivers smooth multitasking and swift app launches. The vibrant display provides an immersive viewing experience for multimedia content and gaming. Additionally, the realme C53\'s long-lasting battery ensures you can stay connected on the go without worrying about running out of power, making it a reliable companion for your daily adventures in a stylish black finish.', '6575', NULL, NULL, 1, 2, 1, '2024-03-15 18:46:19', '2024-03-15 18:46:19'),
(5, 'Samsung Galaxy A15 - Black', 'The Samsung Galaxy A15 in Black offers a sleek and sophisticated design, blending seamlessly into your lifestyle. With its large, immersive display, you can enjoy vibrant visuals and crisp details while streaming your favorite content or browsing the web. The powerful processor ensures smooth performance for everyday tasks, from messaging to gaming. Plus, with its long-lasting battery life, you can stay connected and productive throughout the day without needing to constantly recharge. The Galaxy A15 in Black is a stylish and reliable choice for anyone looking for an affordable yet feature-packed smartphone.', '9499', 18, 3.90, NULL, 1, 1, '2024-03-15 18:54:10', '2024-03-15 18:54:10'),
(6, 'Dell Vostro 3520 Laptop - Carbon Black', 'The Dell Vostro 3520 Laptop redefines productivity with its 12th Gen Intel Core i7-1255U 10-Core processor, offering unparalleled performance for demanding tasks. Paired with 8GB RAM and a speedy 512GB SSD, it ensures seamless multitasking and swift data access. The NVIDIA GeForce MX550 graphics card with 2GB GDDR6 memory delivers stunning visuals and smooth gaming experiences. Featuring a vibrant 15.6\" FHD display with a 120Hz refresh rate and anti-glare technology, it provides an immersive viewing experience. Running Ubuntu, it offers a secure and customizable operating system experience. Finished in Carbon Black, it exudes professionalism and style for business or personal use.', '34999', 3, 4.60, NULL, 1, 2, '2024-03-15 19:40:41', '2024-03-15 19:40:41'),
(7, 'Lenovo V15 G2 Laptop - Black', 'The Lenovo V15 G2 Laptop is a versatile computing solution, featuring a powerful Ryzen 5-5500U 6-Core processor for smooth performance across various tasks. With 8GB of RAM, multitasking becomes effortless, while the spacious 1TB HDD offers ample storage for your files and media. Integrated AMD Radeon Graphics ensure crisp visuals on the vibrant 15.6\" FHD display, while the anti-glare feature enhances viewing comfort in various lighting conditions. Running DOS, it provides a flexible platform for customization and compatibility with your preferred operating system. Finished in sleek black, the Lenovo V15 G2 Laptop combines style with functionality for work or entertainment.', '26999', NULL, NULL, 1, 2, 2, '2024-03-15 19:40:41', '2024-03-15 19:40:41'),
(8, 'ASUS Vivobook Go 14', 'The ASUS Vivobook Go 14 is a compact and lightweight laptop designed for on-the-go productivity. Powered by an efficient Celeron® N4020 processor and 4GB of RAM, it handles everyday computing tasks with ease. The 14.0-inch HD display offers crisp visuals, while the 128GB eMMC storage provides ample space for your files and applications. With Windows 11 pre-installed, you\'ll enjoy a modern and intuitive user experience. The English keyboard layout ensures comfortable typing, making the ASUS Vivobook Go 14 an ideal choice for work or study.', '7999', 7, 3.10, NULL, 1, 2, '2024-03-15 19:40:41', '2024-03-15 19:40:41'),
(9, '2021 Apple MacBook Pro - Space Grey', 'The 2021 Apple MacBook Pro (16-inch) with the Apple M1 Max chip redefines professional computing with its exceptional performance and stunning design. Equipped with a 10-core CPU and 32-core GPU, it delivers unparalleled power for demanding tasks like video editing, 3D rendering, and more. With 32GB of RAM and a 1TB SSD, it offers ample memory and storage for multitasking and storing large files. The sleek Space Grey finish adds a touch of sophistication, making it a standout choice for professionals and creatives alike.', '172222', 2, 4.80, NULL, 1, 2, '2024-03-15 19:40:41', '2024-03-15 19:40:41'),
(10, 'HP Victus Gaming Laptop - Mica Silver', 'The HP Victus Gaming Laptop packs a punch with its 12th Gen Intel i5-12450H 8-Core processor and 8GB of RAM, ensuring smooth gaming and multitasking. Its Nvidia GeForce GTX 1650 graphics card with 4GB GDDR6 memory delivers stunning visuals, while the 15.6\" FHD display with a 144Hz refresh rate provides an immersive gaming experience. Finished in Mica Silver, it\'s as stylish as it is powerful, making it a standout choice for gaming enthusiasts.', '35679', NULL, NULL, 2, 3, 2, '2024-03-15 19:40:41', '2024-03-15 19:40:41'),
(11, 'Andora mens Button Down Collar 32W22M3905 Shirt\r\n', 'Elevate your style with the Andora Men\'s Button Down Collar Shirt, a timeless essential for any wardrobe. Crafted with precision, its 32W22M3905 design exudes sophistication and versatility. From casual gatherings to formal occasions, this shirt effortlessly combines comfort and elegance for a polished look.', '449', 20, 2.90, NULL, 1, 11, '2024-03-15 22:03:53', '2024-03-15 22:03:53'),
(12, 'Long Sleeves Shirt', 'Step up your style game with this classic Long Sleeve Shirt, a versatile staple for any wardrobe. Perfect for both casual and formal occasions, its timeless design ensures a polished look every time. Crafted with comfort in mind, this shirt offers effortless sophistication for the modern man.', '449', 9, 3.30, NULL, 1, 11, '2024-03-15 22:03:53', '2024-03-15 22:03:53'),
(13, 'White Rabbit For Men\'s Round Collar Sweatshirt With Side Pocket', 'Embrace comfort and style with the White Rabbit Men\'s Round Collar Sweatshirt featuring convenient side pockets. Crafted for versatility, this sweatshirt offers a perfect blend of functionality and fashion. Elevate your casual wardrobe with its understated elegance and cozy design, ideal for any laid-back outing or relaxed day.', '269', 12, 3.20, NULL, 1, 11, '2024-03-15 22:03:53', '2024-03-15 22:03:53'),
(14, 'Andora Mens Plaids Button Down-36W24M3906 Western', 'Elevate your Western-inspired look with the Andora Men\'s Plaids Button Down Shirt in 36W24M3906 design. This shirt combines classic charm with modern flair, perfect for both casual and semi-formal occasions. With its timeless plaid pattern and comfortable fit, make a statement of style wherever you go.', '399', 18, 3.40, NULL, 1, 11, '2024-03-15 22:03:53', '2024-03-15 22:03:53'),
(15, 'White Rabbit For Men\'s Front Print Sweatshirt With Hem\r\n', 'Stay ahead in style with the White Rabbit Men\'s Front Print Sweatshirt featuring a stylish hem design. This sweatshirt seamlessly blends comfort and fashion, making it a wardrobe essential. With its eye-catching front print and contemporary silhouette, elevate your casual ensemble ', '269', 8, 2.90, NULL, 1, 11, '2024-03-15 22:03:53', '2024-03-15 22:03:53'),
(16, 'Andora womens Oldish Vibes V Neck Dress 37S24W30303 Dress', 'Embrace retro chic with the Andora Women\'s \"Oldish Vibes\" V Neck Dress, a charming blend of vintage elegance and modern flair. Featuring a flattering V-neckline and a timeless silhouette, this dress exudes effortless sophistication. Whether for a casual outing or a special occasion, elevate your style with this versatile and nostalgic piece.', '449', NULL, NULL, 3, 4, 9, '2024-03-15 22:30:54', '2024-03-15 22:30:54'),
(17, 'Andora womens Floral Long Sleeves 37S24W30306 Dress', 'Indulge in feminine charm with the Andora Women\'s Floral Long Sleeve Dress, 37S24W30306. Adorned with a delightful floral pattern, this dress offers a perfect balance of elegance and allure. Its long sleeves add a touch of sophistication, making it ideal for any day-to-night occasion. Step into timeless beauty with this enchanting piece from Andora.', '549', 8, 4.10, NULL, 1, 9, '2024-03-15 22:30:54', '2024-03-15 22:30:54'),
(18, 'Andora womens Self Patterned Buttoned 37S24W30305 Dress\r\n', 'Introducing the Andora Women\'s Self-Patterned Buttoned Dress, 37S24W30305, a symbol of timeless sophistication. This dress boasts a chic self-patterned design complemented by elegant button detailing, perfect for any occasion. Embrace effortless style and confidence with this versatile piece from Andora, defining modern elegance with every wear.', '449', 17, 3.60, NULL, 1, 9, '2024-03-15 22:30:54', '2024-03-15 22:30:54'),
(19, 'Andora womens Turn Down Collar Plain 37S24W30301 Dress\r\n', 'Introducing the Andora Women\'s Turn Down Collar Plain Dress, 37S24W30301, a timeless wardrobe essential. With its understated elegance and classic turn-down collar design, this dress exudes sophistication. Whether for work or weekend outings, elevate your style effortlessly with this versatile piece from Andora, perfect for any occasion.', '549', 11, 4.70, NULL, 1, 9, '2024-03-15 22:30:54', '2024-03-15 22:30:54'),
(20, 'Andora womens Cap Sleeves Textured 37S24W30302 Dress\r\n', 'Introducing the Andora Women\'s Cap Sleeves Textured Dress, 37S24W30302, a perfect blend of sophistication and charm. Featuring elegant cap sleeves and a textured fabric, this dress adds a touch of refinement to any ensemble. From daytime events to evening soirées, exude effortless style with this versatile and chic piece from Andora.', '449', 20, 4.90, NULL, 1, 9, '2024-03-15 22:30:54', '2024-03-15 22:30:54'),
(21, 'Luna - Emollient Saving Bundle', 'Luna Emollient Saving Bundle: Your ultimate skincare solution in one package. Hydrate, nourish, and protect your skin with our luxurious emollient products. Experience glowing, supple skin at an unbeatable value.', '158', NULL, NULL, 3, 4, 4, '2024-03-18 22:06:25', '2024-03-18 22:06:25'),
(22, 'AXE Body Spray Black Night ', 'AXE Body Spray Black Night: Unleash your boldness with a seductive blend of spices and dark woods. Captivate senses with a long-lasting fragrance that exudes confidence. Make every night memorable with this irresistible scent.', '79', 2, 3.00, NULL, 1, 4, '2024-03-18 22:06:25', '2024-03-18 22:06:25'),
(23, 'Glysolid glycerin cream - 250 ml', 'Glysolid Glycerin Cream (250ml): Experience intensive moisturization for dry, rough skin. Formulated with pure glycerin to nourish and soften, leaving skin smooth and hydrated. Say goodbye to dryness with this trusted skincare essential.', '84', 70, 3.30, NULL, 1, 4, '2024-03-18 22:11:19', '2024-03-18 22:11:19'),
(24, 'CeraVe Moisturising Lotion | 236ml', 'CeraVe Moisturizing Lotion (236ml): A dermatologist-recommended formula enriched with essential ceramides and hyaluronic acid to hydrate and restore the skin\'s protective barrier. Lightweight and non-greasy, it provides 24-hour hydration for all-day comfort. Suitable for normal to dry skin, fragrance-free, and developed with the needs of sensitive skin in mind.', '523', 25, 4.20, NULL, 1, 4, '2024-03-18 22:11:19', '2024-03-18 22:11:19'),
(25, 'Eva skin clinic Collagen BB Cream Dark ', 'Eva Skin Clinic Collagen BB Cream Dark: Achieve flawless coverage while nourishing your skin with collagen-infused formula. Blurs imperfections, evens skin tone, and provides a radiant, natural-looking finish. Perfect for those seeking a multitasking beauty solution.', '230', 10, 2.30, NULL, 1, 4, '2024-03-18 22:11:19', '2024-03-18 22:11:19'),
(26, 'LANEIGE Mini Lip Sleeping Mask - 3g', 'LANEIGE Mini Lip Sleeping Mask (3g): Pamper your lips with this nourishing overnight treatment, enriched with Berry Mix Complex™. Wake up to smoother, softer lips as it gently exfoliates and moisturizes. Conveniently sized for on-the-go hydration and care.', '44', 50, 4.70, NULL, 1, 4, '2024-03-18 22:52:46', '2024-03-18 22:52:46'),
(27, 'Oz Naturals Hyaluronic Acid Serum with Vitamin C 30 ml', 'Oz Naturals Hyaluronic Acid Serum with Vitamin C (30ml): Experience the power of hydration and brightening with this potent serum. Formulated with hyaluronic acid and vitamin C, it helps plump and rejuvenate the skin, promoting a more youthful complexion. Achieve a radiant glow and combat signs of aging with this essential skincare product.', ' 820', 9, 3.20, NULL, 1, 4, '2024-03-18 22:52:46', '2024-03-18 22:52:46'),
(28, 'Bobana- charcoal peel off face mask, 120 gm', 'Bobana Charcoal Peel Off Face Mask (120g): Purify and detoxify your skin with this deep-cleansing charcoal mask. Designed to unclog pores, remove blackheads, and absorb excess oil for a refreshed complexion. Experience smoother, clearer skin with regular use of this rejuvenating mask.', '56', 3, 1.20, NULL, 1, 4, '2024-03-18 22:52:46', '2024-03-18 22:52:46'),
(29, 'OZ Naturals Hyaluronic Acid Facial Serum, 30 ml', 'OZ Naturals Hyaluronic Acid Facial Serum (30ml): Replenish and hydrate your skin with this advanced serum. Infused with hyaluronic acid, it locks in moisture, reducing the appearance of fine lines and wrinkles. Achieve a plump, radiant complexion with this essential addition to your skincare routine.', '620', 6, 3.40, NULL, 1, 4, '2024-03-18 22:52:46', '2024-03-18 22:52:46'),
(30, 'Man look after shave balm w. aloe vera for sensitive skin. eva cosmetics, 125g', 'Eva Cosmetics Man Look After Shave Balm (125g): Soothe and nourish sensitive skin post-shave with this calming balm. Enriched with aloe vera, it provides gentle hydration and relief from irritation. Experience comfort and smoothness for a refreshed, revitalized complexion.', '69', NULL, NULL, 2, 3, 4, '2024-03-18 22:52:46', '2024-03-18 22:52:46'),
(31, '40 knots Horizon Unisex Fragrance', '\r\n\"40 Knots Horizon\" offers a captivating unisex fragrance that evokes a sense of adventure and freedom. With its invigorating blend of fresh and woody notes, this scent is perfect for those seeking an exhilarating olfactory experience. Embark on a journey of exploration with \"40 Knots Horizon\".', '629', 56, 3.40, NULL, 1, 3, '2024-03-22 01:09:13', '2024-03-22 01:09:13'),
(32, 'JOOP HOMME EDT 75ML', '\r\n\"JOOP HOMME EDT 75ML\" is a classic men\'s fragrance that exudes confidence and sophistication. With its bold blend of oriental and woody notes, this scent is timeless and irresistible. Elevate your style with the unmistakable aroma of \"JOOP HOMME EDT\".', '1150', 46, 4.80, NULL, 1, 3, '2024-03-22 01:09:13', '2024-03-22 01:09:13'),
(33, 'Versace eros eau de toilette for men, 100 ', 'Versace Eros Eau de Toilette for Men, 100ml\" is an iconic fragrance that embodies masculinity and seduction. With its vibrant blend of fresh, spicy, and woody notes, this scent exudes confidence and allure. Make a bold statement with the irresistible aroma of Versace Eros.', '4000', 50, 4.60, NULL, 1, 3, '2024-03-22 01:09:13', '2024-03-22 01:09:13'),
(34, 'Calvin Klein Obsession for Women - Eau de Parfum, 100ml', 'Calvin Klein Obsession for Women - Eau de Parfum, 100ml\" is a captivating fragrance that exudes sensuality and allure. With its blend of warm spices, floral notes, and amber, this scent is both mysterious and intoxicating. Embrace your inner passion with Calvin Klein Obsession for Women.', '1784', NULL, NULL, 4, 5, 3, '2024-03-22 01:09:13', '2024-03-22 01:09:13'),
(35, 'Guess by marciano for women, eau de parfum - 100 ml', 'Guess by Marciano for Women - Eau de Parfum, 100ml\" is a luxurious fragrance that embodies sophistication and glamour. With its captivating blend of fruity, floral, and woody notes, this scent exudes elegance and allure. Make a lasting impression with Guess by Marciano for Women.', '2107', 54, 4.10, NULL, 1, 3, '2024-03-22 01:09:13', '2024-03-22 01:09:13'),
(36, 'Verde Sweet Ice Cream Keto Chocolate, 5 Sachets x 14 grams', 'Verde Sweet Ice Cream Keto Chocolate, 5 Sachets x 14 grams\" offers a delicious and guilt-free treat for keto enthusiasts. Each sachet contains a delectable blend of chocolate flavor, perfect for satisfying sweet cravings while maintaining a low-carb lifestyle. Indulge in the creamy goodness of Verde Sweet Ice Cream Keto Chocolate without compromising your dietary goals.', '69', 47, 2.10, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(37, 'Haloub Al Missalia Natural Butter Ghee - 800 gm', 'Haloub Al Missalia Natural Butter Ghee - 800 gm\" presents a premium-quality butter ghee, crafted to perfection. With its rich and authentic flavor, this ghee serves as a versatile cooking ingredient, perfect for enhancing the taste of various dishes. Elevate your culinary creations with the superior quality of Haloub Al Missalia Natural Butter Ghee.', '425', 88, 4.90, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(38, 'El maleka big rings 400gm', 'El Maleka Big Rings - 400gm\" offers a delectable and satisfying snack option. With its generous portion size and delicious flavor, these big rings are perfect for sharing with family and friends or enjoying on your own. Indulge in the irresistible taste of El Maleka Big Rings for a satisfying snack experience.', '13', NULL, NULL, 4, 5, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(39, 'Afia sunflower oil - 800 ml', 'Afia Sunflower Oil - 800 ml\" provides a premium cooking oil option for your culinary needs. With its high-quality sunflower oil, this product is ideal for various cooking methods, from frying to baking, offering a light and neutral flavor to your dishes. Elevate your cooking with the trusted quality of Afia Sunflower Oil.', '107', 200, 4.00, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(40, 'Misr Café Instant Karak Chai Tea with Creamer, Sugar and cardomom, 8 x 25g sachets', 'Misr Café Instant Karak Chai Tea with Creamer, Sugar, and Cardamom, 8 x 25g sachets\" offers a convenient and delicious way to enjoy authentic Karak Chai tea. With its blend of creamer, sugar, and cardamom, each sachet provides a perfect balance of flavors for a rich and aromatic tea experience. Indulge in the comforting taste of Misr Café Instant Karak Chai Tea anytime, anywhere.', '140', 89, 4.30, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(41, 'wholesome organic stevia', 'Wholesome Organic Stevia\" is a natural sweetener derived from the stevia plant, offering a healthy alternative to sugar. With its zero-calorie and zero-glycemic index properties, this organic stevia provides sweetness without the guilt. Add it to your favorite beverages or recipes for a delicious and healthier sweetening option.', '1450', 37, 2.10, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(42, 'Negmet El Zeitoun - Natural White Vinegar - 900 ml', 'Negmet El Zeitoun - Natural White Vinegar - 900 ml\" presents a high-quality vinegar made from natural ingredients. With its pure and tangy flavor, this white vinegar is perfect for culinary use, including pickling, salad dressings, and marinades. Elevate your dishes with the authentic taste of Negmet El Zeitoun Natural White Vinegar.', '16', 260, 2.80, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(43, 'Harvest drained beans with pickled lemon, black seed and safflower - 400 grams ', 'Harvest Drained Beans with Pickled Lemon, Black Seed, and Safflower - 400 grams\" offers a unique and flavorful twist on traditional beans. Infused with tangy pickled lemon, aromatic black seed, and vibrant safflower, these beans provide a delicious and nutritious addition to your meals. Enjoy the savory taste of Harvest Drained Beans for a satisfying culinary experience.', '15', 90, 4.00, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(44, 'Lamar mango juice, 1 liter', 'Lamar Mango Juice - 1 liter\" delivers a refreshing taste of pure mango goodness. Made from ripe and succulent mangoes, this juice offers a burst of tropical flavor in every sip. Indulge in the luscious sweetness of Lamar Mango Juice for a delightful refreshment experience.', '29', 340, 4.30, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(45, 'Eco healthy - Soft Unrefined Iodized Rock Salt', 'Eco Healthy - Soft Unrefined Iodized Rock Salt\" provides a natural and iodized option for seasoning your dishes. With its soft texture and unrefined nature, this rock salt offers a wholesome way to enhance the flavor of your meals while ensuring adequate iodine intake. Elevate your culinary creations with the pure and nutritious Eco Healthy Soft Unrefined Iodized Rock Salt.', '55', 32, 3.00, NULL, 1, 5, '2024-03-22 01:58:06', '2024-03-22 01:58:06'),
(46, 'Snake plant with a grey terrazzo pot ', 'Pot size 20 cm - for Office decoration & Kitchen accessories & Home decor - Outdoor plants natural - natural cactus plants & succulents plants', '150', 45, 3.20, NULL, 1, 6, '2024-03-22 17:25:01', '2024-03-22 17:25:01'),
(47, 'Ceramic Vases', 'Ceramic Vases for Home Decor Set of 3 - White Modern Donut Vase Circle Round for Pampas Grass Artificial Flowers, Boho Decor Living Room Table Centerpieces Dining Bedroom Shelf Farmhouse Decorations', '400', 57, 4.50, NULL, 1, 6, '2024-03-22 17:25:01', '2024-03-22 17:25:01'),
(48, 'Ramadan Kareem Hollow', 'HOWAF 2 Sets Eid Mubarak Wooden Ornament Ramadan Kareem Hollow Decoration Moon Star Hanging Pendant Happy Eid Wood Tabletop Decor for Home Ramadan Mubarak Eid Decorations', '130', 89, 2.10, NULL, 1, 6, '2024-03-22 17:25:01', '2024-03-22 17:25:01'),
(49, 'Couple Statue Creative', 'Couple Statue Creative Kiss Sculpture Abstract Art Couple Sculpture Home Furnishing Resin Statue Decoration Romantic Statue Used for Home Decoration, Wedding, Gift . (Gold)', '350', 83, 3.10, NULL, 1, 6, '2024-03-22 17:25:01', '2024-03-22 17:25:01'),
(50, 'Glass Flower Vase ', 'Glass Flower Vase with Metal Frame,Modern Creative Geometric Clear Vase for Flower Centerpieces Decorative,Desktop Hydroponics Vase Plant Terrarium for Home Office Decoration (Gold Star-Love)', '320', 10, 2.10, NULL, 1, 6, '2024-03-22 17:25:01', '2024-03-22 17:25:01'),
(51, 'SWEET FURNITURE Rattan Swing Iron Chassis Single Garden Leeving Roof Balcony', 'SWEET FURNITURE presents a Rattan Swing with a durable iron chassis, perfect for single garden, rooftop, or balcony relaxation. Enjoy comfort and style in outdoor living spaces with this charming addition.', '4649', 78, 5.00, NULL, 1, 7, '2024-03-22 17:54:08', '2024-03-22 17:54:08'),
(52, 'Vida Designs Large White', 'Vida Designs Large White Bedside Cabinet Chest of Drawers, 3 Drawer With Metal Handles and Runners, Unique Anti-Bowing Drawer Support, Riano Bedroom Furniture', '2280', 3, 4.10, NULL, 1, 7, '2024-03-22 17:54:08', '2024-03-22 17:54:08'),
(53, 'Woodx Nesting Side/End Tables Set of 3 Modern Rustic Stacking Accent Furniture', 'Woodx presents a set of 3 Nesting Side/End Tables, blending modern and rustic styles for versatile accent furniture. Perfect for stacking or using separately, these tables add both functionality and aesthetic appeal to any living space', '1550', 26, 3.10, NULL, 1, 7, '2024-03-22 17:54:08', '2024-03-22 17:54:08'),
(54, 'Rolanstar Bookshelf ', 'Rolanstar Bookshelf with Drawer,9 Shelf Tree Bookshelf,Retro Bookcase,Wooden Storage Rack for CDs/Movies/Books, Utility Organizer Shelves for Bedroom, Living Room, Home Office', '2250', 24, 4.50, NULL, 1, 7, '2024-03-22 17:54:08', '2024-03-22 17:54:08'),
(55, 'White Plastic Folding Chair with Charcoal Frame', 'Flash Furniture offers a 2-Pack HERCULES Series Folding Chairs, featuring a sturdy charcoal frame and a 330 lb. capacity. Designed with Granite White plastic, these chairs provide durability and versatility for various events and settings', '1880', 43, 3.20, NULL, 1, 7, '2024-03-22 17:54:08', '2024-03-22 17:54:08'),
(56, 'Ribbed knit top Crew Neck - Rib knit - cotton - for women\r\n', 'For women, this Crew Neck Ribbed Knit Top features a cotton rib knit design, offering both comfort and style.', '245', 78, 3.10, NULL, 1, 8, '2024-03-22 18:21:10', '2024-03-22 18:21:10'),
(57, 'Silvy Womens Lucy Women-1 Base Layer Top', 'The Silvy Women\'s Lucy Women-1 Base Layer Top provides essential comfort and performance for active lifestyles.', '143', NULL, NULL, 4, 5, 8, '2024-03-22 18:21:10', '2024-03-22 18:21:10'),
(58, 'Set Of (3) Cotton Stretch Plain Tank Tops', 'This set includes three cotton stretch plain tank tops, offering versatility and comfort for everyday wear.', '219', 24, 3.10, NULL, 1, 8, '2024-03-22 18:21:10', '2024-03-22 18:21:10'),
(59, 'Mesery Set Of (3) Cotton Stretch Plain Spaghetti Tops\r\n', 'The Mesery set features three cotton stretch plain spaghetti tops, ideal for layering or wearing alone for a comfortable and stylish look.', '199', 12, 5.00, NULL, 1, 8, '2024-03-22 18:21:10', '2024-03-22 18:21:10'),
(60, 'MB3 Womens W1001 Base Layer Top\r\n', 'The MB3 Women\'s W1001 Base Layer Top offers essential comfort and functionality for various activities and climates.', '270', NULL, NULL, 5, 6, 8, '2024-03-22 18:21:10', '2024-03-22 18:21:10'),
(61, 'activ womens ACTIV RUNNING SHOES Sneaker\r\n', '\r\nThe activ women\'s running shoes offer comfort and performance, making them ideal for your active lifestyle and workouts.', '1749', 21, 4.70, NULL, 1, 10, '2024-03-22 19:02:01', '2024-03-22 19:02:01'),
(62, 'Hills Women\'s Heels - Color (41, Black)\r\n', 'The Hills Women\'s Heels in color black (size 41) combine elegance with comfort, perfect for adding a touch of sophistication to any outfit.', '200', 13, 3.40, NULL, 1, 10, '2024-03-22 19:02:01', '2024-03-22 19:02:01'),
(63, 'Sn-W4- Heel Wedges\r\n', 'The \"Sn-W4\" Heel Wedges offer both style and comfort, providing a fashionable lift to your footwear collection.', '649\r\n', 15, 1.30, NULL, 1, 10, '2024-03-22 19:02:01', '2024-03-22 19:02:01'),
(64, 'adidas womens GALAXY 6 OM W Running Shoes', '\r\nThe adidas Women\'s GALAXY 6 OM W Running Shoes combine style and performance, offering comfort and support for your running sessions.', '2669', 4, NULL, NULL, 1, 10, '2024-03-22 19:02:01', '2024-03-22 19:02:01'),
(65, 'SOUL 2 SOLE womens S-27 Ballet Flat\r\n', 'The SOUL 2 SOLE Women\'s S-27 Ballet Flats offer timeless style and comfort, perfect for everyday wear or special occasions.', '384', 19, 2.30, NULL, 1, 10, '2024-03-22 19:02:01', '2024-03-22 19:02:01'),
(66, 'activ mens ACTIV SPCIAL SPORT SHOES Sneaker\r\n', '\r\nThe activ men\'s SPCIAL SPORT SHOES Sneakers combine style and functionality, providing comfort and support for various athletic activities.', '384', 45, 3.90, NULL, 1, 12, '2024-03-22 19:37:35', '2024-03-22 19:37:35'),
(67, 'Running Shoes Men - Men Running Shoes', 'The Running Shoes for Men offer optimal comfort and performance, designed to enhance your running experience with every stride.', '1300', 34, 3.20, NULL, 1, 12, '2024-03-22 19:37:35', '2024-03-22 19:37:35'),
(68, 'adidas Men RUN 60s 3.0 Sneakers\r\n', 'The adidas Men\'s RUN 60s 3.0 Sneakers blend style and performance, providing comfort and support for your daily activities.', '3749', 35, 4.10, NULL, 1, 12, '2024-03-22 19:37:35', '2024-03-22 19:37:35'),
(69, 'Skechers mens GO WALK FLEX Sneaker\r\n', 'The Skechers Men\'s GO WALK FLEX Sneaker combines style and comfort, offering a flexible and supportive design for all-day wear.', '3749', NULL, NULL, 5, 6, 12, '2024-03-22 19:37:35', '2024-03-22 19:37:35'),
(70, 'activ mens TREKKING SHOES Sneaker, Brown, 43 EU', 'The activ Men\'s TREKKING SHOES Sneaker in Brown, size 43 EU, provides durability and comfort for outdoor adventures.', '2699', 2, 4.30, NULL, 1, 12, '2024-03-22 19:37:35', '2024-03-22 19:37:35'),
(71, 'Michael Kors Lennox Women\'s Watch, Stainless Steel Watch for Women with Steel or Silicone Band', 'The Michael Kors Lennox Women\'s Watch boasts a stainless steel design, available with either a steel or silicone band, offering both elegance and versatility for any occasion.', '6493', 17, 4.10, NULL, 1, 13, '2024-03-22 20:35:36', '2024-03-22 20:35:36'),
(72, 'Casio for women\'s analog ltp-1303d-1avdf stainless steel watch, silver band', '\r\nThe Casio LTP-1303D-1AVDF Women\'s Analog Stainless Steel Watch features a sleek silver band, combining style and durability for a timeless accessory.', '2350', 51, 4.30, NULL, 1, 13, '2024-03-22 20:35:36', '2024-03-22 20:35:36'),
(73, 'smartwatch replacement strap compatible with Apple watch Ultra iwatch Series', '\r\nThe eWINNER Stainless Steel Band Smartwatch Replacement Strap offers compatibility with Apple Watch Ultra iWatch Series, providing a stylish and durable upgrade for your smartwatch.', '190', 49, 3.10, NULL, 1, 13, '2024-03-22 20:35:36', '2024-03-22 20:35:36'),
(74, 'Mini Fox Women Cool Diamond Inlay Watch (Rose Gold)', 'The Mini Fox Women\'s Cool Diamond Inlay Watch in Rose Gold combines elegance and sophistication with its diamond accents, adding a touch of luxury to any ensemble.', '1298', 73, 4.60, NULL, 1, 13, '2024-03-22 20:35:36', '2024-03-22 20:35:36'),
(75, 'Casio Watch for Women LQ-142-7EDF Analog Resin Band', '\r\nThe Casio Women\'s Watch LQ-142-7EDF features an analog display and a durable resin band, offering both style and functionality for everyday wear.', '1350', 78, 3.90, NULL, 1, 13, '2024-03-22 20:35:36', '2024-03-22 20:35:36'),
(76, 'GUESS Womens Regilla Mini Bags\r\n', '\r\nThe GUESS Women\'s Regilla Mini Bags offer a chic and compact accessory for carrying essentials, combining style and practicality for any occasion.', '11499', 1, 4.90, NULL, 1, 14, '2024-03-22 21:15:48', '2024-03-22 21:15:48'),
(77, 'Women\'s Leather Shoulder Bag (Black)\r\n', '\r\nThe Women\'s Leather Shoulder Bag in Black is a stylish and versatile accessory, perfect for completing any outfit with elegance and sophistication.', '418', NULL, NULL, 5, 6, 14, '2024-03-22 21:15:48', '2024-03-22 21:15:48'),
(78, 'Ice Club Women\'s Stitched Cross-Body Bag With Metal Handle - Black', '\r\nThe Ice Club Women\'s Stitched Cross-Body Bag with Metal Handle in Black combines fashion and functionality, providing a stylish accessory for any outfit while offering convenience for on-the-go use.', '399', 21, 4.10, NULL, 1, 14, '2024-03-22 21:15:48', '2024-03-22 21:15:48'),
(79, 'Glitter Women Hand Bag with Cross Hand One-Size Black GBA004812BLK', 'The Glitter Women\'s Handbag with Cross Hand in One-Size Black (GBA004812BLK) offers a chic and versatile accessory, perfect for adding a touch of glamour to any ensemble.', '452', 1, 1.30, NULL, 1, 14, '2024-03-22 21:15:48', '2024-03-22 21:15:48'),
(80, 'BS Collection Women\'s Waterproof Soft Quilted Crossbody & Shoulder Bag, Coffee', 'The BS Collection Women\'s Waterproof Soft Quilted Crossbody & Shoulder Bag in Coffee is a practical yet stylish accessory, providing functionality and fashion with its waterproof design and quilted detailing.', '549', 4, 3.60, NULL, 1, 14, '2024-03-22 21:15:48', '2024-03-22 21:15:48'),
(81, '4 Piece Luxury Square Women\'s Jewelry Set with Rhinestone Decoration', 'The 4 Piece Luxury Square Women\'s Jewelry Set features exquisite rhinestone decoration, adding a touch of elegance and glamour to any ensemble.', '349', 76, 2.70, NULL, 1, 15, '2024-03-22 22:12:39', '2024-03-22 22:12:39'),
(82, 'silver shiny zircon female finger rings', 'The Silver Shiny Zircon Female Finger Rings offer a dazzling and elegant accessory, perfect for adding sparkle and sophistication to any outfit.', '190', 6, 3.70, NULL, 1, 15, '2024-03-22 22:12:39', '2024-03-22 22:12:39'),
(83, 'Egyptian African Arabian Wedding Bangles Bracelets', 'The Egyptian African Arabian Wedding Bangles Bracelets exude cultural richness and traditional elegance, perfect for adding a touch of heritage to any wedding ensemble.', '240', 8, 1.10, NULL, 1, 15, '2024-03-22 22:12:39', '2024-03-22 22:12:39'),
(84, 'Bracelet & Stud Earrings Set', 'Shop LC Tennis Bracelet & Stud Earrings Set - Cubic Zirconia Jewelry Set for Women in Silvertone & Goldtone - 7\" Bracelet Length', '200', 4, 3.20, NULL, 1, 15, '2024-03-22 22:12:39', '2024-03-22 22:12:39'),
(85, 'Necklace/Earrings/Bracelet Set for Women Ladies, 18K Gold ', 'The Necklace, Earrings, and Bracelet Set for Women Ladies features exquisite craftsmanship in 18K gold, offering a luxurious and coordinated accessory ensemble for elegant occasions.', '444', NULL, NULL, 3, 4, 15, '2024-03-22 22:12:39', '2024-03-22 22:12:39'),
(86, 'Classic Style Sunglasses Round Black', 'AMAZING EGP Classic Style Sunglasses Round Black Cool Metal Spring Temple Colorful Mirror Lens', '399', 4, 2.00, NULL, 1, 16, '2024-03-22 22:38:21', '2024-03-22 22:38:21'),
(87, 'Women\'s sunglasses bag square uv400\r\n', 'The Women\'s Sunglasses Bag Square UV400 provides both style and protection, with a square design and UV400 lenses ensuring both fashion and eye safety.', '450', 5, 1.00, NULL, 1, 16, '2024-03-22 22:38:21', '2024-03-22 22:38:21'),
(88, 'Rectangle sunglasses for women men trendy fashion', 'The Rectangle Sunglasses offer trendy fashion for both women and men, combining style and versatility for a chic accessory choice.', '269', 1, 2.60, NULL, 1, 16, '2024-03-22 22:38:21', '2024-03-22 22:38:21'),
(89, 'FASHION MANIA UV400 Ultraviolet-proof Polarized Fashion Women men Sunglasses', 'The FASHION MANIA UV400 Ultraviolet-proof Polarized Sunglasses offer stylish and practical eye protection for both women and men, ensuring fashion and safety in one accessory.', '349', 5, 4.00, NULL, 1, 16, '2024-03-22 22:38:21', '2024-03-22 22:38:21'),
(90, 'Lorigun Thug Life Sunglasses Pixelated Mosaic Glasses Party Glasses MLG Shades (12 Pixels)', '\r\nThe Lorigun Thug Life Sunglasses Pixelated Mosaic Glasses, featuring 12 pixels, are perfect for adding a fun and edgy touch to any party or event.', '179', 53, 4.30, NULL, 1, 16, '2024-03-22 22:38:21', '2024-03-22 22:38:21'),
(91, '6 Watt Double Curve Updown Spot 2 lamps\r\n', 'The 6 Watt Double Curve Updown Spot with 2 lamps provides stylish and efficient lighting, offering both functionality and aesthetic appeal to any space.', '517', 5, 3.10, NULL, 1, 19, '2024-03-22 22:53:05', '2024-03-22 22:53:05'),
(92, 'Closet Lights, LED Under Cabinet', 'Closet Lights, LED Under Cabinet Lighting, Wireless Motion Sensor Night Light - USB Rechargeable, Cool White,with magnetic double sided tape for Stairs/Kitchen/Drawer (30cm-1pc)', '224', 4, 3.90, NULL, 1, 19, '2024-03-22 23:12:57', '2024-03-22 23:12:57'),
(93, 'Long LED Lamp', 'Long LED Lamp Decorative Bedroom Beautiful and Quiet Feel Comfortable for Wall and Floor 120cm Direct Work from the Plug in Unbreakable Reinforced Plastic Comes with Plug in Electricity (Blue)', '295', 9, 4.10, NULL, 1, 19, '2024-03-22 23:12:57', '2024-03-22 23:12:57'),
(94, 'Black bomb ceiling lighting pendant unit for decor', '\r\nThe Black Bomb Ceiling Lighting Pendant Unit adds a modern and elegant touch to any decor, providing striking illumination and style to elevate the ambiance of the space.', '119', 38, 4.20, NULL, 1, 19, '2024-03-22 23:12:57', '2024-03-22 23:12:57'),
(95, 'Wall Lamp', 'Rechargeable Wall Lamp with Motion Sensor PIR Function, Portable Wireless Auraglow Smart Auto Night Light Battery for Indoor Hallway, Staircase Porch Rod Walnut Wood', '419', 65, 4.40, NULL, 1, 19, '2024-03-22 23:12:57', '2024-03-22 23:12:57'),
(96, 'Toyota corolla 2024', 'Toyota Corolla 2024, Second Class\r\nImmediate delivery\r\nAvailable in various colors, Authorized dealer', '1600000', NULL, NULL, 2, 3, 17, '2024-03-22 23:46:27', '2024-03-22 23:46:27'),
(97, 'SYM Jarid 200\r\n\r\n\r\n\r\n\r\n\r\n', 'SYM Jarid 200 scooter, model 2017, with a two-year license.\r\n\r\n\r\n\r\n\r\n\r\n', ' 65000', NULL, NULL, 1, 2, 18, '2024-03-22 23:46:27', '2024-03-22 23:46:27');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image_path`, `created_at`, `updated_at`) VALUES
(1, 1, 'products_images/1/1.jpg', '2024-03-15 18:43:12', '2024-03-15 18:43:12'),
(2, 1, 'products_images/1/2.jpg', '2024-03-15 18:43:12', '2024-03-15 18:43:12'),
(3, 1, 'products_images/1/3.jpg', '2024-03-15 18:43:12', '2024-03-15 18:43:12'),
(4, 1, 'products_images/1/4.jpg', '2024-03-15 18:43:12', '2024-03-15 18:43:12'),
(5, 2, 'products_images/2/1.jpg\r\n', '2024-03-15 19:33:10', '2024-03-15 19:33:10'),
(6, 2, 'products_images/2/2.jpg\r\n', '2024-03-15 19:33:10', '2024-03-15 19:33:10'),
(7, 2, 'products_images/2/3.jpg\r\n', '2024-03-15 19:33:10', '2024-03-15 19:33:10'),
(8, 2, 'products_images/2/4.jpg\r\n', '2024-03-15 19:33:10', '2024-03-15 19:33:10'),
(9, 3, 'products_images/3/1.jpg\r\n', '2024-03-15 19:34:27', '2024-03-15 19:34:27'),
(10, 3, 'products_images/3/2.jpg\r\n', '2024-03-15 19:34:27', '2024-03-15 19:34:27'),
(11, 3, 'products_images/3/3.jpg\r\n', '2024-03-15 19:34:27', '2024-03-15 19:34:27'),
(12, 3, 'products_images/3/4.jpg\r\n', '2024-03-15 19:34:27', '2024-03-15 19:34:27'),
(13, 4, 'products_images/4/1.jpg\r\n', '2024-03-15 19:35:20', '2024-03-15 19:35:20'),
(14, 4, 'products_images/4/2.jpg\r\n', '2024-03-15 19:35:20', '2024-03-15 19:35:20'),
(15, 4, 'products_images/4/3.jpg\r\n', '2024-03-15 19:35:20', '2024-03-15 19:35:20'),
(16, 4, 'products_images/4/4.jpg\r\n', '2024-03-15 19:35:20', '2024-03-15 19:35:20'),
(17, 5, 'products_images/5/1.jpg', '2024-03-15 19:37:33', '2024-03-15 19:37:33'),
(18, 5, 'products_images/5/2.jpg', '2024-03-15 19:37:33', '2024-03-15 19:37:33'),
(19, 5, 'products_images/5/3.jpg', '2024-03-15 19:37:33', '2024-03-15 19:37:33'),
(20, 5, 'products_images/5/4.jpg', '2024-03-15 19:37:33', '2024-03-15 19:37:33'),
(21, 6, 'products_images/6/1.jpg\r\n', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(22, 6, 'products_images/6/2.jpg\r\n', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(23, 6, 'products_images/6/3.jpg\r\n', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(24, 6, 'products_images/6/4.jpg\r\n', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(25, 7, 'products_images/7/1.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(26, 7, 'products_images/7/2.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(27, 7, 'products_images/7/3.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(28, 7, 'products_images/7/4.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(29, 8, 'products_images/8/1.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(30, 8, 'products_images/8/2.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(31, 8, 'products_images/8/3.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(32, 8, 'products_images/8/4.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(33, 9, 'products_images/9/1.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(34, 9, 'products_images/9/2.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(35, 9, 'products_images/9/3.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(36, 9, 'products_images/9/4.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(37, 10, 'products_images/10/1.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(38, 10, 'products_images/10/2.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(39, 10, 'products_images/10/3.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(40, 10, 'products_images/10/4.jpg', '2024-03-15 19:59:43', '2024-03-15 19:59:43'),
(41, 11, 'products_images/11/1.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(42, 11, 'products_images/11/2.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(43, 11, 'products_images/11/3.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(44, 11, 'products_images/11/4.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(45, 12, 'products_images/12/1.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(46, 12, 'products_images/12/2.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(47, 12, 'products_images/12/3.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(48, 12, 'products_images/12/4.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(49, 13, 'products_images/13/1.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(50, 13, 'products_images/13/2.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(51, 13, 'products_images/13/3.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(52, 13, 'products_images/13/4.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(53, 14, 'products_images/14/1.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(54, 14, 'products_images/14/2.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(55, 14, 'products_images/14/3.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(56, 14, 'products_images/14/4.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(57, 15, 'products_images/15/1.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(58, 15, 'products_images/15/2.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(59, 15, 'products_images/15/3.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(60, 15, 'products_images/15/4.jpg', '2024-03-15 22:23:37', '2024-03-15 22:23:37'),
(61, 16, 'products_images/16/1.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(62, 16, 'products_images/16/2.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(63, 16, 'products_images/16/3.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(64, 16, 'products_images/16/4.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(65, 17, 'products_images/17/1.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(66, 17, 'products_images/17/2.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(67, 17, 'products_images/17/3.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(68, 17, 'products_images/17/4.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(69, 18, 'products_images/18/1.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(70, 18, 'products_images/18/2.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(71, 18, 'products_images/18/3.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(72, 18, 'products_images/18/4.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(73, 19, 'products_images/19/1.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(74, 19, 'products_images/19/2.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(75, 19, 'products_images/19/3.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(76, 19, 'products_images/19/4.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(77, 20, 'products_images/20/1.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(78, 20, 'products_images/20/2.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(79, 20, 'products_images/20/3.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(80, 20, 'products_images/20/4.jpg', '2024-03-15 22:39:15', '2024-03-15 22:39:15'),
(81, 21, 'products_images/21/1.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(82, 21, 'products_images/21/2.jpg', '2024-03-18 22:51:19', '2024-03-18 22:51:25'),
(83, 21, 'products_images/21/3.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(84, 21, 'products_images/21/4.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(85, 22, 'products_images/22/1.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(86, 22, 'products_images/22/2.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(87, 22, 'products_images/22/3.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(88, 22, 'products_images/22/4.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(89, 23, 'products_images/23/1.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(90, 23, 'products_images/23/2.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(91, 23, 'products_images/23/3.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(92, 23, 'products_images/23/4.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(93, 24, 'products_images/24/1.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(94, 24, 'products_images/24/2.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(95, 24, 'products_images/24/3.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(96, 24, 'products_images/24/4.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(97, 25, 'products_images/25/1.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(98, 25, 'products_images/25/2.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(99, 25, 'products_images/25/3.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(100, 25, 'products_images/25/4.jpg', '2024-03-18 22:41:21', '2024-03-18 22:41:21'),
(101, 26, 'products_images/26/1.jpg', '2024-03-19 01:04:20', '2024-03-19 01:04:20'),
(102, 26, 'products_images/26/2.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(103, 26, 'products_images/26/3.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(104, 26, 'products_images/26/4.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(105, 27, 'products_images/27/1.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(106, 27, 'products_images/27/2.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(107, 27, 'products_images/27/3.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(108, 27, 'products_images/27/4.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(109, 28, 'products_images/28/1.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(110, 28, 'products_images/28/2.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(111, 28, 'products_images/28/3.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(112, 28, 'products_images/28/4.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(113, 29, 'products_images/29/1.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(114, 29, 'products_images/29/2.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(115, 29, 'products_images/29/3.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(116, 29, 'products_images/29/4.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(117, 30, 'products_images/30/1.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(118, 30, 'products_images/30/2.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(119, 30, 'products_images/30/3.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(120, 30, 'products_images/30/4.jpg', '2024-03-19 01:04:21', '2024-03-19 01:04:21'),
(121, 31, 'products_images/31/1.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(122, 31, 'products_images/31/2.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(123, 31, 'products_images/31/3.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(124, 31, 'products_images/31/4.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(125, 32, 'products_images/32/1.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(126, 32, 'products_images/32/2.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(127, 32, 'products_images/32/3.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(128, 32, 'products_images/32/4.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(129, 33, 'products_images/33/1.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(130, 33, 'products_images/33/2.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(131, 33, 'products_images/33/3.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(132, 33, 'products_images/33/4.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(133, 34, 'products_images/34/1.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(134, 34, 'products_images/34/2.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(135, 34, 'products_images/34/3.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(136, 34, 'products_images/34/4.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(137, 35, 'products_images/35/1.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(138, 35, 'products_images/35/2.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(139, 35, 'products_images/35/3.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(140, 35, 'products_images/35/4.jpg', '2024-03-22 01:39:36', '2024-03-22 01:39:36'),
(141, 36, 'products_images/36/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(142, 37, 'products_images/37/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(143, 37, 'products_images/37/2.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(144, 37, 'products_images/37/3.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(145, 38, 'products_images/38/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(146, 39, 'products_images/39/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(147, 39, 'products_images/39/2.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(148, 40, 'products_images/40/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(149, 41, 'products_images/41/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(150, 41, 'products_images/41/2.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(151, 41, 'products_images/41/3.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(152, 41, 'products_images/41/4.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(153, 42, 'products_images/42/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(154, 43, 'products_images/43/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(155, 44, 'products_images/44/1.jpg', '2024-03-22 03:12:30', '2024-03-22 03:12:30'),
(156, 44, 'products_images/44/2.jpg', '2024-03-22 03:38:44', '2024-03-22 03:38:44'),
(157, 45, 'products_images/45/1.jpg', '2024-03-22 03:38:44', '2024-03-22 03:38:44'),
(158, 45, 'products_images/45/2.jpg', '2024-03-22 03:38:44', '2024-03-22 03:38:44'),
(159, 45, 'products_images/45/3.jpg', '2024-03-22 03:38:44', '2024-03-22 03:38:44'),
(160, 45, 'products_images/45/4.jpg', '2024-03-22 03:38:44', '2024-03-22 03:38:44'),
(161, 46, 'products_images/46/1.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(162, 46, 'products_images/46/2.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(163, 47, 'products_images/47/1.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(164, 47, 'products_images/47/2.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(165, 47, 'products_images/47/3.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(166, 47, 'products_images/47/4.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(167, 48, 'products_images/48/1.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(168, 48, 'products_images/48/2.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(169, 48, 'products_images/48/3.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(170, 48, 'products_images/48/4.jpg', '2024-03-22 17:43:53', '2024-03-22 17:43:53'),
(171, 49, 'products_images/49/1.jpg', '2024-03-22 17:47:36', '2024-03-22 17:47:36'),
(172, 49, 'products_images/49/2.jpg', '2024-03-22 17:48:18', '2024-03-22 17:48:18'),
(173, 49, 'products_images/49/2.jpg', '2024-03-22 17:48:18', '2024-03-23 17:48:18'),
(174, 49, 'products_images/49/3.jpg', '2024-03-22 17:48:18', '2024-03-22 17:48:18'),
(175, 49, 'products_images/49/4.jpg', '2024-03-22 17:48:18', '2024-03-22 17:48:18'),
(176, 50, 'products_images/50/1.jpg', '2024-03-22 17:48:18', '2024-03-22 17:48:18'),
(177, 50, 'products_images/50/2.jpg', '2024-03-22 17:50:01', '2024-03-22 17:50:01'),
(178, 50, 'products_images/50/3.jpg', '2024-03-22 17:50:22', '2024-03-22 17:50:22'),
(179, 50, 'products_images/50/4.jpg', '2024-03-22 17:50:40', '2024-03-22 17:50:40'),
(180, 51, 'products_images/51/1.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(181, 51, 'products_images/51/2.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(182, 52, 'products_images/52/1.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(183, 52, 'products_images/52/2.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(184, 52, 'products_images/52/3.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(185, 52, 'products_images/52/4.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(186, 53, 'products_images/53/1.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(187, 53, 'products_images/53/2.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(188, 53, 'products_images/53/3.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(189, 53, 'products_images/53/4.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(190, 54, 'products_images/54/1.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(191, 54, 'products_images/54/2.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(192, 54, 'products_images/54/3.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(193, 54, 'products_images/54/4.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(194, 55, 'products_images/55/1.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(195, 55, 'products_images/55/2.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(196, 55, 'products_images/55/3.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(197, 55, 'products_images/55/4.jpg', '2024-03-22 18:10:39', '2024-03-22 18:10:39'),
(198, 56, 'products_images/56/1.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(199, 56, 'products_images/56/2.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(200, 56, 'products_images/56/3.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(201, 57, 'products_images/57/1.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(202, 57, 'products_images/57/2.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(203, 58, 'products_images/58/1.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(204, 58, 'products_images/58/2.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(205, 59, 'products_images/59/1.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(206, 59, 'products_images/59/2.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(207, 59, 'products_images/59/3.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(208, 59, 'products_images/59/4.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(209, 60, 'products_images/60/1.jpg', '2024-03-22 18:55:11', '2024-03-22 18:55:11'),
(210, 60, 'products_images/60/2.jpg', '2024-03-22 18:59:09', '2024-03-22 18:59:09'),
(211, 60, 'products_images/60/3.jpg', '2024-03-22 18:59:09', '2024-03-22 18:59:09'),
(212, 61, 'products_images/61/1.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(213, 61, 'products_images/61/2.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(214, 61, 'products_images/61/3.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(215, 62, 'products_images/62/1.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(216, 62, 'products_images/62/2.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(217, 62, 'products_images/62/3.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(218, 62, 'products_images/62/4.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(219, 63, 'products_images/63/1.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(220, 63, 'products_images/63/2.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(221, 63, 'products_images/63/3.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(222, 63, 'products_images/63/4.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(223, 64, 'products_images/64/1.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(224, 64, 'products_images/63/2.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(225, 64, 'products_images/63/3.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(226, 65, 'products_images/65/1.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(227, 65, 'products_images/65/2.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(228, 65, 'products_images/65/3.jpg', '2024-03-22 19:21:58', '2024-03-22 19:21:58'),
(229, 66, 'products_images/66/1.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(230, 66, 'products_images/66/2.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(231, 66, 'products_images/66/3.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(232, 67, 'products_images/67/1.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(233, 67, 'products_images/67/2.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(234, 67, 'products_images/67/3.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(235, 67, 'products_images/67/4.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(236, 68, 'products_images/68/1.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(237, 68, 'products_images/68/2.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(238, 68, 'products_images/68/3.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(239, 68, 'products_images/68/4.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(240, 69, 'products_images/69/1.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(241, 69, 'products_images/69/2.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(242, 69, 'products_images/69/3.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(243, 69, 'products_images/69/4.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(244, 70, 'products_images/70/1.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(245, 70, 'products_images/70/2.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(246, 70, 'products_images/70/3.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(247, 70, 'products_images/70/4.jpg', '2024-03-22 20:13:54', '2024-03-22 20:13:54'),
(248, 71, 'products_images/71/1.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(249, 71, 'products_images/71/2.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(250, 71, 'products_images/71/3.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(251, 72, 'products_images/72/1.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(252, 72, 'products_images/72/2.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(253, 72, 'products_images/72/3.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(254, 72, 'products_images/72/4.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(255, 73, 'products_images/73/1.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(256, 73, 'products_images/73/2.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(257, 73, 'products_images/73/3.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(258, 73, 'products_images/73/4.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(259, 74, 'products_images/74/1.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(260, 74, 'products_images/74/2.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(261, 74, 'products_images/74/3.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(262, 75, 'products_images/75/1.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(263, 75, 'products_images/75/2.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(264, 75, 'products_images/75/3.jpg', '2024-03-22 20:55:13', '2024-03-22 20:55:13'),
(265, 76, 'products_images/76/1.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(266, 76, 'products_images/76/2.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(267, 76, 'products_images/76/3.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(268, 76, 'products_images/76/4.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(269, 77, 'products_images/77/1.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(270, 78, 'products_images/78/1.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(271, 78, 'products_images/78/2.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(272, 78, 'products_images/78/3.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(273, 79, 'products_images/79/1.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(274, 79, 'products_images/79/2.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(275, 79, 'products_images/79/3.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(276, 80, 'products_images/80/1.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(277, 80, 'products_images/80/2.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(278, 80, 'products_images/80/3.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(279, 80, 'products_images/80/4.jpg', '2024-03-22 22:05:53', '2024-03-22 22:05:53'),
(280, 81, 'products_images/81/1.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(281, 81, 'products_images/81/2.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(282, 81, 'products_images/81/3.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(283, 81, 'products_images/81/4.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(284, 82, 'products_images/82/1.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(285, 82, 'products_images/82/2.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(286, 82, 'products_images/82/3.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(287, 83, 'products_images/83/1.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(288, 83, 'products_images/83/2.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(289, 83, 'products_images/83/3.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(290, 83, 'products_images/83/4.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(291, 84, 'products_images/84/1.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(292, 84, 'products_images/84/2.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(293, 85, 'products_images/85/1.jpg', '2024-03-22 22:32:39', '2024-03-22 22:32:39'),
(294, 85, 'products_images/85/2.jpg', '2024-03-22 22:36:31', '2024-03-22 22:36:31'),
(295, 85, 'products_images/85/3.jpg', '2024-03-22 22:36:31', '2024-03-22 22:36:31'),
(296, 85, 'products_images/85/4.jpg', '2024-03-22 22:36:31', '2024-03-22 22:36:31'),
(297, 86, 'products_images/86/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(298, 86, 'products_images/86/2.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(299, 86, 'products_images/86/3.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(300, 86, 'products_images/86/4.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(301, 87, 'products_images/87/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(302, 87, 'products_images/86/2.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(303, 87, 'products_images/86/3.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(304, 87, 'products_images/87/4.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(305, 88, 'products_images/88/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(306, 88, 'products_images/88/2.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(307, 89, 'products_images/89/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(308, 89, 'products_images/89/2.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(309, 89, 'products_images/89/3.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(310, 89, 'products_images/89/4.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(311, 90, 'products_images/90/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(312, 90, 'products_images/90/2.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(313, 90, 'products_images/90/3.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(314, 91, 'products_images/91/1.jpg', '2024-03-22 23:05:05', '2024-03-22 23:05:05'),
(315, 92, 'products_images/92/1.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(316, 92, 'products_images/92/2.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(317, 92, 'products_images/92/3.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(318, 92, 'products_images/92/4.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(319, 93, 'products_images/93/1.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(320, 93, 'products_images/93/2.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(321, 93, 'products_images/93/3.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(322, 93, 'products_images/93/4.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(323, 94, 'products_images/94/1.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(324, 94, 'products_images/94/2.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(325, 94, 'products_images/94/3.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(326, 94, 'products_images/94/4.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(327, 95, 'products_images/95/1.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(328, 95, 'products_images/95/2.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(329, 95, 'products_images/95/3.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(330, 95, 'products_images/95/4.jpg', '2024-03-22 23:29:18', '2024-03-22 23:29:18'),
(331, 96, 'products_images/96/1.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(332, 96, 'products_images/96/2.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(333, 96, 'products_images/96/3.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(334, 96, 'products_images/96/4.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(335, 97, 'products_images/97/1.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(336, 97, 'products_images/97/2.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(337, 97, 'products_images/97/3.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42'),
(338, 97, 'products_images/97/4.jpg', '2024-03-23 01:10:42', '2024-03-23 01:10:42');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_details`
--

CREATE TABLE `shipping_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `address` varchar(200) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `about` text DEFAULT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar`, `gender`, `phone`, `date_of_birth`, `about`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$12$wNdjB6gCd6BFpq0HODhod.XuFlMm5lFE3HQAVcLnG5f6BEBBGcxee', NULL, NULL, '0123456789', NULL, NULL, 'admin', NULL, '2024-03-15 14:41:04', '2024-03-16 15:32:29'),
(2, 'Ahmed sobhi', 'ahmed@gmail.com', '$2y$12$koBiidGozZiNOOQodXx9suZBLpZVnSMEyqqgMIAyRGSqOGkpQmJGa', 'avatars/ZjHUBkgBwscNLf38ME2wEVI4Eqj35ptyRG48do9F.jpg', 'male', '01287984355', '1997-12-08', 'i am a frontend developer', 'user', NULL, '2024-03-22 21:44:36', '2024-03-24 13:53:35'),
(3, 'william', 'william@gmail.com', '$2y$12$MIZz1GJ1Z/W.eOMRsq0J/./SfG5f2bTEVwvshKDhJru2nA3B0bCca', 'avatars/BhHZKIP7QXmeOwYrnBWfUzPnTyw63OUqpxXYfgCE.jpg', 'male', '01254378656', '1997-04-01', 'i am a backend developer', 'user', NULL, '2024-03-24 12:55:50', '2024-03-24 13:51:26'),
(4, 'nada', 'nada@gmail.com', '$2y$12$latUjJRq4kxGgUdHM2DFSe44UrqoNgD8BLNrK5cPK5O4YD5bgVO.K', 'avatars/HMh0NKVXXoqx91NYuiMxGsIgykPdW5CSv82Vni9k.jpg', 'female', '01246453786', '2001-11-01', 'i am a frontend developer', 'user', NULL, '2024-03-24 12:58:01', '2024-03-24 13:48:34'),
(5, 'menna', 'menna@gmail.com', '$2y$12$uvGY30Zs15qaMOXtoDEZ7.NSod5HtDY4iUaCqUR2NM9XOKdpaznoa', 'avatars/vkRD2OBCZ8TVhwBrCAyeuApGcc0tiEVBSpwizcA3.jpg', 'female', '01256765447', '2000-12-08', 'i am a frontend developer', 'user', NULL, '2024-03-24 13:07:25', '2024-03-24 13:47:08'),
(6, 'sara', 'sara@gmail.com', '$2y$12$.QGvVgMnTmADd9ixUePRgeD6MV5okBnnX5Zl4D367h3xqr./VQqc.', 'avatars/RwMB34KhLC1EIqIR5SkKx0bYXCuXQbop42iv7Umr.jpg', 'female', '01234578653', '1998-06-01', 'i am a backend developer', 'user', NULL, '2024-03-24 13:08:15', '2024-03-24 13:50:11');

-- --------------------------------------------------------

--
-- Table structure for table `user_contactus`
--

CREATE TABLE `user_contactus` (
  `contactus_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Indexes for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD PRIMARY KEY (`cart_id`,`product_id`),
  ADD KEY `cart_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `egypt_cities`
--
ALTER TABLE `egypt_cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favourite_products`
--
ALTER TABLE `favourite_products`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `favourite_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_cart_id_foreign` (`cart_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_location_id_foreign` (`location_id`),
  ADD KEY `products_user_id_foreign` (`user_id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_images_product_id_foreign` (`product_id`);

--
-- Indexes for table `shipping_details`
--
ALTER TABLE `shipping_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shipping_details_cart_id_foreign` (`cart_id`),
  ADD KEY `shipping_details_city_id_foreign` (`city_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- Indexes for table `user_contactus`
--
ALTER TABLE `user_contactus`
  ADD PRIMARY KEY (`contactus_id`,`user_id`),
  ADD KEY `user_contactus_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `egypt_cities`
--
ALTER TABLE `egypt_cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=339;

--
-- AUTO_INCREMENT for table `shipping_details`
--
ALTER TABLE `shipping_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD CONSTRAINT `cart_products_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `favourite_products`
--
ALTER TABLE `favourite_products`
  ADD CONSTRAINT `favourite_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favourite_products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `egypt_cities` (`id`),
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `shipping_details`
--
ALTER TABLE `shipping_details`
  ADD CONSTRAINT `shipping_details_cart_id_foreign` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shipping_details_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `egypt_cities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_contactus`
--
ALTER TABLE `user_contactus`
  ADD CONSTRAINT `user_contactus_contactus_id_foreign` FOREIGN KEY (`contactus_id`) REFERENCES `contact_us` (`id`),
  ADD CONSTRAINT `user_contactus_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
