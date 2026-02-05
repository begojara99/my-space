export interface Mood {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    moodScores: { [key: string]: number };
  }[];
}

export const moods: Mood[] = [
  {
    id: "joyful",
    name: "기쁨 가득한 햇살 가득한 초원",
    description: "당신은 기쁨으로 가득 차 있어, 모든 것이 밝고 희망차 보입니다. 넓게 펼쳐진 초원에서 따뜻한 햇살을 맞으며 자유를 만끽하는 모습이 당신의 기분을 완벽하게 표현합니다.",
    imageUrl: "/images/moods/joyful.jpg", // Placeholder
  },
  {
    id: "calm",
    name: "평온한 안개 낀 호수",
    description: "내면의 평화와 고요함을 느끼고 있군요. 잔잔한 호수 위에 부드럽게 깔린 안개처럼, 당신의 마음은 어떤 방해도 없이 평온합니다. 조용히 생각에 잠기기 좋은 시간입니다.",
    imageUrl: "/images/moods/calm.jpg", // Placeholder
  },
  {
    id: "energetic",
    name: "활기찬 도시의 밤",
    description: "에너지와 열정이 넘치는 당신! 반짝이는 도시의 불빛처럼 당신의 열정은 주위를 환하게 비춥니다. 새로운 도전을 할 준비가 되어 있으며, 모든 가능성에 열려 있습니다.",
    imageUrl: "/images/moods/energetic.jpg", // Placeholder
  },
  {
    id: "pensive",
    name: "사색적인 비 오는 숲길",
    description: "생각이 깊어지는 하루, 당신은 사색에 잠겨 있습니다. 촉촉한 비가 내리는 숲길을 걷는 것처럼, 차분하고 조용한 시간 속에서 내면을 탐색하고 있습니다.",
    imageUrl: "/images/moods/pensive.jpg", // Placeholder
  },
  {
    id: "adventurous",
    name: "웅장한 설산의 정상",
    description: "새로운 모험을 갈망하고 있군요! 눈 덮인 산의 웅장한 정상에 선 것처럼, 당신은 도전적이고 새로운 경험을 찾아 떠날 준비가 되어 있습니다. 미지의 세계가 당신을 기다립니다.",
    imageUrl: "/images/moods/adventurous.jpg", // Placeholder
  }
];

export const questions: Question[] = [
  {
    id: "q1",
    text: "오늘 아침, 눈을 떴을 때 가장 먼저 든 생각은?",
    options: [
      { text: "새로운 하루에 대한 기대감과 설렘!", moodScores: { joyful: 2, energetic: 1 } },
      { text: "아직 좀 더 자고 싶다...", moodScores: { pensive: 1, calm: 1 } },
      { text: "오늘 할 일들을 떠올리며 계획하기", moodScores: { energetic: 1, adventurous: 1 } },
      { text: "어제 꿈의 여운에 잠시 빠져들기", moodScores: { calm: 2, pensive: 1 } },
    ],
  },
  {
    id: "q2",
    text: "가장 좋아하는 날씨는?",
    options: [
      { text: "맑고 따뜻한 햇살이 내리쬐는 날", moodScores: { joyful: 2, energetic: 1 } },
      { text: "부드러운 비가 조용히 내리는 날", moodScores: { pensive: 2, calm: 1 } },
      { text: "시원한 바람이 불어오는 구름 낀 날", moodScores: { adventurous: 1, calm: 1 } },
      { text: "천둥번개가 치는 스펙터클한 날", moodScores: { energetic: 2, adventurous: 2 } },
    ],
  },
  {
    id: "q3",
    text: "주말에 가장 하고 싶은 활동은?",
    options: [
      { text: "친구들과 파티하며 신나게 놀기", moodScores: { joyful: 2, energetic: 2 } },
      { text: "집에서 책을 읽거나 영화 보기", moodScores: { calm: 2, pensive: 1 } },
      { text: "새로운 장소를 탐험하는 여행 떠나기", moodScores: { adventurous: 2, energetic: 1 } },
      { text: "조용히 자연 속에서 힐링하기", moodScores: { calm: 1, pensive: 2 } },
    ],
  },
  {
    id: "q4",
    text: "당신이 생각하는 이상적인 휴가는?",
    options: [
      { text: "활기찬 도시에서 쇼핑과 문화를 즐기기", moodScores: { energetic: 2, joyful: 1 } },
      { text: "아무것도 하지 않고 해변에서 휴식하기", moodScores: { calm: 2, joyful: 1 } },
      { text: "숨겨진 오지를 탐험하며 새로운 경험하기", moodScores: { adventurous: 2, energetic: 2 } },
      { text: "고요한 산속에서 명상하며 평화를 찾기", moodScores: { pensive: 2, calm: 1 } },
    ],
  },
  {
    id: "q5",
    text: "어떤 종류의 음악을 가장 즐겨 듣나요?",
    options: [
      { text: "신나고 경쾌한 댄스 음악이나 팝", moodScores: { joyful: 2, energetic: 2 } },
      { text: "잔잔하고 편안한 클래식 또는 뉴에이지", moodScores: { calm: 2, pensive: 1 } },
      { text: "강렬하고 비트 있는 록이나 힙합", moodScores: { energetic: 2, adventurous: 1 } },
      { text: "감성적이고 사색적인 발라드나 인디 음악", moodScores: { pensive: 2, calm: 1 } },
    ],
  },
  {
    id: "q6",
    text: "가장 좋아하는 계절은 언제인가요?",
    options: [
      { text: "따뜻한 햇살 아래 모든 것이 피어나는 봄", moodScores: { joyful: 2, calm: 1 } },
      { text: "활동적이고 시원한 여름 바다가 있는 여름", moodScores: { energetic: 2, adventurous: 1 } },
      { text: "차분하고 사색적인 분위기의 가을", moodScores: { pensive: 2, calm: 2 } },
      { text: "새로운 시작을 준비하는 듯한 고요한 겨울", moodScores: { calm: 1, pensive: 1 } },
    ],
  },
  {
    id: "q7",
    text: "친구가 고민을 이야기할 때 당신의 반응은?",
    options: [
      { text: "긍정적인 조언과 해결책을 함께 찾아준다", moodScores: { energetic: 1, joyful: 1 } },
      { text: "조용히 들어주고 공감하며 위로한다", moodScores: { calm: 2, pensive: 1 } },
      { text: "함께 활동하며 기분 전환을 시켜준다", moodScores: { joyful: 1, energetic: 2 } },
      { text: "다양한 관점에서 문제를 분석하고 조언한다", moodScores: { adventurous: 1, pensive: 1 } },
    ],
  },
  {
    id: "q8",
    text: "새로운 도전에 직면했을 때 당신의 태도는?",
    options: [
      { text: "설레고 기대된다! 새로운 것을 배우는 기회다", moodScores: { adventurous: 2, energetic: 2 } },
      { text: "신중하게 계획하고 준비하여 접근한다", moodScores: { calm: 1, pensive: 1 } },
      { text: "어렵겠지만 재미있을 것 같아서 일단 부딪혀본다", moodScores: { energetic: 2, joyful: 1 } },
      { text: "불확실하지만 차분히 상황을 지켜본다", moodScores: { pensive: 2, calm: 1 } },
    ],
  },
