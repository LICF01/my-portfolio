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
    "hero.role": "Front-End Developer",
    "hero.rest": "with over 3 years of experience",
    "hero.description":
      "Dedicated to bringing designs to reality with modern technologies and attention to detail.",
    "about.title": "about",
    "about.description": "A little bit about me",
    "about.content": [
      "I'm a developer based in Asunción, Paraguay, self-taught and passionate about tech. Before coding, I studied music, learned to play the cello 🎻, and even joined an orchestra.",
      "After a series of events and serious consideration, I made a turnaround in my life and decided to focus primarily on software development 💻. I've been coding for about 4 years now 🕒, and my current focus is on front-end development, primarily using React, Next.js, and Astro 🚀. I'm also going slowly but consistently through university to get a degree in computer science 🎓 and where I had fun with languages like C and Java.",
      "Apart from coding, my interests include UI design 🎨, Linux 🐧, keyboards ⌨️, and reading science fiction and thriller-related books 📚 when I want to relax and improve my vocabulary. I also enjoy podcasts and, of course, listening to music. ",
      " In summary, music helped me to develop a consistent focus and discipline, which where fundamentals at the beggining of my learning process and which I'm applying to my new career, this have reawakened an enthusiasm for learning and improving myself 🌱.",
    ],
    "experience.title": "Experience & Education",
    "experience.description": "My professional experience and education.",
    "projects.title": "Projects",
    "projects.description":
      "Showcasing my development journey through key projects in front-end design and coding.",
    "projects.links": {
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
    },
    "footer.content": [
      "Designed and coded by me with Figma and Visual studio code",
      "Built with Astro and TailwindCSS",
      "Deployed with Vercel",
    ],
  },
  es: {
    "nav.about": "Acerca de",
    "nav.experience": "Experiencia & Educación",
    "nav.projects": "Proyectos",
    "hero.greet": "¡Hola! Soy Lucas",
    "hero.role": "Desarrollador Front-End",
    "hero.rest": "con más de 3 años de experiencia",
    "hero.description":
      "Dedicado a llevar diseños a la realidad con tecnologías modernas y atención al detalle.",
    "about.title": "Acerca de",
    "about.description": "Para saber un poco más de mi",
    "about.content": [
      "Soy un desarrollador radicado en Asunción, Paraguay, autodidacta y entusiasta de la tecnología. Antes de programar, estudié música, aprendí a tocar el violonchelo 🎻 y tuve la oportunidad de tocar en varias orquestas en mi país e incluso de forma estable en alguna.",
      "Luego de reflexionar y sumado a una  serie de eventos, di un giro y decidí enfocarme en el desarrollo de software 💻. Llevo aproximadamente 4 años programando 🕒 y actualmente me centro en el desarrollo front-end, utilizando principalmente React, Next.js y Astro 🚀. También estoy avanzando lenta pero constantemente en la universidad para obtener un título de Ingeniería en Informática 🎓, donde hasta ahora pude tener contacto con lenguajes como C y Java.",
      "Además de programar, mis intereses incluyen el diseño de interfaces de usuario 🎨, Linux 🐧, teclados ⌨️ y leer libros  de ciencia ficción y thrillers 📚 cuando quiero relajarme y mejorar mi vocabulario del inglés. También disfruto de podcasts normalmente en inglés, y, por supuesto, de escuchar música.",
      "En resumen, la música me ayudó a desarrollar el trabajo en equipo, una disciplina constante, el ser capaz de enfocarme en algo en especifico que mejorar, estas habilidades fueron fundamentales al comienzo de mi proceso de aprendizaje del desarrollo de software, que ha despertado de nuevo un entusiasmo por aprender y mejorar como persona y profesional 🌱.",
    ],
    "experience.title": "Experiencia & Educación",
    "experience.description": "Mi experiencia profesional y educación.",
    "projects.title": "Proyectos",
    "projects.description":
      "Mostrando mi camino de aprendizaje a través de proyectos en diseño y desarollo front-end.",
    "projects.links": {
      sourceCode: "Código Fuente",
      liveDemo: "Preview",
    },
    "footer.content": [
      "Diseñado y codificado por mi con Figma y Visual studio code",
      "Construido con Astro y TailwindCSS",
      "Desplegado con Vercel",
    ],
  },
} as const;

export type UI = typeof ui;

export type EnUI = UI["en"];
export type EsUI = UI["es"];
