let cards = [];
let index = 0;
let showAnswer = false;
let currentFilter = "all";
let filteredCards = [];

let el = {};

// スワイプ検出用の変数
let touchStartX = 0;
let touchEndX = 0;

function initializeDOM() {
  el = {
    phrase: document.getElementById("phrase"),
    example: document.getElementById("example"),
    meaning: document.getElementById("meaning"),
    exampleBack: document.getElementById("exampleBack"),
    translation: document.getElementById("translation"),
    front: document.getElementById("frontView"),
    back: document.getElementById("backView"),
    counter: document.getElementById("cardCounter"),
    cardSection: document.getElementById("cardSection"),
    card: document.getElementById("card"),
  };
}

async function loadCards() {
  try {
    cards = cardsData;
    filteredCards = cards;
    initializeApp();
  } catch (error) {
    console.error("Error loading cards:", error);
  }
}

function getUniqueSections() {
  const sections = new Set();
  cards.forEach(card => {
    sections.add(card.section);
  });
  return Array.from(sections).sort();
}

function populateSectionFilter() {
  const sectionFilter = document.getElementById("sectionFilter");
  const sections = getUniqueSections();
  
  // 既存のオプション（「全セクション」のみ残す）を削除
  while (sectionFilter.options.length > 1) {
    sectionFilter.remove(1);
  }
  
  // セクションオプションを動的に追加
  sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section;
    option.textContent = section;
    sectionFilter.appendChild(option);
  });
}

function initializeApp() {
  populateSectionFilter();
  render();
  setupEventListeners();
}

function render() {
  if (filteredCards.length === 0) return;
  const c = filteredCards[index];
  el.phrase.textContent = c.phrase;
  el.example.textContent = c.example;
  el.meaning.textContent = c.meaning;
  el.exampleBack.textContent = c.example;
  el.translation.textContent = c.translation;
  el.counter.textContent = `${index + 1}/${filteredCards.length}`;
  el.cardSection.textContent = c.section;
}

function toggle() {
  showAnswer = !showAnswer;
  el.front.classList.toggle("hidden", showAnswer);
  el.back.classList.toggle("hidden", !showAnswer);
}

function filterCards(section) {
  currentFilter = section;
  if (section === "all") {
    filteredCards = cards;
  } else {
    filteredCards = cards.filter(card => card.section === section);
  }
  index = 0;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  
  // 確実にrenderを呼んでカウンターを更新
  render();
  
  // 念のためカウンターを明示的に更新
  if (filteredCards.length > 0) {
    el.counter.textContent = `${index + 1}/${filteredCards.length}`;
  }
}

function nextCard() {
  index = (index + 1) % filteredCards.length;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  render();
  // カウンターの明示的な更新
  el.counter.textContent = `${index + 1}/${filteredCards.length}`;
}

function prevCard() {
  index = (index - 1 + filteredCards.length) % filteredCards.length;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  render();
  // カウンターの明示的な更新
  el.counter.textContent = `${index + 1}/${filteredCards.length}`;
}

function handleSwipe() {
  const diff = touchStartX - touchEndX;
  const threshold = 50; // スワイプの最小距離
  
  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // 左へスワイプ（次へ）
      nextCard();
    } else {
      // 右へスワイプ（前へ）
      prevCard();
    }
  }
}

function shuffle() {
  // Fisher-Yatesアルゴリズムでシャッフル
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  // シャッフル後は最初の問題に戻す
  index = 0;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  render();
  el.counter.textContent = `${index + 1}/${filteredCards.length}`;
}

function setupEventListeners() {
  document.getElementById("sectionFilter").onchange = (e) => {
    filterCards(e.target.value);
  };

  document.getElementById("toggleBtn").onclick = toggle;
  document.getElementById("card").onclick = toggle;
  document.getElementById("nextBtn").onclick = nextCard;
  document.getElementById("prevBtn").onclick = prevCard;
  document.getElementById("shuffleBtn").onclick = shuffle;
  
  // スワイプイベントリスナー
  el.card.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  el.card.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeDOM();
  loadCards();
});