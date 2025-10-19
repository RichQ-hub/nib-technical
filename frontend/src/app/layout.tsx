import type { Metadata } from "next";
import "./globals.css";
import { fira } from "@/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nib Technical Challenge",
  description: "By Richard Quisumbing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.className} antialiased text-white box-border`}>
        <Navbar />
        <div className='min-h-screen mt-14 bg-[#1e2f49] p-8'>
          {children}
        </div>
      </body>
    </html>
  );
}
