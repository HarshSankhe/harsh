import { useState, useEffect, useRef } from "react";

const data = {
  name: "Harsh Sankhe",
  title: "Data Analyst",
  college: "Rizvi College of Engineering",
  year: "3rd Year · B.E.",
  sgpi: "8.9",
  location: "Mumbai, Maharashtra",
  email: "harshrsankhe@gmail.com",
  phone: "+91-8983029191",
  linkedin: "Harsh Sankhe",
  stats: [
    { num: "12x", label: "National Hackathon" },
    { num: "1x", label: "International Hackathon" },
    { num: "10x", label: "National Ideathon" },
    { num: "8.9", label: "SGPI" },
  ],
  skills: ["Power BI", "SQL", "Python", "Excel", "Tableau", "Power Query", "Pandas", "NumPy", "Java", "GitHub"],
  experience: [
    {
      role: "Data Analyst",
      company: "Flyers Academy",
      period: "Jun 2025 – Present",
      points: [
        "Built interactive Power BI dashboards tracking student performance, attendance & exam results",
        "Automated Excel reporting with Power Query — saved 20+ hours/month",
        "Conducted admission data analysis across State, CBSE, ICSE boards — boosted conversion by 25%",
      ],
    },
  ],
  projects: [
    {
      name: "SmartEduPulse",
      sub: "Real-Time Academic & Admission Intelligence",
      stack: "Power BI · Python · Excel Power Query · SQL",
      period: "Jun 2025",
      desc: "Real-time education intelligence system tracking academic performance, admission trends, and parent engagement. Live lead scoring model improved admission conversion by 30%.",
      highlight: "+30% conversion",
    },
    {
      name: "Social Media Dashboard",
      sub: "Performance Analytics",
      stack: "Power BI · Excel",
      period: "Jan 2025",
      desc: "Tracked follower growth, post engagement and hashtag performance for Instagram & Twitter. Increased content engagement by 40%.",
      highlight: "+40% engagement",
    },
    {
      name: "MoodMap",
      sub: "Real-Time City Emotion Dashboard",
      stack: "Python · NLP · Power BI",
      period: "Dec 2024",
      desc: "Live dashboard tracking city-wide emotions using Twitter, news, traffic & weather data. 85% accuracy, 12+ high-stress zones identified.",
      highlight: "85% accuracy",
    },
  ],
  certs: [
    "12x National Hackathon Winner",
    "1x International Hackathon Winner",
    "10x National Ideathon Winner",
    "International Research Paper – Healthcare",
    "AWS Solutions Architecture (Forage)",
    "NPTEL – Java Programming",
  ],
};

const ACCENT = "#ff5c35";
const ACCENT2 = "#ffb347";

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = ["home", "experience", "projects", "skills", "contact"];

  return (
    <div style={{
      background: "#0a0a0a",
      color: "#e8e4dc",
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
        .nav-link { cursor: pointer; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; transition: color 0.2s; color: rgba(232,228,220,0.45); }
        .nav-link:hover, .nav-link.active { color: #e8e4dc; }
        .stat-card { background: #111; border: 1px solid #1e1e1e; border-radius: 12px; padding: 24px 20px; text-align: center; transition: border-color 0.2s, transform 0.2s; }
        .stat-card:hover { border-color: rgba(255,92,53,0.4); transform: translateY(-4px); }
        .proj-card { background: #0f0f0f; border: 1px solid #1e1e1e; border-radius: 16px; padding: 28px; transition: border-color 0.25s, transform 0.25s; cursor: default; }
        .proj-card:hover { border-color: rgba(255,92,53,0.35); transform: translateY(-6px); }
        .skill-pill { background: #141414; border: 1px solid #222; border-radius: 100px; padding: 8px 18px; font-size: 13px; font-weight: 500; color: rgba(232,228,220,0.7); transition: all 0.2s; cursor: default; }
        .skill-pill:hover { background: rgba(255,92,53,0.08); border-color: rgba(255,92,53,0.4); color: #e8e4dc; }
        .cert-item { display: flex; align-items: center; gap: 12px; padding: 14px 0; border-bottom: 1px solid #161616; }
        .cert-item:last-child { border-bottom: none; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5%",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
          H<span style={{ color: ACCENT }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 36 }}>
          {nav.map(s => (
            <span key={s} className={`nav-link${activeSection === s ? " active" : ""}`} onClick={() => { document.getElementById(s)?.scrollIntoView({ behavior: "smooth" }); setActiveSection(s); }}>{s}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 8% 80px", position: "relative", overflow: "hidden" }}>
        {/* bg decoration */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, rgba(255,92,53,0.07) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "2%", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, rgba(255,179,71,0.05) 0%, transparent 70%)`, pointerEvents: "none" }} />

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 32, height: 2, background: ACCENT }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT }}>Data Analyst · Mumbai</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(52px, 9vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: 28 }}>
            Harsh<br />
            <span style={{ WebkitTextStroke: `1px rgba(232,228,220,0.25)`, color: "transparent" }}>Sankhe</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p style={{ fontSize: 16, color: "rgba(232,228,220,0.5)", maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
            3rd year engineering student at Rizvi College of Engineering. Turning data into decisions with Power BI, SQL, and Python.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
            <a href={`mailto:${data.email}`} style={{
              padding: "12px 28px", borderRadius: 100, background: ACCENT, color: "#fff",
              fontWeight: 500, fontSize: 14, letterSpacing: "0.02em", transition: "opacity 0.2s",
            }} onMouseEnter={e => e.target.style.opacity = 0.85} onMouseLeave={e => e.target.style.opacity = 1}>
              Get in touch
            </a>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
              padding: "12px 28px", borderRadius: 100, background: "transparent",
              border: "1px solid rgba(232,228,220,0.2)", color: "rgba(232,228,220,0.75)",
              fontWeight: 500, fontSize: 14, cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
            }} onMouseEnter={e => { e.target.style.borderColor = "rgba(255,92,53,0.5)"; e.target.style.color = "#e8e4dc"; }} onMouseLeave={e => { e.target.style.borderColor = "rgba(232,228,220,0.2)"; e.target.style.color = "rgba(232,228,220,0.75)"; }}>
              View projects →
            </button>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.55}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, maxWidth: 600 }}>
            {data.stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: ACCENT, marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: "rgba(232,228,220,0.45)", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "100px 8%", borderTop: "1px solid #141414" }}>
        <FadeIn><SectionLabel>Experience</SectionLabel></FadeIn>
        {data.experience.map((exp, i) => (
          <FadeIn key={i} delay={0.1}>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 4 }}>{exp.role}</div>
                <div style={{ fontSize: 14, color: ACCENT, marginBottom: 8 }}>{exp.company}</div>
                <div style={{ fontSize: 12, color: "rgba(232,228,220,0.35)", letterSpacing: "0.05em" }}>{exp.period}</div>
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, fontSize: 15, color: "rgba(232,228,220,0.65)", lineHeight: 1.6 }}>
                      <span style={{ color: ACCENT, marginTop: 2, flexShrink: 0 }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 8%", borderTop: "1px solid #141414" }}>
        <FadeIn><SectionLabel>Projects</SectionLabel></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {data.projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="proj-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17 }}>{p.name}</div>
                  <span style={{ fontSize: 11, padding: "4px 10px", borderRadius: 100, background: "rgba(255,92,53,0.1)", color: ACCENT, fontWeight: 600, whiteSpace: "nowrap" }}>{p.highlight}</span>
                </div>
                <div style={{ fontSize: 12, color: "rgba(232,228,220,0.35)", marginBottom: 6, letterSpacing: "0.04em" }}>{p.stack}</div>
                <div style={{ fontSize: 13, color: "rgba(232,228,220,0.45)", marginBottom: 12, lineHeight: 1.6 }}>{p.sub} · {p.period}</div>
                <p style={{ fontSize: 14, color: "rgba(232,228,220,0.6)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 8%", borderTop: "1px solid #141414" }}>
        <FadeIn><SectionLabel>Skills & Certifications</SectionLabel></FadeIn>
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 56 }}>
            {data.skills.map((s, i) => (
              <span key={i} className="skill-pill">{s}</span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 16, padding: "8px 28px" }}>
            {data.certs.map((c, i) => (
              <div key={i} className="cert-item">
                <span style={{ color: ACCENT, fontSize: 16 }}>✦</span>
                <span style={{ fontSize: 14, color: "rgba(232,228,220,0.65)" }}>{c}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 8% 120px", borderTop: "1px solid #141414" }}>
        <FadeIn><SectionLabel>Contact</SectionLabel></FadeIn>
        <FadeIn delay={0.1}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 48 }}>
            Let's work<br /><span style={{ color: ACCENT }}>together.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            {[
              { label: "Email", val: data.email, href: `mailto:${data.email}` },
              { label: "Phone", val: data.phone, href: `tel:${data.phone}` },
              { label: "LinkedIn", val: data.linkedin, href: "#" },
              { label: "Location", val: data.location, href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #161616" }}>
                <span style={{ fontSize: 12, color: "rgba(232,228,220,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: 14, color: "rgba(232,228,220,0.75)", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = ACCENT} onMouseLeave={e => e.target.style.color = "rgba(232,228,220,0.75)"}>{item.val}</a>
                ) : (
                  <span style={{ fontSize: 14, color: "rgba(232,228,220,0.75)" }}>{item.val}</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <div style={{ padding: "24px 8%", borderTop: "1px solid #141414", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15 }}>H<span style={{ color: ACCENT }}>.</span></span>
        <span style={{ fontSize: 12, color: "rgba(232,228,220,0.25)" }}>Harsh Sankhe · {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
