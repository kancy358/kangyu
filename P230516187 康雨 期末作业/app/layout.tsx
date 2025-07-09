import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "螺蛳粉和香菜的网站",
  description: "一个集成了 WakaTime 和 QAnything 的 Next.js 应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-900 text-white`}>
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
