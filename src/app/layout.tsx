import type { Metadata } from "next";
import { Libre_Baskerville, Sora } from "next/font/google";
import "./globals.scss";
import "@/scss/reset.css";
import "./_style.scss";
import { leagueGothic } from "@/fonts";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Guilherme Xavier",
  description: "Portfolio profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.className} ${libreBaskerville.className} ${leagueGothic.className}`}>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
