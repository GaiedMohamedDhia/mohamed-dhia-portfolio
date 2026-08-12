import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Dhia Gaied | Software Engineer",
  description: "Professional portfolio of Mohamed Dhia Gaied — Software Engineering, Full-Stack Development and Cloud Computing.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Mohamed Dhia Gaied | Software Engineering Developer",
    description: "Software engineering developer and computer engineering student.",
    type: "website",
    images: [{ url: "/og-v3.png", width: 1732, height: 909, alt: "Mohamed Dhia Gaied — Software Engineering Developer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v3.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
