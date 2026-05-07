export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: "70px", position: "relative", overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
        <div style={{ maxWidth: "820px" }}>
          <span className="fade-up" style={{
            display: "block", fontFamily: "'Fira Code', monospace",
            color: "var(--accent)", fontSize: "1rem", marginBottom: "1.2rem",
            animationDelay: "0ms",
          }}>
            Bonjour, je suis
          </span>

          <h1 className="fade-up" style={{ marginBottom: "0.5rem", animationDelay: "100ms" }}>
            Mekem Sonfouo Dilane.
          </h1>

          <h2 className="fade-up" style={{
            color: "var(--text-muted)", fontWeight: 600, marginBottom: "1.5rem",
            animationDelay: "200ms",
            fontSize: "clamp(1.3rem, 3vw, 2.4rem)",
          }}>
            Je conçois des systèmes sécurisés et performants.
          </h2>

          <p className="fade-up" style={{
            maxWidth: "55ch", color: "var(--text-muted)",
            lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2.5rem",
            animationDelay: "300ms",
          }}>
            Architecte sécurité & backend en formation — spécialisé dans la conception de
            systèmes <strong style={{ color: "var(--text)" }}>Secure by Design</strong>,
            les microservices performants en{" "}
            <strong style={{ color: "var(--accent)" }}>Rust</strong> et{" "}
            <strong style={{ color: "var(--accent)" }}>Go</strong>,
            la sécurité réseau et l'infrastructure DevOps.
          </p>

          <div className="fade-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animationDelay: "400ms" }}>
            <a href="#projects" className="btn btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn btn-ghost">Me contacter</a>
          </div>

          {/* Stats */}
          <div className="fade-up" style={{
            display: "flex", gap: "2.5rem", marginTop: "4rem", flexWrap: "wrap",
            animationDelay: "500ms",
          }}>
            {[
              { value: "6+", label: "Projets réalisés" },
              { value: "10+", label: "Technologies maîtrisées" },
              { value: "Rust·Go·Python", label: "Langages principaux" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Fira Code', monospace", color: "var(--accent)", fontSize: "1.6rem", fontWeight: 700 }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: ".85rem", marginTop: ".2rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)", display: "flex", flexDirection: "column",
        alignItems: "center", gap: ".4rem",
      }}>
        <span style={{ color: "var(--text-muted)", fontSize: ".7rem", letterSpacing: ".15em", fontFamily: "Fira Code" }}>SCROLL</span>
        <div style={{
          width: "1px", height: "50px",
          background: "linear-gradient(to bottom, var(--accent), transparent)",
          animation: "pulse 1.5s ease infinite",
        }} />
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }
      `}</style>
    </section>
  );
}
