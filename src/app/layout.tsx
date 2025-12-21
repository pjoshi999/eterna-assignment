import type { Metadata } from "next";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { Providers } from "@/components/Providers";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="geist-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
