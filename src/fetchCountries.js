
export default function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
}