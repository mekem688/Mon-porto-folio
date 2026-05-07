type Project = {
  name: string;
  description: string;
  long: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  icon: string;
};

const projects: Project[] = [
  {
    name: "Nexio",
    icon: "💬",
    featured: true,
    description: "Messagerie temps réel sécurisée",
    long: "Application de messagerie instantanée full-stack avec authentification OAuth, WebSockets pour la communication en temps réel, gestion des statuts en ligne, stories éphémères 24h et panneau d'administration. Architecture sécurisée avec sessions signées et gestion fine des rôles.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Vite", "OAuth"],
    github: "https://github.com/mekem688/Nexio-backend",
    demo: "https://nexio-front.netlify.app",
  },
  {
    name: "Serveur TCP Rust",
    icon: "🔌",
    featured: true,
    description: "Serveur TCP performant en Rust",
    long: "Implémentation d'un serveur TCP bas niveau en Rust pour l'apprentissage des protocoles réseau. Gestion des connexions concurrentes, traitement des paquets et communication inter-processus sécurisée.",
    tags: ["Rust", "TCP/IP", "Réseau", "Concurrence", "Bas niveau"],
    github: "https://github.com/mekem688/serveur_tcp_rust",
  },
  {
    name: "Injection Process Rust",
    icon: "🔬",
    featured: true,
    description: "Recherche en sécurité système",
    long: "Projet de recherche en sécurité offensive : étude de l'injection de processus en Rust. Analyse des mécanismes de bas niveau du système d'exploitation pour comprendre et défendre contre les attaques.",
    tags: ["Rust", "Sécurité Offensive", "OS Internals", "Threat Research"],
    github: "https://github.com/mekem688/injection_process-rust",
  },
  {
    name: "API Go (net/http)",
    icon: "⚡",
    description: "API REST performante en Go",
    long: "API REST développée en Go avec le package standard net/http. Architecture propre, validation des entrées, gestion des erreurs en production et endpoints sécurisés.",
    tags: ["Go", "REST API", "net/http", "Backend", "Performance"],
    github: "https://github.com/mekem688/API-GO-net-http",
  },
  {
    name: "IA Médicale",
    icon: "🏥",
    description: "Diagnostic IA pour le diabète",
    long: "Modèle d'intelligence artificielle pour l'aide au diagnostic du diabète. Application du machine learning aux données médicales avec une interface simple pour les professionnels de santé.",
    tags: ["Python", "Machine Learning", "IA", "FastAPI", "Data Science"],
    github: "https://github.com/mekem688/IA-MEDICALE",
  },
  {
    name: "RAY-CORP",
    icon: "🛒",
    description: "Plateforme e-commerce",
    long: "Application e-commerce complète avec gestion des produits, panier, commandes et interface d'administration. Architecture moderne et interface utilisateur responsive.",
    tags: ["React", "Backend", "PostgreSQL", "E-commerce"],
    github: "https://github.com/mekem688/RAY-CORP",
  },
];

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ background: "rgba(17,34,64,0.3)" }}>
      <div className="container">
        <span className="section-label">// 03. projets</span>
        <h2 className="section-title">Projets réalisés</h2>
        <p className="section-sub">
          Quelques projets qui illustrent mes compétences en sécurité, backend et infrastructure.
        </p>

        {/* Featured */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2.5rem" }}>
          {featured.map((p, i) => (
            <div key={p.name} className="card" style={{ padding: "2rem", display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr auto" : "auto 1fr", gap: "2rem",
              alignItems: "start",
            }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".75rem" }}>
                  <span style={{ fontFamily: "Fira Code", color: "var(--accent)", fontSize: ".8rem" }}>
                    Projet en vedette
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".7rem", marginBottom: ".5rem" }}>
                  <span style={{ fontSize: "1.6rem" }}>{p.icon}</span>
                  <h3 style={{ fontSize: "1.4rem" }}>{p.name}</h3>
                </div>
                <p style={{ color: "var(--text-muted)", marginBottom: ".5rem", fontSize: ".95rem" }}>
                  {p.description}
                </p>
                <div style={{
                  background: "var(--bg-card2)", borderRadius: "8px", padding: "1.2rem",
                  margin: "1rem 0", color: "var(--text-muted)", lineHeight: 1.7, fontSize: ".93rem",
                }}>
                  {p.long}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.2rem" }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                       className="btn btn-ghost" style={{ padding: ".5rem 1rem", fontSize: ".85rem" }}>
                      ↗ GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                       className="btn btn-primary" style={{ padding: ".5rem 1rem", fontSize: ".85rem" }}>
                      → Demo live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <h3 style={{ color: "var(--text-muted)", fontSize: ".95rem", marginBottom: "1.5rem",
          fontFamily: "Fira Code", textAlign: "center" }}>
          Autres projets
        </h3>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem",
        }}>
          {rest.map(p => (
            <div key={p.name} className="card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                <div style={{ display: "flex", gap: ".75rem" }}>
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer"
                     style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>↗</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"
                     style={{ color: "var(--accent)", fontSize: "1.1rem" }}>→</a>}
                </div>
              </div>
              <h3 style={{ marginBottom: ".4rem" }}>{p.name}</h3>
              <p style={{ fontSize: ".88rem", color: "var(--text-muted)", marginBottom: ".5rem", fontWeight: 600 }}>
                {p.description}
              </p>
              <p style={{ fontSize: ".85rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>
                {p.long}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".3rem" }}>
                {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: ".7rem" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
