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
      link: '',
      modeOfWork: ['Remote'],
      badges: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      title: 'Senior Software Engineer',
      logo: null,
      start: '2025',
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
      link: '',
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
      start: '2023',
      end: '2024',
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
      link: '',
      modeOfWork: ['Remote'],
      badges: ['React', 'TypeScript', 'Node.js'],
      title: ' Senior Software Engineer - Solidity Developer',
      logo: null,
      start: '2021',
      end: '2023',
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
      link: '',
      modeOfWork: ['Remote'],
      badges: [
        'Next.js',
        'React',
        'Express',
        'Node',
        'Mongo',
        'Postgres',
        'Prisma',
        'AWS',
        'Devops',
      ],
      title: 'Senior Software Engineer',
      logo: null,
      start: '2019',
      end: '2021',
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
      link: '',
      modeOfWork: ['On-site'],
      badges: ['Production Management', 'Linux'],
      title: 'Business and Technical Analyst',
      logo: null,
      start: '2018',
      end: '2019',
      description:
        'Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.',
    },
  ],
  skills: [
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
    'Node.js',
    'Express.js',
    'GraphQL',
    'Relay',
    'System Architecture',
    'Remote Team Leadership',
    'Cloud',
    'Devops',
    'AWS',
    'Cloudflare',
    'Vercel',
    'Cloudinary',
  ],
  projects: [
    {
      title: 'Sentinent AI',
      techStack: ['TypeScript', 'Next.js', 'OpenAI', 'IndexedDB', 'PWA', 'AI'],
      description: 'AI based webapp like chatgpt and claude',
      logo: null,
      link: {
        label: 'sentinent-ai',
        href: 'https://sentinent-ai.vercel.app/',
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
        label: 'Minimalist CV',
        href: 'https://github.com/alphacoder-mp3/resume.me',
      },
    },
  ],
} as const;
