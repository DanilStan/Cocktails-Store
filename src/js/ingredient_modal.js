import axios from 'axios';
const divs = document.querySelector('.modal2');

export function getElement(name) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
  ).then(response => {
    return response.json();
  });
  //   return response.data;
}

// console.log(divs);
export function createIngredientMarkup(response = []) {
  //   console.log(response);
  return response
    .map(({ idIngredient }) => {
      return `<div class="modalw2">
            <div class="modalw2__p modalw2__border">
                <h2 class="modalw2__title">${idIngredient}</h2>
            <button class="modalw2__btn"><svg width="32px" height="32px">
                <use
                  href=".//images/svg/symbol-defs.svg#icon-close"
                  class="modalw2__link"
                ></use>
              </svg></button>
            <h3 class="modalw2__title-second">Liqueur</h3></div>
            <div class="modalw2__p">
                <p class="modalw2__text"><span class="modalw2__span">Campari </span>is an Italian alcoholic liqueur, considered an apéritif (20.5%, 21%, 24%, 25%, or 28.5% ABV, depending on the country in which it is sold), obtained from the infusion of herbs and fruit (including chinotto and cascarilla) in alcohol and water. It is a bitters, characterised by its dark red colour.</p>
                <ul class="modalw2__list">
                <li class="modalw2__item">&#10038 Type: Bitters</li>
                <li class="modalw2__item">&#10038 Country of origin:    Italy</li>
                <li class="modalw2__item">&#10038 Alcohol by volume:    20.5–28.5%</li>
                <li class="modalw2__item">&#10038 Flavour:  Bitter, spicy and sweet</li>
            </ul>
            <button type="button" class="modalw2__btn__add">Add to favorite</button>
            <button type="button" class="modalw2__btn__remove">Add to favorite</button>
        </div>
        </div>`;
    })
    .join('');
}
export function add(markupString) {
  divs.insertAdjacentHTML('beforeend', markupString);
}

// export async function getElement(name) {
//   try {
//     const response = await axios.get(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${name}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log('error', error);
//   }
// }
