import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers/Providers";
import PreviewModal from "@/modals/previewModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeless Jewellery",
  description:
    "Timeless Jewellery is known for its luxury goods, particularly its sterling silver and diamond jewellery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} max-w-7xl mx-auto `}>
          {children}
          <Toaster position="top-right" closeButton richColors />
          <PreviewModal />
        </body>
      </html>
    </Providers>
  );
}
