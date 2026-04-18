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

function initializeApp() {
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
  render();
}

function nextCard() {
  index = (index + 1) % filteredCards.length;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  render();
}

function prevCard() {
  index = (index - 1 + filteredCards.length) % filteredCards.length;
  showAnswer = false;
  el.front.classList.remove("hidden");
  el.back.classList.add("hidden");
  render();
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

function setupEventListeners() {
  document.getElementById("sectionFilter").onchange = (e) => {
    filterCards(e.target.value);
  };

  document.getElementById("toggleBtn").onclick = toggle;
  document.getElementById("card").onclick = toggle;
  document.getElementById("nextBtn").onclick = nextCard;
  document.getElementById("prevBtn").onclick = prevCard;
  
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