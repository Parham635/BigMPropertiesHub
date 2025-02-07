import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  address: text("address").notNull(),
  price: integer("price").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  sqft: integer("sqft").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  images: text("images").array().notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  propertyId: integer("property_id").notNull(),
});

export const propertyData = [
  {
    id: 1,
    title: "2845 Tuebingen Pkwy",
    address: "Ann Arbor, MI 48105",
    price: 2400,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    description:
      "Stunning modern home minutes from campus with luxury finishes and ample natural light.",
    features: [
      "In-unit laundry",
      "Central AC",
      "Parking included",
      "Pet friendly",
    ],
    images: [
      "/images/property1/property1 (1).jpg",
      "/images/property1/property1 (2).jpg",
      "/images/property1/property1 (3).jpg",
      "/images/property1/property1 (4).jpg",
      "/images/property1/property1 (5).jpg",
      "/images/property1/property1 (6).jpg",
      "/images/property1/property1 (7).jpg",
      "/images/property1/property1 (8).jpg",
      "/images/property1/property1 (9).jpg",
      "/images/property1/property1 (10).jpg",
      "/images/property1/property1 (11).jpg",
      "/images/property1/property1 (12).jpg",
      "/images/property1/property1 (13).jpg",
    ],
  },
  {
    id: 2,
    title: "1002 Myron Ct",
    address: "Ann Arbor, MI 48103",
    price: 3200,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2000,
    description:
      "Spacious luxury apartment with stunning views of campus and premium amenities.",
    features: [
      "Rooftop deck",
      "Fitness center",
      "Study rooms",
      "24/7 security",
    ],
    images: [
      "/images/property1-1.svg",
      "/images/property1-2.svg",
      "/images/property1-3.svg",
    ],
  },
  {
    id: 3,
    title: "1010 S Forest Ave",
    address: "ANN ARBOR, MI 48104",
    price: 2800,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    description:
      "Beautifully renovated historic home combining classic charm with modern amenities.",
    features: [
      "Hardwood floors",
      "Gourmet kitchen",
      "Private yard",
      "Walk to campus",
    ],
    images: [
      "/images/property1-1.svg",
      "/images/property1-2.svg",
      "/images/property1-3.svg",
    ],
  },
  {
    id: 4,
    title: "1301 Jones Dr",
    address: "Ann Arbor, MI 48105",
    price: 2600,
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 1700,
    description:
      "Contemporary townhouse with excellent amenities in a prime location near campus.",
    features: [
      "Attached garage",
      "Smart home features",
      "Community pool",
      "Modern design",
    ],
    images: [
      "/images/property1-1.svg",
      "/images/property1-2.svg",
      "/images/property1-3.svg",
    ],
  },
];

export const contactSchema = createInsertSchema(contacts);

export type Property = typeof properties.$inferSelect;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof contactSchema>;