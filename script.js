const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

const authors = [
  "Unknown",
  "Unknown",
  "Unknown",
  "Unknown",
  "Unknown",
  "Unknown"
];

const colors = [
  "#4facfe",
  "#43e97b",
  "#fa709a",
  "#fbc2eb",
  "#30cfd0",
  "#a18cd1"
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const btn = document.getElementById("new-quote");

let index = 0;

btn.addEventListener("click", function() {
  quoteText.textContent = `"${quotes[index]}"`;
  quoteAuthor.textContent = `– ${authors[index]}`;
  document.body.style.background = `linear-gradient(135deg, ${colors[index]})`;

  index++;
  if (index >= quotes.length) {
    index = 0;
  }
});
