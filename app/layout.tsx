import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: {
    default: "Cat Dreams",
    template: "%s | Cat Dreams"
  },
  description: "Cat Dreams 是一个基于 Next.js 构建的个人网站，用来展示文章、项目和持续生长的想法。",
  keywords: ["Next.js", "个人网站", "博客", "Tailwind CSS", "Vercel"],
  openGraph: {
    title: "Cat Dreams",
    description: "一个基于 Next.js 构建的个人网站，用来展示文章、项目和持续生长的想法。",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Dreams",
    description: "一个基于 Next.js 构建的个人网站，用来展示文章、项目和持续生长的想法。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
