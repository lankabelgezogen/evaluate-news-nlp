import { sentimentRating } from './js/sentimentRating'
import { makeAPICall } from './js/callAPI'
import 'regenerator-runtime/runtime';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

const resultDiv = document.getElementById('results');
let apiKey = '';

async function getAPIKey() {
    const res = await fetch('getAPIKey');
    try {
        const keydata = await res.json();
        apiKey = keydata.key;
    } catch(e) {
        console.log(e);
    }
}

function updateUI(data = {}) {
    resultDiv.innerHTML = `
    <h1>Sentiment: ${sentimentRating(data.score_tag)}</h1>
    <h1>Subjectivity: ${data.subjectivity}</h1>
    `;
}

async function handleSubmit(e) {
    e.preventDefault();
    let formText = document.getElementById('name').value.trim();
    if(!formText) {
        alert('ENTER VALID TEXT!')
    } else {
        await getAPIKey();
        const url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${formText}`;
        const apiData = await makeAPICall(url);
        updateUI(apiData);
    }
}

document.getElementById('submit').addEventListener('click', handleSubmit);