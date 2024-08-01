import Providers from "@/lib/Providers/Providers";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarsQuest",
  description:
    "MarsQuest is a user-friendly multi-stage application form for aspiring Martian explorers. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className="bg-gradient-to-r from-[#000018] to-[#010524]">
          <Toaster richColors position="top-center" />
          {children}
        </body>
      </html>
    </Providers>
  );
}
