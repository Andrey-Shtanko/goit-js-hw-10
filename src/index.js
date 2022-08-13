import './css/styles.css';
import debounce from "lodash.debounce";
import  fetchCountries from "./fetchCountries";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputField = document.querySelector(`#search-box`)


inputField.addEventListener(`input`, debounce(onInputSearch, DEBOUNCE_DELAY))


function onInputSearch(e) {
    const name = e.target.value.trim()
    fetchCountries(name).then(r => r.json())
        .then(country => {if (country.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else if (country.length >= 2 && country.length <= 100) {
            
            console.log(country);
        } else if (country.length === 1) {
            console.log(country);
        }else {
            Notiflix.Notify.failure('Oops, there is no country with that name')
        }}
    ).catch(error => {
        console.log(error.message)  
    })   
}
