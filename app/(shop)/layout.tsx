import BannerHeader from "@/components/header/BannerHeader";
import Header from "@/components/header/Header";
import Footer from "@/components/TheFooter";
import { PropsWithChildren } from "react";

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <>
      <BannerHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
