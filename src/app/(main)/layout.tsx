import type {Metadata} from "next";
import {Urbanist} from "next/font/google";
import "../globals.css";
import Layouts from "@/layouts/main-layouts";

export const urbanistFonts = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "euphoria-fashion-shop",
  description: "euphoria-fashion-shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanistFonts.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
