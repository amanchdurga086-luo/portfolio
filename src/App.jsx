import { useEffect, useState } from "react";
import {
  personal,
  skillGroups,
  projects,
  experience,
} from "./data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Code2,
  Send,
  ChevronRight,
} from "./components/Icons";

const nav = [
  ["About", "about"],
  ["Expertise", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["DSA", "dsa"],
  ["Let's talk", "contact"],
];
const IconLink = ({ type, href, label }) => {
  const Icon = { github: Github, linkedin: Linkedin, email: Mail }[type];
  return (
    <a
      className="icon-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
};
const SectionHead = ({ eyebrow, title, copy }) => (
  <div className="section-head reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) =>
        items.forEach((i) => i.isIntersecting && i.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Aman Chaudhary home">
            <span>&lt;/&gt;</span>AC
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {nav.map(([label, target]) => (
              <a
                key={target}
                onClick={() => setMenuOpen(false)}
                href={`#${target}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="toggle"
              onClick={() => setLight(!light)}
              aria-label="Toggle colour theme"
            >
              {light ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              className="menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section id="home" className="hero container">
          <div className="hero-copy reveal">
            <p className="availability">
              {/* <i /> Available for internships */}
            </p>
            <h1>
              <span>Hi, I’m Aman</span>
              <span>
                I solve <em>real-world</em>
              </span>
              <span>problems with code</span>
            </h1>
            <p className="lede">{personal.intro}</p>
            <div className="actions">
              <a href="#projects" className="button primary">
                View my projects <ArrowUpRight size={17} />
              </a>
              <a
                href={personal.resumeUrl}
                // download
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                My resume <ArrowUpRight size={16} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&amp;to=amanchdurga086%40gmail.com"
                className="button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me <Mail size={16} />
              </a>
            </div>
            <div className="social-row">
              <span>Find me on</span>
              <IconLink
                type="github"
                href={personal.social.github}
                label="GitHub"
              />
              <IconLink
                type="linkedin"
                href={personal.social.linkedin}
                label="LinkedIn"
              />
            </div>
          </div>
          <div className="hero-photo reveal">
            <span className="portrait-label portrait-label-top">
              <span>FIG. 001</span>
              <span>THE MINDSET</span>
            </span>
            <img src="/aman-chaudhary-hero.png" alt="Aman Chaudhary" />
            <span className="portrait-caption">Engineering with intention</span>
            <span className="portrait-index">01 / 06</span>
            {/* <span className="portrait-status">
              <i />
              Currently writing my next chapter.
            </span> */}
          </div>
          <div className="hero-orb" />
        </section>
        <section id="about" className="section about">
          <div className="container about-grid">
            <SectionHead
              // eyebrow="About me"
              title="A problem solver with a builder's mindset."
              copy="I'm a Computer Science & Engineering student at AKTU, graduating in 2027, passionate about building full-stack applications and solving real-world problems through code. I work with the MERN stack and Java, with a focus on Object-Oriented Programming, Data Structures & Algorithms, and writing clean, maintainable software."
            />
            <div className="about-notes reveal">
              <div className="note-card">
                <Code2 />
                <p>
                  Building with MongoDB, Express.js, React.js, and Node.js,
                  while strengthening my foundation in Java, OOP, and software
                  design principles.
                </p>
              </div>
              <div className="note-card stat">
                <strong>
                  350<span>+</span>
                </strong>
                <p>
                  coding problems solved across LeetCode, HackerRank &
                  InterviewBit.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section container">
          <SectionHead
            // eyebrow="Toolkit"
            title="My Tech Stack"
            copy="Technologies and engineering fundamentals I use to build applications and solve problems."
          />
          <div className="skills-grid">
            {skillGroups.map(([name, skills], index) => (
              <article className="skill-card reveal" key={name}>
                {/* <span className="skill-number">0{index + 1}</span> */}
                <h3>{name}</h3>
                <div>
                  {skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="container">
            <SectionHead
              // eyebrow="Projects"
              title="Projects that turn ideas into code"
              copy="A collection of applications and engineering projects built with React, Node.js, and modern development tools — exploring algorithms, backend systems, and practical solutions to real-world problems."
            />
            <div className="project-list">
              {projects.map((project, i) => (
                <article className="project reveal" key={project.title}>
                  <div
                    className={`project-art ${project.art}`}
                    aria-hidden="true"
                  >
                    {project.art === "path" && (
                      <div className="grid-art">
                        {Array.from({ length: 40 }, (_, n) => (
                          <i
                            key={n}
                            className={
                              [
                                7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 27,
                              ].includes(n)
                                ? "route"
                                : ""
                            }
                          />
                        ))}
                      </div>
                    )}
                    {project.art === "weather" && (
                      <>
                        <span className="sun-art">☼</span>
                        <strong>24°</strong>
                        <small>New Delhi · Clear</small>
                      </>
                    )}
                    {project.art === "auth" && (
                      <>
                        <span className="lock-art">⌑</span>
                        <small>SECURE SESSION</small>
                        <div className="auth-lines">
                          <i />
                          <i />
                          <i />
                        </div>
                      </>
                    )}
                    {project.art === "notes" && (
                      <>
                        <span className="api-art">GET /notes</span>
                        <span className="api-ok">200 OK</span>
                        <div className="json-art">
                          {"{"} <b>notes</b>: [...] {"}"}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      {/* <span>0{i + 1}</span> */}
                      {/* <span>{project.type}</span> */}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="project-footer">
                      <div className="tags">
                        {project.stack.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                          >
                            <Github size={19} />
                          </a>
                        ) : (
                          <button
                            disabled
                            title="Add repository URL in portfolioData.js"
                            aria-label="GitHub repository coming soon"
                          >
                            <Github size={19} />
                          </button>
                        )}
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                          >
                            <ExternalLink size={19} />
                          </a>
                        ) : (
                          <button
                            disabled
                            title="Live demo unavailable"
                            aria-label="Live demo unavailable"
                          >
                            <ExternalLink size={19} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="section container">
          <SectionHead
            // eyebrow="Experience"
            title="Turning skills into real-world impact."
          />
          <div className="timeline reveal">
            <span className="timeline-dot" />
            <div>
              <p className="date">{experience.dates}</p>
              <h3>{experience.role}</h3>
              <h4>{experience.organisation}</h4>
              <ul>
                {experience.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="education" className="section education">
          <div className="container">
            <SectionHead
              // eyebrow="Education"
              title="My academic background"
            />
            <div className="education-card reveal">
              <span className="edu-mark">AKTU</span>
              <div>
                <p>2023 — 2027</p>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <span>Abdul Kalam Technical University</span>
              </div>
              {/* <ChevronRight /> */}
            </div>
          </div>
        </section>
        <section id="dsa" className="section container dsa">
          <SectionHead
            // eyebrow="Problem solving"
            // An IDE (Integrated Development Environment) is a software application that provides a comprehensive platform for writing, editing, testing, compiling, and debugging code
            title="Where logic meets problem-solving"
            copy="Regular practice in Data Structures & Algorithms strengthens my analytical thinking, helps me break down complex problems, and guides me toward efficient solutions."
          />
          <div className="dsa-panel reveal">
            <div className="dsa-stats">
              <span className="big-number">
                350<sup>+</sup>
              </span>
              <p>coding problems solved</p>
              <span>Across coding platforms</span>
            </div>
            <div className="platforms">
              <p>Platforms</p>
              <a
                href="https://leetcode.com/u/amanchud850/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/amanchdurga086"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.interviewbit.com/profile/aman-chaudhary_202/"
                target="_blank"
                rel="noreferrer"
              >
                InterviewBit <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="topics">
              <p>Topics in practice</p>
              <span>Arrays &amp; Strings</span>
              <span>Binary Search</span>
              <span>Bit Manipulation</span>
              <span>Two Pointers</span>
              <span>Linked List</span>
              <span>Stack &amp; Queue</span>
              <span>Hashing</span>
              <span>Heap</span>
              <span>Backtracking</span>
              <span>Trees &amp; Graphs</span>
              <span>Dynamic Programming</span>
            </div>
            {/* <a className="text-link" href="https://leetcode.com" target="_blank" rel="noreferrer">
              View coding profiles <ArrowUpRight size={16} />
            </a> */}
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container contact-grid">
            <div className="reveal">
              <span className="eyebrow">Get in touch</span>
              <h2>Have a project or opportunity in mind?</h2>
              <p>
                I'm open to SDE internships and frontend or full-stack
                development opportunities. Feel free to reach out to discuss a
                role, project, or collaboration.
              </p>
              {/* <div className="contact-social">
                <IconLink
                  type="github"
                  href={personal.social.github}
                  label="GitHub"
                />
                <IconLink
                  type="linkedin"
                  href={personal.social.linkedin}
                  label="LinkedIn"
                />
                <IconLink
                  type="email"
                  href={personal.social.email}
                  label="Email"
                />
              </div> */}
            </div>
            <form
              className="contact-form reveal"
              action="https://formspree.io/f/xrpelydw"
              method="POST"
            >
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  placeholder="Tell me about your opportunity..."
                  rows="4"
                />
              </label>
              <button className="button primary" type="submit">
                Send message <Send size={16} />
              </button>
              {/* <small>
                Connect a form provider or backend to enable sending.
              </small> */}
            </form>
          </div>
        </section>
        {/* <section className="resume-band">
          <div className="container reveal">
            <div>
              <span className="eyebrow">Résumé</span>
              <h2>Want to know more about my experience?</h2>
              <p>
                Download my resume to explore my skills, projects, education,
                and experience.
              </p>
            </div>
            <a href={personal.resumeUrl} download className="button primary">
              Download résumé <Download size={16} />
            </a>
          </div>
        </section> */}
      </main>
      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span>&lt;/&gt;</span>AC
          </a>
          <p>Building, learning, and solving one problem at a time.</p>
          <span>© 2026 Aman Chaudhary.</span>
        </div>
      </footer>
    </>
  );
}
export default App;
