// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie2 = document.querySelector("#sortie2");
function afficher(html) {
  sortie2.innerHTML += html;
}

const mutipliction = () => {
  let htmlContent = ``;
  for (let i = 1; i <= 9; i++) {
    htmlContent += `<div class="mult"><h2 class="tabel">table de ${i}</h2>`;
    for (let index = 1; index <= 10; index++) {
      htmlContent += `<p>${index} * ${i} = ${index * i}</p>`;
    }
    htmlContent += `</div>`;
  }
  return htmlContent;
};

afficher(mutipliction());
