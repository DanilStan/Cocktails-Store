export default function crateImageMarkUp(response) {
  return response
    .map(({ strDrinkThumb, strDrink, idDrink }) => {
      return `<div  class="main__container">
        <img width='325' height='325' class="main__img" src="${strDrinkThumb}" alt="negroni" />
        <div class="main__text-container">
          <h3 class="main__title-second">${strDrink}</h3>
          <div class="main__button-center">
            <button class="button__main-orange button__main">Learn more</button>
            <button data-id="${idDrink}" class="button__main-transparent button__main">
              Add to
<span><svg
class="main__button-img"
  width="21"
  height="19"
  viewBox="0 0 21 19"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
><path
    d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z"
    fill="#FD5103"
  />
  <path
    d="M10.5 17L9.2675 15.921C4.89 12.1035 2 9.58583 2 6.49591C2 3.9782 4.057 2 6.675 2C8.154 2 9.5735 2.66213 10.5 3.70845C11.4265 2.66213 12.846 2 14.325 2C16.943 2 19 3.9782 19 6.49591C19 9.58583 16.11 12.1035 11.7325 15.9292L10.5 17Z"
    fill="#FCFCFC"
  />
</svg></span>
<span><svg class="main__button-imgfull" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19L8.9775 17.6332C3.57 12.7978 0 9.60872 0 5.69482C0 2.50572 2.541 0 5.775 0C7.602 0 9.3555 0.838692 10.5 2.16403C11.6445 0.838692 13.398 0 15.225 0C18.459 0 21 2.50572 21 5.69482C21 9.60872 17.43 12.7978 12.0225 17.6436L10.5 19Z" fill="#FD5103"/>
</svg></span>
            </button>
          </div>
        </div>
      </div>
      `;
    })
    .join('');
}