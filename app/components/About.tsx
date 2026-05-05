"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Projets AI/ML" },
  { value: "100%", label: "Accuracy FaceNet" },
  { value: "6", label: "Frameworks maîtrisés" },
  { value: "1N", label: "Systèmes multi-agents" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Section label */}
        <div style={{ marginBottom: "1rem" }}>
          <span style={{
            color: "#7c3aed",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono, monospace)",
          }}>
            // 01. À propos
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
          className="lg:grid-cols-2"
        >
          {/* Left: Text */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              Développeur passionné par{" "}
              <span style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                l&apos;IA de demain
              </span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#94a3b8", lineHeight: 1.75, fontSize: "0.97rem" }}>
              <p>
                Je suis <strong style={{ color: "#f1f5f9" }}>KOUA ETTIEN YANN-AXEL</strong>, développeur
                spécialisé en Intelligence Artificielle et Machine Learning. Mon domaine
                de prédilection : construire des systèmes qui <em style={{ color: "#a855f7" }}>voient</em>, <em style={{ color: "#06b6d4" }}>comprennent</em> et <em style={{ color: "#7c3aed" }}>agissent</em> de manière autonome.
              </p>
              <p>
                De la reconnaissance faciale précise à 100% à la construction de pipelines
                multi-agents avec LangGraph, CrewAI et AutoGen — j&apos;explore les frontières
                de ce que l&apos;IA peut accomplir de manière concrète et déployable.
              </p>
              <p>
                Mon approche : partir d&apos;une recherche rigoureuse (prototypage en notebook),
                puis industrialiser en applications web robustes (Django, Next.js). Chaque
                projet doit avoir un impact réel.
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.8rem" }}>
              {["Python", "TensorFlow", "MTCNN", "FaceNet", "Django", "LangGraph", "CrewAI", "AutoGen", "MCP", "OpenAI API"].map((tag) => (
                <span key={tag} style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(124,58,237,0.06)",
                  color: "#a78bfa",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-mono, monospace)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats + visual */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Stats grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    background: "rgba(13,20,39,0.8)",
                    border: "1px solid rgba(124,58,237,0.15)",
                    textAlign: "center",
                  }}
                >
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.4rem",
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code block aesthetic */}
            <div style={{
              padding: "1.5rem",
              borderRadius: "16px",
              background: "rgba(13,20,39,0.8)",
              border: "1px solid rgba(124,58,237,0.15)",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.82rem",
              lineHeight: 1.9,
            }}>
              <div style={{ color: "#475569", marginBottom: "0.5rem" }}>// profile.py</div>
              <div><span style={{ color: "#7c3aed" }}>name</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#06b6d4" }}>&quot;KOUA ETTIEN YANN-AXEL&quot;</span></div>
              <div><span style={{ color: "#7c3aed" }}>focus</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#06b6d4" }}>&quot;AI / ML Engineering&quot;</span></div>
              <div><span style={{ color: "#7c3aed" }}>domains</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#94a3b8" }}>[</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;Computer Vision&quot;</span><span style={{ color: "#94a3b8" }}>,</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;Agentic AI Systems&quot;</span><span style={{ color: "#94a3b8" }}>,</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;Full-Stack Web&quot;</span></div>
              <div><span style={{ color: "#94a3b8" }}>]</span></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
