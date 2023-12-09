import { z, defineCollection, reference } from "astro:content";

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
    technologies: z.array(reference("techs")).optional(),
  }),
});

const techsSchema = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string().url(),
    icon: z.object({ type: z.string(), src: z.string().optional() }).optional(),
  }),
});

export const collections = {
  projects: projectsSchema,
  techs: techsSchema,
};
