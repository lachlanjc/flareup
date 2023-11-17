import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flareup",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
