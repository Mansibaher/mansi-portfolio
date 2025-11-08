import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  GraduationCap,
  Cpu,
  BookOpen,
  FlaskConical,
  Sun,
  Moon
} from "lucide-react";

// ==========================================
// Visual Upgrade — Quick Config (edit here)
// ==========================================
const profile = {
  name: "Mansi Aher",
  tagline: "ML Engineer • Full‑Stack Developer • Data Storyteller",
  location: "Los Angeles, CA",
  email: "mansibaher@gmail.com",
  resumeUrl: "#", // TODO: replace with your resume PDF link
  socials: {
    github: "https://github.com/Mansibaher",
    linkedin: "https://www.linkedin.com/in/mansi-aher-3ab83021b",
  },
  summary:
    "Graduate CS student (GPA 3.9) focusing on applied ML and backend systems. I build reliable, interpretable AI—deployed to the real world. Open to full‑time roles from May 2026.",
};

const skills = [
  { category: "Core", items: ["Python", "Kotlin", "Java", "C++", "SQL", "JavaScript"] },
  { category: "ML / Data", items: ["PyTorch", "TensorFlow", "scikit‑learn", "Grad‑CAM", "Pandas", "NumPy"] },
  { category: "Backend / Cloud", items: ["FastAPI", "Ktor", "REST APIs", "Firebase", "Docker", "GCP"] },
  { category: "Analytics / Viz", items: ["Tableau", "Streamlit", "Matplotlib", "Plotly"] },
];

const education = [
  { title: "M.S. Computer Science, GPA 3.9", org: "California State University, Los Angeles", time: "Aug 2024 – May 2026" },
  { title: "B.E. Computer Engineering, GPA 3.81", org: "Savitribai Phule Pune University", time: "Aug 2020 – May 2024" },
];

const projects = [
  {
    title: "Brain Tumor MRI Classifier (Explainable AI)",
    tags: ["PyTorch", "Grad‑CAM", "Streamlit"],
    desc: "Built a CNN with Grad‑CAM for interpretability; deployed a clinician‑friendly Streamlit app with PDF reporting.",
    links: [{ label: "GitHub", href: "https://github.com/Mansibaher/BrainTumorClassifier" }],
  },
  {
    title: "Book Club Platform API",
    tags: ["Ktor", "Firebase", "JWT", "Google Books API"],
    desc: "Server‑side Kotlin API with auth, book voting, clubs, and protected routes; modular endpoints following REST.",
    links: [],
  },
  {
    title: "Job Market Analytics Dashboard",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    desc: "Real‑time skill demand tracker for Data/ML roles with scraping, cleaning, and interactive dashboards.",
    links: [],
  },
  {
    title: "Thesis: AI‑Enabled Acoustic Leak Detection (IWMS)",
    tags: ["PyTorch", "Signal Processing", "TinyML", "IoT"],
    desc: "Researching multi‑sensor leak detection (hydrophone, pressure, accelerometer). Exploring edge deployment and data fusion.",
    links: [],
  },
];

const leadership = [
  { role: "Vice President", org: "Banned Bookworms Club", time: "2025" },
  { role: "Orientation Leader / Campus Tour Guide", org: "Cal State LA", time: "2025" },
];

// =============================
// UI Helpers
// =============================
const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-2xl shadow bg-white/70 dark:bg-slate-900/60 backdrop-blur flex items-center justify-center ring-1 ring-indigo-100/70 dark:ring-slate-700">
        <Icon className="w-5 h-5 text-indigo-500" />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="space-y-4">{children}</div>
  </section>
);

const Chip = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border bg-white/70 dark:bg-slate-800/60">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl p-5 border bg-white/80 dark:bg-slate-900/50 backdrop-blur shadow-sm hover:shadow-md transition ${className}`}>
    {children}
  </div>
);

// ==========================================
// Main Component (Visual Refresh + Dark Mode)
// ==========================================
export default function Portfolio() {
  const [dark, setDark] = React.useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
        {/* Nav */}
        <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-slate-900/60 backdrop-blur">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold tracking-tight">{profile.name}</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="hover:opacity-80 underline-offset-4 hover:underline">About</a>
              <a href="#skills" className="hover:opacity-80 underline-offset-4 hover:underline">Skills</a>
              <a href="#projects" className="hover:opacity-80 underline-offset-4 hover:underline">Projects</a>
              <a href="#education" className="hover:opacity-80 underline-offset-4 hover:underline">Education</a>
              <a href="#leadership" className="hover:opacity-80 underline-offset-4 hover:underline">Leadership</a>
              <a href="#contact" className="hover:opacity-80 underline-offset-4 hover:underline">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl border hover:shadow transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl border hover:shadow transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.resumeUrl}
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-xl border shadow hover:shadow-md transition"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
              <button
                onClick={() => setDark((d) => !d)}
                className="p-2 rounded-xl border hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <main id="home" className="max-w-5xl mx-auto px-4 pt-12 pb-24">
          <div className="h-2 bg-red-500"></div>

          <div className="grid md:grid-cols-5 gap-6 items-center mb-16">
            <div className="md:col-span-3">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                {profile.tagline}
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose">{profile.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 shadow-sm hover:shadow transition"
                >
                  View Projects
                </a>
                <a
                  href={profile.resumeUrl}
                  className="px-4 py-2 rounded-xl border hover:bg-white/70 dark:hover:bg-slate-800 transition"
                >
                  Download Resume
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4" aria-hidden /> {profile.location}
              </div>
            </div>
            <Card className="md:col-span-2">
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 mt-1 text-indigo-500" aria-hidden />
                <div>
                  <h3 className="font-semibold">Currently</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Graduate Research on AI‑Enabled Acoustic Leak Detection (IWMS) — exploring TinyML edge deployment.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 mt-1 text-indigo-500" aria-hidden />
                <div>
                  <h3 className="font-semibold">Graduation</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">May 2026 — open to full‑time roles.</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <FlaskConical className="w-5 h-5 mt-1 text-indigo-500" aria-hidden />
                <div>
                  <h3 className="font-semibold">Focus Areas</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Machine Learning • Data • Backend • MLOps</p>
                </div>
              </div>
            </Card>
          </div>

          {/* About */}
          <Section id="about" icon={BookOpen} title="About">
            <Card>
              <p>
                I enjoy turning raw data into reliable, interpretable systems. My work spans computer vision in healthcare,
                backend APIs in Kotlin, and research on sensor‑driven leak detection. I care about building tools that are useful,
                measurable, and deployed.
              </p>
            </Card>
          </Section>

          {/* Skills */}
          <Section id="skills" icon={Cpu} title="Skills">
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((group) => (
                <Card key={group.category}>
                  <h3 className="font-medium mb-2">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section id="projects" icon={Cpu} title="Selected Projects">
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <Card key={p.title} className="transition-transform hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold tracking-tight">{p.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{p.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                  {p.links?.length ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" /> {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section id="education" icon={GraduationCap} title="Education">
            <div className="grid md:grid-cols-2 gap-4">
              {education.map((e) => (
                <Card key={e.title}>
                  <h3 className="font-semibold tracking-tight">{e.title}</h3>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{e.org}</div>
                  <div className="text-xs text-slate-500 mt-1">{e.time}</div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Leadership */}
          <Section id="leadership" icon={BookOpen} title="Leadership & Activities">
            <div className="grid md:grid-cols-2 gap-4">
              {leadership.map((l) => (
                <Card key={l.role}>
                  <h3 className="font-semibold tracking-tight">{l.role}</h3>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{l.org}</div>
                  <div className="text-xs text-slate-500 mt-1">{l.time}</div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section id="contact" icon={Mail} title="Contact">
            <Card>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:shadow transition"
                >
                  <Mail className="w-4 h-4" /> {profile.email}
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:shadow transition"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:shadow transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </Card>
          </Section>
        </main>

        <footer className="border-t bg-white/70 dark:bg-slate-900/60 backdrop-blur">
          <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            <a href="#home" className="underline underline-offset-4">Back to top</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
