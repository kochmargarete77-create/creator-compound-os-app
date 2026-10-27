CREATE TABLE `content_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`owner_id` text DEFAULT 'demo' NOT NULL,
	`title` text NOT NULL,
	`format` text DEFAULT 'talking-head' NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learnings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`owner_id` text DEFAULT 'demo' NOT NULL,
	`category` text NOT NULL,
	`statement` text NOT NULL,
	`confidence` text DEFAULT 'hypothesis' NOT NULL,
	`evidence_count` integer DEFAULT 1 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
