export default function markUpForOneCountry ({ name: { official }, capital, population, flags: { svg }, languages }) {
  const langString = Object.values(languages).reduce((acc, lang) => {                    
                    return acc + `${lang}, `
  }, ``)
    const langList = langString.slice(0, langString.length - 2)
 
    return `<div class='country-card'><img src="${svg}" alt="flag" width="40" height="30" class="item-img" /><span
  class="country-name"
>${official}</span></div>
<ul class="country-list">
  <li class="country-item">
    <p class="country-capital">Capital: <span class="info-text">${capital}</span></p>
  </li>
  <li class="country-item">
    <p class="country-population">Population: <span class="info-text">${population}</span></p>
  </li>
  <li class="country-item">
    <p class="country-lang">Languages: <span class="info-text">${langList}</span></p>
  </li>
</ul>`      
}