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
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const moodId = searchParams.get('moodId');
    const userImageBase64 = searchParams.get('userImage');

    if (moodId) {
      const foundMood = moods.find((mood) => mood.id === moodId);
      setResultMood(foundMood || null);
    } else {
      router.replace('/'); // Redirect to home if no moodId is found
    }

    if (userImageBase64) {
      setUserImage(decodeURIComponent(userImageBase64));
    }
  }, [searchParams, router]);

  if (!resultMood) {
    return (
      <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <h1 className="text-2xl font-bold text-gray-800">결과를 불러오는 중...</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl text-center transform transition-all duration-300">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-800">
          당신의 오늘의 Mood 풍경은...
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-8 leading-tight">
          {resultMood.name}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          {userImage && (
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
              <Image
                src={userImage}
                alt="User Upload"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div className={`relative ${userImage ? 'w-64 h-40 md:w-80 md:h-56' : 'w-full h-64 md:h-80'} rounded-lg overflow-hidden shadow-lg border-4 border-gray-200 transition-all duration-300`}>
            <Image
              src={resultMood.imageUrl}
              alt={resultMood.name}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {userImage && (
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            👆 당신의 사진과 오늘의 Mood 풍경입니다. 이 둘을 직접 합성하여 공유해보세요! 👇
          </p>
        )}

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {resultMood.description}
          <br /><br />
          이 장면에 당신의 모습을 상상해 보세요!
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xl rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 transition transform hover:-translate-y-0.5 duration-300">
            테스트 다시하기
          </Link>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {/* Placeholder for social sharing buttons */}
            <button className="flex items-center px-5 py-2 border border-gray-300 rounded-full text-gray-700 bg-gray-50 hover:bg-gray-100 transition duration-200 shadow-sm">
              <span className="mr-2">🔗</span> 결과 공유 (링크 복사)
            </button>
            <button className="flex items-center px-5 py-2 border border-blue-400 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200 shadow-sm">
              <span className="mr-2">🐦</span> X (트위터)
            </button>
            <button className="flex items-center px-5 py-2 border border-blue-800 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-200 shadow-sm">
              <span className="mr-2">📘</span> Facebook
            </button>
            <button className="flex items-center px-5 py-2 border border-yellow-400 bg-yellow-300 text-gray-800 rounded-full hover:bg-yellow-400 transition duration-200 shadow-sm">
              <span className="mr-2">💬</span> KakaoTalk
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
