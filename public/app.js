const cards = [
  {
    section: "セクション1",
    phrase: "take ~ for granted",
    meaning: "〜を当然だと思う",
    example: "We often take our health for granted.",
    translation: "健康を当然と思いがち"
  },
  // 必要に応じて追加
];

let index = 0;
let showAnswer = false;

const el = {
  phrase: document.getElementById("phrase"),
  example: document.getElementById("example"),
  meaning: document.getElementById("meaning"),
  exampleBack: document.getElementById("exampleBack"),
  translation: document.getElementById("translation"),
  front: document.getElementById("frontView"),
  back: document.getElementById("backView"),
};

function render() {
  const c = cards[index];
  el.phrase.textContent = c.phrase;
  el.example.textContent = c.example;
  el.meaning.textContent = c.meaning;
  el.exampleBack.textContent = c.example;
  el.translation.textContent = c.translation;
}

function toggle() {
  showAnswer = !showAnswer;
  el.front.classList.toggle("hidden", showAnswer);
  el.back.classList.toggle("hidden", !showAnswer);
}

document.getElementById("toggleBtn").onclick = toggle;
document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % cards.length;
  showAnswer = false;
  toggle();
  render();
};

render();