"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Conseil Agronomique Multi-Agents",
    subtitle: "Architecture LangGraph Production",
    description:
      "Système multi-agents avec routage conditionnel multi-chemins : profil agriculteur chargé en début de session (parcelles, région, historique), API satellite propriétaire déclenchée uniquement si nécessaire selon l'intention détectée — zéro latence inutile, conseil taillé pour chaque parcelle à l'instant T.",
    longDesc: "Architecture LangGraph avec routage conditionnel intelligent : l'agent analyse l'intention utilisateur avant de décider quelle source interroger (profil local, API satellite NDVI, base de connaissances RAG). Le profil agriculteur (parcelles, région, historique cultural) est chargé une seule fois en mémoire de session pour éviter les appels redondants.",
    github: null,
    tags: ["LangGraph", "Multi-Agents", "API Satellite", "NDVI", "Python", "Routage Conditionnel", "AgriTech"],
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.1)",
    accentBorder: "rgba(124,58,237,0.3)",
    icon: "🌾",
    metrics: [
      { label: "Architecture", value: "Multi-agents" },
      { label: "Routage", value: "Conditionnel" },
      { label: "Latence", value: "Optimisée" },
    ],
    features: [
      "Routage conditionnel multi-chemins LangGraph",
      "Chargement du profil agriculteur en mémoire de session",
      "API satellite déclenchée uniquement si nécessaire",
      "Conseil personnalisé par parcelle à l'instant T",
      "Détection d'intention avant toute requête externe",
    ],
  },
  {
    id: 2,
    title: "RAG Hybride à Apprentissage Continu",
    subtitle: "GraphRAG Neo4j + Qdrant Dense/Sparse",
    description:
      "Pipeline RAG hybride (GraphRAG Neo4j + Qdrant Dense/Sparse) enrichi d'un mécanisme de feedback d'experts : les réponses sont validées et réévaluées en continu, élevant la qualité à un niveau 'certifié expert'.",
    longDesc: "Système RAG de nouvelle génération combinant la recherche dense/sparse de Qdrant avec les relations sémantiques de Neo4j (GraphRAG). Un pipeline OCR haute fidélité ingère les documents agricoles non structurés. Le mécanisme de feedback experts permet une amélioration continue : chaque réponse est évaluée, corrigée si nécessaire, et réintégrée pour enrichir le système.",
    github: null,
    tags: ["RAG Hybride", "Neo4j", "Qdrant", "GraphRAG", "OCR", "FastAPI", "Docker", "Feedback Loop"],
    color: "#06b6d4",
    accent: "rgba(6,182,212,0.1)",
    accentBorder: "rgba(6,182,212,0.3)",
    icon: "🧠",
    metrics: [
      { label: "Recherche", value: "Dense+Sparse" },
      { label: "Graphe", value: "Neo4j" },
      { label: "Qualité", value: "Certifiée" },
    ],
    features: [
      "RAG hybride Dense + Sparse (Qdrant)",
      "GraphRAG avec relations sémantiques (Neo4j)",
      "Pipeline OCR sur documents agricoles non structurés",
      "Mécanisme de feedback et validation par experts",
      "Déploiement conteneurisé FastAPI + Docker",
    ],
  },
  {
    id: 3,
    title: "LangGraph Multi-Source Production-Grade",
    subtitle: "Déploiement WhatsApp & Web — MLOps",
    description:
      "Orchestration d'agents RAG, APIs agricoles (NDVI, météo), GPT et cache contexte mémoire (Redis/MongoDB) déployés sur WhatsApp et Web — réduction de 60% des requêtes redondantes vers les LLMs, réponses contextualisées en moins de 2 secondes.",
    longDesc: "Système de production complet orchestrant plusieurs sources : agents RAG (Qdrant + Neo4j), APIs agricoles temps réel (NDVI, météo), modèles GPT, avec un cache mémoire Redis/MongoDB. Tracing fin via MLflow de chaque opération (embedding, recherche, reranking, LLM). Déployé sur WhatsApp et interface Web.",
    github: null,
    tags: ["LangGraph", "Redis", "MongoDB", "MLflow", "WhatsApp API", "RAG", "GPT", "Docker", "MLOps"],
    color: "#a855f7",
    accent: "rgba(168,85,247,0.1)",
    accentBorder: "rgba(168,85,247,0.3)",
    icon: "🚀",
    metrics: [
      { label: "Requêtes LLM réduites", value: "-60%" },
      { label: "Temps de réponse", value: "<2s" },
      { label: "Canaux déployés", value: "2" },
    ],
    features: [
      "Orchestration multi-sources (RAG + APIs + LLM)",
      "Cache contextuel Redis/MongoDB anti-redondance",
      "Tracing MLflow (embedding, recherche, reranking)",
      "Déploiement WhatsApp + Web en production",
      "Architecture modulaire et conteneurisée Docker",
    ],
  },
  {
    id: 4,
    title: "AI Agentic Engineering",
    subtitle: "Foundations · OpenAI · CrewAI · LangGraph · AutoGen · MCP",
    description:
      "Exploration complète de l'ingénierie agentic AI : agents autonomes, tool use, patterns de réflexion, parallélisation et orchestration multi-agents. Implémentations avec OpenAI, Anthropic, Gemini, Ollama et interfaces Gradio.",
    longDesc: "Parcours couvrant les fondations des agents AI jusqu'aux frameworks avancés : OpenAI Agents SDK, CrewAI (orchestration), LangGraph (workflows complexes), AutoGen (conversations agent-à-agent) et MCP (Model Context Protocol). Patterns implémentés : ReAct, Reflection, Parallelization, Orchestrator-Workers, web scraping Playwright.",
    github: "https://github.com/Yann-Axel/agents-ai-engineering",
    tags: ["OpenAI", "LangGraph", "CrewAI", "AutoGen", "MCP", "Gradio", "Playwright", "Anthropic"],
    color: "#f59e0b",
    accent: "rgba(245,158,11,0.1)",
    accentBorder: "rgba(245,158,11,0.3)",
    icon: "⚙️",
    metrics: [
      { label: "Frameworks", value: "5+" },
      { label: "Patterns", value: "6+" },
      { label: "APIs LLM", value: "5+" },
    ],
    features: [
      "Agent loops, tool use et function calling",
      "Orchestration multi-agents (CrewAI, AutoGen)",
      "Workflows complexes LangGraph + MCP Protocol",
      "Web scraping automatisé avec Playwright",
      "Interfaces Gradio + modèles locaux Ollama",
    ],
  },
  {
    id: 5,
    title: "FaceNet ML Pipeline",
    subtitle: "Pipeline ML Complet — 100% Accuracy",
    description:
      "Pipeline de reconnaissance faciale de bout en bout : détection MTCNN, encodage FaceNet 128D, classification SVM. Résultat : 100% d'accuracy sur train et test, vérification cosinus 1:1 et reconnaissance 1:N.",
    longDesc: "Pipeline couvrant 4 étapes fondamentales : détection avec MTCNN (bounding boxes + keypoints), extraction d'embeddings 128D avec FaceNet, normalisation des vecteurs et entraînement d'un SVM. 100% de précision sur 6 identités avec precision/recall parfaits. Inclut vérification cosinus et reconnaissance dans une base de données.",
    github: "https://github.com/Yann-Axel/facenet-ml-pipeline",
    tags: ["FaceNet", "MTCNN", "SVM", "TensorFlow", "scikit-learn", "NumPy", "OpenCV", "Python"],
    color: "#06b6d4",
    accent: "rgba(6,182,212,0.1)",
    accentBorder: "rgba(6,182,212,0.3)",
    icon: "🎯",
    metrics: [
      { label: "Accuracy", value: "100%" },
      { label: "Embedding", value: "128D" },
      { label: "Identités", value: "6" },
    ],
    features: [
      "Détection faciale MTCNN multi-faces",
      "Encoding FaceNet (vecteur 128 dimensions)",
      "Classifieur SVM (100% accuracy train & test)",
      "Vérification cosinus 1:1",
      "Reconnaissance 1:N dans dataset",
    ],
  },
  {
    id: 6,
    title: "Face Recognition Django",
    subtitle: "Application Web Full-Stack Déployable",
    description:
      "Application web complète pour la reconnaissance faciale d'employés : enregistrement automatique (photo → embedding), vérification 1:1 et reconnaissance 1:N. Pipeline FaceNet embarqué avec seuils de similarité optimisés.",
    longDesc: "L'application Django intègre un pipeline Computer Vision complet : détection MTCNN → embedding FaceNet 128D → comparaison cosinus. Les embeddings sont persistés en SQLite pour des recherches instantanées. Interface Bootstrap 4 avec formulaires crispy, retours visuels en temps réel et dessin des bounding boxes.",
    github: "https://github.com/Yann-Axel/face-recognition-django",
    tags: ["Django", "FaceNet", "MTCNN", "TensorFlow", "SQLite", "Bootstrap 4", "OpenCV", "Python"],
    color: "#7c3aed",
    accent: "rgba(124,58,237,0.1)",
    accentBorder: "rgba(124,58,237,0.3)",
    icon: "🌐",
    metrics: [
      { label: "Vérification", value: "1:1" },
      { label: "Reconnaissance", value: "1:N" },
      { label: "Migrations", value: "5" },
    ],
    features: [
      "Enregistrement automatique + extraction d'embeddings",
      "Vérification 1:1 (même personne ?)",
      "Reconnaissance 1:N dans la base de données",
      "Détection et dessin des bounding boxes",
      "Interface web Bootstrap 4 + Django Crispy Forms",
    ],
  },
];

const GitHubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      style={{
        borderRadius: "24px",
        background: "rgba(13,20,39,0.8)",
        border: `1px solid ${project.accentBorder}`,
        overflow: "hidden",
        backdropFilter: "blur(10px)",
      }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px ${project.accent}` }}
    >
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{
            width: "48px", height: "48px", borderRadius: "12px",
            background: project.accent, border: `1px solid ${project.accentBorder}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem", flexShrink: 0,
          }}>
            {project.icon}
          </div>
          <div>
            <p style={{
              color: project.color, fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.08em", marginBottom: "0.25rem",
              fontFamily: "var(--font-mono, monospace)",
            }}>
              {project.subtitle}
            </p>
            <h3 style={{ color: "#f1f5f9", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.25 }}>
              {project.title}
            </h3>
          </div>
        </div>

        <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
          {project.description}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{
              padding: "0.75rem", borderRadius: "12px",
              background: project.accent, border: `1px solid ${project.accentBorder}`,
              textAlign: "center",
            }}>
              <div style={{ color: project.color, fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{m.value}</div>
              <div style={{ color: "#64748b", fontSize: "0.66rem", fontWeight: 500 }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "0.2rem 0.6rem", borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8", fontSize: "0.72rem", fontWeight: 500,
              fontFamily: "var(--font-mono, monospace)",
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: project.color, fontSize: "0.82rem", fontWeight: 600,
              display: "flex", alignItems: "center", gap: "0.4rem", padding: 0,
            }}
          >
            {expanded ? "Voir moins ▲" : "Détails ▼"}
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.35rem 0.85rem", borderRadius: "999px",
                border: `1px solid ${project.accentBorder}`,
                background: project.accent,
                color: project.color, textDecoration: "none",
                fontSize: "0.78rem", fontWeight: 600,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <GitHubIcon />
              Voir le code
            </a>
          )}
        </div>

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
                <li key={i} style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6 }}>{f}</li>
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
    <section id="projects" style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3.5rem", textAlign: "center" }}
      >
        <span style={{
          color: "#7c3aed", fontSize: "0.82rem", fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
          fontFamily: "var(--font-mono, monospace)", display: "block", marginBottom: "0.75rem",
        }}>
          // 03. Projets
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
          Systèmes IA{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            en production
          </span>
        </h2>
        <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "520px", margin: "0 auto" }}>
          Architectures multi-agents, RAG hybride et ML — 6 projets concrets déployés sur des cas d&apos;usage réels.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
