"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Employee Face Recognition System",
    subtitle: "Application Web Full-Stack",
    description:
      "Application web complète permettant aux entreprises d'enregistrer leurs employés, de vérifier leur identité (1:1) et de les reconnaître automatiquement (1:N) via reconnaissance faciale. Pipeline FaceNet embarqué avec seuils de similarité optimisés.",
    longDesc: "L'application Django intègre un pipeline de Computer Vision complet : détection MTCNN → embedding FaceNet 128D → comparaison cosinus. Les embeddings sont persistés en base SQLite pour des recherches instantanées. Interface Bootstrap 4 avec formulaires crispy, retours visuels en temps réel et dessin des bounding boxes détectées.",
    tags: ["Django", "FaceNet", "MTCNN", "TensorFlow", "SQLite", "Bootstrap 4", "OpenCV", "Python"],
    color: "#06b6d4",
    accent: "rgba(6,182,212,0.1)",
    accentBorder: "rgba(6,182,212,0.3)",
    icon: "🎯",
    metrics: [
      { label: "Précision vérification", value: "≥74°" },
      { label: "Précision reconnaissance", value: "≥65°" },
      { label: "Migrations Django", value: "5" },
    ],
    features: [
      "Enregistrement automatique + extraction d'embeddings",
      "Vérification 1:1 (même personne ?)",
      "Reconnaissance 1:N dans la base de données",
      "Détection et dessin des bounding boxes",
      "Interface web intuitive (Bootstrap 4)",
    ],
  },
  {
    id: 2,
    title: "FaceNet ML Pipeline",
    subtitle: "Recherche & Pipeline ML Complet",
    description:
      "Pipeline de reconnaissance faciale de bout en bout atteignant 100% d'accuracy sur train et test. Intègre détection MTCNN, encodage FaceNet 128D, normalisation et classification SVM — entièrement implémenté et documenté.",
    longDesc: "Le pipeline couvre les 4 étapes fondamentales : détection avec MTCNN (bounding boxes + keypoints), extraction d'embeddings 128D avec FaceNet, normalisation des vecteurs et entraînement d'un SVM. Résultat : 100% de précision sur 6 identités avec precision/recall parfaits. Inclut vérification cosinus et reconnaissance dans une base de données.",
    tags: ["FaceNet", "MTCNN", "SVM", "TensorFlow/Keras", "scikit-learn", "NumPy", "Matplotlib", "Python"],
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.1)",
    accentBorder: "rgba(124,58,237,0.3)",
    icon: "🧠",
    metrics: [
      { label: "Accuracy (train & test)", value: "100%" },
      { label: "Dimension embedding", value: "128D" },
      { label: "Identités classifiées", value: "6" },
    ],
    features: [
      "Détection faciale MTCNN multi-faces",
      "Encoding FaceNet (vecteur 128 dimensions)",
      "Classifieur SVM (100% accuracy)",
      "Vérification cosinus 1:1",
      "Reconnaissance 1:N dans dataset",
    ],
  },
  {
    id: 3,
    title: "Autonomous AI Agents",
    subtitle: "Systèmes Multi-Agents Intelligents",
    description:
      "Construction de systèmes d'agents AI autonomes avec les frameworks modernes : LangGraph pour les workflows complexes, CrewAI pour l'orchestration multi-agents, AutoGen pour les conversations agents-à-agents, et intégration MCP.",
    longDesc: "Développement de pipelines agentic complets : agents avec tool use (function calling), patterns de réflexion, parallélisation de tâches, orchestrateur-workers. Applications concrètes : planificateur de voyages, assistant carrière, web scraping automatisé avec Playwright, interfaces Gradio. Integration des API OpenAI, Anthropic et modèles locaux (Ollama).",
    tags: ["LangGraph", "CrewAI", "AutoGen", "MCP", "OpenAI API", "Anthropic API", "Gradio", "Playwright", "Python"],
    color: "#a855f7",
    accent: "rgba(168,85,247,0.1)",
    accentBorder: "rgba(168,85,247,0.3)",
    icon: "⚡",
    metrics: [
      { label: "Frameworks agentic", value: "4+" },
      { label: "Patterns implémentés", value: "6+" },
      { label: "APIs intégrées", value: "5+" },
    ],
    features: [
      "Agent loops & tool use (function calling)",
      "Multi-agent orchestration (CrewAI, AutoGen)",
      "Workflows complexes LangGraph",
      "Web scraping automatisé (Playwright)",
      "Interfaces Gradio + MCP Protocol",
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      style={{
        borderRadius: "24px",
        background: "rgba(13,20,39,0.8)",
        border: `1px solid ${project.accentBorder}`,
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px ${project.accent}` }}
    >
      {/* Top gradient bar */}
      <div style={{
        height: "3px",
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
      }} />

      <div style={{ padding: "2rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: project.accent,
            border: `1px solid ${project.accentBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            flexShrink: 0,
          }}>
            {project.icon}
          </div>
          <div>
            <p style={{ color: project.color, fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "0.25rem", fontFamily: "var(--font-mono, monospace)" }}>
              {project.subtitle}
            </p>
            <h3 style={{ color: "#f1f5f9", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.25 }}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          {project.description}
        </p>

        {/* Metrics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{
              padding: "0.75rem",
              borderRadius: "12px",
              background: project.accent,
              border: `1px solid ${project.accentBorder}`,
              textAlign: "center",
            }}>
              <div style={{ color: project.color, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.2rem" }}>
                {m.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.68rem", fontWeight: 500 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "0.2rem 0.6rem",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
              fontSize: "0.72rem",
              fontWeight: 500,
              fontFamily: "var(--font-mono, monospace)",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: project.color,
            fontSize: "0.82rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: 0,
            transition: "opacity 0.2s",
          }}
        >
          {expanded ? "Voir moins ▲" : "Détails ▼"}
        </button>

        {/* Expanded content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div style={{
            paddingTop: "1.2rem",
            borderTop: `1px solid ${project.accentBorder}`,
            marginTop: "1.2rem",
          }}>
            <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              {project.longDesc}
            </p>
            <h4 style={{ color: "#f1f5f9", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.6rem" }}>
              Fonctionnalités clés :
            </h4>
            <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
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
          // 03. Projets
        </span>
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "1rem",
        }}>
          Ce que j&apos;ai{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            construit
          </span>
        </h2>
        <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto" }}>
          Des projets concrets allant du prototype ML à l&apos;application web déployable.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
