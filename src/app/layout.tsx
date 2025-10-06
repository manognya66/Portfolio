import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio built with Next.js, Tailwind, and Framer Motion",
  icons: {
    icon: "./assets/1.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
