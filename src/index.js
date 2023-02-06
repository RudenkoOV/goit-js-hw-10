import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 3000;

const searchForm = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
console.log(searchForm);
searchForm.addEventListener('input', debounce((event) => {
    event.preventDefault();
    const form = event.target.value;
    console.log(form);
}, DEBOUNCE_DELAY));
    



function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => response.json()).then(country => {
        console.log(country[0].area);
        let markUp = [];
        for (each of country) {
            // markUp.push([`<li style="display:flex"><img src="${each.flags.svg}" alt="${each.name.official}" width="100"></img><p>${each.name.official}</p> </li>`]);
        }
        countryListEl.innerHTML = markUp;
  });
}

// const USA = fetchCountries("it");
const S = []
const P = S.push(33)
console.log(P);

// 
// function feachCountryByName(name) {
//     console.log(fetch(`https://restcountries.com/v3.1/name/${name}`));
//         // .then(console.log).catch(Notify.failure(`❌ Oops, there is no country with that name`)).finally()
// }




// <li>
//     <p>{{}}</p>
//     <p>{{}}</p>
// </li>