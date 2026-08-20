import { PropsWithChildren } from "react";

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
