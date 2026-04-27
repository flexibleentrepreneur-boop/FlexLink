import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin", "provider"]).default("user").notNull(),
  userType: mysqlEnum("userType", ["buyer", "provider", "both"]).default("buyer"),
  location: varchar("location", { length: 255 }),
  bio: text("bio"),
  profileImage: varchar("profileImage", { length: 500 }),
  flexPoints: int("flexPoints").default(0).notNull(),
  verified: boolean("verified").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Category enum
export const categories = mysqlTable("categories", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  number: int("number").notNull().unique(), // 1-5 for quick navigation
  icon: varchar("icon", { length: 50 }),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;

// Listings for all categories
export const listings = mysqlTable("listings", {
  id: int("id").autoincrement().primaryKey(),
  categoryId: int("categoryId").notNull(),
  providerId: int("providerId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  price: decimal("price", { precision: 12, scale: 2 }),
  location: varchar("location", { length: 255 }),
  images: json("images"), // Array of image URLs
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0"),
  reviewCount: int("reviewCount").default(0).notNull(),
  verified: boolean("verified").default(false),
  status: mysqlEnum("status", ["active", "inactive", "sold"]).default("active"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Listing = typeof listings.$inferSelect;
export type InsertListing = typeof listings.$inferInsert;

// Bookings and orders
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  listingId: int("listingId").notNull(),
  buyerId: int("buyerId").notNull(),
  providerId: int("providerId").notNull(),
  quantity: int("quantity").default(1),
  totalPrice: decimal("totalPrice", { precision: 12, scale: 2 }).notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled", "disputed"]).default("pending"),
  paymentStatus: mysqlEnum("paymentStatus", ["pending", "paid", "refunded"]).default("pending"),
  scheduledDate: timestamp("scheduledDate"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

// Reviews and ratings
export const reviews = mysqlTable("reviews", {
  id: int("id").autoincrement().primaryKey(),
  bookingId: int("bookingId").notNull(),
  reviewerId: int("reviewerId").notNull(),
  rating: int("rating").notNull(), // 1-5
  comment: text("comment"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

// Bundles (cross-category solutions)
export const bundles = mysqlTable("bundles", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  categoryIds: json("categoryIds"), // Array of category IDs
  listingIds: json("listingIds"), // Array of listing IDs
  totalPrice: decimal("totalPrice", { precision: 12, scale: 2 }),
  discount: decimal("discount", { precision: 5, scale: 2 }).default("0"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Bundle = typeof bundles.$inferSelect;
export type InsertBundle = typeof bundles.$inferInsert;

// Partnerships
export const partnerships = mysqlTable("partnerships", {
  id: int("id").autoincrement().primaryKey(),
  userId1: int("userId1").notNull(),
  userId2: int("userId2").notNull(),
  status: mysqlEnum("status", ["pending", "active", "inactive"]).default("pending"),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Partnership = typeof partnerships.$inferSelect;
export type InsertPartnership = typeof partnerships.$inferInsert;

// Wellness tracking
export const wellnessMetrics = mysqlTable("wellnessMetrics", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  mood: mysqlEnum("mood", ["excellent", "good", "neutral", "poor", "stressed"]),
  stressLevel: int("stressLevel").default(5), // 1-10
  businessLoad: int("businessLoad").default(5), // 1-10
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type WellnessMetric = typeof wellnessMetrics.$inferSelect;
export type InsertWellnessMetric = typeof wellnessMetrics.$inferInsert;