import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindset Hackeado: Desbloqueando o potencial ilimitado para o sucesso instantâneo",
  description: "Mindset Hackeado: Desbloqueando o potencial ilimitado para o sucesso instantâneo. aprenda na prática métodos que 97% dos empreendedores utilizam para obter sucesso na vida, vamos falar de métodos para atingir suas metas, algumas das precauções que você deve tomar e como aplicar na prática os métodos dos bilionarios mais bem sucedidos para que você se torne um!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
