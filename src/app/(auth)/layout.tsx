import AuthLayouts from "@/layouts/auth/auth-layouts";
import React from "react";
import type {Metadata} from "next";
import "../globals.css";

import {Urbanist} from "next/font/google";

export const urbanistFonts = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "login / signup",
  description: "euphoria-fashion-shop",
};

function layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${urbanistFonts.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AuthLayouts>{children}</AuthLayouts>
      </body>
    </html>
  );
}

export default layout;
