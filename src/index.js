import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { makeMarkup } from './js/makeMarkup';

const DEBOUNCE_DELAY = 300;
const searchForm = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchForm.addEventListener('input', debounce((event) => {
    event.preventDefault();
    const form = event.target.value.trim();
    if (form.length > 0) {
    fetchCountries(form).then(country => makeMarkup(country,countryListEl,countryInfoEl), DEBOUNCE_DELAY).catch(error => console.log(error))}
}));

