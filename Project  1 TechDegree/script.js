// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// creates an array of objects to store the quotes
var quotes = [
  {
   quote: "One small step for man, one giant leap for mankind.",
   source: "Neil Arstrong",
   year: "1969",
   tags: "Science"
  },
  {
   quote: "My religion is very simple. My religion is kindness.",
   source: "Dalai Lama",
   tags: "Religion"
  },
  {
   quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
   source: "Winston Churchill",
   citation: "Profiles in Strength",
   year: "1964",
   tags: "Inspiration"
  },
  {
   quote: "In this world nothing can be said to be certain, except death and taxes.",
   source: "Benjamin Franklin",
   year: "1786",
   tags: "Finance"
  },
  {
   quote: "There is no spoon.",
   source: "Neo",
   citation: "The Matrix",
   tags: "Philosophy"
  },
  {
   quote: "Do or do not, there is no try.",
   source: "Yoda",
   citation: "Empire Strikes Back",
   year: "1985",
   tags: "Philosophy"
  },
  {
   quote: "The true sign of intelligence is not knowledge but imagination.",
   source: "Albert Einstein",
   tags: "Knowledge"
  }
];

// generates a new background color
var colors = ['red', 'blue', 'green', 'orange', 'lime', 'violet', 'cyan', 'purple', 'fuchsia']
function randomColor () {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * 9)];
}

// returns a random quote from the array
function getRandomQuote() {
  return quotes[ Math.floor(Math.random() * 7)];
}

/* generates an HTML string depending on the quote properties
and updates the HTML file */
function printQuote() {
  var freshQuote = getRandomQuote();
  var quoteBoxDiv = document.getElementById('quote-box');
    if (freshQuote.citation === undefined && freshQuote.year === undefined) {
      quoteBoxDiv.innerHTML = '<p class="quote">' + freshQuote.quote + '</p>' +
      '<p class="source">' + freshQuote.source + '</p>' + '<p class="tags">' + freshQuote.tags + '</p>';
    } else if (freshQuote.citation !== undefined && freshQuote.year !== undefined) {
      quoteBoxDiv.innerHTML = '<p class="quote">' + freshQuote.quote + '</p>' +
      '<p class="source">' + freshQuote.source + '<span class="citation">' + freshQuote.citation + '</span>' +
      '<span class="year">' + freshQuote.year + '</span></p>' + '<p class="tags">' + freshQuote.tags + '</p>';
    } else if (freshQuote.citation === undefined && freshQuote.year !== undefined) {
     quoteBoxDiv.innerHTML = '<p class="quote">' + freshQuote.quote + '</p>' +
     '<p class="source">' + freshQuote.source + '<span class="year">' + freshQuote.year + '</span></p>' +
     '<p class="tags">' + freshQuote.tags + '</p>';
    } else {
     quoteBoxDiv.innerHTML = '<p class="quote">' + freshQuote.quote + '</p>' +
     '<p class="source">' + freshQuote.source + '<span class="citation">' + freshQuote.citation + '</span></p>' +
     '<p class="tags">' + freshQuote.tags + '</p>';
    }
randomColor();
}
// generates a new quote every 6 seconds independant of the button
setInterval(printQuote, 6000);
