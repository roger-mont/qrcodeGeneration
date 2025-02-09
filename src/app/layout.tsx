import type { Metadata } from "next";
import {  Tomorrow } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const tomorrowFont = Tomorrow({
  weight: "400",
  subsets: ["latin"]

})

export const metadata: Metadata = {
  title: "QR Code Ocean",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tomorrowFont.className}  antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
