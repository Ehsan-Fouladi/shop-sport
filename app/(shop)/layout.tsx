import BannerHeader from "@/components/BannerHeader";
import Footer from "@/components/TheFooter";
import Header from "@/components/TheHeader";
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
