const quote = document.querySelector('.footer .quote'),
      author = document.querySelector('.footer .author'),
      changeQuote = document.querySelector('.footer .change-quote');

function slow() {
   quote.classList.add('transition');
}

setTimeout(slow, 2000);

let randomNumber;
      
async function getQuotes() {  
   const quotes = 'data.json';
   const res = await fetch(quotes);
   const data = await res.json(); 

   randomNumber = Math.floor(Math.random(0, data.length - 1) * (data.length - 1));

   quote.textContent = `"${data[randomNumber]['text']}"`;
   author.textContent = data[randomNumber]['author'];

   console.log(`рандомное число из самой асинк функции ${randomNumber}`);

   //return randomNumber;

   getQuotes.then(randomNumber => {
      return randomNumber;
   });
     
}
 
setTimeout(getQuotes, 2500);

console.log(`рандомное число из асинк ${randomNumber}`);

changeQuote.addEventListener('click', getQuotes);