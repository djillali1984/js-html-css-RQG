/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  var  quotes = [{
        Quote : "There is one trick in software, and that is using a piece of software that's already written.",
        Source : 'Bill Gates' ,
        Citation : 'Electonics Magazine',
        Year : 1989},
      {
       Quote : "Try to become not a man of success, but try rather to become a man of value.",
       Source : 'Albert Einstein',
       Citation : 'Life Magazine',
       Year :1955},
      {
       Quote : "We should support whatever our enemies oppose, and oppose whatever our enemies support.",
       Source : 'Mao Zedong',
       Citation : 'The Little Book',
       Year :1939},
       {
       Quote : "For myself, I am an optimist. It does not seem to be much use being anything else.",
       Source : 'Winston Churchill',
       Citation : 'Lord Mayor Bankets',
       Year :1954},
       {
        Quote : "True peace is not merely the absence of tension; it is the presence of justice.",
        Source : 'Martin Luther King Jr.',
        Citation : 'Stride Toward Freedom',
        Year :1958}
       ];
    //In the second step of this project, what I am trying to do is ,to build a function that can help display a random number of the quotes above,In other word this function will show which quote to show first, second, and so on, it may begin with the third quote, and go to the fifth one, it will be random.it is like rolling a die each time you will get a number, and sometimes you will get the same number twice or three times in a row.
      function getRandomQuote() {
      var randomNumber = Math.floor(Math.random() * quotes.length);
        for (var i = 0; i < quotes.length; i+= 1) {
          return quotes[randomNumber];
        }
    }
    //In this section of the code, the function below, will basically display a new quote each time the user will click on the display  quote button that is already built in.Another thing about print quote function, it has some conditions to check whether the quote in the object exists or not, and other elements in the object as well, like citation and year.
    function printQuote() {
    var displayQuote = function getRandomQuote()

         htmlString = `<p class = "quotes">${displayQuote.quote }</p>`;
         htmlString +=`<p class = "source">${displayQuote.source}`;
         htmlString += `<span class = "citation">${displayQuote.citation}</span>`;
         htmlString += `<span class = "year"> ${displayQuote.year}</span>`;
         htmlString +=  `</p>`;
         return htmlString;

         //This line of code is to update the project's  HTML  with a new quote to display.
  document.getElementById('quote-box').innerHTML = printQuote(htmlString);
    }



document.getElementById('load-quote').addEventListener("click", printQuote, false);
