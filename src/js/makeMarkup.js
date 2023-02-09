import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function makeMarkup(country, list, info) {
        let markUp = [];
        let markUpDiv = [];
        if (country.length < 10 & country.length > 0) {
            if (country.length == 1) {
                for (let each of country) {
                    markUp.push(`<li class="country__list"><img class="country__list__image" src="${each.flags.svg}" alt="${each.name.official}" width="30"></img><p style = "font-size: 40px">${each.name.official}</p></li>`);
                    markUpDiv.push(`
            <ul class="country__info">
            <li class="country__info__item">Capital: <span class="country__info__span">${each.capital}</span></li>
            <li  class="country__info__item">Population: <span class="country__info__span">${each.population}</span></li>
            <li class="country__info__item">Languages: <span class="country__info__span">${Object.values(Object.values(each.languages))}</span></li>
            </ul>`);
                }
            }
            else {
                for (let each of country) {
                    markUp.push(`<li class="country__list"><img class="country__list__image" src="${each.flags.svg}" alt="${each.name.official}" width="40"></img><p>${each.name.official}</p> </li>`);
                }
            }
        } else if (!country.length) {
            list.innerHTML = '';
            info.innerHTML = '';
        } else { Notify.info('Too many matches found. Please enter a more specific name.') };
        list.innerHTML = markUp.join('');
        info.innerHTML = markUpDiv;
    }