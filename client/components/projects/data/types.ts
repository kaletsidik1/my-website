export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  keyFeatures: string[];
  technicalChallenges: string[];
  techStack: {
    name: string;
    description: string;
  }[];
  detailedDescription?: string;
}
