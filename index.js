// get quotes form API


const quoteButton = document.getElementById('new-quote')

quoteButton.addEventListener('click', onClick)


function onClick() {
  console.log('Button has been clicked');
}


let apiQuotes = [];


function newQuote() {

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  console.log(quote);
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