"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, moods } from '@/data/moodData';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [moodScores, setMoodScores] = useState<{ [key: string]: number }>(
    moods.reduce((acc, mood) => ({ ...acc, [mood.id]: 0 }), {})
  );
  const router = useRouter();

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

      for (const moodId in moodScores) {
        if (moodScores[moodId] > maxScore) {
          maxScore = moodScores[moodId];
          dominantMoodId = moodId;
        }
      }

      // Handle ties or no answers
      if (!dominantMoodId) {
        dominantMoodId = moods[0].id; // Default to first mood if no scores
      }

      router.push(`/result?moodId=${dominantMoodId}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <p className="text-xl font-semibold mb-4 text-center">
          질문 {currentQuestionIndex + 1} / {questions.length}
        </p>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {currentQuestion.text}
        </h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className="w-full p-4 border border-gray-300 rounded-lg text-lg text-left hover:bg-blue-50 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}