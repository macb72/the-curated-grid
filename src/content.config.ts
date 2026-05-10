import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const reviews = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		affiliateUrl: z.url(),
		slug: z.string(),
		image: z.string().optional(),
		category: z.string().optional(),
		rating: z.number().min(1).max(5).optional(),
		excerpt: z.string().optional(),
		productOfTheWeek: z.boolean().optional(),
	}),
});

export const collections = { reviews };
