import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "FocusAI",
  description: "Your AI-powered personal development companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
} 