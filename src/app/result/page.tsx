"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { moods, Mood } from '@/data/moodData';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resultMood, setResultMood] = useState<Mood | null>(null);

  useEffect(() => {
    const moodId = searchParams.get('moodId');
    if (moodId) {
      const foundMood = moods.find((mood) => mood.id === moodId);
      setResultMood(foundMood || null);
    } else {
      router.replace('/'); // Redirect to home if no moodId is found
    }
  }, [searchParams, router]);

  if (!resultMood) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl font-bold">결과를 불러오는 중...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">당신의 오늘의 Mood 풍경은...</h1>
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">{resultMood.name}</h2>

        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden shadow-md">
          {/* Using Image component for optimization, adjust layout based on actual image aspect ratios */}
          <Image
            src={resultMood.imageUrl}
            alt={resultMood.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {resultMood.description}
          <br /><br />
          이 장면에 당신의 모습을 상상해 보세요! 이 이미지를 배경으로 셀카를 찍고 공유해 보세요!
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/" className="w-full px-6 py-3 bg-blue-600 text-white text-xl rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            테스트 다시하기
          </Link>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Placeholder for social sharing buttons */}
            <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              공유 (X/Twitter)
            </button>
            <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              공유 (Facebook)
            </button>
            <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
              공유 (KakaoTalk)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}