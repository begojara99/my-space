import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오늘의 Mood 풍경 테스트 - 나만의 풍경 찾기",
  description: "몇 가지 질문에 답하고, 당신의 오늘 기분과 가장 어울리는 아름다운 Mood 풍경을 찾아보세요! 나만의 Mood 풍경으로 하루를 시작하거나 마무리해 보세요.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          오늘의 Mood 풍경 테스트
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-prose mx-auto">
          몇 가지 질문에 답하고, 당신의 오늘 기분과 가장 어울리는 <span className="font-bold text-blue-500">아름다운 Mood 풍경</span>을 찾아보세요!
          나만의 Mood 풍경으로 하루를 시작하거나 마무리해 보세요.
        </p>
        <div className="mb-10">
          <Image
            src="/globe.svg" // Using an existing public image for a visual touch
            alt="Mood Landscape"
            width={150}
            height={150}
            className="mx-auto animate-bounce-slow"
          />
        </div>
        <Link href="/quiz" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl sm:text-2xl font-bold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition transform hover:-translate-y-1 duration-300">
          테스트 시작하기
        </Link>
      </div>
    </main>
  );
}
