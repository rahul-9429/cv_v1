import { z } from 'zod';

const experimentSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string().nullable(),
  technologies: z.array(z.string()),
  stars: z.number().optional().nullable(),
});

type Experiment = z.infer<typeof experimentSchema>;

export const EXPERIMENTS: Experiment[] = [
  {
    title: 'AgastyaBratha: Chat anonymously, Express anonymously',
    description:
      'AgastyaBratha is a project inspired by the themes of the Ramayana, with the name symbolizing "He who has no name or place." This project aims to create a platform where users are represented without revealing their identity, highlighting anonymity and the unknown. The UI theme is inspired by Vincent van Goghs Starry Night, using deep, rich colors to evoke a sense of mystery and intrigue. The primary color of black represents the unknown, while #345163 is used for headings to create a sense of calm and focus. Different shades from the painting are applied to messages, offering a visual distinction between users. The project blends creativity, art, and technology to create a unique and immersive experience for its users.',
    image:"https://raw.githubusercontent.com/rahul-9429/cv_v1/main/public/agastyabratha.png",
    link: 'https://agastya-bratha.vercel.app/',
    technologies: [
      'React.js',
      'CSS',
      'Firebase',
      'Vercel',
      'Javascript',
      'Websockets',
    ],
    stars: null,
  },
  {
    title: 'Weather_Me',
    description:
      'Weather_Me is a sleek weather app built with React, TypeScript, TanStack Query, and ShadCN UI. It offers real-time weather updates with a clean, responsive design and efficient data fetching for a smooth user experience.',
    image: 'https://raw.githubusercontent.com/rahul-9429/cv_v1/main/public/weatherme.png',
    link: 'https://weather-me-theta.vercel.app/',
    technologies: [
      'React.js',
      'Tanstack Query',
      'Tailwind CSS',
      'Vercel',
      'Typescript',
      'ShadCn Ui',
      'React Router',
      'Re Charts'
    ],
    stars: null,
  },
  {
    title: 'Contact manager API',
    description:
      'Developed a Contact Manager API leveraging MongoDB for efficient data storage and retrieval. The API supports full CRUD operations (Create, Read, Update, Delete) for managing contacts and integrates JWT authentication to ensure secure access. It provides endpoints to handle tasks like adding new contacts, fetching specific or all contacts, updating details, and deleting entries. ',
    image: 'https://raw.githubusercontent.com/rahul-9429/cv_v1/main/public/contactmanager.png',
    link: 'https://github.com/rahul-9429/contact-manager',
    technologies: [
      'Node.js',
      'MongoDB',
      'Express.js',
      'Bycrypt',
      'JWT'
    ],
    stars: null,
  },
  {
    title: 'ToDo: Redux Toolkit',
    description:
      'Built a To-Do Application using Redux Toolkit to manage tasks efficiently with centralized state management. It supports adding, updating, and deleting tasks, ensuring smooth and scalable state handling. The application demonstrates clean architecture and the practical use of Redux Toolkits slices.',
    image: 'https://raw.githubusercontent.com/rahul-9429/cv_v1/main/public/reduxtodo.png',
    link: 'https://github.com/rahul-9429/redux-todo',
    technologies: [
      'React.js',
      'Redux Toolkit',
      'Javascript',
      'Tailwind CSS',
    ],
    stars: null,
  },
  {
    title: 'Spaces',
    description:
      'Spaces is my first project, a simple and elegant gallery website.The website is built using HTML, CSS, and JavaScript. The website is hosted on Vercel.',
    image: 'https://raw.githubusercontent.com/rahul-9429/cv_v1/main/public/spaces.png',
    link: 'https://spaces-weld.vercel.app/',
    technologies: [
     'HTML',
     'Css',
      'Javascript',
      'Vercel'
    ],
  },

  // {
  //   title: '',
  //   description:
  //     '',
  //   image: '',
  //   link: '',
  //   technologies: [
      
  //   ],
  //   stars: null,
  // },
];
