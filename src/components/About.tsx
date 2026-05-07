export default function About() {
  return (
    <section id="about" style={{ background: "rgba(17,34,64,0.3)" }}>
      <div className="container">
        <span className="section-label">// 01. à propos</span>
        <h2 className="section-title">Qui suis-je ?</h2>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 380px", gap: "4rem",
          alignItems: "center",
        }} className="about-grid">
          <div>
            <p style={{ marginBottom: "1.2rem", fontSize: "1.05rem" }}>
              Je suis <strong style={{ color: "var(--text)" }}>Mekem Sonfouo Dilane</strong>,
              étudiant passionné en <strong style={{ color: "var(--accent)" }}>Architecture Sécurité</strong> et
              ingénierie backend. Mon objectif est de concevoir des systèmes qui résistent aux attaques
              dès leur conception — le principe <em style={{ color: "var(--accent)" }}>Secure by Design</em>.
            </p>
            <p style={{ marginBottom: "1.2rem", fontSize: "1.05rem" }}>
              Je travaille sur la sécurité des applications (OWASP Top 10, Zero Trust, Defense-in-Depth),
              le développement de microservices performants en <strong style={{ color: "var(--accent)" }}>Rust (Axum)</strong> et{" "}
              <strong style={{ color: "var(--accent)" }}>Go (Gin)</strong>, ainsi que sur l'infrastructure
              cloud avec Docker, Kubernetes, Terraform et Ansible.
            </p>
            <p style={{ fontSize: "1.05rem" }}>
              La sécurité réseau (TCP/IP, TLS, segmentation, firewalling) et le monitoring
              (Prometheus, Grafana) font également partie de mon domaine d'expertise en construction.
            </p>

            <blockquote style={{
              borderLeft: "3px solid var(--accent)", paddingLeft: "1.2rem",
              marginTop: "2rem", color: "var(--text-muted)", fontStyle: "italic",
              fontSize: "1rem",
            }}>
              "La sécurité n'est pas une option ajoutée après coup.
              Elle doit être intégrée dès la conception du système."
            </blockquote>
          </div>

          {/* Photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "280px" }}>
              <div style={{
                position: "absolute", inset: "-4px",
                background: "linear-gradient(135deg, var(--accent), transparent)",
                borderRadius: "14px", zIndex: 0,
              }} />
              <img
                src="https://raw.githubusercontent.com/mekem688/Mon-porto-folio/main/me-profile.webp"
                alt="Mekem Sonfouo Dilane"
                style={{
                  width: "280px", height: "320px", objectFit: "cover",
                  borderRadius: "12px", position: "relative", zIndex: 1,
                  filter: "grayscale(20%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
