const { Router } = require('express');
const router = Router();

const apiKey = 'Api Key';

router.post('/chat', async (req, res) => {
    const fetch = await import('node-fetch');
    const { model, messages, max_tokens } = req.body;

    if(max_tokens > 4096 || max_tokens <0 ){
        max_tokens = 4096
    }
    fetch.default("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            max_tokens: max_tokens

        }),
        
    })
    .then(console.log(model, messages))
    .then(response => response.json())
    .then(data => res.json(data.choices[0]))
    .catch(error => console.error(error));
});

module.exports = router;