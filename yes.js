const text = "Find Your Dream Home Today!";
const words = text.split(" ");
const typingElement = document.getElementById("typing");

// Pre-add all words with opacity 0
words.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.opacity = "0";
  span.style.display = "inline-block";
  span.style.marginRight = "0.2em";
  span.dataset.wordIndex = index;
  typingElement.appendChild(span);
});

// Animate each word one by one
let wordIndex = 0;

function revealWords() {
  if (wordIndex < words.length) {
    const wordSpans = typingElement.querySelectorAll("span");
    const currentSpan = wordSpans[wordIndex];
    currentSpan.style.animation = "fadeInWord 0.6s ease-out forwards";
    wordIndex++;
    setTimeout(revealWords, 200);
  }
}

revealWords();
