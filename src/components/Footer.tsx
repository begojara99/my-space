export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} 오늘의 Mood 풍경 테스트. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy-policy" className="hover:underline">개인정보처리방침</a>
          <a href="/contact" className="hover:underline">문의</a>
        </div>
      </div>
    </footer>
  );
}
