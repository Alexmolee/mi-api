const { Router } = require('express');
const router = Router();

const apiKey = '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';

router.post('/chat', async (req, res) => {
    const fetch = await import('node-fetch');
    const { model, messages } = req.body;
    

    fetch.default("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: messages
        })
    })
    .then(response => response.json())
    .then(data => res.json(data.choices[0].message.content))
    .catch(error => console.error(error));
});

module.exports = router;