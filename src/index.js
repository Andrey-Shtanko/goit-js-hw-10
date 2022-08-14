import './css/styles.css';
import markUpForOneCountry from './markUpForOneCountry';
import markUpForSeveralCountries from './markUpForSeveralCountries';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputField = document.querySelector(`#search-box`);
const countryList = document.querySelector(`.country-list`);
const countryInfo = document.querySelector(`.country-info`);
const background = document.querySelector(`.background`);

inputField.addEventListener(`input`, debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
  countryList.innerHTML = ``;
  countryInfo.innerHTML = ``;
  const name = e.target.value.trim();
  if (name === ``) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  } else {
    fetchCountries(name)
      .then(country => {
        if (country.length > 10) {
          countryList.innerHTML = ``;
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (country.length >= 2 && country.length <= 10) {
          for (let i = 0; i < country.length; i += 1) {
            countryList.insertAdjacentHTML(
              `beforeend`,
              markUpForSeveralCountries(country[i])
            );
            background.style.backgroundImage = ``;
          }
        } else if (country.length === 1) {
          countryInfo.innerHTML = markUpForOneCountry(country[0]);
          const flagImg = country[0].flags.png;
          background.style.backgroundImage = ` url(${flagImg})`;
        } else {
          background.style.backgroundImage = ``;
          countryList.innerHTML = ``;
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}
