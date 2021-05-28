const axios = require('axios').default;

const apiKey = 'apiKey=763b233a62d843959e21160ff4f67636'
const url = 'https://newsapi.org/v2'
//country, category, sortBy=
export function getEverything() {
    return axios.get(`${url}/everything?q=bitcoin&${apiKey}`);
}

export function getTopHeadlines(filters = '') {
    return axios.get(`${url}/top-headlines${filters}&${apiKey}`);
}

export function getSources() {
    return axios.get(`${url}/sources?${apiKey}`);
}
export function getCountres() {
    return axios.get(`https://datahub.io/core/country-codes`);
}
