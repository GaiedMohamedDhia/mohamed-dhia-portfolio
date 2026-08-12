"use client";

import { FormEvent, useState } from "react";
import { projects } from "./data/projects";

const nav = ["about", "education", "skills", "projects", "experience", "certifications", "cv", "contact"];
const skillGroups = [
  { title: "Frontend", level: "Interface craft", skills: ["HTML · Advanced", "CSS · Advanced", "JavaScript · Intermediate", "React.js · Intermediate"] },
  { title: "Programming & Backend", level: "Core development", skills: ["PHP · Advanced", "Python · Intermediate", "Java · Intermediate", "C · Intermediate", "C++ · Intermediate", "Node.js · Beginner"] },
  { title: "Software Engineering", level: "System thinking", skills: ["UML · Intermediate"] },
];
const education = [
  ["2024 — Present", "National Engineering Degree", "Computer Engineering", "iTeam University"],
  ["2021 — 2024", "National Bachelor's Degree", "Software Engineering & Information Systems · Computer Science", "École Centrale Supérieure Privée d’Informatique et de Télécommunications"],
  ["2020 — 2021", "Baccalaureate", "Economics & Management", "Lycée Kheireddine Bacha, Ariana"],
];
const experience = [
  ["August 2025 — Present", "IT Maintenance", "Proxtiec", "Supporting computer maintenance activities."],
  ["February — June 2024", "Final-Year Project", "RoamSmart", "Developed a microservices monitoring application."],
  ["June — July 2023", "Internship", "CIMS · Ministry of Health IT Center", "Designed and implemented a presence and attendance management module for a healthcare institution."],
  ["July — August 2022", "Internship", "OACA", "Contributed to work related to monitoring and managing public tender processes."],
];
const certifications = [
  ["Microsoft", "AZ-900", "May 2025"], ["Cisco", "Python Certification", "May 2024"], ["Huawei", "Artificial Intelligence Certification", "May 2024"],
  ["AWS Academy", "Cloud", "May 2024"], ["IBM Developer Skills Network", "R for Data Science", "May 2023"], ["Honoris", "21st Century Skills", "May 2023"],
];

export function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation">
      <a className="brand" href="#home" aria-label="Home"><span>MDG</span><i /></a>
      <div className={`nav-links ${menu ? "open" : ""}`}>{nav.map(item => <a key={item} href={`#${item}`} onClick={() => setMenu(false)}>{item}</a>)}</div>
      <div className="nav-actions"><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? "×" : "≡"}</button></div>
    </nav></header>
    <main id="main">
      <section id="home" className="hero shell">
        <div className="hero-copy"><p className="eyebrow"><span /> Available for meaningful opportunities</p><h1>Engineering software<br/><em>with clarity.</em></h1><p className="identity">Mohamed Dhia Gaied</p><p className="role">Software Engineering Developer <b>·</b> Computer Engineering Student</p><p className="lede">I build robust applications and explore cloud technologies, software architecture, and modern engineering practices—turning technical problems into thoughtful, efficient solutions.</p>
          <div className="cta"><a className="button primary" href="#projects">Explore my work <b>↗</b></a><a className="button" href="https://www.linkedin.com/in/mohamed-dhia-gaied-116538224/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href="#contact">Let’s talk →</a></div>
        </div>
        <div className="portrait-stage" aria-label="Portrait placeholder"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait"><span>MDG</span><small>PORTRAIT<br/>READY</small></div><div className="status-card"><i/> Building at the intersection of<br/><b>software + systems</b></div></div>
        <div className="hero-foot"><span>Scroll to discover</span><span className="line"/><code>36.8065° N · TUNISIA</code></div>
      </section>

      <section id="about" className="section shell split"><div><p className="kicker">01 / About</p><h2>A curious engineer,<br/>grounded in <em>systems.</em></h2></div><div className="about-copy"><p>I'm a software engineering developer and computer engineering student focused on how dependable products are designed, built, and improved.</p><p>My path spans application development, microservices monitoring, and practical IT environments. I care about clear architecture, efficient solutions, and the discipline behind reliable software.</p><div className="stats"><div><strong>4</strong><span>Professional experiences</span></div><div><strong>6</strong><span>Certifications</span></div><div><strong>11</strong><span>Verified technologies</span></div></div></div></section>

      <section id="education" className="section shell"><p className="kicker">02 / Education</p><div className="section-head"><h2>Built on a strong<br/><em>academic foundation.</em></h2><p>An evolving path from economics and management to software engineering and computer systems.</p></div><div className="timeline">{education.map((e,i)=><article className="timeline-row" key={e[0]}><span className="num">0{i+1}</span><time>{e[0]}</time><div><h3>{e[1]}</h3><p>{e[2]}</p></div><strong>{e[3]}</strong></article>)}</div></section>

      <section id="skills" className="section skills-section"><div className="shell"><p className="kicker">03 / Capabilities</p><div className="section-head"><h2>Tools I use to turn<br/><em>ideas into systems.</em></h2><p>Proficiency is shown as documented—without artificial percentages or inflated claims.</p></div><div className="skill-grid">{skillGroups.map((g,i)=><article className="skill-card" key={g.title}><span>0{i+1}</span><p>{g.level}</p><h3>{g.title}</h3><div>{g.skills.map(s=><i key={s}>{s}</i>)}</div></article>)}</div></div></section>

      <section id="projects" className="section shell"><p className="kicker">04 / Selected work</p><div className="section-head"><h2>One verified project.<br/><em>No filler.</em></h2><p>Only work supported by the provided information appears here. The portfolio is ready to grow as project details become available.</p></div>{projects.map(p=><article className="project" key={p.slug}><div className="project-visual"><div className="nodes"><i/><i/><i/><i/><span>MONITOR</span></div><small>SOFTWARE / 2024</small></div><div className="project-copy"><p>{p.context}</p><h3>{p.title}</h3><p>{p.summary}</p><div className="tags"><span>{p.category}</span><span>Microservices</span><span>Monitoring</span></div><a className="button" href={`/projects/${p.slug}`}>View case study →</a></div></article>)}</section>

      <section id="experience" className="section shell"><p className="kicker">05 / Experience</p><div className="section-head"><h2>Learning through<br/><em>real environments.</em></h2><p>Professional and internship experience across software, healthcare IT, aviation administration, and computer maintenance.</p></div><div className="experience">{experience.map((e,i)=><article key={e[0]}><span>{String(i+1).padStart(2,"0")}</span><time>{e[0]}</time><div><p>{e[2]}</p><h3>{e[1]}</h3><small>{e[3]}</small></div></article>)}</div></section>

      <section id="certifications" className="section certs"><div className="shell"><p className="kicker">06 / Certifications</p><div className="section-head"><h2>Always expanding<br/><em>the toolkit.</em></h2><p>Validated learning across cloud, programming, artificial intelligence, and data science.</p></div><div className="cert-grid">{certifications.map((c,i)=><article key={c[1]}><span>0{i+1}</span><small>{c[0]}</small><h3>{c[1]}</h3><time>{c[2]}</time></article>)}</div></div></section>

      <section id="cv" className="section shell cv"><div><p className="kicker">07 / Curriculum vitae</p><h2>The full story,<br/><em>in one document.</em></h2><p>The original CV file was not included with the supplied brief. This area is ready for the verified PDF—preview and download will activate when it is added.</p></div><div className="cv-paper"><span>CURRICULUM VITAE</span><strong>Mohamed<br/>Dhia Gaied</strong><p>Software Engineering Developer<br/>Computer Engineering Student</p><button disabled>CV file pending</button></div></section>

      <section id="contact" className="section contact"><div className="shell contact-grid"><div><p className="kicker">08 / Contact</p><h2>Let’s build something<br/><em>that matters.</em></h2><p>Have an opportunity, academic collaboration, or thoughtful project in mind? Reach out on LinkedIn or use the form.</p><a href="https://www.linkedin.com/in/mohamed-dhia-gaied-116538224/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div><form onSubmit={submit}><div className="form-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@example.com"/></label></div><label>Subject<input required name="subject" placeholder="What would you like to discuss?"/></label><label>Message<textarea required name="message" rows={5} placeholder="Tell me a little about it..."/></label><button className="button primary" type="submit">Send message →</button>{sent && <p className="success" role="status">Thanks—your message is ready. Direct delivery will be enabled once a verified email or form endpoint is provided.</p>}</form></div></section>
    </main>
    <footer className="footer shell"><a className="brand" href="#home"><span>MDG</span><i/></a><p>Designed with intent. Built for what’s next.</p><span>© {new Date().getFullYear()} Mohamed Dhia Gaied</span></footer>
  </>;
}
