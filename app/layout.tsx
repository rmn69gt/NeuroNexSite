import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NeuroNex - AI решения для вашего бизнеса",
  description: "Платформа на базе искусственного интеллекта для автоматизации, анализа данных и умных решений. Начните бесплатно.",
  keywords: "AI, machine learning, автоматизация, анализ данных, нейросети, NeuroNex",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  authors: [{ name: "NeuroNex Team" }],
  creator: "NeuroNex",
  openGraph: {
    title: "NeuroNex - AI решения для вашего бизнеса",
    description: "Платформа на базе искусственного интеллекта для автоматизации, анализа данных и умных решений.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroNex - AI решения",
    description: "Платформа на базе искусственного интеллекта",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={roboto.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#3200F0" />
      </head>
      <body className="bg-white text-gray">{children}</body>
    </html>
  );
}
