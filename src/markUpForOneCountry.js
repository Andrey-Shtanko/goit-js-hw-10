export default function markUpForOneCountry ({ name: { official }, capital, population, flags: { svg }, languages }) {
    const langList = Object.values(languages)
    return `<div class='country-card'><img src="${svg}" alt="flag" width="30" height="30" class="country-flag" /><span
  class="country-name"
>${official}</span></div>
<ul class="country-list">
  <li class="country-item">
    <p class="country-capital">Capital: ${capital}</p>
  </li>
  <li class="country-item">
    <p class="country-population">Population: ${population}</p>
  </li>
  <li class="country-item">
    <p class="country-lang">Languages: ${langList}</p>
  </li>
</ul>`      
}