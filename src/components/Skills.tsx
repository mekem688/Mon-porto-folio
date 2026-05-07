type Skill = { name: string; icon: string; level?: string };
type Category = { title: string; icon: string; color: string; skills: Skill[] };

const categories: Category[] = [
  {
    title: "Sécurité Système",
    icon: "🔐",
    color: "#f85149",
    skills: [
      { name: "OWASP Top 10", icon: "https://cdn.simpleicons.org/owasp/F7DF1E" },
      { name: "Zero Trust", icon: "https://cdn.simpleicons.org/cloudflare/F48120" },
      { name: "JWT / 2FA", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
      { name: "RBAC", icon: "https://cdn.simpleicons.org/authelia/FA5252" },
      { name: "Threat Modeling", icon: "https://cdn.simpleicons.org/opnsense/D94F00" },
      { name: "Argon2 / bcrypt", icon: "https://cdn.simpleicons.org/letsencrypt/003A70" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    color: "#64ffda",
    skills: [
      { name: "Rust (Axum)", icon: "https://cdn.simpleicons.org/rust/000000" },
      { name: "Go (Gin)", icon: "https://cdn.simpleicons.org/go/00ADD8" },
      { name: "Python (FastAPI)", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "REST APIs", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "WebSockets", icon: "https://cdn.simpleicons.org/socketdotio/010101" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "🐳",
    color: "#0db7ed",
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/0db7ed" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326ce5" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC" },
      { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000" },
      { name: "Linux / VPS", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Bash / Shell", icon: "https://cdn.simpleicons.org/gnubash/4EAA25" },
    ],
  },
  {
    title: "Réseau & Protocoles",
    icon: "🌐",
    color: "#f6a623",
    skills: [
      { name: "TCP/IP", icon: "https://cdn.simpleicons.org/cisco/1BA0D7" },
      { name: "TLS / HTTPS", icon: "https://cdn.simpleicons.org/letsencrypt/003A70" },
      { name: "Reverse Proxy", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Firewall", icon: "https://cdn.simpleicons.org/paloaltonetworks/FA582D" },
      { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7" },
      { name: "VPN / Segmentation", icon: "https://cdn.simpleicons.org/openvpn/EA7E20" },
    ],
  },
  {
    title: "Monitoring & Observabilité",
    icon: "📊",
    color: "#e55f3a",
    skills: [
      { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C" },
      { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800" },
      { name: "Logs structurés", icon: "https://cdn.simpleicons.org/elasticsearch/005571" },
      { name: "Alerting", icon: "https://cdn.simpleicons.org/pagerduty/06AC38" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">// 02. compétences</span>
        <h2 className="section-title">Domaines d'expertise</h2>
        <p className="section-sub">
          Compétences techniques organisées par domaine — en apprentissage et pratique continue.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {categories.map(cat => (
            <div key={cat.title} className="card" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
                <h3 style={{ color: cat.color, fontSize: "1.1rem" }}>{cat.title}</h3>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "1rem",
              }}>
                {cat.skills.map(skill => (
                  <div key={skill.name} style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    textAlign: "center", padding: ".85rem .5rem",
                    borderRadius: "8px", background: "rgba(10,25,47,0.5)",
                    border: "1px solid rgba(100,255,218,0.06)",
                    transition: "all .2s", cursor: "default",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(100,255,218,0.07)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.2)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(10,25,47,0.5)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.06)";
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={40} height={40}
                      style={{ objectFit: "contain", marginBottom: ".6rem" }}
                      onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <span style={{ color: "var(--text)", fontSize: ".82rem", fontWeight: 500 }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
