"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItem = {
  icon: string;
  label: string;
  href: string;
  badge?: string;
};

type SidebarProps = {
  section: "dashboard" | "perfil" | "admin";
};

const dashboardItems: SidebarItem[] = [
  { icon: "📊", label: "Dashboard", href: "/dashboard" },
  { icon: "⚡", label: "Generador", href: "/" },
  { icon: "🔖", label: "Mis prompts", href: "/dashboard/prompts", badge: "24" },
  { icon: "📎", label: "PDFs", href: "/dashboard/pdfs" },
  { icon: "🤖", label: "Agentes IA", href: "/dashboard/agentes" },
];

const aprendeItems: SidebarItem[] = [
  { icon: "🎬", label: "Videos", href: "/dashboard/videos" },
  { icon: "💡", label: "Tips de prompts", href: "/dashboard/tips" },
];

const cuentaItems: SidebarItem[] = [
  { icon: "👤", label: "Perfil", href: "/perfil" },
  { icon: "💳", label: "Plan", href: "/precios" },
  { icon: "⚙️", label: "Admin", href: "/admin" },
];

const perfilItems: SidebarItem[] = [
  { icon: "👤", label: "Perfil", href: "/perfil" },
  { icon: "🔔", label: "Notificaciones", href: "/perfil/notificaciones" },
  { icon: "🔒", label: "Seguridad", href: "/perfil/seguridad" },
  { icon: "💳", label: "Facturación", href: "/perfil/facturacion" },
];

const adminItems: SidebarItem[] = [
  { icon: "📊", label: "Overview", href: "/admin" },
  { icon: "👥", label: "Usuarios", href: "/admin/usuarios" },
  { icon: "📧", label: "Emails", href: "/admin/emails" },
  { icon: "💰", label: "Ingresos", href: "/admin/ingresos" },
  { icon: "🎬", label: "Contenido", href: "/admin/contenido" },
  { icon: "⚡", label: "Prompts", href: "/admin/prompts" },
];

function SidebarSection({
  label,
  items,
  pathname,
}: {
  label: string;
  items: SidebarItem[];
  pathname: string;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] text-t3 tracking-[1.5px] uppercase px-2.5 mb-1.5 mt-4 first:mt-0">
        {label}
      </div>
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-[9px] text-[13px] font-medium transition-all mb-0.5 ${
              isActive
                ? "bg-purple/[0.12] text-t1 border border-purple/20"
                : "text-t2 hover:bg-white/[0.04] hover:text-t1 border border-transparent"
            }`}
          >
            <span className="text-base w-5 text-center">{item.icon}</span>
            {item.label}
            {item.badge && (
              <span className="ml-auto font-mono text-[10px] bg-purple text-white px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

export default function Sidebar({ section }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="bg-card border-r border-border p-3.5 flex flex-col gap-1.5 w-[240px] shrink-0">
      {section === "dashboard" && (
        <>
          <SidebarSection label="Principal" items={dashboardItems} pathname={pathname} />
          <SidebarSection label="Aprende" items={aprendeItems} pathname={pathname} />
          <SidebarSection label="Cuenta" items={cuentaItems} pathname={pathname} />
        </>
      )}
      {section === "perfil" && (
        <SidebarSection label="Mi cuenta" items={perfilItems} pathname={pathname} />
      )}
      {section === "admin" && (
        <SidebarSection label="Admin" items={adminItems} pathname={pathname} />
      )}

      <div
        className="mt-auto rounded-xl p-4 border"
        style={{
          background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08))",
          borderColor: "rgba(167,139,250,0.15)",
        }}
      >
        <div className="font-display text-sm font-semibold mb-0.5">✨ Plan Pro</div>
        <div className="text-[11px] text-t3">Ilimitado · Agentes · Nube</div>
        <button
          className="w-full mt-3 py-2 rounded-lg text-white text-xs font-semibold"
          style={{ background: "linear-gradient(90deg,#22d3ee,#a78bfa)" }}
        >
          Gestionar plan
        </button>
      </div>
    </aside>
  );
}
