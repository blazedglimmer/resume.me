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
    tel: '+91 XXXX XXX XXX',
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
      start: '2015',
      end: '2018',
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
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Working on integrating third party APIs to the current stack
            </li>
            <li>
              Spearheaded the development of API rate limiter using redis as the
              distributed cache
            </li>
            <li>
              Working on data ingestion and query pipeline for the billing
              framework
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
      ],
      title: 'Senior Software Engineer',
      logo: null,
      start: 'May 2023',
      end: 'Dec 2024',
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Worked on onchain listeners to listen to blockchain events and
              trigger temporal workflows
            </li>
            <li>
              Worked on using AWS KMS for secure wallet generation, offchain
              signatures, signing transactions
            </li>
            <li>
              Setup a single node blockchain using EVM OS, configured scripts
              and Dockerfile suited to our usecase
            </li>
            <li>
              Setup a single node blockchain using EVM OS, configured scripts
              and Dockerfile suited to our usecase
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Pegasus InfoCorp',
      link: 'https://www.pegasusinfocorp.com/',
      modeOfWork: ['Remote'],
      badges: ['React', 'TypeScript', 'Node.js'],
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
              Worked on data ingestion service to populate data in Elasticsearch
              to power search and recommendation services
            </li>
            <li>
              Collaborated on migrating the monolith to a microservices
              architecture
            </li>
            <li>
              Worked with the DevOps team to fix issues in the data collection
              pipeline and migrated Elasticsearch from a self-hosted instance to
              a cloud-managed instance
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
      ],
      title: 'Software Engineer',
      logo: null,
      start: 'Aug 2019',
      end: 'Sep 2021',
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Radio,
              and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: 'Amdocs',
      link: 'https://www.amdocs.com/',
      modeOfWork: ['On-site'],
      badges: ['Production Management', 'Linux'],
      title: 'Business and Technical Analyst',
      logo: null,
      start: 'July 2018',
      end: 'Aug 2019',
      description:
        'Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.',
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
      title: 'Minimalist Resume',
      techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      description:
        'An open source minimalist, print friendly resume template with a focus on readability and clean design.',
      logo: null,
      link: {
        label: 'Minimalist Resume',
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
  ],
} as const;
