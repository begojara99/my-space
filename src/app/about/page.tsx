export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 mt-10 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-blue-600">서비스 소개</h1>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-semibold">'오늘의 Mood 풍경 테스트'</span>는 당신의 하루 기분을 쉽고 재미있게 파악하고, 그 기분에 가장 잘 어울리는 아름다운 풍경 이미지를 추천해 드리는 인터랙티브 웹 서비스입니다.
          매일 달라지는 당신의 감정을 시각적으로 표현하여, 잠시 멈춰 서서 자신을 돌아보고 소소한 즐거움을 찾을 수 있도록 돕습니다.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          저희는 단순한 테스트를 넘어, 사용자에게 긍정적인 영감과 휴식을 제공하는 것을 목표로 합니다. 당신의 Mood 풍경을 친구들과 공유하며 새로운 대화의 시작을 만들어 보세요.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="font-semibold">사진 업로드 기능:</span> 이제 퀴즈를 시작하기 전에 자신의 사진을 업로드할 수 있습니다. 업로드된 사진은 결과 페이지에서 Mood 풍경 이미지와 함께 표시되어, 더욱 개인화된 경험을 제공합니다. (사진은 서버에 저장되지 않으며, 브라우저 내에서만 처리됩니다.)
        </p>
        <p className="text-lg leading-relaxed">
          이 서비스는 Google AdSense 프로그램을 통해 운영되며, 여러분의 많은 관심과 이용 부탁드립니다.
        </p>
      </div>
    </main>
  );
}
