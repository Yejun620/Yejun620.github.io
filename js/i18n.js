// English / Korean switch.
// The English text lives in the HTML itself. Every element with data-i18n="key"
// is swapped with the Korean text below, and the original English is restored on switch back.
(function () {
  const KO = {
    "nav.education": "학력",
    "nav.projects": "프로젝트",
    "nav.experience": "경력",
    "nav.skills": "기술",
    "nav.contact": "연락처",

    "hero.eyebrow": "안녕하세요, 저는",
    "hero.role": "풀스택 개발자",
    "hero.summary":
      "스토니브룩 대학교 컴퓨터공학과 재학생이며 2026년 12월 졸업 예정입니다. RESTful API부터 LLM 기반 기능까지, 웹 애플리케이션을 처음부터 끝까지 개발합니다.",
    "hero.btnProjects": "프로젝트 보기",
    "hero.btnContact": "문의하기",

    "common.sbu": "스토니브룩 대학교",

    "edu.title": "학력",
    "edu.date": "졸업 예정: 2026년 12월",
    "edu.degree": "컴퓨터공학 학사 (B.S.)",
    "edu.courses":
      "<strong>수강 과목:</strong> 자료구조, 알고리즘 분석, 시스템 기초, 프로그래밍 패러다임, 컴퓨팅의 사회·법적 쟁점, 기술 커뮤니케이션, 스크립팅 언어, 소프트웨어 개발",

    "proj.title": "프로젝트",
    "p1.date": "2026년 2월 ~ 2026년 6월",
    "p1.role": "풀스택 개발자",
    "p1.name": "PPa-dun: 판타지 야구 AI 드래프트 어시스턴트",
    "p1.b1": "미국 사용자를 대상으로 하는 AI 기반 판타지 야구 드래프트 어시스턴트의 풀스택 웹 기능을 개발했습니다.",
    "p1.b2": "실시간 드래프트 진행 상황과 선수 선택 가능 여부를 동적으로 갱신하는 RESTful API를 설계하고 구현했습니다.",
    "p1.b3": "선수 통계와 드래프트 상황을 분석해 로스터 추천을 최적화하는 LLM 기반 추천 엔진을 통합했습니다.",

    "p2.date": "2024년 7월 ~ 2024년 8월",
    "p2.name": "LG Aimers: 자동차 디스플레이 불량 예측",
    "p2.b1": "결측치와 클래스 불균형이 있는 실제 데이터셋에 대해 EDA와 데이터 전처리를 수행했습니다.",
    "p2.b2":
      "XGBoost, LightGBM, MLP 모델을 구축하고 성능을 비교해 자동차 디스플레이 불량률을 예측했으며, Public Score 0.17을 기록했습니다.",

    "p3.date": "2024년 10월",
    "p3.org": "해커톤",
    "p3.name": "레시피 검색 및 조리법 안내 웹사이트",
    "p3.b1": "2024년 해커톤에서 2위를 수상했습니다.",
    "p3.b2": "팀원으로서 프런트엔드와 백엔드 개발에 모두 참여했으며, Python으로 핵심 기능을 구현했습니다.",

    "exp.title": "경력",
    "e0.date": "2026년 9월 ~ 현재",
    "e0.name": "학부 연구원 | Brain-Inspired Computing Lab",
    "e0.b1": "Yang Yoon Seok 교수님의 지도 아래 Brain-Inspired Computing Lab에서 학부 연구를 수행하고 있습니다.",

    "e1.date": "2025년 3월 ~ 2025년 8월",
    "e1.name": "코딩 교육 강사",
    "e1.b1": "비영리 코딩 교육 단체 CO:Ders Us 13기 멤버로 활동했습니다.",
    "e1.b2": "수업 계획안 작성과 현장 강의 진행을 포함한 코딩 교육 프로젝트를 주도하고 운영했습니다.",
    "e1.b3": "Python과 Java의 기초 개념을 가르치고, 교육 프로그램의 운영 전반을 관리했습니다.",

    "e2.date": "2021년 2월 ~ 2025년 5월",
    "e2.name": "레지던트 어시스턴트(RA) 대표",
    "e2.b1": "팀 리더로서 학기당 5회 대학생 대상 행사를 기획하고 운영했습니다.",
    "e2.b2": "층에 거주하는 30명의 기숙사 생활을 관리하고 지원했습니다.",
    "e2.b3": "대학 관계자, 기숙사 행정 담당자, 동료 RA들과 소통하며 협력했습니다.",

    "skills.title": "기술",
    "skills.langs": "프로그래밍 언어",
    "skills.tools": "도구",
    "skills.additional": "추가 정보",
    "add.lang": "<strong>언어:</strong> 영어, 한국어, 중국어(만다린)",
    "add.mil":
      "<strong>병역:</strong> 대한민국 해병대 수색대 (2021년 8월 ~ 2023년 3월), 스쿠버 및 공수 훈련을 받은 특수작전 부대",
    "add.act": "<strong>활동:</strong> International Christian Club 회장 / 행사 코디네이터 (2024~2025)",

    "contact.title": "연락처",
    "contact.text": "함께 일하고 싶으시거나 가볍게 인사를 나누고 싶으시면 언제든 연락 주세요.",
    "contact.email": "이메일 보내기",
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  nodes.forEach((node) => {
    node.dataset.en = node.innerHTML;
  });

  const button = document.querySelector(".lang-toggle");

  function apply(lang) {
    nodes.forEach((node) => {
      const text = lang === "ko" ? KO[node.dataset.i18n] : node.dataset.en;
      if (text !== undefined) node.innerHTML = text;
    });
    document.documentElement.lang = lang;
    button.setAttribute("aria-checked", String(lang === "ko"));
  }

  // The site always opens in English. Drop the choice an older version saved in the browser.
  try {
    localStorage.removeItem("lang");
  } catch (e) {}

  const SWAP_MS = 350; // swap after the knob (0.35s) has finished sliding and the text has faded out
  let lang = "en";
  let timer;

  button.addEventListener("click", () => {
    lang = lang === "ko" ? "en" : "ko";
    // 1) Slide the knob right away
    button.setAttribute("aria-checked", String(lang === "ko"));
    // 2) Fade the page text out, swap the language while it is invisible, fade it back in
    const root = document.documentElement;
    root.classList.add("lang-switching");
    clearTimeout(timer);
    timer = setTimeout(() => {
      apply(lang);
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("lang-switching")));
    }, SWAP_MS);
  });
})();
