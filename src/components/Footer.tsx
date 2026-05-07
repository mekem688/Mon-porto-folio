export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem 0",
      textAlign: "center",
      color: "var(--text-muted)",
    }}>
      <div className="container">
        <div style={{ fontFamily: "Fira Code", fontSize: ".8rem", marginBottom: ".5rem" }}>
          Conçu & développé par{" "}
          <a href="https://github.com/mekem688" target="_blank" rel="noreferrer"
             style={{ color: "var(--accent)" }}>Mekem Sonfouo Dilane</a>
        </div>
        <div style={{ fontSize: ".75rem", color: "var(--text-muted)", opacity: .6 }}>
          Built with React + Vite · Deployed on GitHub Pages
        </div>
      </div>
    </footer>
  );
}
