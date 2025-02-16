import {
    timestamp,
    uuid,
    varchar,
    pgTable,
    integer
  } from 'drizzle-orm/pg-core';

export const orders = pgTable("okataxis_orders", {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    category: varchar('category').notNull(),
    price: varchar('price').notNull(),
    car: varchar('car').notNull(),
    distance: varchar('distance'),
    stop_1: varchar('stop_1'),
    stop_2: varchar('stop_2'),
    stop_3: varchar('stop_3'),
    pickup_date: timestamp('pickup_date').notNull(),
    pickup_time: varchar('pickup_time').notNull(),
    pickup_location: varchar('pickup_location').notNull(),
    dropoff_location: varchar('dropoff_location').notNull(),
    passengers: integer('passengers').notNull(),
    childs: integer('childs').notNull(),
    bags: integer('bags').notNull(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    phone: varchar('phone').notNull(),
    flight: varchar('flight'),
    payment_id: varchar('payment_id'),
    hours: integer('hours'),
    minutes: integer('minutes'),
    updated_at: timestamp('updated_at').defaultNow().notNull(),
    created_at: timestamp('created_at').defaultNow().notNull()
  });
  

 