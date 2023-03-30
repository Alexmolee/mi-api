const express = require('express');
const router = express.Router();

router.get('/models', async (req, res) => {
  const api_key = 'Tu Api Key';
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${api_key}`
      }
    });
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching models');
  }
});

router.get('/models/:id', async (req, res) => {
  const api_key = 'Tu Api Key';
  const modelId = req.params.id;
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default(`https://api.openai.com/v1/models/${modelId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${api_key}`
      }
    });
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching models');
  }
});

// hacer el get para sacar un modelo

module.exports = router;
