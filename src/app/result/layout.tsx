import { Suspense } from 'react';

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl font-bold">결과를 불러오는 중...</h1>
      </main>
    }>
      {children}
    </Suspense>
  );
}
