import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 3000;

const searchForm = document.getElementById('search-box');
console.log(searchForm);
searchForm.addEventListener('input', debounce((event) => {
    event.preventDefault();
    const form = event.target.value;
    console.log(form);
}, DEBOUNCE_DELAY));
    



function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => response.json()).then(console.log);
}

const USA = fetchCountries("usa");
// console.log(USA);

// 
// function feachCountryByName(name) {
//     console.log(fetch(`https://restcountries.com/v3.1/name/${name}`));
//         // .then(console.log).catch(Notify.failure(`❌ Oops, there is no country with that name`)).finally()
// }


