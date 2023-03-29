import fetch from 'node-fetch'

async function makeAPICall(url = ''){
    let apiData = {};
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            apiData = data;
        })
    return apiData;
}

export { makeAPICall };
