import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          오늘의 Mood 풍경 테스트
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            소개
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            문의
          </Link>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            개인정보처리방침
          </Link>
        </div>
      </nav>
    </header>
  );
}
