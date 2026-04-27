CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`listingId` int NOT NULL,
	`buyerId` int NOT NULL,
	`providerId` int NOT NULL,
	`quantity` int DEFAULT 1,
	`totalPrice` decimal(12,2) NOT NULL,
	`status` enum('pending','confirmed','completed','cancelled','disputed') DEFAULT 'pending',
	`paymentStatus` enum('pending','paid','refunded') DEFAULT 'pending',
	`scheduledDate` timestamp,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bundles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`categoryIds` json,
	`listingIds` json,
	`totalPrice` decimal(12,2),
	`discount` decimal(5,2) DEFAULT '0',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `bundles_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`number` int NOT NULL,
	`icon` varchar(50),
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `categories_number_unique` UNIQUE(`number`)
);
--> statement-breakpoint
CREATE TABLE `listings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`categoryId` int NOT NULL,
	`providerId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`price` decimal(12,2),
	`location` varchar(255),
	`images` json,
	`rating` decimal(3,2) DEFAULT '0',
	`reviewCount` int NOT NULL DEFAULT 0,
	`verified` boolean DEFAULT false,
	`status` enum('active','inactive','sold') DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `listings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `partnerships` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId1` int NOT NULL,
	`userId2` int NOT NULL,
	`status` enum('pending','active','inactive') DEFAULT 'pending',
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `partnerships_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookingId` int NOT NULL,
	`reviewerId` int NOT NULL,
	`rating` int NOT NULL,
	`comment` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `reviews_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `wellnessMetrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`mood` enum('excellent','good','neutral','poor','stressed'),
	`stressLevel` int DEFAULT 5,
	`businessLoad` int DEFAULT 5,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `wellnessMetrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('user','admin','provider') NOT NULL DEFAULT 'user';--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `userType` enum('buyer','provider','both') DEFAULT 'buyer';--> statement-breakpoint
ALTER TABLE `users` ADD `location` varchar(255);--> statement-breakpoint
ALTER TABLE `users` ADD `bio` text;--> statement-breakpoint
ALTER TABLE `users` ADD `profileImage` varchar(500);--> statement-breakpoint
ALTER TABLE `users` ADD `flexPoints` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `verified` boolean DEFAULT false;