import ProductContextProvider from "@/lib/contexts/product-context";
import Footer from "@/modules/inc/footer";
import Header from "@/modules/inc/header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <div>{children}</div>
        <Footer />
      </ProductContextProvider>
    </>
  );
}
