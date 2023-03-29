async function makeAPICall(key = '', formText = ''){
    let apiData = {};
    await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${formText}`)
        .then(res => res.json())
        .then(data => {
            apiData = data;
        })
    return apiData;
}

export { makeAPICall };
