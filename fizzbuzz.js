// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

const fizzBuzz = () => {
  let htmlContent = ``;

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      htmlContent += `<div class="fizz num">fizz</div>`;
    } else if (i % 3 !== 0 && i % 5 === 0) {
      htmlContent += `<div class="buzz num">buzz</div>`;
    } else if (i % 3 === 0 && i % 5 === 0) {
      htmlContent += `<div class="fizzbuzz num">fizzbuzz</div>`;
    } else {
      htmlContent += `<div class="num">${i}</div>`;
    }
  }
  return htmlContent;
};

afficher(fizzBuzz());
