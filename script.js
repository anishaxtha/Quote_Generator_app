const quotes = {
  science: [
    {
      quote: `"Curiosity is the essence of human existence"`,
      writer: "- Neil Armstrong",
    },
    {
      quote: `"Science is the key to our future,and if you don’t believe in science, then you’re holding everybody back."`,
      writer: "- Bill Nye",
    },
    {
      quote: `"Science is not only a disciple of reason but also one of romance and passion."`,
      writer: "- Stephen Hawking ",
    },
    {
      quote: `"Science is organized knowledge. Wisdom is organized life."`,
      writer: "- Immanuel Kant",
    },
    {
      quote: `"Science is simply the word we use to describe a method of organizing our curiosity."`,
      writer: "- Tim Minchin",
    },
    {
      quote: `"Somewhere, something incredible is waiting to be known."`,
      writer: "- Carl Sagan",
    },
    {
      quote: `"The science of today is the technology of tomorrow."`,
      writer: "- Edward Teller",
    },
    {
      quote: `"Science is the great antidote to the poison of enthusiasm and superstition."`,
      writer: "- Richard Dawkins",
    },
    {
      quote: `"Science and religion are not at odds. Science is simply too young to understand."`,
      writer: "- Dan Brown",
    },
    {
      quote: `"Science without religion is lame, religion without science is blind." `,
      writer: "- Albert Einstein",
    },
  ],
  inspiration: [
    {
      quote: `"The only way to do great work is to love what you do."`,
      writer: "- Steve Jobs",
    },
    {
      quote: `"Believe you can and you're halfway there." `,
      writer: "- Theodore Roosevelt",
    },
    {
      quote: `"The future belongs to those who believe in the beauty of their dreams." `,
      writer: "- Eleanor Roosevelt",
    },
    {
      quote: `"In the middle of difficulty lies opportunity."`,
      writer: " - Albert Einstein",
    },
    {
      quote: `"The best way to predict the future is to create it."`,
      writer: "- Abraham Lincoln",
    },
    {
      quote: `"Don't watch the clock; do what it does. Keep going."`,
      writer: "- Sam Levenson",
    },
    {
      quote: `"You miss 100% of the shots you don't take."`,
      writer: "- Wayne Gretzky",
    },
    {
      quote: `"Success is walking from failure to failure with no loss of enthusiasm."`,
      writer: "- Winston Churchill",
    },
    {
      quote: `"The way to get started is to quit talking and begin doing."`,
      writer: "- Walt Disney",
    },
    {
      quote: `"The only place where success comes before work is in the dictionary."`,
      writer: "- Vidal Sassoon",
    },
  ],
};

let currentCategory = "science";
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 1.5;

const quoteElement = document.querySelector(".quote");
const writerElement = document.querySelector(".writer");

function displayQuote() {
  if (typeof quotes[currentCategory][currentQuoteIndex] === "string") {
    quoteElement.textContent = quotes[currentCategory][currentQuoteIndex];
    writerElement.textContent = "";
  } else {
    const selectedQuote = quotes[currentCategory][currentQuoteIndex];
    quoteElement.textContent = selectedQuote.quote;
    writerElement.textContent = selectedQuote.writer;
  }
  quoteElement.style.fontSize = fontSize + "rem";
}

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function toggleDarkMode() {
  darkMode = !darkMode;
  const body = document.body;
  body.style.backgroundColor = darkMode ? "#333" : "rgb(119, 184, 220)";
  body.style.color = darkMode ? "#fff" : "#333";
}

function changeFontSize(delta) {
  fontSize += delta;
  displayQuote();
}

function previousQuote() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + quotes[currentCategory].length) %
    quotes[currentCategory].length;
  displayQuote();
}

function randomQuote() {
  currentQuoteIndex = randomIndex(quotes[currentCategory].length);
  displayQuote();
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
  displayQuote();
}

document.querySelector(".category").addEventListener("change", function () {
  currentCategory = this.value;
  currentQuoteIndex = randomIndex(quotes[currentCategory].length);
  displayQuote();
});

function toggleDarkMode() {
  darkMode = !darkMode;
  const body = document.body;
  if (darkMode) {
    body.style.backgroundColor = "#333";
    body.style.color = "#fff";
  } else {
    body.style.backgroundColor = "rgb(119, 184, 220)";
    body.style.color = "#333";
  }
}

function increaseFontSize() {
  fontSize += 0.1;
  displayQuote();
}

function decreaseFontSize() {
  fontSize -= 0.1;
  displayQuote();
}

displayQuote();
