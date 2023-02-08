import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const searchForm = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchForm.addEventListener('input', debounce((event) => {
    event.preventDefault();
    const form = event.target.value.trim();
    fetchCountries(form)
}, DEBOUNCE_DELAY)); 

function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags,population,languages`).then(response => response.json()).then(country => {
        let markUp = [];
        let markUpDiv = [];
        
        if (country.length < 20 & country.length > 0) {    
            if (country.length == 1) {
                for (each of country) {
            markUp.push(`<li class="country__list"><img class="country__list__image" src="${each.flags.svg}" alt="${each.name.official}" width="30"></img><p style = "font-size: 40px">${each.name.official}</p></li>`);
            markUpDiv.push(`
            <ul class="country__info">
            <li class="country__info__item">Capital: <span class="country__info__span">${each.capital}</span></li>
            <li  class="country__info__item">Population: <span class="country__info__span">${each.population}</span></li>
            <li class="country__info__item">Languages: <span class="country__info__span">${Object.values(Object.values(each.languages))}</span></li>
            </ul>`);
            }}
            else { 
                for (each of country) {
                markUp.push(`<li class="country__list"><img class="country__list__image" src="${each.flags.svg}" alt="${each.name.official}" width="40"></img><p>${each.name.official}</p> </li>`);
                }
        } 
        }    else if (!country.length) {return} else { Notify.info('Too many matches found. Please enter a more specific name.')};
        countryListEl.innerHTML = markUp.join('');
        countryInfoEl.innerHTML = markUpDiv;
  }).catch(error => console.log(error));
}

// Notify.failure('Oops, there is no country with that name')