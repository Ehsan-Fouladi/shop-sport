import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود و ثبت‌ نام",
  description: "برای ورود به حساب کاربری یا ایجاد حساب جدید اقدام کنید.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
