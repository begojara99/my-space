import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 p-6">
      <div className="container mx-auto text-center text-sm">
        <p className="mb-2">&copy; {currentYear} 오늘의 Mood 풍경 테스트. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors duration-200">
            문의
          </Link>
        </div>
        <p className="mt-4 text-xs">
          본 서비스는 Google AdSense 프로그램을 통해 운영됩니다.
        </p>
      </div>
    </footer>
  );
}