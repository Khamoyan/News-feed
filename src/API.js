const axios = require('axios').default;

const apiKey = `apiKey=${process.env.REACT_APP_ENDPOINT_API_KEY}`
const url = 'https://newsapi.org/v2'

export function getTopHeadlines(filters = '') {
    if (!filters) {
        return axios.get(`${url}/everything?${apiKey}`)
    } else {
        return axios.get(`${url}/top-headlines${filters}&${apiKey}`);
    }
}

export function getSources() {
    return axios.get(`${url}/sources?${apiKey}`);
}
