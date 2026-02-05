import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Removed Geist font imports
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({ // Removed Geist font usage
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({ // Removed Geist font usage
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "오늘의 Mood 풍경 테스트",
  description: "오늘의 기분을 테스트하고, 당신의 Mood 풍경을 찾아보세요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8576967131101487"
     crossorigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-8576967131101487"> {/* Changed language to Korean */}
      <body className="flex flex-col min-h-screen font-sans antialiased"> {/* Simplified body classes */}
        <Header />
        <div className="flex-grow flex justify-center"> {/* 전체 레이아웃을 중앙에 정렬하기 위한 새 플렉스 컨테이너 */}
          {/* 왼쪽 광고 플레이스홀더 */}
          <aside className="hidden md:block w-60 p-4"> {/* 예시 너비, 필요에 따라 조정 */}
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-8576967131101487"
                 data-ad-slot="YOUR_LEFT_AD_SLOT_ID"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </aside>

          {/* 중앙 메인 콘텐츠 */}
          <main className="flex-grow max-w-screen-lg mx-auto p-4"> {/* 최대 너비 및 중앙 정렬 */}
            {children}
          </main>

          {/* 오른쪽 광고 플레이스홀더 */}
          <aside className="hidden md:block w-60 p-4"> {/* 예시 너비, 필요에 따라 조정 */}
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-8576967131101487"
                 data-ad-slot="YOUR_RIGHT_AD_SLOT_ID"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}

