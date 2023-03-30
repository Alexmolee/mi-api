const express = require('express');
const router = express.Router();

const api_key = 'Tu Api Key';
// const model = 'text-davinci-003';
// const prompt = 'Describe Javascript in one sentence:';
const max_tokens = 1000;
const temperature = 0;

router.post('/completions', async (req, res) => {
    const fetch = await import('node-fetch');
    const { model, prompt } = req.body;
    fetch.default('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
    },
    body: JSON.stringify({
        model: model,
        prompt: prompt,
        max_tokens: max_tokens,
        temperature: temperature,
    })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    //return res.json(data); // objeto completo
    return res.json(data.choices[0].text); // solo el texto
    })
    .catch(error => console.error(error));
});

module.exports = router;
