import Link from "next/link";
import Navbar from "@/components/Navbar";

const categorias = [
  { emoji: "🖼️", nombre: "Imágenes", desc: "Retratos, productos, logos, arte conceptual" },
  { emoji: "✍️", nombre: "Texto", desc: "Ensayos, correos, contenido creativo" },
  { emoji: "📄", nombre: "Documentos", desc: "Tesis, reportes, propuestas, fichas" },
  { emoji: "🎬", nombre: "Video", desc: "Clips, animaciones, cinematografía" },
  { emoji: "💻", nombre: "Código", desc: "Scripts, apps, APIs, bases de datos" },
  { emoji: "📊", nombre: "Excel", desc: "Presupuestos, dashboards, fórmulas" },
  { emoji: "🎨", nombre: "Canva", desc: "Posts, presentaciones, flyers, logos" },
  { emoji: "🌐", nombre: "General", desc: "Análisis, FODA, brainstorm, opiniones" },
];

const features = [
  { n: "01", icon: "🤖", title: "Agentes de IA", desc: "5 agentes que analizan, cuestionan y optimizan tu prompt. Resultado superior al manual.", tag: "PLAN PRO", tagColor: "text-purple" },
  { n: "02", icon: "🛡️", title: "Anti-detector", desc: "Humaniza con alta perplexidad y burstiness para evitar GPTZero, Turnitin y similares.", tag: "PLAN PRO", tagColor: "text-purple" },
  { n: "03", icon: "📎", title: "Lector de PDF", desc: "Sube tu PDF y su contenido se incluye automáticamente como contexto en el prompt.", tag: "GRATIS", tagColor: "text-green" },
  { n: "04", icon: "🔒", title: "Protección facial", desc: "El prompt protege el rostro de personas reales con instrucciones específicas por IA.", tag: "GRATIS", tagColor: "text-green" },
  { n: "05", icon: "🎓", title: "Tesis académica", desc: "Licenciatura, Maestría y Doctorado — cada nivel con campos y metodología específica.", tag: "GRATIS", tagColor: "text-green" },
  { n: "06", icon: "☁️", title: "Nube y sync", desc: "Guarda tus mejores prompts en la nube y accede desde cualquier dispositivo.", tag: "PLAN PRO", tagColor: "text-purple" },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar variant="guest" />

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-62px)] relative z-10">
        <div className="px-8 md:px-16 py-20 flex flex-col justify-center border-r border-border">
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-3.5 py-1.5 mb-7 w-fit">
            <div className="w-[7px] h-[7px] rounded-full bg-green animate-pulse-dot" />
            <span className="font-mono text-[11px] text-t2 tracking-wide">ECHOFORGE AI v2.0 · inspired by XA</span>
          </div>

          <h1 className="font-display text-[38px] md:text-[58px] font-bold leading-[1.05] tracking-tight mb-5">
            El generador de prompts para{" "}
            <em className="not-italic text-pink">cualquier IA</em>
          </h1>

          <p className="text-base text-t2 leading-relaxed max-w-md mb-9">
            Crea prompts profesionales y detallados en segundos. Sin saber prompt
            engineering. Para imágenes, texto, código, tesis y mucho más.
          </p>

          <div className="flex gap-3 flex-wrap mb-9">
            <Link
              href="/register"
              className="px-7 py-3.5 rounded-xl text-[15px] font-bold text-white shadow-[0_6px_28px_rgba(167,139,250,0.35)] hover:-translate-y-0.5 transition-transform"
              style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa,#f0abfc)" }}
            >
              Empezar gratis →
            </Link>
            <Link
              href="/precios"
              className="px-6 py-3.5 rounded-xl text-[15px] font-medium text-t2 bg-white/[0.04] border border-border2 hover:border-purple hover:text-t1 transition-all"
            >
              Ver precios
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex">
              {["SP", "JR", "AM", "LG"].map((i, idx) => (
                <div
                  key={i}
                  className="w-[30px] h-[30px] rounded-full border-2 border-bg flex items-center justify-center text-[11px] font-bold text-white"
                  style={{
                    marginLeft: idx === 0 ? 0 : -8,
                    background: ["#7c3aed", "#0d9488", "#d97706", "#dc2626"][idx],
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <div className="text-[13px] text-t3">
              <strong className="text-t1">128+ usuarios</strong> ya generando prompts
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 py-14 flex items-center justify-center bg-white/[0.015]">
          <div className="bg-card border border-border2 rounded-2xl overflow-hidden w-full max-w-[440px] shadow-neo-lg">
            <div className="bg-card2 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[11px] text-t3 ml-auto">echoforge.ai/app</span>
            </div>
            <div className="p-5">
              <div className="font-mono text-[10px] text-t3 tracking-wide mb-2.5">CATEGORÍA</div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {categorias.slice(0, 8).map((c, i) => (
                  <div
                    key={c.nombre}
                    className={`rounded-lg p-2.5 text-center border ${
                      i === 0
                        ? "bg-cyan/[0.08] border-cyan/30"
                        : "bg-bg border-border"
                    }`}
                  >
                    <div className="text-[18px] mb-1">{c.emoji}</div>
                    <div className={`text-[10px] ${i === 0 ? "text-cyan" : "text-t3"}`}>
                      {c.nombre}
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-mono text-[10px] text-t3 tracking-wide mb-2.5">DESCRIPCIÓN</div>
              <div className="bg-bg border border-border rounded-lg px-3.5 py-3 font-mono text-[11px] text-t3 mb-2.5">
                Foto de producto de tenis deportivos, fondo blanco...
              </div>
              <button
                className="w-full py-2.5 rounded-lg text-white text-[13px] font-semibold"
                style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa,#f0abfc)" }}
              >
                ⚡ Generar Prompt
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border relative z-10">
        {[
          ["8+", "Categorías"],
          ["30+", "IAs soportadas"],
          ["50+", "Sub-tipos"],
          ["All-in-One", "Herramienta"],
        ].map(([n, l]) => (
          <div key={l} className="py-8 px-6 text-center border-r border-border last:border-r-0">
            <div
              className={`font-display font-bold tracking-tight mb-1 bg-clip-text text-transparent ${
                n === "All-in-One" ? "text-[22px]" : "text-[36px]"
              }`}
              style={{ backgroundImage: "linear-gradient(90deg,#22d3ee,#a78bfa)" }}
            >
              {n}
            </div>
            <div className="text-[13px] text-t3">{l}</div>
          </div>
        ))}
      </div>

      <div className="max-w-[1120px] mx-auto px-6 py-16 relative z-10">
        {/* FEATURES */}
        <div className="mb-14">
          <div className="font-mono text-[11px] text-cyan tracking-[2px] uppercase mb-3">
            Features
          </div>
          <h2 className="font-display text-[28px] md:text-[40px] font-bold tracking-tight mb-7">
            Todo lo que necesitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {features.map((f) => (
              <div key={f.n} className="bg-card p-7 hover:bg-card2 transition-colors">
                <div className="font-mono text-[10px] text-t3 tracking-wide mb-3.5">{f.n}</div>
                <div className="text-[26px] mb-3">{f.icon}</div>
                <div className="font-display text-base font-semibold mb-2">{f.title}</div>
                <div className="text-[13px] text-t2 leading-relaxed">{f.desc}</div>
                <span className={`mt-3 inline-block font-mono text-[10px] tracking-wide ${f.tagColor}`}>
                  → {f.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORÍAS */}
        <div className="mb-16">
          <div className="font-mono text-[11px] text-cyan tracking-[2px] uppercase mb-3">
            Categorías
          </div>
          <h2 className="font-display text-[28px] md:text-[40px] font-bold tracking-tight">
            Prompts para cualquier tarea
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-7">
            {categorias.map((c) => (
              <div
                key={c.nombre}
                className="bg-card border border-border rounded-xl p-5 cursor-pointer hover:-translate-y-1 hover:border-border2 transition-all"
              >
                <div className="text-[24px] mb-2.5">{c.emoji}</div>
                <div className="font-display text-[15px] font-semibold mb-1">{c.nombre}</div>
                <div className="text-xs text-t3">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div
          className="rounded-3xl p-10 md:p-14 flex items-center justify-between gap-8 flex-wrap border"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08), rgba(240,171,252,0.08))",
            borderColor: "rgba(167,139,250,0.2)",
            boxShadow: "0 0 60px rgba(167,139,250,0.08)",
          }}
        >
          <div>
            <h3 className="font-display text-[28px] md:text-[32px] font-bold tracking-tight mb-2">
              Empieza hoy — es gratis
            </h3>
            <p className="text-sm text-t3">by Ponce Zaragoza · inspired by XA · v2.0 · 2026</p>
          </div>
          <Link
            href="/register"
            className="px-7 py-3.5 rounded-xl text-[15px] font-bold text-white"
            style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa,#f0abfc)" }}
          >
            Crear cuenta gratis →
          </Link>
        </div>
      </div>
    </div>
  );
}
