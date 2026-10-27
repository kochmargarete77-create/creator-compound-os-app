import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "内容复利系统 · Creator Compound OS",
  description: "让每一条内容都成为下一条内容的训练数据。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
