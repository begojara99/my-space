export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 mt-10 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-blue-600">문의하기</h1>
        <p className="text-lg leading-relaxed mb-4">
          '오늘의 Mood 풍경 테스트'에 대한 의견, 제안, 또는 문의사항이 있으시면 언제든지 아래 이메일로 연락 주십시오.
          저희는 사용자 여러분의 소중한 의견을 기다립니다.
        </p>
        <p className="text-xl font-semibold text-center text-blue-600 mb-6">
          이메일: <a href="mailto:contact@example.com" className="text-blue-600 hover:underline transition-colors duration-200">contact@example.com</a>
        </p>
        <p className="text-lg leading-relaxed">
          최대한 빠른 시간 내에 답변드리도록 노력하겠습니다. 감사합니다.
        </p>
      </div>
    </main>
  );
}
