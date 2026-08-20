import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" translate="no" className={`h-full antialiased`}>
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
