import { z, defineCollection } from "astro:content";

const projectsSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    language: z.enum(["en", "es"]),
    preview: z.string().optional(),
    description: z.string(),
    links: z.array(
      z
        .object({
          linkType: z.enum(["source-code", "live-preview"]),
          url: z.string().url(),
        })
        .optional(),
    ),
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsSchema,
};
