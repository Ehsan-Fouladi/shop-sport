import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "ورود و ثبت‌ نام",
  description: "برای ورود به حساب کاربری یا ایجاد حساب جدید اقدام کنید.",
};

export default function AuthLayout({
  children,
}: {
  children: PropsWithChildren;
}) {
  return children;
}
