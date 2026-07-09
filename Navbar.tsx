"use client";

import Link from "next/link";

type NavbarProps = {
  variant?: "guest" | "logged";
};

export default function Navbar({ variant = "guest" }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 h-[62px] px-8 flex items-center justify-between bg-bg/85 backdrop-blur-xl border-b border-border">
      <Link href="/" className="flex items-center gap-2.5 group">
        <div
          className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-[15px] shadow-neo"
          style={{ background: "linear-gradient(135deg, #f59e0b, #f97316)" }}
        >
          ☼✰
        </div>
        <div className="font-display text-[17px] font-bold">
          <span className="text-cyan">Echo</span>
          <span className="text-purple">Forge AI</span>
        </div>
      </Link>

      {variant === "guest" ? (
        <>
          <div className="hidden md:flex gap-1">
            <Link href="/" className="px-3.5 py-1.5 text-[13px] font-medium text-t1 rounded-lg hover:bg-white/5 transition-colors">
              Producto
            </Link>
            <Link href="/precios" className="px-3.5 py-1.5 text-[13px] font-medium text-t3 rounded-lg hover:bg-white/5 hover:text-t1 transition-colors">
              Precios
            </Link>
            <span className="px-3.5 py-1.5 text-[13px] font-medium text-t3">Docs</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="px-4 py-2 text-[13px] font-medium text-t2 border border-border2 rounded-lg hover:border-purple hover:text-t1 transition-all"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              className="px-4.5 py-2 text-[13px] font-semibold text-white rounded-lg shadow-[0_4px_16px_rgba(167,139,250,0.3)]"
              style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa,#f0abfc)" }}
            >
              Empezar gratis →
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex gap-1">
            <Link href="/dashboard" className="px-3.5 py-1.5 text-[13px] font-medium text-t1 rounded-lg hover:bg-white/5 transition-colors">
              Dashboard
            </Link>
            <Link href="/" className="px-3.5 py-1.5 text-[13px] font-medium text-t3 rounded-lg hover:bg-white/5 hover:text-t1 transition-colors">
              Generador
            </Link>
            <Link href="/precios" className="px-3.5 py-1.5 text-[13px] font-medium text-t3 rounded-lg hover:bg-white/5 hover:text-t1 transition-colors">
              Precios
            </Link>
            <Link href="/admin" className="px-3.5 py-1.5 text-[13px] font-medium text-t3 rounded-lg hover:bg-white/5 hover:text-t1 transition-colors">
              Admin ⚙️
            </Link>
          </div>
          <Link
            href="/perfil"
            className="w-9 h-9 rounded-full flex items-center justify-center font-display text-[13px] font-bold cursor-pointer"
            style={{ background: "linear-gradient(135deg,#22d3ee,#a78bfa)" }}
          >
            SP
          </Link>
        </>
      )}
    </nav>
  );
}
