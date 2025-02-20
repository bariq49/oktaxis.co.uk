ALTER TABLE "okataxis_orders" ADD COLUMN "track_id" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "okataxis_orders" ADD CONSTRAINT "okataxis_orders_track_id_unique" UNIQUE("track_id");