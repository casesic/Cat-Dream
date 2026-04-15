import type { Metadata } from "next";
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.vercel.app"),
  title: {
    default: "Cat Dreams",
    template: "%s | Cat Dreams"
  },
  description: "个人网站，记录自我介绍、博客文章与项目作品。",
  keywords: ["Next.js", "博客", "个人网站", "Tailwind CSS", "Vercel"],
  openGraph: {
    title: "Cat Dreams",
    description: "个人网站，记录自我介绍、博客文章与项目作品。",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Dreams",
    description: "个人网站，记录自我介绍、博客文章与项目作品。"
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
