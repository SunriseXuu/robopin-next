import type { Metadata } from "next";
import "./globals.css";

import AppTopbar from "@/components/shared/AppTopbar";
import AppFooter from "@/components/shared/AppFooter";

export const metadata: Metadata = {
  title: "Robopin - Elderly Smart Terminal",
  description: "The intelligent companion redefining elderly care with AI-driven emotional support and security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          <AppTopbar />
          {children}
          <AppFooter />
        </main>
      </body>
    </html>
  );
}
