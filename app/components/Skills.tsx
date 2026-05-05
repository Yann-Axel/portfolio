"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Intelligence Artificielle",
    icon: "🤖",
    color: "#7c3aed",
    skills: [
      { name: "LangGraph", level: 85 },
      { name: "CrewAI", level: 85 },
      { name: "AutoGen", level: 80 },
      { name: "OpenAI API", level: 88 },
      { name: "Anthropic API", level: 80 },
      { name: "MCP Protocol", level: 75 },
    ],
  },
  {
    title: "Computer Vision & ML",
    icon: "👁️",
    color: "#06b6d4",
    skills: [
      { name: "FaceNet", level: 90 },
      { name: "MTCNN", level: 88 },
      { name: "TensorFlow/Keras", level: 85 },
      { name: "scikit-learn", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "NumPy", level: 88 },
    ],
  },
  {
    title: "Développement Web",
    icon: "🌐",
    color: "#a855f7",
    skills: [
      { name: "Python", level: 92 },
      { name: "Django", level: 82 },
      { name: "React/Next.js", level: 65 },
      { name: "Bootstrap", level: 78 },
      { name: "REST APIs", level: 80 },
      { name: "SQLite / SQL", level: 75 },
    ],
  },
  {
    title: "Outils & Workflow",
    icon: "⚙️",
    color: "#f59e0b",
    skills: [
      { name: "Jupyter Notebooks", level: 90 },
      { name: "Gradio", level: 80 },
      { name: "Git / GitHub", level: 80 },
      { name: "uv / pip", level: 82 },
      { name: "Playwright", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      style={{ marginBottom: "0.9rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
        <span style={{ color: "#cbd5e1", fontSize: "0.85rem", fontWeight: 500 }}>{name}</span>
        <span style={{ color: "#475569", fontSize: "0.78rem", fontFamily: "var(--font-mono, monospace)" }}>{level}%</span>
      </div>
      <div style={{
        height: "4px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 1.5rem",
        background: "rgba(13,20,39,0.4)",
        borderTop: "1px solid rgba(30,41,59,0.8)",
        borderBottom: "1px solid rgba(30,41,59,0.8)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <span style={{
            color: "#7c3aed",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono, monospace)",
            display: "block",
            marginBottom: "0.75rem",
          }}>
            // 02. Skills
          </span>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}>
            Technologies &{" "}
            <span style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Expertises
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              style={{
                padding: "1.8rem",
                borderRadius: "20px",
                background: "rgba(13,20,39,0.8)",
                border: "1px solid rgba(30,41,59,0.8)",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              whileHover={{ y: -4, borderColor: `${cat.color}40` }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
                <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem" }}>{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={ci * 0.05 + si * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
