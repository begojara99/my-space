export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">문의하기</h1>
        <p className="text-lg text-gray-700 mb-4">
          '오늘의 Mood 풍경 테스트'에 대한 의견, 제안, 또는 문의사항이 있으시면 언제든지 아래 이메일로 연락 주십시오.
          저희는 사용자 여러분의 소중한 의견을 기다립니다.
        </p>
        <p className="text-xl font-semibold text-center text-blue-600 mb-6">
          이메일: <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a>
        </p>
        <p className="text-lg text-gray-700">
          최대한 빠른 시간 내에 답변드리도록 노력하겠습니다. 감사합니다.
        </p>
      </div>
    </main>
  );
}