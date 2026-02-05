export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col items-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 mt-10 text-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-blue-600">개인정보처리방침</h1>
        <p className="text-lg leading-relaxed mb-4">
          '오늘의 Mood 풍경 테스트'는 사용자 여러분의 개인정보를 중요하게 생각하며,
          관련 법규를 준수하고 개인정보 보호에 최선을 다하고 있습니다.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">1. 수집하는 개인정보 항목</h2>
        <p className="text-lg leading-relaxed mb-4">
          저희 서비스는 테스트 결과를 산출하기 위한 어떠한 개인 식별 정보도 수집하지 않습니다.
          사용자의 테스트 답변은 오직 해당 세션 내에서만 기분 분석에 사용되며, 서버에 저장되거나 외부로 전송되지 않습니다.
          업로드되는 사진 파일 또한 서버에 저장되지 않으며, 사용자 브라우저 내에서만 처리됩니다.
          따라서 이름, 이메일, IP 주소 등 개인을 식별할 수 있는 정보는 수집되지 않습니다.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">2. 개인정보의 이용 목적</h2>
        <p className="text-lg leading-relaxed mb-4">
          저희 서비스는 개인정보를 수집하지 않으므로, 이용 목적 또한 존재하지 않습니다.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">3. 개인정보의 보유 및 이용 기간</h2>
        <p className="text-lg leading-relaxed mb-4">
          저희 서비스는 개인정보를 수집하지 않으므로, 보유 및 이용 기간 또한 존재하지 않습니다.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">4. 쿠키 (Cookie)</h2>
        <p className="text-lg leading-relaxed mb-4">
          저희 서비스는 사용자 경험 향상을 위해 제한적으로 쿠키를 사용할 수 있습니다.
          이는 사용자 세션 관리, 웹사이트 성능 분석 등에 사용될 수 있으며,
          개인을 식별할 수 있는 정보와는 무관합니다.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">5. Google AdSense</h2>
        <p className="text-lg leading-relaxed mb-4">
          본 웹사이트는 Google AdSense를 통해 광고를 게재하고 있습니다.
          Google은 사용자의 관심사에 맞는 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
          Google의 광고 쿠키 사용에 대한 자세한 정보는 Google의 광고 개인정보처리방침을 참조하십시오.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-6 text-gray-800">6. 문의</h2>
        <p className="text-lg leading-relaxed mb-4">
          개인정보처리방침과 관련하여 궁금한 점이 있으시면 contact@example.com 으로 문의해 주십시오.
        </p>
        <p className="text-sm text-gray-500 mt-8 text-right">최종 업데이트: 2026년 2월 5일</p>
      </div>
    </main>
  );
}
