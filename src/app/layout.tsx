/**
 * Purpose: Root layout for the entire application
 * Features: Global styles, metadata, and page structure
 */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Allen - Developer & Entrepreneur",
  description: "Personal website of Henry Allen - Co-Founder of The20hr.co, AI Engineer, and Eurotech Fellow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
