import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" translate="no">
      <body className="w-full min-h-screen">{children}</body>
    </html>
  );
}
