const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "mekemdilan@gmail.com",
    href: "mailto:mekemdilan@gmail.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+237 688 683 918",
    href: "https://wa.me/237688683918",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/mekem688",
    href: "https://github.com/mekem688",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: "700px" }}>
        <span className="section-label">// 04. contact</span>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1.05rem" }}>
          Vous avez un projet, une opportunité de collaboration ou simplement envie d'échanger
          sur la sécurité, le backend ou l'infrastructure ? Je suis disponible et ouvert
          à toute discussion professionnelle.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {contacts.map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"}
               rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "1.25rem 1.5rem", borderRadius: "12px",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                transition: "all .2s", color: "var(--text)", textDecoration: "none",
               }}
               onMouseEnter={e => {
                 (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,255,218,0.3)";
                 (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
               }}
               onMouseLeave={e => {
                 (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                 (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
               }}
            >
              <span style={{ fontSize: "1.6rem" }}>{c.icon}</span>
              <div>
                <div style={{ color: "var(--text-muted)", fontSize: ".8rem", fontFamily: "Fira Code", marginBottom: ".15rem" }}>
                  {c.label}
                </div>
                <div style={{ color: "var(--accent)", fontWeight: 600 }}>{c.value}</div>
              </div>
              <span style={{ marginLeft: "auto", color: "var(--text-muted)", fontSize: "1.2rem" }}>→</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="mailto:mekemdilan@gmail.com" className="btn btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
}
