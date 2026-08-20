import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" translate="no" className={cn("h-full", "antialiased", "font-sans")}>
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
