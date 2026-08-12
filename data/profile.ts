export const profile = {
  name: "Mohamed Dhia Gaied",
  title: "Software Engineering Developer",
  subtitle: "Computer Engineering Student",
  email: "klose.gaied@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-dhia-gaied-116538224/",
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "",
  cv: "/cv/Mohamed-Dhia-Gaied-CV.pdf",
  cvAvailable: true,
};

export const experience = [
  { date: "Aug. 2025 — sep2025", company: "Proxtiec", role: "IT Maintenance", description: "Maintenance and support of computer systems and IT infrastructure." },
  { date: "Feb. 2024 — Jun. 2024", company: "RoamSmart", role: "Final-Year Project", description: "Development of a microservices monitoring application." },
  { date: "Jun. 2023 — Jul. 2023", company: "CIMS", role: "Internship Project", description: "Design and implementation of a presence and attendance management module for a healthcare institution." },
  { date: "Jul. 2022 — Aug. 2022", company: "OACA", role: "Internship", description: "Monitoring and management related to public tender processes." },
];

export const education = [
  { date: "2024 — Present", degree: "National Engineering Degree", field: "Computer Engineering", school: "iTeam University" },
  { date: "2021 — 2024", degree: "National Bachelor's Degree", field: "Software Engineering & Information Systems · Computer Science", school: "École Centrale Supérieure Privée d’Informatique et de Télécommunications" },
  { date: "2020 — 2021", degree: "Baccalaureate", field: "Economics & Management", school: "Lycée Kheireddine Bacha, Ariana" },
];

export const skills = {
  Framework  : ["laravel", "React", "flutter", "flask"],
  frontend: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS" , "bootstrap"],
  Backend: ["FastAPI", "Python", "PHP", "Node.js", "Java"  ],
  Database: ["PostgreSQL" , "MySQL" , "mongodb" ," sqlite"],
  Programming: ["C", "C++"],
  "DevOps / Tools": ["Docker", "Git", "GitHub", "npm", "postman"],
  Engineering: ["UML", "REST APIs", "JWT Authentication", "Software Architecture"],
  Cloud: ["aws ", "azure"],
};

export const skillLogos: Record<string,string> = {
  "Next.js":"nextdotjs", React:"react", TypeScript:"typescript", JavaScript:"javascript", HTML:"html5", CSS:"css3", "Tailwind CSS":"tailwindcss", bootstrap:"bootstrap",
  laravel:"laravel", flutter:"flutter", flask:"flask", FastAPI:"fastapi", Python:"python", PHP:"php", "Node.js":"nodedotjs", Java:"java",
  PostgreSQL:"postgresql", MySQL:"mysql", mongodb:"mongodb", sqlite:"sqlite", C:"c", "C++":"cplusplus", Docker:"docker", Git:"git", GitHub:"github", npm:"npm", postman:"postman",
  "aws ":"amazonaws", azure:"microsoftazure"
};
