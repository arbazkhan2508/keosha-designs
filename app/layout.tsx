import type { Metadata } from "next";
import { Della_Respira, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CartDrawer } from "../components/CartDrawer";
import { WhatsAppButton } from "../components/WhatsAppButton";

const dellaRespira = Della_Respira({
  weight: "400",
  variable: "--font-della-respira",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keosha Designs | Contemporary Indian Luxury Ethnic Wear",
  description: "Explore our contemporary ethnicwear collections, featuring handcrafted sarees, kurta sets, anarkalis, and shararas. Size-inclusive (XS-6XL) with bespoke Lucknowi embroidery.",
  keywords: "Keosha Designs, Keosha India, luxury indian wear, chikankari lucknow, designer saree, anarkali kurta, size inclusive ethnic wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dellaRespira.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FCFAF6] text-[#1A1A1A]">
        <CartProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
