interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}
interface ExperienceDetails {
  projects: ExperienceProject[];
  point: string[]; // Array of points
}

interface ExperienceProject {
  _key: string;
  projectDescription: string;
  projectName: string;
}

// Updated Experience interface
interface Experience extends SanityBody {
  _type: 'experience';
  technologies: Skill[];
  companyImage: Image;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  companyTitle: string;
  companyLocation: string;
  experienceDetails: ExperienceDetails;
}
interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  link: string;
  overview: string;
  technologies: Skill[];
}

interface SocialLink {
  _type: 'link';
  _key: string;
  title: string;
  url: string;
  icon: Image;
  isVisible: boolean;
}

interface MyPageInfo extends SanityBody {
  _type: 'personalInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  socials: SocialLink[];
}
