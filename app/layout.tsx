import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";

const roboto = Roboto({ weight: ["300", "400", "500"], style: ["normal"] });

export const metadata: Metadata = {
  title: "Obyektivka",
  description: "By Sulaymonov Diyorbek",
  icons: { icon: "/fileIcon.png" },
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
