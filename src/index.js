import './css/styles.css';
import debounce from "lodash.debounce";
import  fetchCountries from "./fetchCountries";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const inputField = document.querySelector(`#search-box`)


inputField.addEventListener(`input`, debounce(onInputSearch, DEBOUNCE_DELAY))


function onInputSearch(e) {
    const name = e.target.value
    fetchCountries(name).then(r => r.json())
        .then(country => {if (country.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else if (country.length >= 2 && country.length <= 100) {
            
            console.log(country);
        } else {
            console.log(country);
        }}
    ).catch(error => {
                if (error) {
                   Notiflix.Notify.warning('Oops, there is no country with that name') 
                }
            })
   
    
    
}
