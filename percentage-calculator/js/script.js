const calc = document.querySelector('#percent-calc');
const result = document.querySelector('#result');

calc.addEventListener('submit', e => {
   const percent = document.querySelector('#percent');
   const number = document.querySelector('#number');

   e.preventDefault();

   const percentage = (number.value * percent.value) / 100;

   result.innerHTML = `Result: <span>${percentage}</span>`;
   result.style.display = 'block'

});