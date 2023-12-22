import { z, defineCollection, reference } from "astro:content";

const projectsSchema = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string().transform((str) => new Date(str)),
      language: z.enum(["en", "es"]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
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

const experienceSchema = defineCollection({
  type: "data",
  schema: z.object({
    language: z.enum(["en", "es"]),
    company: z.string(),
    location: z.string(),
    role: z.string(),
    from: z.coerce.date(),
    to: z.date().nullable(),
    description: z.string(),
    details: z.array(z.string()).optional(),
    technologies: z.array(reference("techs")).optional(),
  }),
});

const educationSchema = defineCollection({
  type: "data",
  schema: z.object({
    language: z.enum(["en", "es"]),
    institute: z.string(),
    degree: z.string(),
    from: z.string().transform((str) => new Date(str)),
    to: z.date().nullable(),
    description: z.string(),
  }),
});

const aboutSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    language: z.enum(["en", "es"]),
    description: z.string().optional().nullable(),
  }),
});

export const collections = {
  projects: projectsSchema,
  techs: techsSchema,
  experience: experienceSchema,
  education: educationSchema,
  about: aboutSchema,
};
