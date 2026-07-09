import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoForge AI — Generador de prompts para cualquier IA",
  description:
    "Genera prompts profesionales y detallados para cualquier IA en segundos. Sin saber prompt engineering. by Ponce Zaragoza — inspired by XA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-t1">{children}</body>
    </html>
  );
}
