export type Project = {
  slug: string;
  title: string;
  category: "Software" | "Web" | "Cloud / DevOps";
  summary: string;
  context?: string;
  overview?: string;
};

export const projects: Project[] = [
  {
    slug: "microservices-monitoring-application",
    title: "Microservices Monitoring Application",
    category: "Software",
    summary: "A final-year project developed at RoamSmart to monitor a microservices environment.",
    context: "Final-year project · RoamSmart · February–June 2024",
    overview: "Designed and developed as a focused monitoring application for microservices. Additional implementation details and the technical stack are intentionally omitted until they can be verified from the original project material.",
  },
];
