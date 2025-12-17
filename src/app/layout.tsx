import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engage | Face-to-Face Marketing Agency",
  description: "Engage - La plus grande agence de marketing face-to-face. Nous travaillons en porte-à-porte avec des associations pour créer un impact réel.",
  keywords: "marketing, face-to-face, porte à porte, associations, Luxembourg, recrutement, emploi",
  openGraph: {
    title: "Engage | Face-to-Face Marketing",
    description: "Nous engageons pour inspirer. Rejoignez notre équipe de marketing terrain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
