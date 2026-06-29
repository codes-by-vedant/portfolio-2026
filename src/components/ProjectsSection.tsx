import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  liveUrl: string;
  techStack: string[];
  highlights: string[];
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Healthcare',
    name: 'MediFind - Pharmacy Locator Platform',
    description:
      'A healthcare platform that helps users find medicines, check availability across pharmacies, and locate nearby medical stores through an intuitive and responsive interface.',
    liveUrl: 'https://github.com/codes-by-vedant/nearnest-platform.git',
    techStack: ['React.js', 'React Native','Node.js', 'Firebase', 'Google Cloud' ,'Role Based Access Control', 'Row Level Access Control', 'API Integration','UI/UX Design'],
    highlights: [
      'Problem: Difficulty in locating medicines and managing pharmacy inventory efficiently',
      'Solution: Developed a cloud-based system with RBAC for users, pharmacy owners, doctors and admins for end-to-end management',
      'Built responsive web and mobile interfaces',
      'Integrated Firebase authentication and cloud database',
      'Added location-based service discovery using maps/location features'
    ],
  },
  {
    number: '02',
    category: 'Automation',
    name: 'NearNest - Bridging the gap between local shops and the digital world.',
    description:
      'Nearnest is a web platform that empowers local businesses to build an online presence, showcase their products and services, manage customer inquiries, and connect with nearby customers through search and location-based discovery.',
    liveUrl: 'https://github.com/codes-by-vedant/Nearest-Empowering-local-shops.git',
    techStack: ['Flask', 'SQLite3', 'Python', 'HTML', 'CSS', 'RBAC', 'Google maps API'],
    highlights: [
      'Problem: Users struggle with finding nearby shops and relevant local services easily',
      'Solution: Digitalize local shops and bring them online for better accessibility',
      'Implemented Role Based Access Control System to Authenticate & Authorize users.',
      'Built user-friendly, scalable and easy to use UI through which users can interact with the platfrom.',
      'Created a better Database Schema & Design to store and fetch user data with minial latency and with high accuracy.',
      'Integrated In-app Google Maps for ease of use.'
    ],
  },

   {
    number: '03',
    category: 'Education',
    name: ' University Based Quiz Web Application',
    description:
      'University Quiz Platfrom is an interactive assessment platform designed to modernize the evaluation process within the university. It enables educators to conduct quizzes efficiently, monitor student performance, and gain insights into learning progress. By providing a structured and engaging assessment experience, the platform supports continuous learning, timely feedback, and data-driven academic improvement.',
    liveUrl: 'https://github.com/codes-by-vedant/UniversityBasedQuizPlatform.git',
    techStack: [ 'Python', 'Django', 'HTML', 'CSS', 'SQLite', 'RBAC'],
    highlights: [
      'Problem: Traditional assessment methods lacked efficiency and tracking capability',
      'Solution: Developed a web-based quiz system for conducting and managing exams online',
      'Designed a responsive, scalable & user friendly UI to interact with the platfrom.',
      'Implemented tight authentication & authorization protocols to keep the user accounts safe from unauthorized access.',
      'Implemented Graphical report system to track the students progess and display it in graphical manner.',
    ],
  },

  {
    number: '04',
    category: 'Healthcare',
    name: ' An Approach for Detection and Classification of Brain Tumor Using CNN and VGG – 16 Modules.',
    description:
      'Brain Tumor Detection & Classification System is an ML based medical imaging platform designed to assist in the early detection and analysis of brain tumors from MRI scans. The system analyzes uploaded brain MRI images to identify the presence of tumors, classify their type, and assess their severity. By leveraging advanced deep learning techniques, the platform supports faster and more accurate diagnostic insights, helping improve clinical decision-making and patient care.',
    liveUrl: 'https://github.com/riteshbhosale2071/BrainTumorDetectionProject.git',
    techStack: [ 'Python', 'TensorFlow', 'CNN', 'VGG-16'],
    highlights: [
      'Integrated ML-based models for image classification & image learning.',
      'Trained the model using TensorFlow and large datasets.',
      'Focused on detection, classification & the severity calculation of the brain tumors only.',
      'Tested the accuracy & efficiency of the model using real world data'
    ],
  },
];


interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97 - index * 0.005]);

  return (
    <div
      ref={cardRef}
      className="sticky top-16 sm:top-24 md:top-28 min-h-[480px] h-[88vh] sm:h-[78vh] md:h-[82vh] w-full mb-4 sm:mb-0"
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-2.5 sm:gap-4 md:gap-5 rounded-[24px] sm:rounded-[32px] md:rounded-[38px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3.5 sm:p-5 md:p-6 overflow-y-auto"
      >
        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-row items-start gap-3 sm:gap-5 md:gap-7 min-w-0 w-full">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(1.75rem, 8vw, 110px)' }}
            >
              {project.number}
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 pt-1 sm:pt-2 min-w-0 flex-1">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.7rem, 2.2vw, 1.1rem)' }}
              >
                {project.category}
              </span>

              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight break-words"
                style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.6rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl px-0.5 sm:px-2">
          <p
            className="text-[#D7E2EA]/85 leading-relaxed"
            style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.15rem)' }}
          >
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="max-w-4xl px-0.5 sm:px-2">
          <h4
            className="text-[#D7E2EA]/90 uppercase tracking-widest mb-2 font-semibold"
            style={{ fontSize: 'clamp(0.7rem, 1.6vw, 1.1rem)' }}
          >
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 py-1 rounded-full border border-[#3B82F6]/40 text-[#D7E2EA] bg-[#0C0C0C]/40 hover:shadow-[0_0_10px_#3B82F6] transition-all whitespace-nowrap"
                style={{ fontSize: 'clamp(0.6rem, 1.4vw, 0.85rem)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* HIGHLIGHTS (FULLY PRESERVED) */}
        <div className="max-w-4xl px-0.5 sm:px-2">
          <h4
            className="text-[#D7E2EA]/85 uppercase tracking-widest mb-2"
            style={{ fontSize: 'clamp(0.7rem, 1.6vw, 1.1rem)' }}
          >
            Project Highlights
          </h4>

          <ul className="space-y-1">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="text-[#D7E2EA]/80 leading-snug flex gap-2"
                style={{ fontSize: 'clamp(0.68rem, 1.5vw, 1rem)' }}
              >
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] px-3 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#D7E2EA] mb-10 sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(2.2rem, 10vw, 140px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
