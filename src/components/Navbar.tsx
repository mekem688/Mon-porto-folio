import { useState, useEffect } from "react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: "70px",
      background: scrolled ? "rgba(10,25,47,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(100,255,218,0.08)" : "1px solid transparent",
      transition: "all .3s",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "100%",
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: "'Fira Code', monospace",
          color: "var(--accent)", fontWeight: 700, fontSize: "1.1rem",
        }}>
          MSD<span style={{ color: "var(--text-muted)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}
             className="desktop-nav">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} style={{
              color: "var(--text-muted)", fontWeight: 500, fontSize: ".9rem",
              transition: "color .2s",
              animationDelay: `${i * 80}ms`,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <span style={{ color: "var(--accent)", fontFamily: "Fira Code", fontSize: ".75rem" }}>0{i + 1}. </span>
              {l.label}
            </a>
          ))}
          <a href="https://github.com/mekem688" target="_blank" rel="noreferrer"
             className="btn btn-ghost" style={{ padding: ".45rem 1rem", fontSize: ".85rem" }}>
            GitHub
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{
          display: "none", background: "transparent", border: "none",
          color: "var(--accent)", fontSize: "1.4rem", cursor: "pointer",
        }} className="burger" aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(10,25,47,0.98)", backdropFilter: "blur(10px)",
          padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem",
          borderBottom: "1px solid var(--border)",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: "var(--text)", fontWeight: 500 }}
               onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://github.com/mekem688" target="_blank" rel="noreferrer"
             className="btn btn-ghost" style={{ width: "fit-content" }}>GitHub</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
