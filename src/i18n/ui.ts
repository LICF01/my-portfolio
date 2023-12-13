export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience & Education",
    "nav.projects": "Projects",
    "hero.greet": "Hi! I'm Lucas",
    "hero.role": "Front‑End Developer",
    "hero.rest": "with over 3 years of experience",
    "hero.description":
      "Dedicated to bringing designs to reality with modern technologies and attention to detail.",
    "about.title": "about",
    "about.description": "A little bit about me",
    "about.content": [
      "I am a self-taught developer based in Asunción, Paraguay, and a technology enthusiast. Before programming, I learned to play the cello 🎻 and had the opportunity to play in various orchestras in my country and even on a regular basis in some of them with excellent musicians.",
      "After several years with the cello and taking advantage of the pandemic, I decided to start something new and focused on software development 💻. Since then, I have been programming for approximately 4 years 🕒 and currently, I am focusing on front-end development, using React, Next.js, and Astro 🚀. I am also slowly but steadily progressing at the university to obtain a degree in Computer Engineering 🎓, where so far I have been able to work with languages like C and Java and work remotely in a team with very good colleagues",
      "Aside from programming, my interests include UI design 🎨, Linux 🐧, keyboards ⌨️ haha, and I enjoy reading, especially science fiction and thriller books. I also usually listen to podcasts, mostly in English, and of course, enjoy listening to music",
      "In summary, music helped me develop teamwork, constant discipline, the ability to focus on something specific to improve. These skills were fundamental at the beginning of my software development learning process, which reawakened my enthusiasm for learning and improving as a person and a professional 🌱.",
    ],
    "experience.title": "Experience & Education",
    "experience.description": "My professional experience and education.",
    "projects.title": "Projects",
    "projects.description":
      "This section is a reflection of my learning process in front-end design and development.",
    "projects.links": {
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
    },
    "footer.content": [
      "Designed and coded by me with Figma and Visual Studio Code",
      "Built with Astro and TailwindCSS",
      "Deployed with Vercel",
    ],
  },
  es: {
    "nav.about": "Acerca de",
    "nav.experience": "Experiencia & Educación",
    "nav.projects": "Proyectos",
    "hero.greet": "¡Hola! Soy Lucas",
    "hero.role": "Desarrollador Front‑End",
    "hero.rest": "con más de 3 años de experiencia",
    "hero.description":
      "Dedicado a llevar diseños a la realidad con tecnologías modernas y atención al detalle.",
    "about.title": "Acerca de",
    "about.description": "Para saber un poco más de mi",
    "about.content": [
      "Soy un desarrollador radicado en Asunción, Paraguay, autodidacta y entusiasta de la tecnología. Antes de programar, aprendí a tocar el violonchelo 🎻 y tuve la oportunidad de tocar en varias orquestas en mi país e incluso de forma estable en algunas con excelentes instrumentistas.",
      "Después de varios años con el violoncello y aprovechando la pandemía, decidí empezar algo nuevo y me enfoqué en el desarrollo de software 💻, desde entonces llevo aproximadamente 4 años programando 🕒 y actualmente me centro en el desarrollo front-end, utilizando React, Next.js y Astro 🚀, además estoy avanzando lenta pero constantemente en la universidad buscando obtener el título de Ingeniería en Informática 🎓, donde pude tener contacto con lenguajes como C y Java y la experiencia inicial de trabajar en equipo remotamente con muy buenos compañeros.",
      "A parte de programar, mis intereses incluyen el diseño de interfaces de usuario 🎨, Linux 🐧, teclados ⌨️ jaja y disfruto de la lectura, especialmente libros  de ciencia ficción y thrillers. También podcasts, normalmente en inglés, y por supuesto, escuchar música.",
      "En resumen, la música me ayudó a desarrollar el trabajo en equipo, una disciplina constante y el ser capaz de enfocarme en algo en especifico que mejorar, estas habilidades fueron fundamentales al comienzo de mi proceso de aprendizaje del desarrollo de software, que despertó de nuevo un entusiasmo por aprender y mejorar como persona y profesional 🌱.",
    ],
    "experience.title": "Experiencia & Educación",
    "experience.description": "Mi experiencia profesional y educación.",
    "projects.title": "Proyectos",
    "projects.description":
      "Esta sección es reflejo de mi proceso de aprendizaje en el diseño y desarrollo front-end.",
    "projects.links": {
      sourceCode: "Código Fuente",
      liveDemo: "Preview",
    },
    "footer.content": [
      "Diseñado y codificado por mí con Figma y Visual Studio Code",
      "Construido con Astro y TailwindCSS",
      "Desplegado con Vercel",
    ],
  },
} as const;

export type UI = typeof ui;

export type EnUI = UI["en"];
export type EsUI = UI["es"];
