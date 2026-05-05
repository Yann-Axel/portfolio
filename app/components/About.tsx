"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Systèmes IA en production" },
  { value: ">85%", label: "Précision pipelines ML" },
  { value: "-60%", label: "Requêtes LLM réduites" },
  { value: "<2s", label: "Réponses contextualisées" },
];

const formations = [
  { degree: "Master 2 Big Data & IA", school: "ESTIA (France) × ESATIC", year: "2025–2026" },
  { degree: "Master 1 Big Data & IA", school: "ESATIC – Abidjan", year: "2024–2025" },
  { degree: "Master Bases de Données & Génie Logiciel (Inachevé)", school: "UFHB – Cocody, Abidjan", year: "2022–2024" },
  { degree: "Licence Mathématiques & Informatique", school: "UFHB – Cocody", year: "2021–2022" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <span style={{
            color: "#7c3aed", fontSize: "0.82rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            fontFamily: "var(--font-mono, monospace)",
          }}>
            // 01. À propos
          </span>
        </div>

        <div style={{ display: "grid", gap: "3rem" }} className="lg:grid-cols-2">
          {/* Gauche : texte */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700,
              lineHeight: 1.2, marginBottom: "1.5rem", letterSpacing: "-0.02em",
            }}>
              Data Scientist spécialisé en{" "}
              <span style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                IA Agentique, GenAI & MLOps
              </span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#94a3b8", lineHeight: 1.75, fontSize: "0.97rem" }}>
              <p>
                Je suis <strong style={{ color: "#f1f5f9" }}>KOUA ETTIEN YANN-AXEL</strong>, Data Scientist
                spécialisé en <em style={{ color: "#a855f7" }}>IA agentique</em> (LangGraph, CrewAI, AutoGen, MCP),{" "}
                <em style={{ color: "#06b6d4" }}>RAG hybride</em> (Neo4j + Qdrant) et{" "}
                <em style={{ color: "#7c3aed" }}>MLOps</em>.
              </p>
              <p>
                Je conçois et déploie des systèmes IA robustes en production : architectures multi-agents
                avec routage conditionnel, pipelines RAG à apprentissage continu enrichis par feedback
                d&apos;experts, et orchestration multi-sources à faible latence.
              </p>
              <p>
                Mon contexte actuel : développement de systèmes IA pour améliorer la résilience agricole
                via l&apos;analyse satellite, le Machine Learning et des agents conversationnels intelligents
                déployés sur WhatsApp et Web.
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.8rem" }}>
              {["LangGraph", "CrewAI", "AutoGen", "MCP", "RAG", "Neo4j", "Qdrant", "MLOps", "FastAPI", "Docker", "MLflow", "Redis"].map((tag) => (
                <span key={tag} style={{
                  padding: "0.25rem 0.75rem", borderRadius: "999px",
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(124,58,237,0.06)",
                  color: "#a78bfa", fontSize: "0.78rem", fontWeight: 500,
                  fontFamily: "var(--font-mono, monospace)",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Formation */}
            <div style={{ marginTop: "2rem" }}>
              <h3 style={{ color: "#f1f5f9", fontSize: "0.9rem", fontWeight: 600, marginBottom: "1rem" }}>
                Formation
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {formations.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    padding: "0.75rem 1rem", borderRadius: "12px",
                    background: "rgba(13,20,39,0.6)",
                    border: "1px solid rgba(30,41,59,0.8)",
                  }}>
                    <span style={{
                      color: "#7c3aed", fontSize: "0.72rem", fontWeight: 600,
                      fontFamily: "var(--font-mono, monospace)",
                      whiteSpace: "nowrap", marginTop: "2px",
                    }}>
                      {f.year}
                    </span>
                    <div>
                      <div style={{ color: "#f1f5f9", fontSize: "0.85rem", fontWeight: 600 }}>{f.degree}</div>
                      <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{f.school}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Droite : stats + code */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    padding: "1.5rem", borderRadius: "16px",
                    background: "rgba(13,20,39,0.8)",
                    border: "1px solid rgba(124,58,237,0.15)",
                    textAlign: "center",
                  }}
                >
                  <div style={{
                    fontSize: "1.8rem", fontWeight: 700,
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    marginBottom: "0.4rem",
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: 500 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Bloc code */}
            <div style={{
              padding: "1.5rem", borderRadius: "16px",
              background: "rgba(13,20,39,0.8)",
              border: "1px solid rgba(124,58,237,0.15)",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.82rem", lineHeight: 1.9,
            }}>
              <div style={{ color: "#475569", marginBottom: "0.5rem" }}>// profile.py</div>
              <div><span style={{ color: "#7c3aed" }}>name</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#06b6d4" }}>&quot;KOUA ETTIEN YANN-AXEL&quot;</span></div>
              <div><span style={{ color: "#7c3aed" }}>role</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#06b6d4" }}>&quot;Data Scientist&quot;</span></div>
              <div><span style={{ color: "#7c3aed" }}>location</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#06b6d4" }}>&quot;Abidjan, Côte d&apos;Ivoire&quot;</span></div>
              <div><span style={{ color: "#7c3aed" }}>specialties</span> <span style={{ color: "#475569" }}>=</span> <span style={{ color: "#94a3b8" }}>[</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;Agentic AI (LangGraph, CrewAI)&quot;</span><span style={{ color: "#94a3b8" }}>,</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;RAG Hybride (Neo4j + Qdrant)&quot;</span><span style={{ color: "#94a3b8" }}>,</span></div>
              <div style={{ paddingLeft: "1.5rem" }}><span style={{ color: "#a855f7" }}>&quot;MLOps & Production AI&quot;</span></div>
              <div><span style={{ color: "#94a3b8" }}>]</span></div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
