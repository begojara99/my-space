"use client";

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { questions, moods } from '@/data/moodData';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기분 테스트 시작 - 오늘의 Mood 풍경 테스트",
  description: "몇 가지 질문에 답하고 당신의 기분에 가장 잘 어울리는 Mood 풍경을 찾아보세요.",
};

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [moodScores, setMoodScores] = useState<{ [key: string]: number }>(
    moods.reduce((acc, mood) => ({ ...acc, [mood.id]: 0 }), {})
  );
  const [userImage, setUserImage] = useState<string | null>(null);
  const router = useRouter();

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleAnswerClick = (selectedOptionIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[selectedOptionIndex];

    setMoodScores((prevScores) => {
      const newScores = { ...prevScores };
      for (const moodId in selectedOption.moodScores) {
        newScores[moodId] = (newScores[moodId] || 0) + selectedOption.moodScores[moodId];
      }
      return newScores;
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Quiz finished, determine the dominant mood
      let dominantMoodId = '';
      let maxScore = -1;

      // Handle cases where no answers contribute to moodScores (shouldn't happen with current data)
      const totalScore = Object.values(moodScores).reduce((sum, score) => sum + score, 0);
      if (totalScore === 0 && moods.length > 0) {
        dominantMoodId = moods[0].id; // Default to first mood if no scores, just in case
      } else {
        for (const moodId in moodScores) {
          if (moodScores[moodId] > maxScore) {
            maxScore = moodScores[moodId];
            dominantMoodId = moodId;
          }
        }
      }
      
      // Pass userImage via sessionStorage if available
      if (userImage) {
        sessionStorage.setItem('userImage', userImage);
      }
      
      const query = `?moodId=${dominantMoodId}`;
      router.push(`/result${query}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          오늘의 기분은?
        </h2>
        
        {/* Photo Upload Section */}
        <div className="mb-8 text-center border-b pb-6 border-gray-200">
          <p className="text-lg text-gray-700 mb-4">당신의 사진을 업로드해보세요! (선택 사항)</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
          {userImage && (
            <div className="mt-4 flex justify-center">
              <Image src={userImage} alt="User Preview" width={150} height={150} className="rounded-full object-cover border-2 border-blue-500" />
            </div>
          )}
        </div>

        {/* Quiz Questions */}
        <p className="text-xl font-semibold mb-4 text-center text-gray-600">
          질문 {currentQuestionIndex + 1} / {questions.length}
        </p>
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {currentQuestion.text}
        </h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className="w-full p-4 border-2 border-blue-300 rounded-lg text-lg text-left text-gray-700 bg-blue-50
                         hover:bg-blue-200 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300
                         transition duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
