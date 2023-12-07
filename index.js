// get quotes form API


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const xButton = document.getElementById('x');
const quoteButton = document.getElementById('new-quote');

quoteButton.addEventListener('click', newQuote)
xButton.addEventListener('click', xQuote)


function xQuote() {
  const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent} `;
  window.open(xUrl, '_blank')
}



let apiQuotes = [];


function newQuote() {

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

async function getQuotes() {
  const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

  try {

    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote()
  } catch (error) {

  }
}

getQuotes()