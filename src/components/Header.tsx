import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-4">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
        <Link href="/" className="text-3xl font-extrabold tracking-wide mb-2 sm:mb-0 hover:text-blue-200 transition-colors duration-200">
          오늘의 Mood 풍경 테스트
        </Link>
        <div className="flex space-x-4 text-lg">
          <Link href="/about" className="hover:text-blue-200 transition-colors duration-200">
            소개
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors duration-200">
            문의
          </Link>
          <Link href="/privacy-policy" className="hover:text-blue-200 transition-colors duration-200">
            개인정보처리방침
          </Link>
        </div>
      </nav>
    </header>
  );
}