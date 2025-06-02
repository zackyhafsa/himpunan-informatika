"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bubble from "./Bubble";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Halaman yang tidak butuh layout
  const noLayoutPaths = ["/chat"];

  const shouldHideLayout = noLayoutPaths.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {children}
      {!shouldHideLayout && <Bubble />}
      {!shouldHideLayout && <Footer />}
    </>
  );
}
