"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number; r: number; alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
}

const roles = ["Data Scientist", "GenAI Engineer", "AI Agentic", "RAG Specialist", "MLOps"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
      }}
    >
      <ParticleCanvas />

      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "rgba(124,58,237,0.06)", filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "10%",
        width: "250px", height: "250px", borderRadius: "50%",
        background: "rgba(6,182,212,0.06)", filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1, textAlign: "center",
        padding: "0 1.5rem", maxWidth: "820px",
      }}>
        {/* Badge disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 1rem", borderRadius: "999px",
            border: "1px solid rgba(124,58,237,0.4)",
            background: "rgba(124,58,237,0.08)", marginBottom: "1.5rem",
          }}
        >
          <span style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "#06b6d4", display: "inline-block", animation: "pulse 2s infinite",
          }} />
          <span style={{ color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500 }}>
            Disponible — Cocody Angré, Abidjan · Mobile en Côte d&apos;Ivoire
          </span>
        </motion.div>

        {/* Nom */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 700, lineHeight: 1.1,
            marginBottom: "0.5rem", letterSpacing: "-0.02em",
          }}
        >
          KOUA ETTIEN{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            YANN-AXEL
          </span>
        </motion.h1>

        {/* Titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#94a3b8", fontSize: "1rem", fontWeight: 500,
            marginBottom: "1.2rem", letterSpacing: "0.04em",
            fontFamily: "var(--font-mono, monospace)",
          }}
        >
          Data Scientist
        </motion.p>

        {/* Badges spécialités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            display: "flex", flexWrap: "wrap", gap: "0.6rem",
            justifyContent: "center", marginBottom: "1.8rem",
          }}
        >
          {roles.map((role, i) => (
            <span key={i} style={{
              padding: "0.3rem 0.85rem", borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8", fontSize: "0.82rem", fontWeight: 500,
            }}>
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            color: "#94a3b8", fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 2.5rem",
          }}
        >
          Je conçois et déploie des systèmes IA robustes en production — architectures
          multi-agents, RAG hybride, pipelines ML à forte précision et MLOps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.75rem 2rem", borderRadius: "999px",
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              color: "white", textDecoration: "none",
              fontWeight: 600, fontSize: "0.95rem",
              transition: "opacity 0.2s, transform 0.2s", display: "inline-block",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.75rem 2rem", borderRadius: "999px",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#f1f5f9", textDecoration: "none",
              fontWeight: 600, fontSize: "0.95rem",
              transition: "all 0.2s", display: "inline-block",
              background: "rgba(124,58,237,0.05)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(124,58,237,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Me contacter
          </a>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: "4rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}
        >
          <span style={{ color: "#475569", fontSize: "0.75rem", letterSpacing: "0.1em" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #7c3aed, transparent)" }}
          />
        </motion.div>
      </div>

      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  );
}
