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
    let formText = document.getElementById('name').value;
    await getAPIKey();
    const apiData = await makeAPICall(apiKey, formText);
    updateUI(apiData);
}

document.getElementById('submit').addEventListener('click', handleSubmit);