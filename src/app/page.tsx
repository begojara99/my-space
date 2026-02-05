import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-8">오늘의 Mood 풍경 테스트</h1>
      <p className="text-xl text-center mb-12">
        몇 가지 질문에 답하고, 당신의 오늘 기분과 가장 어울리는 풍경을 찾아보세요!
      </p>
      <Link href="/quiz" className="px-8 py-4 bg-blue-600 text-white text-2xl rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
        테스트 시작하기
      </Link>
    </main>
  );
}