import { Icons } from '@/components/icons';

export const RESUME_DATA = {
  name: 'Akshay Shinde',
  initials: 'AS',
  location: 'Mumbai, IN',
  locationLink: '',
  about:
    'Detail-oriented Full Stack Engineer dedicated to building high-quality products.',
  summary: (
    <>
      Full Stack Engineer specializing in high-performance React applications,
      scalable Node.js services, and real-time collaboration systems.
      Experienced in technical architecture design and remote team leadership.
    </>
  ),
  avatarUrl:
    'https://res.cloudinary.com/dhyds1gcy/image/upload/f_auto,q_auto/v1/profile-pictures/my-avatar',
  personalWebsiteUrl: 'https://akshayshinde.com',
  contact: {
    email: 'remote.dev.codes@gmail.com',
    tel: '+91 XXXXXXXXXX',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/alphacoder-mp3',
        icon: Icons.gitHub,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/akshayshindeconnects/',
        icon: Icons.linkedIn,
      },
      {
        name: 'X',
        url: 'https://x.com/folklore69_',
        icon: Icons.twitter,
      },
    ],
  },
  education: [
    {
      school: 'Mumbai University',
      degree: 'BSc in Information Technology',
      start: 'June 2015',
      end: 'May 2018',
    },
  ],
  work: [
    {
      company: 'Dautom',
      link: 'https://www.dautom.com/',
      modeOfWork: ['Remote'],
      badges: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      title: 'Senior Software Engineer',
      logo: null,
      start: 'Jan 2025',
      end: null,
      description: (
        <>
          Leading technical architecture of banking platforms.
          <ul className="list-inside list-disc">
            <li>
              Working on integrating third party APIs to the current stack
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Fanory.ai',
      link: 'https://www.fanory.ai/',
      modeOfWork: ['Remote'],
      badges: [
        'Next.js',
        'React',
        'Agora',
        'SEO',
        'TypeScript',
        'Node.js',
        'GraphQL',
        'Tailwind CSS',
        'Animations',
        'AWS',
        'Vercel',
        'Redux',
        'React Native',
        'Redux Toolkit',
        'Lottie',
      ],
      title: 'Senior Software Engineer',
      logo: null,
      start: 'May 2023',
      end: 'Dec 2024',
      description: (
        <>
          Senior developer for an live streaming media platform.
          <ul className="list-inside list-disc">
            <li>
              Frontend Architecture: Led frontend architecture decisions,
              ensuring scalability and maintainability of the platform
            </li>
            <li>
              A publicly available platform used by a wide range of audiences,
              designed to help creators connect with their fans and earn revenue
            </li>
            <li>
              Implemented live streaming with continuous live scroll feature,
              video/audio calling and real time chats using Agora and GraphQL,
              resulting in a 10% increase in user engagement, equating to a
              $300,000 boost in monthly subscription revenue
            </li>
            <li>
              Enabled real-time interactions, including live chats and animated
              gift stickers, contributing to a 12% increase in user engagement
              and $100,000 in additional monthly revenue
            </li>
            <li>
              Introduced web components, streamlining UI development across
              diverse frameworks and libraries, resulting in a 20% reduction in
              development time
            </li>
            <li>
              Led DevOps initiatives including CI/CD pipelines with GitHub
              Actions and containerization with Docker, ensuring consistent
              deployment and scalability
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Pegasus InfoCorp',
      link: 'https://www.pegasusinfocorp.com/',
      modeOfWork: ['Remote'],
      badges: [
        'React',
        'TypeScript',
        'Node.js',
        'Webpack',
        'Ant design',
        'jQuery',
        'Express.js',
        'Redux',
        'Mysql',
        'AWS',
      ],
      title: ' Senior Software Engineer',
      logo: null,
      start: 'Sept 2021',
      end: 'May 2023',
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>Developed payment and search services implemented in Go</li>
            <li>
              Web Development Lifecycle: Engaged in the complete web development
              process from design to deployment, ensuring that front-end
              components integrate seamlessly with backend APIs.
            </li>
            <li>
              Performance Optimization: Focused on web performance optimization,
              ensuring the application runs smoothly and efficiently across
              devices resulting in 80% performance improvement
            </li>
            <li>
              Ensured cross-browser compatibility and optimized components for
              maximum performance.
            </li>
            <li>
              Participated in code reviews, contributing to a clean and
              efficient codebase through collaboration and thorough
              documentation.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Bitmantics',
      link: 'https://www.bitmantics.com/',
      modeOfWork: ['Remote'],
      badges: [
        'Next.js',
        'React',
        'Express',
        'Node',
        'Mongo',
        'Postgres',
        'Mysql',
        'Prisma',
        'AWS',
        'Devops',
        'Docker',
        'Kubernetes',
        'Zod',
      ],
      title: 'Software Engineer',
      logo: null,
      start: 'Aug 2019',
      end: 'Sep 2021',
      description: (
        <>
          Architected and developed full-stack applications using Next.js for
          the front end and Node.js with Express for the back end, implementing
          features such as dynamic routing, real-time data processing, and
          server-side rendering.
          <ul className="list-inside list-disc">
            <li>
              Implemented complex business logic in server-side components and
              APIs, ensuring robust and secure data handling across various
              domains.
            </li>
            <li>
              Enhanced front-end performance and SEO through advanced techniques
              like code-splitting, lazy loading, and dynamic metadata
              generation.
            </li>
            <li>
              Optimised front end with best practices like lazy loading,
              minification and compression of js bundle reducing its size, using
              optimal memoizations and caching practices, lazy loading the
              assets,
            </li>
            <li>
              Developed and maintained CI/CD pipelines with GitHub Actions and
              automation testing frameworks, ensuring rapid and reliable
              delivery.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Amdocs',
      link: 'https://www.amdocs.com/',
      modeOfWork: ['On-site'],
      badges: [
        'Production Management',
        'Linux',
        'SQL',
        'Scripting',
        'Automation',
        'React',
        'Node',
      ],
      title: 'Business and Technical Analyst',
      logo: null,
      start: 'July 2018',
      end: 'Aug 2019',
      description: (
        <>
          Initially worked on Bell Canada Project in Production Management with
          tech like Linux, Sql and krrish flow automation. Later on transitioned
          to full stack.
          <ul className="list-inside list-disc">
            <li>
              Automation and Krrish Flows: Leveraging my automation skills, I
              successfully implemented Krrish flows to automate our daily
              processes.
            </li>
            <li>
              Collaborated with cross-functional teams to design and implement
              RESTful APIs, integrating them seamlessly into front-end
              applications for real-time data processing.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    'AI',
    'React/Next.js/Remix',
    'TypeScript',
    'Redux',
    'Redux Toolkit',
    'Jotai',
    'Zustand',
    'Recoil',
    'Tailwind CSS',
    'Design Systems',
    'WebRTC',
    'WebSockets',
    'Agora',
    'Redis',
    'React Native',
    'Node.js',
    'Express.js',
    'Prisma',
    'Mongoose',
    'GraphQL',
    'Relay',
    'System Architecture',
    'Remote Team Leadership',
    'Docker',
    'Kubernetes',
    'Cloud',
    'Devops',
    'AWS',
    'Cloudflare',
    'Vercel',
    'Cloudinary',
    'OpenAI',
    'Gemini',
    'MistralAI',
    'Git',
    'RTL',
    'Jest',
    'Vitest',
    'Webpack',
    'PWA',
    'Ngnix',
    'HonoJS',
    'Web components',
  ],
  projects: [
    {
      title: 'Sentinent AI',
      techStack: ['TypeScript', 'Next.js', 'OpenAI', 'IndexedDB', 'PWA', 'AI'],
      description:
        'AI based webapp like chatgpt and claude with full offline capabilities with indexedDB, service workers',
      logo: null,
      link: {
        label: 'sentinent-ai',
        href: 'https://sentinent-ai.vercel.app/',
      },
    },
    {
      title: 'AI Canvas System',
      techStack: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'AI',
        'Fabric',
        'Replicate',
        'Gradio',
        'Zod',
        'Zustand',
      ],
      description:
        'A modern trendy portfolio built with latest Next js, tailwind and typescript',
      logo: null,
      link: {
        label: 'Akshay Portfolio',
        href: 'https://github.com/alphacoder-mp3/ai-canvas-system',
      },
    },
    {
      title: 'Time-tracker',
      techStack: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
      ],
      description:
        'Platform for online consultations with real-time video meetings and scheduling',
      logo: null,
      link: {
        label: 'time-tracker',
        href: 'https://time-tracker-green.vercel.app/',
      },
    },
    {
      title: 'Classic Resume',
      techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      description:
        'An open source classic, print friendly resume template with a focus on readability and clean design.',
      logo: null,
      link: {
        label: 'Classic Resume',
        href: 'https://github.com/alphacoder-mp3/resume.me',
      },
    },
    {
      title: 'Portfolio',
      techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      description:
        'A modern trendy portfolio built with latest Next js, tailwind and typescript',
      logo: null,
      link: {
        label: 'Akshay Portfolio',
        href: 'https://akshayshinde.com',
      },
    },

    {
      title: 'Taskenger',
      techStack: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Prisma',
        'Server actions',
      ],
      description:
        'Fully functional Trello web app with rich features exactly how trello provides',
      logo: null,
      link: {
        label: 'Taskenger - trello',
        href: 'https://github.com/alphacoder-mp3/taskenger',
      },
    },
    {
      title: 'Spotify',
      techStack: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Prisma',
        'Server actions',
      ],
      description: 'An audio streaming music platform',
      logo: null,
      link: {
        label: 'Spotify - A music player',
        href: 'https://github.com/alphacoder-mp3/spotify.me',
      },
    },
    {
      title: 'Devstream',
      techStack: [
        'Express',
        'Multer',
        'Cloudinary',
        'Mongoose',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
      ],
      description: 'An video streaming platform like youtube',
      logo: null,
      link: {
        label: 'Devstream - A youtube like platform',
        href: 'https://github.com/alphacoder-mp3/spotify.me',
      },
    },
    {
      title: 'ByteNotes',
      techStack: [
        'Next.js',
        'Cloudinary',
        'Server actions',
        'TypeScript',
        'Tailwind CSS',
      ],
      description:
        'A platform like a google keep with real time collaborative features',
      logo: null,
      link: {
        label: 'ByteNotes - A web app just like Google keep',
        href: 'https://github.com/alphacoder-mp3/ByteNotes',
      },
    },
    {
      title: 'A Landing page builder',
      techStack: ['Next.js', 'Server actions', 'TypeScript', 'Tailwind CSS'],
      description:
        'A Landing Page Builder - A web app to build your customizable landing page for your business or product',
      logo: null,
      link: {
        label:
          'Landing Page Builder - A web app to build your customizable landing page ',
        href: 'https://github.com/alphacoder-mp3/landing-page-builder',
      },
    },
    {
      title: 'Indiehash FE - Vetted Social Media Platform',
      techStack: [
        'Next.js',
        'Server actions',
        'TypeScript',
        'Tailwind CSS',
        'Vercel',
      ],
      description:
        'A social media aggregator front end built on top of next.js server components with highly optimised implementations',
      logo: null,
      link: {
        label: 'Indiehash FE - Vetted Social Media Platform',
        href: 'https://indiehash.com',
      },
    },
    {
      title: 'Indiehash BE - Vetted Social Media Platform',
      techStack: ['GoLang', 'Linode'],
      description: 'A social media aggregator back end built on top of GoLang',
      logo: null,
      link: {
        label: 'Indiehash BE - Vetted Social Media Platform',
        href: 'https://github.com/alphacoder-mp3/indie-back-mvp',
      },
    },
  ],
} as const;
