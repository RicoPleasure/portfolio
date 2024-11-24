import { Inter, Orbitron } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "esprazj",
  description: "esprazj's portfolio website",
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} bg-background font-sans text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}