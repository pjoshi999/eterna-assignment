import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Providers } from "@/components/Providers";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiom Trade - Token Discovery",
  description: "Real-time token trading and discovery platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
