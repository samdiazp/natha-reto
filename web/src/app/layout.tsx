import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SoyNathaFit",
  description: "Soy Nathal y este es mi reto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/images/logo.webp" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-black text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
